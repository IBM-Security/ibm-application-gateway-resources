"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[2643,5024,5167],{5024:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,t,r,a,i)=>{void 0===e&&(e="");var s={};!0!==document.getElementById("policies_http_transformations_request_paths_paths_id"+e).value.endsWith(":")&&(s.policies_http_transformations_request_paths_paths=document.getElementById("policies_http_transformations_request_paths_paths_id"+e).value),_(s.policies_http_transformations_request_paths_paths,!0),handleClose(e,t,r,a,i)},handleAdd=(_,e,t,r,a,i,s,n,o)=>{var c=r||"";if(window[c+"editing"]=!0,window[c+"rowId"]=_,s)for(var l=0;l<s.length;l++)s[l](r,n,o);e();var p=c;if(p.endsWith("_paths")){p=p.slice(0,-6)}void 0!==a&&""!==a&&(document.getElementById(a).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(p+"_div"+i,"display","none"),document.getElementById("editpolicieshttp_transformationsrequest_pathsPage"+t).style.display="block",document.getElementById(p+"_tab"+i).style.display="none"},handleClose=(_,e,t,r,a)=>{var i=e||"";delete window[i+"editing"],delete window[i+"rowId"];var s=i;if(s.endsWith("_paths")){s=s.slice(0,-6)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(s+"_div"+r,"display","block"),document.getElementById("editpolicieshttp_transformationsrequest_pathsPage"+_).style.display="none",document.getElementById(s+"_tab"+r).style.display="flex",a&&a()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("policies_http_transformations_request_paths_div"+_,"display","block"),document.getElementById("policies_http_transformations_request_paths_tab"+_).style.display="flex"},getEditData=(_,e,t)=>{var r=_||"",a=window.iagyaml,i={};if(null!==a&&void 0!==a&&(void 0!==(i=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(a))&&null!==i||(i={})),e&&t)for(var s=0;s<e.length;s++){e[s].paths&&e[s].paths;window[r+"rowId"]}else void 0!==i&&void 0!==i.policies&&void 0!==i.policies.http_transformations&&i.policies.http_transformations.request},Policieshttp_transformationsrequest_pathsEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[policies_http_transformations_request_paths_paths,setpolicies_http_transformations_request_paths_paths]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_request_paths_paths=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_request_paths_paths(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editpolicieshttp_transformationsrequest_pathsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"policies_http_transformations_request_paths_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_request_paths_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / HTTP Transformations / Request / Paths : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div policies_http_transformations_request_paths_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Path"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_http_transformations_request_paths_paths,id:"policies_http_transformations_request_paths_paths_id"+idPrefix,labelText:"Path *",onChange:props.updatepolicies_http_transformations_request_paths_paths})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_request_paths_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.policies_http_transformations_request_paths_paths||!props.policies_http_transformations_request_paths_paths_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Policieshttp_transformationsrequest_pathsEdit},5167:(_,e,t)=>{t.d(e,{Ay:()=>E});var r=t(4467),a=t(3986),i=t(8168),s=(t(2740),t(5173)),n=t.n(s),o=t(5043),c=(t(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function l(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,r)}return t}function p(_){return _&&"icon"===_.split("--")[0]}var d=function(_){var e,t=_.className,s=_.iconTitle,n=_.description,d=_.fill,E=_.fillRule,h=_.height,P=_.name,u=_.icon,m=_.role,O=_.style,f=_.width,D=_.iconRef,M=(0,a.A)(_,c),b=function(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.A)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}({className:t,fill:d,fillRule:E,height:h||u.height,name:p?P:"icon--".concat(P),role:m,style:O,viewBox:u.viewBox,width:f||u.width,ref:D},M),x=u?(e=u.svgData,Object.keys(e).filter((function(_){return e[_]})).map((function(_){var t=e[_];return"circles"===_?t.map((function(_,e){var t={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return o.createElement("circle",(0,i.A)({key:e},t))})):"paths"===_?t.map((function(_,e){return o.createElement("path",{d:_.d,key:"key".concat(e)})})):"polygons"===_?t.map((function(_,e){return o.createElement("polygon",{points:_.points,key:"key".concat(e)})})):""}))):"";return o.createElement("svg",(0,i.A)({},b,{"aria-label":n}),o.createElement("title",null,"undefined"===typeof s?n:s),x)};d.propTypes={className:n().string,description:n().string.isRequired,fill:n().string,fillRule:n().string,height:n().string,icon:n().shape({width:n().string,height:n().string,viewBox:n().string.isRequired,svgData:n().object.isRequired}),iconRef:n().func,iconTitle:n().string,name:n().string,role:n().string,style:n().object,viewBox:n().string,width:n().string},d.defaultProps={fillRule:"evenodd",role:"img"};const E=d}}]);
//# sourceMappingURL=2643.2ff1ce9e.chunk.js.map