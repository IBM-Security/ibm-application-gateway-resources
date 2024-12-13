"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[5167,8270],{8270:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9895),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9976),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8674),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(4007),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2830),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2751),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(697),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(9199),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(810),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(263),carbon_components_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(6519),carbon_components_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(593),carbon_components_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(8499),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const AdvancedconfigurationvalueDeleteModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>Promise.all([__webpack_require__.e(3466),__webpack_require__.e(877)]).then(__webpack_require__.bind(__webpack_require__,877)))),AdvancedconfigurationvalueAdd=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(2910).then(__webpack_require__.bind(__webpack_require__,2910)))),AdvancedconfigurationvalueEdit=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(4245).then(__webpack_require__.bind(__webpack_require__,4245)))),handleChange=()=>{},handleSave=(_,e,a,n,i,t)=>{void 0===e&&(e="");var r={};!0!==document.getElementById("advanced_configuration_entry_id"+e).value.endsWith(":")&&(r.advanced_configuration_entry=document.getElementById("advanced_configuration_entry_id"+e).value),!0!==document.getElementById("advanced_configuration_operation_id"+e).value.endsWith(":")&&(r.advanced_configuration_operation=document.getElementById("advanced_configuration_operation_id"+e).value),!0!==document.getElementById("advanced_configuration_stanza_id"+e).value.endsWith(":")&&(r.advanced_configuration_stanza=document.getElementById("advanced_configuration_stanza_id"+e).value),r.advanced_configuration_value=advanced_configuration_valuerowData.advanced_configuration_value,_(r.advanced_configuration_entry,r.advanced_configuration_operation,r.advanced_configuration_stanza,r.advanced_configuration_value,!0),handleClose(e,a,n,i,t)},handleAdd=(_,e,a,n,i,t,r,o,c)=>{var d=n||"";if(window[d+"editing"]=!0,window[d+"rowId"]=_,r)for(var u=0;u<r.length;u++)r[u](n,o,c);e();var l=d;if(l.endsWith("_configuration")){l=l.slice(0,-14)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(l+"_div"+t,"display","none"),document.getElementById("editadvanced_configurationPage"+a).style.display="block",document.getElementById(l+"_tab"+t).style.display="none"},handleClose=(_,e,a,n,i)=>{var t=e||"";delete window[t+"editing"],delete window[t+"rowId"];var r=t;if(r.endsWith("_configuration")){r=r.slice(0,-14)}void 0!==a&&""!==a&&(document.getElementById(a).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(r+"_div"+n,"display","block"),document.getElementById("editadvanced_configurationPage"+_).style.display="none",document.getElementById(r+"_tab"+n).style.display="flex",i&&i()},closeAdd=_=>{void 0===_&&(_=""),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)("advanced_configuration_div"+_,"display","block"),document.getElementById("advanced_configuration_tab"+_).style.display="flex"},advanced_configuration_valueheaderData=[{header:"Value",key:"value"}],advanced_configuration_valuerowData={advanced_configuration_value:[]},advanced_configuration_valuehandleAdd=(idPrefix,clearFields)=>{if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("advanced_configuration_value_value_id"+idPrefix).value="",(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)("advanced_configuration_div"+idPrefix,"display","none"),document.getElementById("addadvancedconfiguration_valuePage"+idPrefix).style.display="block",document.getElementById("advanced_configuration_tab"+idPrefix).style.display="none"},getEditData=(_,e,a)=>{var n=_||"",i=window.iagyaml,t={};if(null!==i&&void 0!==i&&(void 0!==(t=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(i))&&null!==t||(t={})),advanced_configuration_valuerowData.advanced_configuration_value=[],e&&a)for(var r=0;r<e.length;r++){if((e[r].entry?e[r].entry:"")+(e[r].stanza?e[r].stanza:"")+(e[r].operation?e[r].operation:"")===window[n+"rowId"]&&void 0!==e[r]&&void 0!==e[r].value){if("string"===typeof e[r].value)(c={}).id=e[r].value,c.value=e[r].value,advanced_configuration_valuerowData.advanced_configuration_value.push(c);else for(var o=0;o<e[r].value.length;o++){var c={};e[r].value[o].id?c.id=e[r].value[o].id:e[r].value[o].value?c.id=e[r].value[o].value:c.id=e[r].value[o],e[r].value[o].value?c.value=e[r].value[o].value:c.value=e[r].value[o],advanced_configuration_valuerowData.advanced_configuration_value.push(c)}a("setadvanced_configuration_value",advanced_configuration_valuerowData.advanced_configuration_value)}}else if(void 0!==t&&void 0!==t.advanced&&void 0!==t.advanced.configuration)for(r=0;r<t.advanced.configuration.length;r++){if((t.advanced_configuration[r].entry?t.advanced_configuration[r].entry:"")+(t.advanced_configuration[r].stanza?t.advanced_configuration[r].stanza:"")+(t.advanced_configuration[r].operation?t.advanced_configuration[r].operation:"")===window[n+"rowId"]&&void 0!==t&&void 0!==t.advanced&&void 0!==t.advanced.configuration[r]&&void 0!==t.advanced.configuration[r].value)for(o=0;o<t.advanced.configuration[r].value.length;o++){(c={}).id=t.advanced.configuration[r].value[o],c.value=t.advanced.configuration[r].value[o],advanced_configuration_valuerowData.advanced_configuration_value.push(c)}}},Advanced_configurationEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[advanced_configuration_value,setadvanced_configuration_value]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),[fetchedadvanced_configuration_value,setFetchedadvanced_configuration_value]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{advanced_configuration_valueloadGrid()}),[fetchedadvanced_configuration_value]);const advanced_configuration_valueloadGrid=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((async(_,e)=>{try{var a=[];if(_)if(e){for(var n=0;n<advanced_configuration_valuerowData.advanced_configuration_value.length;n++){var i=(advanced_configuration_valuerowData.advanced_configuration_value[n].value?advanced_configuration_valuerowData.advanced_configuration_value[n].value:"")+"";(1!=window.advanced_configuration_valueediting&&"true"!=window.advanced_configuration_valueediting||i!=window.advanced_configuration_valuerowId)&&a.push(advanced_configuration_valuerowData.advanced_configuration_value[n])}var t=(_||"")+"";a.push({id:t,value:_})}else for(n=0;n<advanced_configuration_valuerowData.advanced_configuration_value.length;n++)advanced_configuration_valuerowData.advanced_configuration_value[n].value!==_&&a.push(advanced_configuration_valuerowData.advanced_configuration_value[n]);else a=advanced_configuration_valuerowData.advanced_configuration_value;advanced_configuration_valuerowData.advanced_configuration_value=a;setadvanced_configuration_value({advanced_configuration_value:a}.advanced_configuration_value),void 0!==_&&null!==_&&handleChange()}catch(r){console.log(r)}return!0})),[advanced_configuration_entry,setadvanced_configuration_entry]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateadvanced_configuration_entry=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setadvanced_configuration_entry(_.target.value)),[]),[advanced_configuration_operation,setadvanced_configuration_operation]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateadvanced_configuration_operation=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setadvanced_configuration_operation(_.target.value)),[]),[advanced_configuration_stanza,setadvanced_configuration_stanza]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateadvanced_configuration_stanza=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setadvanced_configuration_stanza(_.target.value)),[]),[advanced_configuration_value_value,setadvanced_configuration_value_value]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateadvanced_configuration_value_value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setadvanced_configuration_value_value(_.target.value)),[]),[advanced_configuration_value_value_valid,setadvanced_configuration_value_value_valid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[advanced_configuration_value_value_invalid_text,setadvanced_configuration_value_value_invalid_text]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>{for(var _=0;_<advanced_configuration_valuerowData.advanced_configuration_value.length;_++)advanced_configuration_valuerowData.advanced_configuration_value[_].id===window.advanced_configuration_valuerowId&&setadvanced_configuration_value_value(void 0!==advanced_configuration_valuerowData.advanced_configuration_value[_]&&void 0!==advanced_configuration_valuerowData.advanced_configuration_value[_].value?advanced_configuration_valuerowData.advanced_configuration_value[_].value:"");return!0},setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{id:"editadvanced_configurationPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"advanced_configuration_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"value_tab"+idPrefix,children:"Value"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"value_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Advanced / Configuration : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"Value Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{tabIndex:"0","data-tooltip-id":"advanced_configuration_value_tooltip_id"+idPrefix,children:"Value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"advanced_configuration_value_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The value(s) for the new configuration entry. The value is only required for the `add` and `set` operations.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"advanced_configuration_valueTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.Ay,{id:"advanced_configuration_valueTable"+idPrefix,isSortable:!0,headers:advanced_configuration_valueheaderData,rows:advanced_configuration_valuerowData.advanced_configuration_value,render:_=>{let{rows:e,headers:a,getHeaderProps:n,getRowProps:i,getTableProps:t,getToolbarProps:r,onInputChange:o,getTableContainerProps:c}=_;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{"aria-label":"data table toolbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:()=>{advanced_configuration_valuehandleAdd(idPrefix,[setadvanced_configuration_value_value(""),setadvanced_configuration_value_value_valid(!0)])},children:"Add"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.A,{size:"normal",...t(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:[a.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{...n({header:_}),children:_.header}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:"Actions"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{children:e.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:[_.cells.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.A,{children:_.value},_.id))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedconfigurationvalueDeleteModal,{row:_,loadGrid:advanced_configuration_valueloadGrid})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedconfigurationvalueEdit,{data:advanced_configuration_valuerowData.advanced_configuration_value,setData:setDataMain,row:_,loadGrid:advanced_configuration_valueloadGrid,dataLoad:dataLoad,editing:!0,name:"advanced_configuration_value",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text})})]})]},_.id)))})]})]})}})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{disabled:!props.advanced_configuration_entry||!props.advanced_configuration_entry_valid||!props.advanced_configuration_stanza||!props.advanced_configuration_stanza_valid||!props.advanced_configuration_operation||!props.advanced_configuration_operation_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Advanced / Configuration : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_19__.A,{value:props.advanced_configuration_entry,id:"advanced_configuration_entry_id"+idPrefix,"data-tooltip-id":"advanced_configuration_entry_tooltip_id"+idPrefix,labelText:"Entry *",onChange:props.updateadvanced_configuration_entry}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"advanced_configuration_entry_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The name of the configuration entry.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_20__.A,{value:props.advanced_configuration_operation,id:"advanced_configuration_operation_id"+idPrefix,"data-tooltip-id":"advanced_configuration_operation_tooltip_id"+idPrefix,labelText:"Operation *",onChange:props.updateadvanced_configuration_operation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_21__.A,{text:"",value:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_21__.A,{text:"delete",value:"delete"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_21__.A,{text:"add",value:"add"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_21__.A,{text:"set",value:"set"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"advanced_configuration_operation_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The operation to be perform on the configuration entry.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_19__.A,{value:props.advanced_configuration_stanza,id:"advanced_configuration_stanza_id"+idPrefix,"data-tooltip-id":"advanced_configuration_stanza_tooltip_id"+idPrefix,labelText:"Stanza *",onChange:props.updateadvanced_configuration_stanza}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"advanced_configuration_stanza_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The name of the configuration stanza which contains the configuration entry.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{disabled:!props.advanced_configuration_entry||!props.advanced_configuration_entry_valid||!props.advanced_configuration_stanza||!props.advanced_configuration_stanza_valid||!props.advanced_configuration_operation||!props.advanced_configuration_operation_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedconfigurationvalueAdd,{loadGrid:advanced_configuration_valueloadGrid,doClose:()=>{closeAdd(idPrefix)},idPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedconfigurationvalueEdit,{loadGrid:advanced_configuration_valueloadGrid,dataLoad:dataLoad,name:"advanced_configuration_value",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text})})]})})},__WEBPACK_DEFAULT_EXPORT__=Advanced_configurationEdit},5167:(_,e,a)=>{a.d(e,{Ay:()=>v});var n=a(4467),i=a(3986),t=a(8168),r=(a(2740),a(5173)),o=a.n(r),c=a(5043),d=(a(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function u(_,e){var a=Object.keys(_);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(_);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),a.push.apply(a,n)}return a}function l(_){return _&&"icon"===_.split("--")[0]}var s=function(_){var e,a=_.className,r=_.iconTitle,o=_.description,s=_.fill,v=_.fillRule,E=_.height,P=_.name,f=_.icon,D=_.role,O=_.style,M=_.width,g=_.iconRef,p=(0,i.A)(_,d),x=function(_){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){(0,n.A)(_,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(a,e))}))}return _}({className:a,fill:s,fillRule:v,height:E||f.height,name:l?P:"icon--".concat(P),role:D,style:O,viewBox:f.viewBox,width:M||f.width,ref:g},p),m=f?(e=f.svgData,Object.keys(e).filter((function(_){return e[_]})).map((function(_){var a=e[_];return"circles"===_?a.map((function(_,e){var a={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return c.createElement("circle",(0,t.A)({key:e},a))})):"paths"===_?a.map((function(_,e){return c.createElement("path",{d:_.d,key:"key".concat(e)})})):"polygons"===_?a.map((function(_,e){return c.createElement("polygon",{points:_.points,key:"key".concat(e)})})):""}))):"";return c.createElement("svg",(0,t.A)({},x,{"aria-label":o}),c.createElement("title",null,"undefined"===typeof r?o:r),m)};s.propTypes={className:o().string,description:o().string.isRequired,fill:o().string,fillRule:o().string,height:o().string,icon:o().shape({width:o().string,height:o().string,viewBox:o().string.isRequired,svgData:o().object.isRequired}),iconRef:o().func,iconTitle:o().string,name:o().string,role:o().string,style:o().object,viewBox:o().string,width:o().string},s.defaultProps={fillRule:"evenodd",role:"img"};const v=s}}]);
//# sourceMappingURL=8270.ccdff2ed.chunk.js.map