(window.webpackJsonp=window.webpackJsonp||[]).push([[76,64,65,66,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,240,318,319,320,321,322,323,324,325,326,327],{241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(419),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(88),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(14),handleChange=function(){},handleSave=function(e,t,_,a,r,i){void 0===t&&(t="");var n={};!0!==document.getElementById("identity_oauth_attributes_attributes_id"+t).value.endsWith(":")&&(n.identity_oauth_attributes_attributes=document.getElementById("identity_oauth_attributes_attributes_id"+t).value),e(n.identity_oauth_attributes_attributes,!0),handleClose(t,_,a,r,i)},handleAdd=function(e,t,_,a,r,i,n,o,l){var c=a||"";if(window[c+"editing"]=!0,window[c+"rowId"]=e,n)for(var s=0;s<n.length;s++)n[s](a,o,l);t();var d=c;if(d.endsWith("_attributes")){var u="_attributes".length;d=d.slice(0,-u)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(d+"_div"+i,"display","none"),document.getElementById("editidentityoauth_attributesPage"+_).style.display="block",document.getElementById(d+"_tab"+i).style.display="none"},handleClose=function(e,t,_,a,r){var i=t||"";delete window[i+"editing"],delete window[i+"rowId"];var n=i;if(n.endsWith("_attributes")){var o="_attributes".length;n=n.slice(0,-o)}void 0!==_&&""!==_&&(document.getElementById(_).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(n+"_div"+a,"display","block"),document.getElementById("editidentityoauth_attributesPage"+e).style.display="none",document.getElementById(n+"_tab"+a).style.display="flex",r&&r()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("identity_oauth_attributes_div"+e,"display","block"),document.getElementById("identity_oauth_attributes_tab"+e).style.display="flex"},getEditData=function(e,t,_){var a=e||"",r=window.iagyaml,i={};if(null!==r&&void 0!==r&&(void 0!==(i=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(r))&&null!==i||(i={})),t&&_)for(var n=0;n<t.length;n++){t[n].attributes&&t[n].attributes;window[a+"rowId"]}else void 0!==i&&void 0!==i.identity&&i.identity.oauth},Identityoauth_attributesEdit=function Identityoauth_attributesEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),identity_oauth_attributes_attributes=_useState2[0],setidentity_oauth_attributes_attributes=_useState2[1],updateidentity_oauth_attributes_attributes=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setidentity_oauth_attributes_attributes(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editidentityoauth_attributesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"identity_oauth_attributes_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading identity_oauth_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Identity / OAuth / Attributes : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div identity_oauth_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Attribute"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.identity_oauth_attributes_attributes,id:"identity_oauth_attributes_attributes_id"+idPrefix,labelText:"Attribute *",onChange:props.updateidentity_oauth_attributes_attributes}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.identity_oauth_attributes_attributes||!props.identity_oauth_attributes_attributes_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identityoauth_attributesEdit},419:function(e,t,_){"use strict";_(144);var a=_(2),r=_.n(a),i=_(0),n=_.n(i);function o(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),_.push.apply(_,a)}return _}function l(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}function c(e,t){if(null==e)return{};var _,a,r=function(e,t){if(null==e)return{};var _,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)_=i[a],t.indexOf(_)>=0||(r[_]=e[_]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)_=i[a],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(r[_]=e[_])}return r}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&(e[a]=_[a])}return e}).apply(this,arguments)}_(88).a;function d(e){return e&&"icon"===e.split("--")[0]}var u=function(e){var t,_=e.className,a=e.iconTitle,r=e.description,i=e.fill,u=e.fillRule,E=e.height,b=e.name,p=e.icon,O=e.role,P=e.style,f=e.width,m=e.iconRef,D=c(e,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),M=function(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?o(Object(_),!0).forEach(function(t){l(e,t,_[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):o(Object(_)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))})}return e}({className:_,fill:i,fillRule:u,height:E||p.height,name:d?b:"icon--".concat(b),role:O,style:P,viewBox:p.viewBox,width:f||p.width,ref:m},D),y=p?(t=p.svgData,Object.keys(t).filter(function(e){return t[e]}).map(function(e){var _=t[e];return"circles"===e?_.map(function(e,t){var _={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(t)};return n.a.createElement("circle",s({key:t},_))}):"paths"===e?_.map(function(e,t){return n.a.createElement("path",{d:e.d,key:"key".concat(t)})}):"polygons"===e?_.map(function(e,t){return n.a.createElement("polygon",{points:e.points,key:"key".concat(t)})}):""})):"";return n.a.createElement("svg",s({},M,{"aria-label":r}),n.a.createElement("title",null,"undefined"===typeof a?r:a),y)};u.propTypes={className:r.a.string,description:r.a.string.isRequired,fill:r.a.string,fillRule:r.a.string,height:r.a.string,icon:r.a.shape({width:r.a.string,height:r.a.string,viewBox:r.a.string.isRequired,svgData:r.a.object.isRequired}),iconRef:r.a.func,iconTitle:r.a.string,name:r.a.string,role:r.a.string,style:r.a.object,viewBox:r.a.string,width:r.a.string},u.defaultProps={fillRule:"evenodd",role:"img"},t.a=u}}]);
//# sourceMappingURL=76.0a0b9cf4.chunk.js.map