(window.webpackJsonp=window.webpackJsonp||[]).push([[38,62,63,64,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,309,310,311,312,313,314,315,316,317,318],{232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(412),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),handleChange=function(){},handleSave=function(e,_,t,r,s,a){void 0===_&&(_="");var i={};!0!==document.getElementById("server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+_).value.endsWith(":")&&(i.server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates=document.getElementById("server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+_).value),e(i.server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates,!0),handleClose(_,t,r,s,a)},handleAdd=function(e,_,t,r,s,a,i,c,l){var n=r||"";if(window[n+"editing"]=!0,window[n+"rowId"]=e,i)for(var o=0;o<i.length;o++)i[o](r,c,l);_();var d=n;if(d.endsWith("_ssl_trust_certificates")){var u="_ssl_trust_certificates".length;d=d.slice(0,-u)}void 0!==s&&""!==s&&(document.getElementById(s).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(d+"_div"+a,"display","none"),document.getElementById("editserversessionrediscollectionsserversssl_trust_certificatesPage"+t).style.display="block",document.getElementById(d+"_tab"+a).style.display="none"},handleClose=function(e,_,t,r,s){var a=_||"";delete window[a+"editing"],delete window[a+"rowId"];var i=a;if(i.endsWith("_ssl_trust_certificates")){var c="_ssl_trust_certificates".length;i=i.slice(0,-c)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(i+"_div"+r,"display","block"),document.getElementById("editserversessionrediscollectionsserversssl_trust_certificatesPage"+e).style.display="none",document.getElementById(i+"_tab"+r).style.display="flex",s&&s()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("server_session_redis_collections_servers_ssl_trust_certificates_div"+e,"display","block"),document.getElementById("server_session_redis_collections_servers_ssl_trust_certificates_tab"+e).style.display="flex"},getEditData=function(e,_,t){var r=e||"",s=window.iagyaml,a={};if(null!==s&&void 0!==s&&(void 0!==(a=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(s))&&null!==a||(a={})),_&&t)for(var i=0;i<_.length;i++){_[i].trust_certificates&&_[i].trust_certificates;window[r+"rowId"]}else void 0!==a&&void 0!==a.server&&void 0!==a.server.session&&void 0!==a.server.session.redis&&a.server.session.redis.collections},Serversessionrediscollectionsserversssl_trust_certificatesEdit=function Serversessionrediscollectionsserversssl_trust_certificatesEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates=_useState2[0],setserver_session_redis_collections_servers_ssl_trust_certificates_trust_certificates=_useState2[1],updateserver_session_redis_collections_servers_ssl_trust_certificates_trust_certificates=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setserver_session_redis_collections_servers_ssl_trust_certificates_trust_certificates(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editserversessionrediscollectionsserversssl_trust_certificatesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"server_session_redis_collections_servers_ssl_trust_certificates_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading server_session_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Server / Session / Redis / Collections / Servers / SSL / Trust Certificates : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div server_session_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_session_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Trust Certificate"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"100px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_session_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates,id:"server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+idPrefix,labelText:"Trust Certificate *",onChange:props.updateserver_session_redis_collections_servers_ssl_trust_certificates_trust_certificates}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_session_redis_collections_servers_ssl_trust_certificates_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates||!props.server_session_redis_collections_servers_ssl_trust_certificates_trust_certificates_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Serversessionrediscollectionsserversssl_trust_certificatesEdit},412:function(e,_,t){"use strict";t(143);var r=t(2),s=t.n(r),a=t(0),i=t.n(a);function c(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,r)}return t}function l(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function n(e,_){if(null==e)return{};var t,r,s=function(e,_){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],_.indexOf(t)>=0||(s[t]=e[t]);return s}(e,_);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],_.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function o(){return(o=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t(87).a;function d(e){return e&&"icon"===e.split("--")[0]}var u=function(e){var _,t=e.className,r=e.iconTitle,s=e.description,a=e.fill,u=e.fillRule,E=e.height,f=e.name,p=e.icon,O=e.role,P=e.style,v=e.width,m=e.iconRef,b=n(e,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),D=function(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?c(Object(t),!0).forEach(function(_){l(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}({className:t,fill:a,fillRule:u,height:E||p.height,name:d?f:"icon--".concat(f),role:O,style:P,viewBox:p.viewBox,width:v||p.width,ref:m},b),M=p?(_=p.svgData,Object.keys(_).filter(function(e){return _[e]}).map(function(e){var t=_[e];return"circles"===e?t.map(function(e,_){var t={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(_)};return i.a.createElement("circle",o({key:_},t))}):"paths"===e?t.map(function(e,_){return i.a.createElement("path",{d:e.d,key:"key".concat(_)})}):"polygons"===e?t.map(function(e,_){return i.a.createElement("polygon",{points:e.points,key:"key".concat(_)})}):""})):"";return i.a.createElement("svg",o({},D,{"aria-label":s}),i.a.createElement("title",null,"undefined"===typeof r?s:r),M)};u.propTypes={className:s.a.string,description:s.a.string.isRequired,fill:s.a.string,fillRule:s.a.string,height:s.a.string,icon:s.a.shape({width:s.a.string,height:s.a.string,viewBox:s.a.string.isRequired,svgData:s.a.object.isRequired}),iconRef:s.a.func,iconTitle:s.a.string,name:s.a.string,role:s.a.string,style:s.a.object,viewBox:s.a.string,width:s.a.string},u.defaultProps={fillRule:"evenodd",role:"img"},_.a=u}}]);
//# sourceMappingURL=38.8393d49d.chunk.js.map