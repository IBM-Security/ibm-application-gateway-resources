(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{457:function(e,r,t){"use strict";t.r(r);var s=t(413),n=t(100),o=t(101),a=t(104),_=t(103),c=t(88),i=t(3),u=t(0),l=t.n(u),d=t(78),h=t.n(d),v=t(412),p=t(415),y=t(87);function f(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(r){var n=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return Object(_.a)(this,t)}}var m=function(e){var r=e.renderLauncher,t=e.children,s=Object(u.useState)(!1),n=Object(i.a)(s,2),o=n[0],a=n[1];return l.a.createElement(l.a.Fragment,null,t&&"undefined"!==typeof document?h.a.createPortal(l.a.createElement(t,{open:o,setOpen:a}),document.body):null,r&&l.a.createElement(r,{open:o,setOpen:a}))},b=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Resource Servers",title:"Delete Resource Servers?",iconDescription:"Close"}},w=function(){return{hasScrollingContent:!1,"aria-label":"Delete Resource Servers?"}},k=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},O=function(){return{style:{margin:"5px"},icon:y.b,name:y.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},j=function(e,r,t,s,n,o,a,_,c,i,u,l,d,h,v,p,y,f,m,b,g,w,k,O,j,C,R,S,E,x,B,D,G,q,z,T,P,A,F,J,L,N,H,I){return H(e,r,t,s,n,o,a,_,c,i,u,l,d,h,v,p,y,f,m,b,g,w,k,O,j,C,R,S,E,x,B,D,G,q,z,T,P,A,F,J,L,N,!1),!0},C=function(e){Object(a.a)(t,e);var r=f(t);function t(e){var s;return Object(n.a)(this,t),(s=r.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,resource_servers_path:s.props.row.cells[0].value,resource_servers_virtual_host:s.props.row.cells[1].value,resource_servers_connection_type:s.props.row.cells[2].value,resource_servers_transparent_path:s.props.row.cells[3].value,resource_servers_stateful:s.props.row.cells[4].value,open:!1},s}return Object(o.a)(t,[{key:"render",value:function(){var e=this,r=b(),t=r.size,n=Object(s.a)(r,["size"]),o=w();o.hasScrollingContent,Object(s.a)(o,["hasScrollingContent"]);return l.a.createElement(m,{renderLauncher:function(r){var t=r.setOpen;return l.a.createElement(v.a,Object.assign({},O(),{onClick:function(){return t(!0)},title:e.state.id}))}},function(r){var s=r.open,o=r.setOpen;return l.a.createElement(p.d,Object.assign({},n,{open:s,row:e.props.row,loadGrid:e.state.loadGrid,size:t||void 0,onClose:function(){return o(!1)}}),l.a.createElement(p.c,g({titleOnly:!0,name:e.state.code+" "+e.state.model})),l.a.createElement(p.a,null),l.a.createElement(p.b,Object.assign({},k(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){j(e.state.resource_servers_path,e.state.resource_servers_virtual_host,e.state.resource_servers_connection_type,e.state.resource_servers_transparent_path,e.state.resource_servers_stateful,e.state.resource_servers_http2_enabled,e.state.resource_servers_http2_sni,e.state.resource_servers_identity_headers_kerberos_resource_spn,e.state.resource_servers_identity_headers_kerberos_always_send_tokens,e.state.resource_servers_identity_headers_kerberos_user_identity_username,e.state.resource_servers_identity_headers_kerberos_user_identity_realm,e.state.resource_servers_identity_headers_encoding,e.state.resource_servers_identity_headers_basic_auth_mode,e.state.resource_servers_identity_headers_basic_auth_password,e.state.resource_servers_identity_headers_basic_auth_service,e.state.resource_servers_identity_headers_basic_auth_resource_name,e.state.resource_servers_identity_headers_ip_address,e.state.resource_servers_identity_headers_iv_creds,e.state.resource_servers_identity_headers_session_cookie,e.state.resource_servers_identity_headers_jwt_hdr_name,e.state.resource_servers_identity_headers_ltpa_key,e.state.resource_servers_identity_headers_ltpa_key_password,e.state.resource_servers_identity_headers_ltpa_version,e.state.resource_servers_cookies_junction_cookie_position,e.state.resource_servers_cookies_junction_cookie_version,e.state.resource_servers_cookies_junction_cookie_ensure_unique,e.state.resource_servers_cookies_junction_cookie_preserve_name,e.state.resource_servers_mutual_auth_basic_auth_username,e.state.resource_servers_mutual_auth_basic_auth_password,e.state.resource_servers_forms_login_credential_learning,e.state.resource_servers_health_ping_method,e.state.resource_servers_health_ping_url,e.state.resource_servers_health_ping_policy_frequency,e.state.resource_servers_health_ping_policy_threshold,e.state.resource_servers_health_ping_policy_timeout,e.state.resource_servers_health_ping_policy_recovery_frequency,e.state.resource_servers_health_ping_policy_recovery_threshold,e.state.resource_servers_worker_threads_soft_limit,e.state.resource_servers_worker_threads_hard_limit,e.state.resource_servers_persistent_connections_max_cache_size,e.state.resource_servers_persistent_connections_connection_timeout,e.state.resource_servers_identity_oauth,e.state.loadGrid,o)}})))})}}]),t}(l.a.Component);r.default=C}}]);
//# sourceMappingURL=284.3da02d46.chunk.js.map