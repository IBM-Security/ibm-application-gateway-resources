(window.webpackJsonp=window.webpackJsonp||[]).push([[177,62,63,64,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,309,310,311,312,313,314,315,316,317,318],{321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(412),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(63),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32),carbon_components_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_8__),react_web_tabs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(13),handleChange=function(){},handleSave=function(e,_,t,a,r,l){void 0===_&&(_="");var i={};!0!==document.getElementById("identity_auth_challenge_redirect_parameters_source_id"+_).value.endsWith(":")&&(i.identity_auth_challenge_redirect_parameters_source=document.getElementById("identity_auth_challenge_redirect_parameters_source_id"+_).value),!0!==document.getElementById("identity_auth_challenge_redirect_parameters_value_id"+_).value.endsWith(":")&&(i.identity_auth_challenge_redirect_parameters_value=document.getElementById("identity_auth_challenge_redirect_parameters_value_id"+_).value),!0!==document.getElementById("identity_auth_challenge_redirect_parameters_name_id"+_).value.endsWith(":")&&(i.identity_auth_challenge_redirect_parameters_name=document.getElementById("identity_auth_challenge_redirect_parameters_name_id"+_).value),e(i.identity_auth_challenge_redirect_parameters_source,i.identity_auth_challenge_redirect_parameters_value,i.identity_auth_challenge_redirect_parameters_name,!0),handleClose(_,t,a,r,l)},handleAdd=function(e,_,t,a,r,l,i,n,c){var d=a||"";if(window[d+"editing"]=!0,window[d+"rowId"]=e,i)for(var o=0;o<i.length;o++)i[o](a,n,c);_();var u=d;if(u.endsWith("_auth_challenge_redirect_parameters")){var E="_auth_challenge_redirect_parameters".length;u=u.slice(0,-E)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_11__.d)(u+"_div"+l,"display","none"),document.getElementById("editidentityauth_challenge_redirect_parametersPage"+t).style.display="block",document.getElementById(u+"_tab"+l).style.display="none"},handleClose=function(e,_,t,a,r){var l=_||"";delete window[l+"editing"],delete window[l+"rowId"];var i=l;if(i.endsWith("_auth_challenge_redirect_parameters")){var n="_auth_challenge_redirect_parameters".length;i=i.slice(0,-n)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_11__.d)(i+"_div"+a,"display","block"),document.getElementById("editidentityauth_challenge_redirect_parametersPage"+e).style.display="none",document.getElementById(i+"_tab"+a).style.display="flex",r&&r()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_11__.d)("identity_auth_challenge_redirect_parameters_div"+e,"display","block"),document.getElementById("identity_auth_challenge_redirect_parameters_tab"+e).style.display="flex"},getEditData=function(e,_,t){var a=e||"",r=window.iagyaml,l={};if(null!==r&&void 0!==r&&(void 0!==(l=Object(_helpers__WEBPACK_IMPORTED_MODULE_11__.c)(r))&&null!==l||(l={})),_&&t)for(var i=0;i<_.length;i++){_[i].value&&_[i].value,_[i].source&&_[i].source;window[a+"rowId"]}else void 0!==l&&void 0!==l.identity&&void 0!==l.identity.auth_challenge_redirect&&l.identity.auth_challenge_redirect.parameters},Identityauth_challenge_redirect_parametersEdit=function Identityauth_challenge_redirect_parametersEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),identity_auth_challenge_redirect_parameters_source=_useState2[0],setidentity_auth_challenge_redirect_parameters_source=_useState2[1],updateidentity_auth_challenge_redirect_parameters_source=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setidentity_auth_challenge_redirect_parameters_source(e.target.value)},[]),_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),identity_auth_challenge_redirect_parameters_value=_useState4[0],setidentity_auth_challenge_redirect_parameters_value=_useState4[1],updateidentity_auth_challenge_redirect_parameters_value=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setidentity_auth_challenge_redirect_parameters_value(e.target.value)},[]),_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),identity_auth_challenge_redirect_parameters_name=_useState6[0],setidentity_auth_challenge_redirect_parameters_name=_useState6[1],updateidentity_auth_challenge_redirect_parameters_name=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setidentity_auth_challenge_redirect_parameters_name(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_11__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editidentityauth_challenge_redirect_parametersPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_9__.d,{id:"identity_auth_challenge_redirect_parameters_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_9__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_9__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_9__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Identity / Auth Challenge Redirect / Parameters : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Parameters"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.identity_auth_challenge_redirect_parameters_source,id:"identity_auth_challenge_redirect_parameters_source_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.hide(e.target)},"data-tip":!0,"data-for":"identity_auth_challenge_redirect_parameters_source_tooltip_id"+idPrefix,labelText:"Source *",onChange:props.updateidentity_auth_challenge_redirect_parameters_source},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{text:"",value:""}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{text:"macro",value:"macro"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{text:"header",value:"header"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{text:"credential",value:"credential"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a,{id:"identity_auth_challenge_redirect_parameters_source_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:300}},"The source the value should be taken from.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{value:props.identity_auth_challenge_redirect_parameters_value,id:"identity_auth_challenge_redirect_parameters_value_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.hide(e.target)},"data-tip":!0,"data-for":"identity_auth_challenge_redirect_parameters_value_tooltip_id"+idPrefix,labelText:"Value *",onChange:props.updateidentity_auth_challenge_redirect_parameters_value}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a,{id:"identity_auth_challenge_redirect_parameters_value_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:300}},"The name of the macro, HTTP header or credential attribute the value will be taken from.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"When using the 'macro' type source, valid values are:",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * TAM_OP",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * USERNAME",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * METHOD",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * URL",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * REFERER",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * HOSTNAME",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * PROTOCOL",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{value:props.identity_auth_challenge_redirect_parameters_name,id:"identity_auth_challenge_redirect_parameters_name_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a.hide(e.target)},"data-tip":!0,"data-for":"identity_auth_challenge_redirect_parameters_name_tooltip_id"+idPrefix,labelText:"Name",onChange:props.updateidentity_auth_challenge_redirect_parameters_name}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_10__.a,{id:"identity_auth_challenge_redirect_parameters_name_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:300}},"The name which should be used to name the parameter inserted into the redirect URL. If this value is not specified, the parameter will be named accordingly:",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * For 'macro' sources, the name will be used verbatim.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * For 'header' sources, the name will be of the format `HTTPHDR_<name>`",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"  * For 'credential' sources, the name will be of the format `CREDATTR_<name>`",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null))))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_auth_challenge_redirect_parameters_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.a,{disabled:!props.identity_auth_challenge_redirect_parameters_value||!props.identity_auth_challenge_redirect_parameters_value_valid||!props.identity_auth_challenge_redirect_parameters_source||!props.identity_auth_challenge_redirect_parameters_source_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identityauth_challenge_redirect_parametersEdit},412:function(e,_,t){"use strict";t(143);var a=t(2),r=t.n(a),l=t(0),i=t.n(l);function n(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);_&&(a=a.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,a)}return t}function c(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function d(e,_){if(null==e)return{};var t,a,r=function(e,_){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],_.indexOf(t)>=0||(r[t]=e[t]);return r}(e,_);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],_.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function o(){return(o=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t(87).a;function u(e){return e&&"icon"===e.split("--")[0]}var E=function(e){var _,t=e.className,a=e.iconTitle,r=e.description,l=e.fill,E=e.fillRule,s=e.height,m=e.name,p=e.icon,P=e.role,O=e.style,h=e.width,D=e.iconRef,M=d(e,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),f=function(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?n(Object(t),!0).forEach(function(_){c(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}({className:t,fill:l,fillRule:E,height:s||p.height,name:u?m:"icon--".concat(m),role:P,style:O,viewBox:p.viewBox,width:h||p.width,ref:D},M),b=p?(_=p.svgData,Object.keys(_).filter(function(e){return _[e]}).map(function(e){var t=_[e];return"circles"===e?t.map(function(e,_){var t={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(_)};return i.a.createElement("circle",o({key:_},t))}):"paths"===e?t.map(function(e,_){return i.a.createElement("path",{d:e.d,key:"key".concat(_)})}):"polygons"===e?t.map(function(e,_){return i.a.createElement("polygon",{points:e.points,key:"key".concat(_)})}):""})):"";return i.a.createElement("svg",o({},f,{"aria-label":r}),i.a.createElement("title",null,"undefined"===typeof a?r:a),b)};E.propTypes={className:r.a.string,description:r.a.string.isRequired,fill:r.a.string,fillRule:r.a.string,height:r.a.string,icon:r.a.shape({width:r.a.string,height:r.a.string,viewBox:r.a.string.isRequired,svgData:r.a.object.isRequired}),iconRef:r.a.func,iconTitle:r.a.string,name:r.a.string,role:r.a.string,style:r.a.object,viewBox:r.a.string,width:r.a.string},E.defaultProps={fillRule:"evenodd",role:"img"},_.a=E}}]);
//# sourceMappingURL=177.b4234f6f.chunk.js.map