"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[6324],{6324:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2879),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2830),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9895),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(9976),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(8674),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(4007),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2751),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(697),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(9199),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(810),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(263),carbon_components_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(6519),react_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__),react_web_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(579);const PoliciescontentInjectionpathsDeleteModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>Promise.all([__webpack_require__.e(3466),__webpack_require__.e(6987)]).then(__webpack_require__.bind(__webpack_require__,6987)))),PoliciescontentInjectionpathsAdd=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(1664).then(__webpack_require__.bind(__webpack_require__,1664)))),PoliciescontentInjectionpathsEdit=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(4912).then(__webpack_require__.bind(__webpack_require__,2531)))),handleChange=()=>{},handleSave=(_,e,t)=>{void 0===e&&(e="");var i={};!0!==document.getElementById("policies_content_injection_content_id"+e).value.endsWith(":")&&(i.policies_content_injection_content=document.getElementById("policies_content_injection_content_id"+e).value),i.policies_content_injection_full_line_match=document.getElementById("policies_content_injection_full_line_match_id"+e).checked.toString(),!0!==document.getElementById("policies_content_injection_location_id"+e).value.endsWith(":")&&(i.policies_content_injection_location=document.getElementById("policies_content_injection_location_id"+e).value),!0!==document.getElementById("policies_content_injection_name_id"+e).value.endsWith(":")&&(i.policies_content_injection_name=document.getElementById("policies_content_injection_name_id"+e).value),i.policies_content_injection_replace_match=document.getElementById("policies_content_injection_replace_match_id"+e).checked.toString(),i.policies_content_injection_paths=policies_content_injection_pathsrowData.policies_content_injection_paths,_(i.policies_content_injection_content,i.policies_content_injection_full_line_match,i.policies_content_injection_location,i.policies_content_injection_name,i.policies_content_injection_replace_match,i.policies_content_injection_paths,!0),handleClose(e,t)},handleAdd=(_,e,t,i)=>{void 0===e&&(e=""),document.getElementById("policies_content_injection_content_id").value="",document.getElementById("policies_content_injection_full_line_match_id").checked=!1,document.getElementById("policies_content_injection_location_id").value="",document.getElementById("policies_content_injection_name_id").value="",document.getElementById("policies_content_injection_replace_match_id").checked=!1,policies_content_injection_pathsrowData.policies_content_injection_paths=[],_(policies_content_injection_pathsrowData.policies_content_injection_paths),t&&t(),handleClose(e,i)},handleClose=(_,e)=>{(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_div"+_,"display","block"),document.getElementById("addpolicies_content_injectionPage"+_).style.display="none",e&&e()},closeAdd=_=>{void 0===_&&(_=""),(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_content_injection_div"+_,"display","block"),document.getElementById("policies_content_injection_tab"+_).style.display="flex"},policies_content_injection_pathsheaderData=[{header:"Path",key:"paths"}],policies_content_injection_pathsrowData={policies_content_injection_paths:[]},policies_content_injection_pathshandleAdd=(idPrefix,clearFields)=>{if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("policies_content_injection_paths_paths_id"+idPrefix).value="",(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_content_injection_div"+idPrefix,"display","none"),document.getElementById("addpoliciescontent_injection_pathsPage"+idPrefix).style.display="block",document.getElementById("policies_content_injection_tab"+idPrefix).style.display="none"},Policies_content_injectionAdd=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",[policies_content_injection_paths,setpolicies_content_injection_paths]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),[fetchedpolicies_content_injection_paths,setFetchedpolicies_content_injection_paths]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{policies_content_injection_pathsloadGrid()}),[fetchedpolicies_content_injection_paths]);const policies_content_injection_pathsloadGrid=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((async(_,e)=>{try{var t=[];if(_)if(e){for(var i=0;i<policies_content_injection_pathsrowData.policies_content_injection_paths.length;i++){var n=(policies_content_injection_pathsrowData.policies_content_injection_paths[i].paths?policies_content_injection_pathsrowData.policies_content_injection_paths[i].paths:"")+"";(1!=window.policies_content_injection_pathsediting&&"true"!=window.policies_content_injection_pathsediting||n!=window.policies_content_injection_pathsrowId)&&t.push(policies_content_injection_pathsrowData.policies_content_injection_paths[i])}var c=(_||"")+"";t.push({id:c,paths:_})}else for(i=0;i<policies_content_injection_pathsrowData.policies_content_injection_paths.length;i++)policies_content_injection_pathsrowData.policies_content_injection_paths[i].paths!==_&&t.push(policies_content_injection_pathsrowData.policies_content_injection_paths[i]);else t=policies_content_injection_pathsrowData.policies_content_injection_paths;policies_content_injection_pathsrowData.policies_content_injection_paths=t;setpolicies_content_injection_paths({policies_content_injection_paths:t}.policies_content_injection_paths),void 0!==_&&null!==_&&handleChange()}catch(o){console.log(o)}return!0})),[policies_content_injection_content,setpolicies_content_injection_content]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_content_injection_content=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_content_injection_content(_.target.value)),[]),[policies_content_injection_full_line_match,setpolicies_content_injection_full_line_match]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),updatepolicies_content_injection_full_line_match=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_content_injection_full_line_match(_)),[]),[policies_content_injection_location,setpolicies_content_injection_location]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_content_injection_location=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_content_injection_location(_.target.value)),[]),[policies_content_injection_name,setpolicies_content_injection_name]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_content_injection_name=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_content_injection_name(_.target.value)),[]),[policies_content_injection_paths_paths,setpolicies_content_injection_paths_paths]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_content_injection_paths_paths=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>{setpolicies_content_injection_paths_paths(_.target.value);var e=_.target.value;(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.jr)(policies_content_injection_pathsrowData.policies_content_injection_paths,setpolicies_content_injection_paths_paths_valid,setpolicies_content_injection_paths_paths_invalid_text,"Policies Content Injection Paths","paths",e)}),[]),[policies_content_injection_paths_paths_valid,setpolicies_content_injection_paths_paths_valid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[policies_content_injection_paths_paths_invalid_text,setpolicies_content_injection_paths_paths_invalid_text]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[policies_content_injection_replace_match,setpolicies_content_injection_replace_match]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),updatepolicies_content_injection_replace_match=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_content_injection_replace_match(_)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>{for(var _=0;_<policies_content_injection_pathsrowData.policies_content_injection_paths.length;_++)policies_content_injection_pathsrowData.policies_content_injection_paths[_].id===window.policies_content_injection_pathsrowId&&setpolicies_content_injection_paths_paths(void 0!==policies_content_injection_pathsrowData.policies_content_injection_paths[_]&&void 0!==policies_content_injection_pathsrowData.policies_content_injection_paths[_].paths?policies_content_injection_pathsrowData.policies_content_injection_paths[_].paths:"");return!0},setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{id:"addpolicies_content_injectionPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,{id:"policies_content_injection_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.wb,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"General_tab"+idPrefix,children:"General"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"paths_tab"+idPrefix,children:"Paths"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / Content Injection : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{value:props.policies_content_injection_content,id:"policies_content_injection_content_id"+idPrefix,"data-tooltip-id":"policies_content_injection_content_tooltip_id"+idPrefix,labelText:"Content",onChange:props.updatepolicies_content_injection_content}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_content_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The data which is to be injected.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{checked:props.policies_content_injection_full_line_match,id:"policies_content_injection_full_line_match_id"+idPrefix,"data-tooltip-id":"policies_content_injection_full_line_match_tooltip_id"+idPrefix,labelText:"Full Line Match",onChange:props.updatepolicies_content_injection_full_line_match}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_full_line_match_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["Should the location match a full line, or should it match any string in the response?  When a full line match is configured the content will be inserted prior to the matching line.  When a partial line match is configured the content will be inserted immediately prior to the matching string.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{value:props.policies_content_injection_location,id:"policies_content_injection_location_id"+idPrefix,"data-tooltip-id":"policies_content_injection_location_tooltip_id"+idPrefix,labelText:"Location",onChange:props.updatepolicies_content_injection_location}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_location_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The location where the content should be injected. If a full line match is being used the location is pattern matched against a line in the response using the `*.` wildcard characters.  The maximum length of a line which can be matched is 8192 bytes.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{invalid:!props.policies_content_injection_name_valid,invalidText:props.policies_content_injection_name_invalid_text,value:props.policies_content_injection_name,id:"policies_content_injection_name_id"+idPrefix,"data-tooltip-id":"policies_content_injection_name_tooltip_id"+idPrefix,labelText:"Name *",onChange:props.updatepolicies_content_injection_name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_name_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["A name to be associated with this content injection rule.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{checked:props.policies_content_injection_replace_match,id:"policies_content_injection_replace_match_id"+idPrefix,"data-tooltip-id":"policies_content_injection_replace_match_tooltip_id"+idPrefix,labelText:"Replace Match",onChange:props.updatepolicies_content_injection_replace_match}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_replace_match_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["If a partial line match is being used this configuration entry will control whether the matching string is replaced with the supplied content, or whether the supplied content is inserted prior to the matching string.  This configuration entry will be ignored if full line matches are being used.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{disabled:!props.policies_content_injection_name||!props.policies_content_injection_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"paths_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / Content Injection : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"Paths Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3",{tabIndex:"0","data-tooltip-id":"policies_content_injection_paths_tooltip_id"+idPrefix,children:"Paths"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_content_injection_paths_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The path for which content injection will take place. This entry is an array and can be used to specify multiple paths.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"policies_content_injection_pathsTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.Ay,{id:"policies_content_injection_pathsTable"+idPrefix,isSortable:!0,headers:policies_content_injection_pathsheaderData,rows:policies_content_injection_pathsrowData.policies_content_injection_paths,render:_=>{let{rows:e,headers:t,getHeaderProps:i,getRowProps:n,getTableProps:c,getToolbarProps:o,onInputChange:a,getTableContainerProps:s}=_;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.A,{"aria-label":"data table toolbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:()=>{policies_content_injection_pathshandleAdd(idPrefix,[setpolicies_content_injection_paths_paths(""),setpolicies_content_injection_paths_paths_valid(!0)])},children:"Add"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.A,{size:"normal",...c(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:[t.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{...i({header:_}),children:_.header}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:"Actions"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{children:e.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:[_.cells.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.A,{children:_.value},_.id))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PoliciescontentInjectionpathsDeleteModal,{row:_,loadGrid:policies_content_injection_pathsloadGrid})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PoliciescontentInjectionpathsEdit,{data:policies_content_injection_pathsrowData.policies_content_injection_paths,setData:setDataMain,row:_,loadGrid:policies_content_injection_pathsloadGrid,dataLoad:dataLoad,editing:!0,name:"policies_content_injection_paths",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updatepolicies_content_injection_paths_paths:updatepolicies_content_injection_paths_paths,policies_content_injection_paths_paths:policies_content_injection_paths_paths,policies_content_injection_paths_paths_valid:policies_content_injection_paths_paths_valid,policies_content_injection_paths_paths_invalid_text:policies_content_injection_paths_paths_invalid_text})})]})]},_.id)))})]})]})}})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_content_injection_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{disabled:!props.policies_content_injection_name||!props.policies_content_injection_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PoliciescontentInjectionpathsAdd,{loadGrid:policies_content_injection_pathsloadGrid,doClose:()=>{closeAdd(idPrefix)},idPrefix:idPrefix,updatepolicies_content_injection_paths_paths:updatepolicies_content_injection_paths_paths,policies_content_injection_paths_paths:policies_content_injection_paths_paths,policies_content_injection_paths_paths_valid:policies_content_injection_paths_paths_valid,policies_content_injection_paths_paths_invalid_text:policies_content_injection_paths_paths_invalid_text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PoliciescontentInjectionpathsEdit,{loadGrid:policies_content_injection_pathsloadGrid,dataLoad:dataLoad,name:"policies_content_injection_paths",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updatepolicies_content_injection_paths_paths:updatepolicies_content_injection_paths_paths,policies_content_injection_paths_paths:policies_content_injection_paths_paths,policies_content_injection_paths_paths_valid:policies_content_injection_paths_paths_valid,policies_content_injection_paths_paths_invalid_text:policies_content_injection_paths_paths_invalid_text})})]})})},__WEBPACK_DEFAULT_EXPORT__=Policies_content_injectionAdd}}]);
//# sourceMappingURL=6324.906a16a5.chunk.js.map