(window.webpackJsonp=window.webpackJsonp||[]).push([[87,64,65,66,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,279,322,323,324,325,326,327,328,329,330,331],{245:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(424),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(36),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(90),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15),handleChange=function(){},handleSave=function(e,_,t,a,r,i){void 0===_&&(_="");var s={};!0!==document.getElementById("policies_http_transformations_request_paths_paths_id"+_).value.endsWith(":")&&(s.policies_http_transformations_request_paths_paths=document.getElementById("policies_http_transformations_request_paths_paths_id"+_).value),e(s.policies_http_transformations_request_paths_paths,!0),handleClose(_,t,a,r,i)},handleAdd=function(e,_,t,a,r,i,s,n,o){var l=a||"";if(window[l+"editing"]=!0,window[l+"rowId"]=e,s)for(var c=0;c<s.length;c++)s[c](a,n,o);_();var p=l;if(p.endsWith("_paths")){var d="_paths".length;p=p.slice(0,-d)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(p+"_div"+i,"display","none"),document.getElementById("editpolicieshttp_transformationsrequest_pathsPage"+t).style.display="block",document.getElementById(p+"_tab"+i).style.display="none"},handleClose=function(e,_,t,a,r){var i=_||"";delete window[i+"editing"],delete window[i+"rowId"];var s=i;if(s.endsWith("_paths")){var n="_paths".length;s=s.slice(0,-n)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(s+"_div"+a,"display","block"),document.getElementById("editpolicieshttp_transformationsrequest_pathsPage"+e).style.display="none",document.getElementById(s+"_tab"+a).style.display="flex",r&&r()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("policies_http_transformations_request_paths_div"+e,"display","block"),document.getElementById("policies_http_transformations_request_paths_tab"+e).style.display="flex"},getEditData=function(e,_,t){var a=e||"",r=window.iagyaml,i={};if(null!==r&&void 0!==r&&(void 0!==(i=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(r))&&null!==i||(i={})),_&&t)for(var s=0;s<_.length;s++){_[s].paths&&_[s].paths;window[a+"rowId"]}else void 0!==i&&void 0!==i.policies&&void 0!==i.policies.http_transformations&&i.policies.http_transformations.request},Policieshttp_transformationsrequest_pathsEdit=function Policieshttp_transformationsrequest_pathsEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),policies_http_transformations_request_paths_paths=_useState2[0],setpolicies_http_transformations_request_paths_paths=_useState2[1],updatepolicies_http_transformations_request_paths_paths=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setpolicies_http_transformations_request_paths_paths(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editpolicieshttp_transformationsrequest_pathsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"policies_http_transformations_request_paths_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_request_paths_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Policies / HTTP Transformations / Request / Paths : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div policies_http_transformations_request_paths_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Path"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.policies_http_transformations_request_paths_paths,id:"policies_http_transformations_request_paths_paths_id"+idPrefix,labelText:"Path *",onChange:props.updatepolicies_http_transformations_request_paths_paths}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.policies_http_transformations_request_paths_paths||!props.policies_http_transformations_request_paths_paths_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Policieshttp_transformationsrequest_pathsEdit},424:function(e,_,t){"use strict";t(146);var a=t(2),r=t.n(a),i=t(0),s=t.n(i);function n(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);_&&(a=a.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,a)}return t}function o(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function l(e,_){if(null==e)return{};var t,a,r=function(e,_){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],_.indexOf(t)>=0||(r[t]=e[t]);return r}(e,_);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],_.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(){return(c=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t(90).a;function p(e){return e&&"icon"===e.split("--")[0]}var d=function(e){var _,t=e.className,a=e.iconTitle,r=e.description,i=e.fill,d=e.fillRule,u=e.height,E=e.name,f=e.icon,m=e.role,P=e.style,h=e.width,O=e.iconRef,b=l(e,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),D=function(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?n(Object(t),!0).forEach(function(_){o(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}({className:t,fill:i,fillRule:d,height:u||f.height,name:p?E:"icon--".concat(E),role:m,style:P,viewBox:f.viewBox,width:h||f.width,ref:O},b),M=f?(_=f.svgData,Object.keys(_).filter(function(e){return _[e]}).map(function(e){var t=_[e];return"circles"===e?t.map(function(e,_){var t={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(_)};return s.a.createElement("circle",c({key:_},t))}):"paths"===e?t.map(function(e,_){return s.a.createElement("path",{d:e.d,key:"key".concat(_)})}):"polygons"===e?t.map(function(e,_){return s.a.createElement("polygon",{points:e.points,key:"key".concat(_)})}):""})):"";return s.a.createElement("svg",c({},D,{"aria-label":r}),s.a.createElement("title",null,"undefined"===typeof a?r:a),M)};d.propTypes={className:r.a.string,description:r.a.string.isRequired,fill:r.a.string,fillRule:r.a.string,height:r.a.string,icon:r.a.shape({width:r.a.string,height:r.a.string,viewBox:r.a.string.isRequired,svgData:r.a.object.isRequired}),iconRef:r.a.func,iconTitle:r.a.string,name:r.a.string,role:r.a.string,style:r.a.object,viewBox:r.a.string,width:r.a.string},d.defaultProps={fillRule:"evenodd",role:"img"},_.a=d}}]);
//# sourceMappingURL=87.79082e84.chunk.js.map