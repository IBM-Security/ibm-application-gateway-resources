(window.webpackJsonp=window.webpackJsonp||[]).push([[180,64,65,66,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,318,319,320,321,322,323,324,325,326,327],{406:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(25),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(419),carbon_components_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(29),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(32),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(31),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(35),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(27),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(30),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(24),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(23),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(28),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(21),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(36),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(64),carbon_components_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(33),carbon_icons__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(88),react_collapsible__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(40),react_collapsible__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_20__),react_web_tabs__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(18),react_tooltip__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(14),AdvancedconfigurationvalueDeleteModal=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return __webpack_require__.e(15).then(__webpack_require__.bind(null,303))}),AdvancedconfigurationvalueAdd=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return __webpack_require__.e(40).then(__webpack_require__.bind(null,304))}),AdvancedconfigurationvalueEdit=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return __webpack_require__.e(223).then(__webpack_require__.bind(null,259))}),handleChange=function(){},handleSave=function(_,e,a,t,n,r){void 0===e&&(e="");var o={};!0!==document.getElementById("advanced_configuration_stanza_id"+e).value.endsWith(":")&&(o.advanced_configuration_stanza=document.getElementById("advanced_configuration_stanza_id"+e).value),!0!==document.getElementById("advanced_configuration_entry_id"+e).value.endsWith(":")&&(o.advanced_configuration_entry=document.getElementById("advanced_configuration_entry_id"+e).value),!0!==document.getElementById("advanced_configuration_operation_id"+e).value.endsWith(":")&&(o.advanced_configuration_operation=document.getElementById("advanced_configuration_operation_id"+e).value),o.advanced_configuration_value=advanced_configuration_valuerowData.advanced_configuration_value,_(o.advanced_configuration_stanza,o.advanced_configuration_entry,o.advanced_configuration_operation,o.advanced_configuration_value,!0),handleClose(e,a,t,n,r)},handleAdd=function(_,e,a,t,n,r,o,i,c){var d=t||"";if(window[d+"editing"]=!0,window[d+"rowId"]=_,o)for(var l=0;l<o.length;l++)o[l](t,i,c);e();var u=d;if(u.endsWith("_configuration")){var E="_configuration".length;u=u.slice(0,-E)}void 0!==n&&""!==n&&(document.getElementById(n).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_23__.d)(u+"_div"+r,"display","none"),document.getElementById("editadvanced_configurationPage"+a).style.display="block",document.getElementById(u+"_tab"+r).style.display="none"},handleClose=function(_,e,a,t,n){var r=e||"";delete window[r+"editing"],delete window[r+"rowId"];var o=r;if(o.endsWith("_configuration")){var i="_configuration".length;o=o.slice(0,-i)}void 0!==a&&""!==a&&(document.getElementById(a).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_23__.d)(o+"_div"+t,"display","block"),document.getElementById("editadvanced_configurationPage"+_).style.display="none",document.getElementById(o+"_tab"+t).style.display="flex",n&&n()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_23__.d)("advanced_configuration_div"+_,"display","block"),document.getElementById("advanced_configuration_tab"+_).style.display="flex"},advanced_configuration_valueheaderData=[{header:"Value",key:"value"}],advanced_configuration_valuerowData={advanced_configuration_value:[]},advanced_configuration_valuehandleAdd=function advanced_configuration_valuehandleAdd(idPrefix,clearFields){if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("advanced_configuration_value_value_id"+idPrefix).value="",Object(_helpers__WEBPACK_IMPORTED_MODULE_23__.d)("advanced_configuration_div"+idPrefix,"display","none"),document.getElementById("addadvancedconfiguration_valuePage"+idPrefix).style.display="block",document.getElementById("advanced_configuration_tab"+idPrefix).style.display="none"},getEditData=function(_,e,a){var t=_||"",n=window.iagyaml,r={};if(null!==n&&void 0!==n&&(void 0!==(r=Object(_helpers__WEBPACK_IMPORTED_MODULE_23__.c)(n))&&null!==r||(r={})),advanced_configuration_valuerowData.advanced_configuration_value=[],e&&a)for(var o=0;o<e.length;o++){if((e[o].entry?e[o].entry:"")+(e[o].stanza?e[o].stanza:"")+(e[o].operation?e[o].operation:"")===window[t+"rowId"]&&void 0!==e[o]&&void 0!==e[o].value){if("string"===typeof e[o].value)(c={}).id=e[o].value,c.value=e[o].value,advanced_configuration_valuerowData.advanced_configuration_value.push(c);else for(var i=0;i<e[o].value.length;i++){var c={};e[o].value[i].id?c.id=e[o].value[i].id:e[o].value[i].value?c.id=e[o].value[i].value:c.id=e[o].value[i],e[o].value[i].value?c.value=e[o].value[i].value:c.value=e[o].value[i],advanced_configuration_valuerowData.advanced_configuration_value.push(c)}a("setadvanced_configuration_value",advanced_configuration_valuerowData.advanced_configuration_value)}}else if(void 0!==r&&void 0!==r.advanced&&void 0!==r.advanced.configuration)for(o=0;o<r.advanced.configuration.length;o++){if((r.advanced_configuration[o].entry?r.advanced_configuration[o].entry:"")+(r.advanced_configuration[o].stanza?r.advanced_configuration[o].stanza:"")+(r.advanced_configuration[o].operation?r.advanced_configuration[o].operation:"")===window[t+"rowId"]&&void 0!==r&&void 0!==r.advanced&&void 0!==r.advanced.configuration[o]&&void 0!==r.advanced.configuration[o].value)for(i=0;i<r.advanced.configuration[o].value.length;i++){(c={}).id=r.advanced.configuration[o].value[i],c.value=r.advanced.configuration[o].value[i],advanced_configuration_valuerowData.advanced_configuration_value.push(c)}}},Advanced_configurationEdit=function Advanced_configurationEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_React$useState=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState,2),advanced_configuration_value=_React$useState2[0],setadvanced_configuration_value=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(!1),_React$useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState3,2),fetchedadvanced_configuration_value=_React$useState4[0],setFetchedadvanced_configuration_value=_React$useState4[1];react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function(){advanced_configuration_valueloadGrid()},[fetchedadvanced_configuration_value]);var advanced_configuration_valueloadGrid=react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function(){var _=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _(e,a){var t,n,r,o;return _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:try{if(t=[],e)if(a){for(n=0;n<advanced_configuration_valuerowData.advanced_configuration_value.length;n++)r=(advanced_configuration_valuerowData.advanced_configuration_value[n].value?advanced_configuration_valuerowData.advanced_configuration_value[n].value:"")+"",(1!=window.advanced_configuration_valueediting&&"true"!=window.advanced_configuration_valueediting||r!=window.advanced_configuration_valuerowId)&&t.push(advanced_configuration_valuerowData.advanced_configuration_value[n]);o=(e||"")+"",t.push({id:o,value:e})}else for(n=0;n<advanced_configuration_valuerowData.advanced_configuration_value.length;n++)advanced_configuration_valuerowData.advanced_configuration_value[n].value!==e&&t.push(advanced_configuration_valuerowData.advanced_configuration_value[n]);else t=advanced_configuration_valuerowData.advanced_configuration_value;advanced_configuration_valuerowData.advanced_configuration_value=t,setadvanced_configuration_value({advanced_configuration_value:t}.advanced_configuration_value),void 0!==e&&null!==e&&handleChange()}catch(i){console.log(i)}return _.abrupt("return",!0);case 2:case"end":return _.stop()}},_)}));return function(e,a){return _.apply(this,arguments)}}()),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),advanced_configuration_stanza=_useState2[0],setadvanced_configuration_stanza=_useState2[1],updateadvanced_configuration_stanza=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(_){return setadvanced_configuration_stanza(_.target.value)},[]),_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),advanced_configuration_entry=_useState4[0],setadvanced_configuration_entry=_useState4[1],updateadvanced_configuration_entry=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(_){return setadvanced_configuration_entry(_.target.value)},[]),_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState6=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState5,2),advanced_configuration_operation=_useState6[0],setadvanced_configuration_operation=_useState6[1],updateadvanced_configuration_operation=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(_){return setadvanced_configuration_operation(_.target.value)},[]),_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState8=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState7,2),advanced_configuration_value_value=_useState8[0],setadvanced_configuration_value_value=_useState8[1],updateadvanced_configuration_value_value=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(_){return setadvanced_configuration_value_value(_.target.value)},[]),_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!0),_useState10=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState9,2),advanced_configuration_value_value_valid=_useState10[0],setadvanced_configuration_value_value_valid=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState12=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState11,2),advanced_configuration_value_value_invalid_text=_useState12[0],setadvanced_configuration_value_value_invalid_text=_useState12[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(!1),_React$useState6=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState5,2),fetcheddata=_React$useState6[0],setFetcheddata=_React$useState6[1];react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){for(var _=0;_<advanced_configuration_valuerowData.advanced_configuration_value.length;_++)advanced_configuration_valuerowData.advanced_configuration_value[_].id===window.advanced_configuration_valuerowId&&setadvanced_configuration_value_value(void 0!==advanced_configuration_valuerowData.advanced_configuration_value[_]&&void 0!==advanced_configuration_valuerowData.advanced_configuration_value[_].value?advanced_configuration_valuerowData.advanced_configuration_value[_].value:"");return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_23__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"editadvanced_configurationPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.d,{id:"advanced_configuration_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.b,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.a,{tabFor:"General_tab"+idPrefix},"General"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.a,{tabFor:"value_tab"+idPrefix},"Value")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.c,{style:{width:"100%",overflow:"auto"},tabId:"value_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"iag_breadcrumb"},"Advanced / Configuration : "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2",null,"Value Settings"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag--simple-div advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",{tabIndex:"0",onFocus:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.show(_.target)},onBlur:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.hide(_.target)},"data-tip":!0,"data-for":"advanced_configuration_value_tooltip_id"+idPrefix},"Value"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a,{id:"advanced_configuration_value_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The value(s) for the new configuration entry. The value is only required for the `add` and `set` operations.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"advanced_configuration_valueTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{id:"advanced_configuration_valueTable"+idPrefix,isSortable:!0,headers:advanced_configuration_valueheaderData,rows:advanced_configuration_valuerowData.advanced_configuration_value,render:function(_){var e=_.rows,a=_.headers,t=_.getHeaderProps,n=(_.getRowProps,_.getTableProps);_.getToolbarProps,_.onInputChange,_.getTableContainerProps;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.a,{"aria-label":"data table toolbar"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,{onClick:function(){advanced_configuration_valuehandleAdd(idPrefix,[setadvanced_configuration_value_value(""),setadvanced_configuration_value_value_valid(!0)])}},"Add"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.a,Object.assign({size:"normal"},n()),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.a,null,a.map(function(_){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.a,t({header:_}),_.header)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.a,null,"Actions"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.a,null,e.map(function(_){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.a,{key:_.id},_.cells.map(function(_){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.a,{key:_.id},_.value)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AdvancedconfigurationvalueDeleteModal,{row:_,loadGrid:advanced_configuration_valueloadGrid})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AdvancedconfigurationvalueEdit,{data:advanced_configuration_valuerowData.advanced_configuration_value,setData:setDataMain,row:_,loadGrid:advanced_configuration_valueloadGrid,dataLoad:dataLoad,editing:!0,name:"advanced_configuration_value",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text}))))}))))}}))))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,{disabled:!props.advanced_configuration_entry||!props.advanced_configuration_entry_valid||!props.advanced_configuration_stanza||!props.advanced_configuration_stanza_valid||!props.advanced_configuration_operation||!props.advanced_configuration_operation_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_21__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"iag_breadcrumb"},"Advanced / Configuration : "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag--simple-div advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.a,{value:props.advanced_configuration_stanza,id:"advanced_configuration_stanza_id"+idPrefix,onFocus:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.show(_.target)},onBlur:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.hide(_.target)},"data-tip":!0,"data-for":"advanced_configuration_stanza_tooltip_id"+idPrefix,labelText:"Stanza *",onChange:props.updateadvanced_configuration_stanza}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a,{id:"advanced_configuration_stanza_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The name of the configuration stanza which contains the configuration entry.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.a,{value:props.advanced_configuration_entry,id:"advanced_configuration_entry_id"+idPrefix,onFocus:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.show(_.target)},onBlur:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.hide(_.target)},"data-tip":!0,"data-for":"advanced_configuration_entry_tooltip_id"+idPrefix,labelText:"Entry *",onChange:props.updateadvanced_configuration_entry}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a,{id:"advanced_configuration_entry_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The name of the configuration entry.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.a,{value:props.advanced_configuration_operation,id:"advanced_configuration_operation_id"+idPrefix,onFocus:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.show(_.target)},onBlur:function(_){return react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a.hide(_.target)},"data-tip":!0,"data-for":"advanced_configuration_operation_tooltip_id"+idPrefix,labelText:"Operation *",onChange:props.updateadvanced_configuration_operation},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.a,{text:"",value:""}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.a,{text:"delete",value:"delete"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.a,{text:"add",value:"add"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.a,{text:"set",value:"set"})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_22__.a,{id:"advanced_configuration_operation_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The operation to be perform on the configuration entry.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)))))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem advanced_configuration_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,{disabled:!props.advanced_configuration_entry||!props.advanced_configuration_entry_valid||!props.advanced_configuration_stanza||!props.advanced_configuration_stanza_valid||!props.advanced_configuration_operation||!props.advanced_configuration_operation_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save")))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AdvancedconfigurationvalueAdd,{loadGrid:advanced_configuration_valueloadGrid,doClose:function(){closeAdd(idPrefix)},idPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AdvancedconfigurationvalueEdit,{loadGrid:advanced_configuration_valueloadGrid,dataLoad:dataLoad,name:"advanced_configuration_value",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updateadvanced_configuration_value_value:updateadvanced_configuration_value_value,advanced_configuration_value_value:advanced_configuration_value_value,advanced_configuration_value_value_valid:advanced_configuration_value_value_valid,advanced_configuration_value_value_invalid_text:advanced_configuration_value_value_invalid_text}))))};__webpack_exports__.default=Advanced_configurationEdit},419:function(_,e,a){"use strict";a(144);var t=a(2),n=a.n(t),r=a(0),o=a.n(r);function i(_,e){var a=Object.keys(_);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(_);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable})),a.push.apply(a,t)}return a}function c(_,e,a){return e in _?Object.defineProperty(_,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):_[e]=a,_}function d(_,e){if(null==_)return{};var a,t,n=function(_,e){if(null==_)return{};var a,t,n={},r=Object.keys(_);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(n[a]=_[a]);return n}(_,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(_,a)&&(n[a]=_[a])}return n}function l(){return(l=Object.assign||function(_){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(_[t]=a[t])}return _}).apply(this,arguments)}a(88).a;function u(_){return _&&"icon"===_.split("--")[0]}var E=function(_){var e,a=_.className,t=_.iconTitle,n=_.description,r=_.fill,E=_.fillRule,v=_.height,f=_.name,s=_.icon,P=_.role,O=_.style,D=_.width,p=_.iconRef,M=d(_,["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]),g=function(_){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach(function(e){c(_,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(a,e))})}return _}({className:a,fill:r,fillRule:E,height:v||s.height,name:u?f:"icon--".concat(f),role:P,style:O,viewBox:s.viewBox,width:D||s.width,ref:p},M),m=s?(e=s.svgData,Object.keys(e).filter(function(_){return e[_]}).map(function(_){var a=e[_];return"circles"===_?a.map(function(_,e){var a={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return o.a.createElement("circle",l({key:e},a))}):"paths"===_?a.map(function(_,e){return o.a.createElement("path",{d:_.d,key:"key".concat(e)})}):"polygons"===_?a.map(function(_,e){return o.a.createElement("polygon",{points:_.points,key:"key".concat(e)})}):""})):"";return o.a.createElement("svg",l({},g,{"aria-label":n}),o.a.createElement("title",null,"undefined"===typeof t?n:t),m)};E.propTypes={className:n.a.string,description:n.a.string.isRequired,fill:n.a.string,fillRule:n.a.string,height:n.a.string,icon:n.a.shape({width:n.a.string,height:n.a.string,viewBox:n.a.string.isRequired,svgData:n.a.object.isRequired}),iconRef:n.a.func,iconTitle:n.a.string,name:n.a.string,role:n.a.string,style:n.a.object,viewBox:n.a.string,width:n.a.string},E.defaultProps={fillRule:"evenodd",role:"img"},e.a=E}}]);
//# sourceMappingURL=180.87f34cc9.chunk.js.map