"""
Copyright contributors to the Application Gateway project
"""

import logging
import threading
import atexit
import requests
import time
import socket
import ssl

from flask import Flask

logger = logging.getLogger(__name__)

class WebServer:
    """
    This class is used to create a simple Web Server.  You must create a new
    object which inherits from this class to actually provide a Web server.
    An example class could be:

    class HelloWorldWebServer(WebServer):

        @WebServer.app.route("/")
        def hello_world():
          return "Hello World!"

    """

    app = Flask(__name__)

    def __init__(self, ssl = False, port=0):
        """
        Initialise this object.

        \param ssl [in] : Should we use http or https?
        """

        super(WebServer, self).__init__()

        # Get an ephemeral port on which the Web server can listen.
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

            s.bind(("0.0.0.0", port))

            self.port_ = s.getsockname()[1]
        except:
            self.port_ = 8079
        finally:
            s.close()

        # Work out the host name.
        self.host_ = None

        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

            s.connect(('10.255.255.255', 1))

            self.host_ = s.getsockname()[0]
        except:
            self.host_ = "127.0.0.1"
        finally:
            s.close()

        self.thread_     = None
        self.ssl_        = ssl
        self.caCert_     = None
        self.clientCert_ = None


    def start(self):
        """
        Start the Web server.  The Web server will be started in a separate
        thread and this function will wait until the Web server is
        reachable before returning.
        """

        logger.info("Starting the Web server: 0.0.0.0:{0}".format(self.port_))

        self.thread = threading.Thread(
                    target=self.__runServer, args=(self.ssl_,), daemon=True)

        self.thread.start()

        atexit.register(self.stop)

        # Wait for the Web server to start.
        running = False
        attempt = 0

        if self.ssl_:
            protocol="https"
        else:
            protocol="http"

        while not running and attempt < 30:
            time.sleep(1)

            try:
                resp = requests.get("{0}://{1}:{2}".format(protocol, self.host_,
                                self.port_), verify=False, timeout=2)

                running = True

                # If we are using SSL we also need to grab the CA certificate
                # from the server.
                if self.ssl_:
                    self.caCert_ = ssl.get_server_certificate((
                                                self.host_, self.port_))

            except:
                attempt += 1

        if not running:
            message = "The Web server failed to start within the allocated time."
            logger.critical(message)

            raise Exception(message)


        logger.info("The Web server has started")

    def startWithCertificates(self, ca_cert=None, web_server_cert=None,
            web_server_key=None, client_cert=None):
        """
        Start the Web server with an SSL context that requires clients to
        present client certificates.  The Web server will be started in a
        separate thread and this function will wait until the Web server is
        reachable before returning.

        \param ca_cert         [in] : CA certificate for the webserver to trust
                                      for verification in the SSL context.
        \param web_server_cert [in] : Certificate for the web server SSL
                                      context.
        \param web_server_key  [in] : Private key for the web server
                                      certificate.
        \param client_cert     [in] : Certificate and private key to be used by
                                      by the client. It is used here to verify
                                      that the web server started correctly.
        """

        logger.info("Starting the Web server: 0.0.0.0:{0}".format(self.port_))

        self.clientCert_ = client_cert

        self.thread = threading.Thread(
                    target=self._runServerVerifyCert,
                    args=(ca_cert, web_server_cert, web_server_key,),
                    daemon=True)

        self.thread.start()

        atexit.register(self.stop)

        # Wait for the Web server to start.
        running = False
        attempt = 0

        while not running and attempt < 30:
            time.sleep(1)

            try:
                requests.get("https://{0}:{1}".format(self.host_, self.port_),
                    cert=(client_cert), verify=False, timeout=2)

                running = True
            except:
                attempt += 1

        if not running:
            message = "The Web server failed to start within the allocated time."
            logger.critical(message)

            raise Exception(message)

        with open(ca_cert) as fh:
            self.caCert_ = fh.read()

        logger.info("The Web server has started")

    def stop(self):
        """
        Stop the Web server.
        """

        if self.thread is not None:

            logger.info("Stopping the Web server.")

            if self.ssl_:
                protocol="https"
            else:
                protocol="http"

            response = None

            try:
                response = requests.get("{0}://{1}:{2}/shutdown".format(
                    protocol, self.host_, self.port_),
                    cert=(self.clientCert_), verify=False, timeout=10)
            except Exception as e:
                pass

            self.thread.join(timeout=2)

            logger.info("Stopped the Web server.")

    def port(self):
        """
        The port on which the Web server will be listening.
        """

        return self.port_

    def host(self):
        """
        Determine and return the host on which the Web server will be
        listening.
        """

        return self.host_

    def ssl(self):
        """
        Return whether this server is SSL enabled or not.
        """

        return self.ssl_

    def caCertificate(self):
        """
        Return the CA certificate (in PEM format) of this server.
        """

        return self.caCert_;

    def __runServer(self, ssl):
        """
        This private function is used to actually start the server.
        """

        if ssl:
            ssl_context = "adhoc"
        else:
            ssl_context = None

        self.app.run(ssl_context=ssl_context, host="0.0.0.0",
                        port=self.port_, use_reloader=False, threaded=False)


    def _runServerVerifyCert(self, ca_cert, web_server_cert, web_server_key):
        """
        This private function is used to actually start the server
        with SSL verification.
        """

        context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
        context.verify_mode = ssl.CERT_REQUIRED
        context.load_verify_locations(ca_cert)
        context.load_cert_chain(web_server_cert, web_server_key)
        self.app.run(ssl_context=context, host="0.0.0.0",
                       port=self.port_, use_reloader=False, threaded=False)

    @app.route('/shutdown', methods=['GET','POST'])
    def shutdown():
        """
        The following route is used to handle a request to shutdown the
        Web server.  In the past we were able to perform a graceful
        shutdown using 'werkzeug.server.shutdown', but this has been
        deprecated.  So, the only way to do this now is to exit from
        the thread.
        """

        logger.info("The Web server has received the /shutdown request.")
        raise SystemExit()
