(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{233:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(33),react_collapsible__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),react_collapsible__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__),react_web_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),react_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,t){void 0===e&&(e="");var s={};!0!==document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+e).value.endsWith(":")&&(s.services_redis_collections_servers_ssl_trust_certificates_trust_certificates=document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+e).value),_(s.services_redis_collections_servers_ssl_trust_certificates_trust_certificates,!0),handleClose(e,t)},handleAdd=function(_,e,t){void 0===_&&(_=""),document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id").value="",e&&e(),handleClose(_,t)},handleClose=function(_,e){Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("ssl_div"+_,"display","block"),document.getElementById("addservicesrediscollectionsserversssl_trust_certificatesPage"+_).style.display="none",e&&e()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("services_redis_collections_servers_ssl_trust_certificates_div"+_,"display","block"),document.getElementById("services_redis_collections_servers_ssl_trust_certificates_tab"+_).style.display="flex"},Servicesrediscollectionsserversssl_trust_certificatesAdd=function Servicesrediscollectionsserversssl_trust_certificatesAdd(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),services_redis_collections_servers_ssl_trust_certificates_trust_certificates=_useState2[0],setservices_redis_collections_servers_ssl_trust_certificates_trust_certificates=_useState2[1],updateservices_redis_collections_servers_ssl_trust_certificates_trust_certificates=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setservices_redis_collections_servers_ssl_trust_certificates_trust_certificates(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"addservicesrediscollectionsserversssl_trust_certificatesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.d,{id:"services_redis_collections_servers_ssl_trust_certificates_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Services / Redis / Collections / Servers / SSL / Trust Certificates : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Trust Certificate"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"80px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,{invalid:!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_valid,invalidText:props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_invalid_text,value:props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates,id:"services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+idPrefix,labelText:"Trust Certificate *",onChange:props.updateservices_redis_collections_servers_ssl_trust_certificates_trust_certificates}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates||!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Servicesrediscollectionsserversssl_trust_certificatesAdd}}]);
//# sourceMappingURL=5.07358124.chunk.js.map