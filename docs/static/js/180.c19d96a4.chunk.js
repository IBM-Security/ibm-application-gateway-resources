(window.webpackJsonp=window.webpackJsonp||[]).push([[180,62,63,64,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,309,310,311,312,313,314,315,316,317,318],{354:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(412),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,t,a,i,r){void 0===e&&(e="");var n={};!0!==document.getElementById("identity_ci_oidc_id_token_attrs_id_token_attrs_id"+e).value.endsWith(":")&&(n.identity_ci_oidc_id_token_attrs_id_token_attrs=document.getElementById("identity_ci_oidc_id_token_attrs_id_token_attrs_id"+e).value),_(n.identity_ci_oidc_id_token_attrs_id_token_attrs,!0),handleClose(e,t,a,i,r)},handleAdd=function(_,e,t,a,i,r,n,o,c){var d=a||"";if(window[d+"editing"]=!0,window[d+"rowId"]=_,n)for(var l=0;l<n.length;l++)n[l](a,o,c);e();var s=d;if(s.endsWith("_ci_oidc_id_token_attrs")){var E="_ci_oidc_id_token_attrs".length;s=s.slice(0,-E)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(s+"_div"+r,"display","none"),document.getElementById("editidentityci_oidc_id_token_attrsPage"+t).style.display="block",document.getElementById(s+"_tab"+r).style.display="none"},handleClose=function(_,e,t,a,i){var r=e||"";delete window[r+"editing"],delete window[r+"rowId"];var n=r;if(n.endsWith("_ci_oidc_id_token_attrs")){var o="_ci_oidc_id_token_attrs".length;n=n.slice(0,-o)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(n+"_div"+a,"display","block"),document.getElementById("editidentityci_oidc_id_token_attrsPage"+_).style.display="none",document.getElementById(n+"_tab"+a).style.display="flex",i&&i()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("identity_ci_oidc_id_token_attrs_div"+_,"display","block"),document.getElementById("identity_ci_oidc_id_token_attrs_tab"+_).style.display="flex"},getEditData=function(_,e,t){var a=window.iagyaml,i={};null!==a&&void 0!==a&&(void 0!==(i=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(a))&&null!==i||(i={}))},Identityci_oidc_id_token_attrsEdit=function Identityci_oidc_id_token_attrsEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),identity_ci_oidc_id_token_attrs_id_token_attrs=_useState2[0],setidentity_ci_oidc_id_token_attrs_id_token_attrs=_useState2[1],updateidentity_ci_oidc_id_token_attrs_id_token_attrs=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setidentity_ci_oidc_id_token_attrs_id_token_attrs(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editidentityci_oidc_id_token_attrsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"identity_ci_oidc_id_token_attrs_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading identity_ci_oidc_id_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Identity / CI OIDC (deprecated) / ID Token Attributes : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div identity_ci_oidc_id_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_id_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"ID Token Attribute"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_id_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.identity_ci_oidc_id_token_attrs_id_token_attrs,id:"identity_ci_oidc_id_token_attrs_id_token_attrs_id"+idPrefix,labelText:"ID Token Attribute *",onChange:props.updateidentity_ci_oidc_id_token_attrs_id_token_attrs}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_id_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.identity_ci_oidc_id_token_attrs_id_token_attrs||!props.identity_ci_oidc_id_token_attrs_id_token_attrs_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identityci_oidc_id_token_attrsEdit},412:function(_,e,t){"use strict";t(143);var a=t(2),i=t.n(a),r=t(0),n=t.n(r);function o(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(_);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable})),t.push.apply(t,a)}return t}function c(_,e,t){return e in _?Object.defineProperty(_,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):_[e]=t,_}function d(_,e){if(null==_)return{};var t,a,i=function(_,e){if(null==_)return{};var t,a,i={},r=Object.keys(_);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=_[t]);return i}(_,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(_,t)&&(i[t]=_[t])}return i}function l(){return(l=Object.assign||function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(_[a]=t[a])}return _}).apply(this,arguments)}t(87).a;function s(_){return _&&"icon"===_.split("--")[0]}var E=function(_){var e,t=_.className,a=_.iconTitle,i=_.description,r=_.fill,E=_.fillRule,u=_.height,p=_.name,O=_.icon,P=_.role,f=_.style,b=_.width,m=_.iconRef,D=d(_,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),M=function(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){c(_,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))})}return _}({className:t,fill:r,fillRule:E,height:u||O.height,name:s?p:"icon--".concat(p),role:P,style:f,viewBox:O.viewBox,width:b||O.width,ref:m},D),y=O?(e=O.svgData,Object.keys(e).filter(function(_){return e[_]}).map(function(_){var t=e[_];return"circles"===_?t.map(function(_,e){var t={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return n.a.createElement("circle",l({key:e},t))}):"paths"===_?t.map(function(_,e){return n.a.createElement("path",{d:_.d,key:"key".concat(e)})}):"polygons"===_?t.map(function(_,e){return n.a.createElement("polygon",{points:_.points,key:"key".concat(e)})}):""})):"";return n.a.createElement("svg",l({},M,{"aria-label":i}),n.a.createElement("title",null,"undefined"===typeof a?i:a),y)};E.propTypes={className:i.a.string,description:i.a.string.isRequired,fill:i.a.string,fillRule:i.a.string,height:i.a.string,icon:i.a.shape({width:i.a.string,height:i.a.string,viewBox:i.a.string.isRequired,svgData:i.a.object.isRequired}),iconRef:i.a.func,iconTitle:i.a.string,name:i.a.string,role:i.a.string,style:i.a.object,viewBox:i.a.string,width:i.a.string},E.defaultProps={fillRule:"evenodd",role:"img"},e.a=E}}]);
//# sourceMappingURL=180.c19d96a4.chunk.js.map