(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{245:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(412),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,a,i,l,o){void 0===e&&(e="");var t={};!0!==document.getElementById("policies_cors_policy_allow_origins_allow_origins_id"+e).value.endsWith(":")&&(t.policies_cors_policy_allow_origins_allow_origins=document.getElementById("policies_cors_policy_allow_origins_allow_origins_id"+e).value),_(t.policies_cors_policy_allow_origins_allow_origins,!0),handleClose(e,a,i,l,o)},handleAdd=function(_,e,a,i,l,o,t,r,c){var s=i||"";if(window[s+"editing"]=!0,window[s+"rowId"]=_,t)for(var n=0;n<t.length;n++)t[n](i,r,c);e();var d=s;if(d.endsWith("_policy_allow_origins")){var E="_policy_allow_origins".length;d=d.slice(0,-E)}void 0!==l&&""!==l&&(document.getElementById(l).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(d+"_div"+o,"display","none"),document.getElementById("editpoliciescorspolicy_allow_originsPage"+a).style.display="block",document.getElementById(d+"_tab"+o).style.display="none"},handleClose=function(_,e,a,i,l){var o=e||"";delete window[o+"editing"],delete window[o+"rowId"];var t=o;if(t.endsWith("_policy_allow_origins")){var r="_policy_allow_origins".length;t=t.slice(0,-r)}void 0!==a&&""!==a&&(document.getElementById(a).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(t+"_div"+i,"display","block"),document.getElementById("editpoliciescorspolicy_allow_originsPage"+_).style.display="none",document.getElementById(t+"_tab"+i).style.display="flex",l&&l()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("policies_cors_policy_allow_origins_div"+_,"display","block"),document.getElementById("policies_cors_policy_allow_origins_tab"+_).style.display="flex"},getEditData=function(_,e,a){var i=_||"",l=window.iagyaml,o={};if(null!==l&&void 0!==l&&(void 0!==(o=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(l))&&null!==o||(o={})),e&&a)for(var t=0;t<e.length;t++){e[t].allow_origins&&e[t].allow_origins;window[i+"rowId"]}else void 0!==o&&void 0!==o.policies&&o.policies.cors},Policiescorspolicy_allow_originsEdit=function Policiescorspolicy_allow_originsEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),policies_cors_policy_allow_origins_allow_origins=_useState2[0],setpolicies_cors_policy_allow_origins_allow_origins=_useState2[1],updatepolicies_cors_policy_allow_origins_allow_origins=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setpolicies_cors_policy_allow_origins_allow_origins(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editpoliciescorspolicy_allow_originsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"policies_cors_policy_allow_origins_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading policies_cors_policy_allow_origins_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Policies / CORS / Policy / Allow Origins : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div policies_cors_policy_allow_origins_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Origin"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.policies_cors_policy_allow_origins_allow_origins,id:"policies_cors_policy_allow_origins_allow_origins_id"+idPrefix,labelText:"Origin *",onChange:props.updatepolicies_cors_policy_allow_origins_allow_origins}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.policies_cors_policy_allow_origins_allow_origins||!props.policies_cors_policy_allow_origins_allow_origins_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Policiescorspolicy_allow_originsEdit}}]);
//# sourceMappingURL=264.74d1b42c.chunk.js.map