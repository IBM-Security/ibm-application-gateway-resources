(window.webpackJsonp=window.webpackJsonp||[]).push([[76,62,63,64,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,254,309,310,311,312,313,314,315,316,317,318],{253:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(412),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),handleChange=function(){},handleSave=function(e,_,t,a,i,o){void 0===_&&(_="");var r={};!0!==document.getElementById("policies_authorization_methods_methods_id"+_).value.endsWith(":")&&(r.policies_authorization_methods_methods=document.getElementById("policies_authorization_methods_methods_id"+_).value),e(r.policies_authorization_methods_methods,!0),handleClose(_,t,a,i,o)},handleAdd=function(e,_,t,a,i,o,r,n,l){var c=a||"";if(window[c+"editing"]=!0,window[c+"rowId"]=e,r)for(var s=0;s<r.length;s++)r[s](a,n,l);_();var d=c;if(d.endsWith("_methods")){var u="_methods".length;d=d.slice(0,-u)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(d+"_div"+o,"display","none"),document.getElementById("editpoliciesauthorization_methodsPage"+t).style.display="block",document.getElementById(d+"_tab"+o).style.display="none"},handleClose=function(e,_,t,a,i){var o=_||"";delete window[o+"editing"],delete window[o+"rowId"];var r=o;if(r.endsWith("_methods")){var n="_methods".length;r=r.slice(0,-n)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(r+"_div"+a,"display","block"),document.getElementById("editpoliciesauthorization_methodsPage"+e).style.display="none",document.getElementById(r+"_tab"+a).style.display="flex",i&&i()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("policies_authorization_methods_div"+e,"display","block"),document.getElementById("policies_authorization_methods_tab"+e).style.display="flex"},getEditData=function(e,_,t){var a=e||"",i=window.iagyaml,o={};if(null!==i&&void 0!==i&&(void 0!==(o=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(i))&&null!==o||(o={})),_&&t)for(var r=0;r<_.length;r++){_[r].methods&&_[r].methods;window[a+"rowId"]}else void 0!==o&&void 0!==o.policies&&o.policies.authorization},Policiesauthorization_methodsEdit=function Policiesauthorization_methodsEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),policies_authorization_methods_methods=_useState2[0],setpolicies_authorization_methods_methods=_useState2[1],updatepolicies_authorization_methods_methods=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setpolicies_authorization_methods_methods(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editpoliciesauthorization_methodsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"policies_authorization_methods_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading policies_authorization_methods_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Policies / Authorization / Methods : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div policies_authorization_methods_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_authorization_methods_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Method"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_authorization_methods_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.policies_authorization_methods_methods,id:"policies_authorization_methods_methods_id"+idPrefix,labelText:"Method *",onChange:props.updatepolicies_authorization_methods_methods}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_authorization_methods_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.policies_authorization_methods_methods||!props.policies_authorization_methods_methods_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Policiesauthorization_methodsEdit},412:function(e,_,t){"use strict";t(143);var a=t(2),i=t.n(a),o=t(0),r=t.n(o);function n(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);_&&(a=a.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,a)}return t}function l(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function c(e,_){if(null==e)return{};var t,a,i=function(e,_){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],_.indexOf(t)>=0||(i[t]=e[t]);return i}(e,_);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],_.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function s(){return(s=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t(87).a;function d(e){return e&&"icon"===e.split("--")[0]}var u=function(e){var _,t=e.className,a=e.iconTitle,i=e.description,o=e.fill,u=e.fillRule,E=e.height,p=e.name,m=e.icon,P=e.role,h=e.style,O=e.width,f=e.iconRef,b=c(e,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),D=function(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?n(Object(t),!0).forEach(function(_){l(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}({className:t,fill:o,fillRule:u,height:E||m.height,name:d?p:"icon--".concat(p),role:P,style:h,viewBox:m.viewBox,width:O||m.width,ref:f},b),M=m?(_=m.svgData,Object.keys(_).filter(function(e){return _[e]}).map(function(e){var t=_[e];return"circles"===e?t.map(function(e,_){var t={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(_)};return r.a.createElement("circle",s({key:_},t))}):"paths"===e?t.map(function(e,_){return r.a.createElement("path",{d:e.d,key:"key".concat(_)})}):"polygons"===e?t.map(function(e,_){return r.a.createElement("polygon",{points:e.points,key:"key".concat(_)})}):""})):"";return r.a.createElement("svg",s({},D,{"aria-label":i}),r.a.createElement("title",null,"undefined"===typeof a?i:a),M)};u.propTypes={className:i.a.string,description:i.a.string.isRequired,fill:i.a.string,fillRule:i.a.string,height:i.a.string,icon:i.a.shape({width:i.a.string,height:i.a.string,viewBox:i.a.string.isRequired,svgData:i.a.object.isRequired}),iconRef:i.a.func,iconTitle:i.a.string,name:i.a.string,role:i.a.string,style:i.a.object,viewBox:i.a.string,width:i.a.string},u.defaultProps={fillRule:"evenodd",role:"img"},_.a=u}}]);
//# sourceMappingURL=76.bfc1ca76.chunk.js.map