"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[1747],{1747:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2830),react_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__),react_web_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(579);const handleChange=()=>{},handleSave=(e,_,r)=>{void 0===_&&(_="");var s={};!0!==document.getElementById("server_response_headers_attribute_id"+_).value.endsWith(":")&&(s.server_response_headers_attribute=document.getElementById("server_response_headers_attribute_id"+_).value),!0!==document.getElementById("server_response_headers_header_id"+_).value.endsWith(":")&&(s.server_response_headers_header=document.getElementById("server_response_headers_header_id"+_).value),!0!==document.getElementById("server_response_headers_macro_id"+_).value.endsWith(":")&&(s.server_response_headers_macro=document.getElementById("server_response_headers_macro_id"+_).value),!0!==document.getElementById("server_response_headers_text_id"+_).value.endsWith(":")&&(s.server_response_headers_text=document.getElementById("server_response_headers_text_id"+_).value),e(s.server_response_headers_attribute,s.server_response_headers_header,s.server_response_headers_macro,s.server_response_headers_text,!0),handleClose(_,r)},handleAdd=(e,_,r)=>{void 0===e&&(e=""),document.getElementById("server_response_headers_attribute_id").value="",document.getElementById("server_response_headers_header_id").value="",document.getElementById("server_response_headers_macro_id").value="",document.getElementById("server_response_headers_text_id").value="",_&&_(),handleClose(e,r)},handleClose=(e,_)=>{(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("server_div"+e,"display","block"),document.getElementById("addserver_response_headersPage"+e).style.display="none",_&&_()},closeAdd=e=>{void 0===e&&(e=""),updateStyle("server_response_headers_div"+e,"display","block"),document.getElementById("server_response_headers_tab"+e).style.display="flex"},Server_response_headersAdd=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",[server_response_headers_attribute,setserver_response_headers_attribute]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateserver_response_headers_attribute=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>setserver_response_headers_attribute(e.target.value)),[]),[server_response_headers_header,setserver_response_headers_header]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateserver_response_headers_header=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>setserver_response_headers_header(e.target.value)),[]),[server_response_headers_macro,setserver_response_headers_macro]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateserver_response_headers_macro=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>setserver_response_headers_macro(e.target.value)),[]),[server_response_headers_text,setserver_response_headers_text]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateserver_response_headers_text=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>setserver_response_headers_text(e.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"addserver_response_headersPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,{id:"server_response_headers_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Server / Response Headers : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{value:props.server_response_headers_attribute,id:"server_response_headers_attribute_id"+idPrefix,"data-tooltip-id":"server_response_headers_attribute_tooltip_id"+idPrefix,labelText:"Attribute",onChange:props.updateserver_response_headers_attribute}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"server_response_headers_attribute_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The name of a credential attribute which the value will be taken from.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{invalid:!props.server_response_headers_header_valid,invalidText:props.server_response_headers_header_invalid_text,value:props.server_response_headers_header,id:"server_response_headers_header_id"+idPrefix,"data-tooltip-id":"server_response_headers_header_tooltip_id"+idPrefix,labelText:"Header *",onChange:props.updateserver_response_headers_header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"server_response_headers_header_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The name of the HTTP header to be included in the response.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{value:props.server_response_headers_macro,id:"server_response_headers_macro_id"+idPrefix,"data-tooltip-id":"server_response_headers_macro_tooltip_id"+idPrefix,labelText:"Macro",onChange:props.updateserver_response_headers_macro}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"server_response_headers_macro_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The name of the macro which the value will be taken from.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"Valid macro values are:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"  - `TAM_OP`",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"  - `ERROR_CODE`",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"  - `ERROR_TEXT`",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"  - `ERROR_URL`",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"  - `USERNAME`",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{value:props.server_response_headers_text,id:"server_response_headers_text_id"+idPrefix,"data-tooltip-id":"server_response_headers_text_tooltip_id"+idPrefix,labelText:"Text",onChange:props.updateserver_response_headers_text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"server_response_headers_text_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["String content which will be inserted into the header verbatim.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem server_response_headers_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{disabled:!props.server_response_headers_header||!props.server_response_headers_header_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Server_response_headersAdd}}]);
//# sourceMappingURL=1747.c20cff39.chunk.js.map