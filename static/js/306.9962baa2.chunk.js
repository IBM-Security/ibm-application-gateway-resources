(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{380:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(35),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(28),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(31),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(30),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(26),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(29),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(23),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(22),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(27),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(20),react_collapsible__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_16__),react_web_tabs__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(13),ServiceskerberosrealmspropertiesDeleteModal=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return Promise.all([__webpack_require__.e(35),__webpack_require__.e(130)]).then(__webpack_require__.bind(null,295))}),ServiceskerberosrealmspropertiesAdd=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return __webpack_require__.e(61).then(__webpack_require__.bind(null,296))}),ServiceskerberosrealmspropertiesEdit=Object(react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function(){return __webpack_require__.e(95).then(__webpack_require__.bind(null,255))}),handleChange=function(){},handleSave=function(e,_,r){void 0===_&&(_="");var a={};!0!==document.getElementById("services_kerberos_realms_name_id"+_).value.endsWith(":")&&(a.services_kerberos_realms_name=document.getElementById("services_kerberos_realms_name_id"+_).value),!0!==document.getElementById("services_kerberos_realms_kdc_id"+_).value.endsWith(":")&&(a.services_kerberos_realms_kdc=document.getElementById("services_kerberos_realms_kdc_id"+_).value),!0!==document.getElementById("services_kerberos_realms_hostname_id"+_).value.endsWith(":")&&(a.services_kerberos_realms_hostname=document.getElementById("services_kerberos_realms_hostname_id"+_).value),a.services_kerberos_realms_properties=services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties,e(a.services_kerberos_realms_name,a.services_kerberos_realms_kdc,a.services_kerberos_realms_hostname,a.services_kerberos_realms_properties,!0),handleClose(_,r)},handleAdd=function(e,_,r,a){void 0===_&&(_=""),document.getElementById("services_kerberos_realms_name_id").value="",document.getElementById("services_kerberos_realms_kdc_id").value="",document.getElementById("services_kerberos_realms_hostname_id").value="",services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties=[],e(services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties),r&&r(),handleClose(_,a)},handleClose=function(e,_){Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.d)("services_div"+e,"display","block"),document.getElementById("addserviceskerberos_realmsPage"+e).style.display="none",_&&_()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.d)("services_kerberos_realms_div"+e,"display","block"),document.getElementById("services_kerberos_realms_tab"+e).style.display="flex"},services_kerberos_realms_propertiesheaderData=[{header:"Name",key:"name"},{header:"Value",key:"value"}],services_kerberos_realms_propertiesrowData={services_kerberos_realms_properties:[]},services_kerberos_realms_propertieshandleAdd=function services_kerberos_realms_propertieshandleAdd(idPrefix,clearFields){if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("services_kerberos_realms_properties_name_id"+idPrefix).value="",document.getElementById("services_kerberos_realms_properties_value_id"+idPrefix).value="",Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.d)("services_kerberos_realms_div"+idPrefix,"display","none"),document.getElementById("addserviceskerberosrealms_propertiesPage"+idPrefix).style.display="block",document.getElementById("services_kerberos_realms_tab"+idPrefix).style.display="none"},Serviceskerberos_realmsAdd=function Serviceskerberos_realmsAdd(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",_React$useState=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState,2),services_kerberos_realms_properties=_React$useState2[0],setservices_kerberos_realms_properties=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(!1),_React$useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState3,2),fetchedservices_kerberos_realms_properties=_React$useState4[0],setFetchedservices_kerberos_realms_properties=_React$useState4[1];react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function(){services_kerberos_realms_propertiesloadGrid()},[fetchedservices_kerberos_realms_properties]);var services_kerberos_realms_propertiesloadGrid=react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function(){var e=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(_,r,a){var s,t,o,i;return _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{if(s=[],_)if(a){for(t=0;t<services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties.length;t++)o=(services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[t].name?services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[t].name:"")+"",(1!=window.services_kerberos_realms_propertiesediting&&"true"!=window.services_kerberos_realms_propertiesediting||o!=window.services_kerberos_realms_propertiesrowId)&&s.push(services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[t]);i=(_||"")+"",s.push({id:i,name:_,value:r})}else for(t=0;t<services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties.length;t++)services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[t].name!==_&&s.push(services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[t]);else s=services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties;services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties=s,setservices_kerberos_realms_properties({services_kerberos_realms_properties:s}.services_kerberos_realms_properties),void 0!==_&&null!==_&&handleChange()}catch(l){console.log(l)}return e.abrupt("return",!0);case 2:case"end":return e.stop()}},e)}));return function(_,r,a){return e.apply(this,arguments)}}()),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),services_kerberos_realms_name=_useState2[0],setservices_kerberos_realms_name=_useState2[1],updateservices_kerberos_realms_name=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(e){return setservices_kerberos_realms_name(e.target.value)},[]),_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),services_kerberos_realms_kdc=_useState4[0],setservices_kerberos_realms_kdc=_useState4[1],updateservices_kerberos_realms_kdc=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(e){return setservices_kerberos_realms_kdc(e.target.value)},[]),_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState6=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState5,2),services_kerberos_realms_properties_name=_useState6[0],setservices_kerberos_realms_properties_name=_useState6[1],updateservices_kerberos_realms_properties_name=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(e){setservices_kerberos_realms_properties_name(e.target.value);var _=e.target.value;Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.f)(services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties,setservices_kerberos_realms_properties_name_valid,setservices_kerberos_realms_properties_name_invalid_text,"Services Kerberos Realms Properties","name",_)},[]),_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!0),_useState8=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState7,2),services_kerberos_realms_properties_name_valid=_useState8[0],setservices_kerberos_realms_properties_name_valid=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState10=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState9,2),services_kerberos_realms_properties_name_invalid_text=_useState10[0],setservices_kerberos_realms_properties_name_invalid_text=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState12=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState11,2),services_kerberos_realms_properties_value=_useState12[0],setservices_kerberos_realms_properties_value=_useState12[1],updateservices_kerberos_realms_properties_value=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(e){return setservices_kerberos_realms_properties_value(e.target.value)},[]),_useState13=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState14=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState13,2),services_kerberos_realms_hostname=_useState14[0],setservices_kerberos_realms_hostname=_useState14[1],updateservices_kerberos_realms_hostname=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(e){return setservices_kerberos_realms_hostname(e.target.value)},[]),_React$useState5=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(!1),_React$useState6=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState5,2),fetcheddata=_React$useState6[0],setFetcheddata=_React$useState6[1];react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){for(var e=0;e<services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties.length;e++)services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e].id===window.services_kerberos_realms_propertiesrowId&&(setservices_kerberos_realms_properties_name(void 0!==services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e]&&void 0!==services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e].name?services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e].name:""),setservices_kerberos_realms_properties_value(void 0!==services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e]&&void 0!==services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e].value?services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties[e].value:""));return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"addserviceskerberos_realmsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.d,{id:"services_kerberos_realms_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.b,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.a,{tabFor:"General_tab"+idPrefix},"General"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.a,{tabFor:"properties_tab"+idPrefix},"Properties")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"iag_breadcrumb"},"Services / Kerberos / Realms : "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag--simple-div services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"Realms"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{invalid:!props.services_kerberos_realms_name_valid,invalidText:props.services_kerberos_realms_name_invalid_text,value:props.services_kerberos_realms_name,id:"services_kerberos_realms_name_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.hide(e.target)},"data-tip":!0,"data-for":"services_kerberos_realms_name_tooltip_id"+idPrefix,labelText:"Name *",onChange:props.updateservices_kerberos_realms_name}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a,{id:"services_kerberos_realms_name_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The name of the Kerberos Realm being configured.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{value:props.services_kerberos_realms_kdc,id:"services_kerberos_realms_kdc_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.hide(e.target)},"data-tip":!0,"data-for":"services_kerberos_realms_kdc_tooltip_id"+idPrefix,labelText:"KDC",onChange:props.updateservices_kerberos_realms_kdc}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a,{id:"services_kerberos_realms_kdc_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The name or address of a host running a KDC for that realm. An optional port number, separated  from the hostname by a colon, may be included.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{value:props.services_kerberos_realms_hostname,id:"services_kerberos_realms_hostname_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.hide(e.target)},"data-tip":!0,"data-for":"services_kerberos_realms_hostname_tooltip_id"+idPrefix,labelText:"Hostname",onChange:props.updateservices_kerberos_realms_hostname}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a,{id:"services_kerberos_realms_hostname_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"The hostname for this realm.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null))))))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:!props.services_kerberos_realms_name||!props.services_kerberos_realms_name_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_17__.c,{style:{width:"100%",overflow:"auto"},tabId:"properties_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"iag_breadcrumb"},"Services / Kerberos / Realms : "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2",null,"Properties Settings"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag--simple-div services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",{tabIndex:"0",onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a.hide(e.target)},"data-tip":!0,"data-for":"services_kerberos_realms_properties_tooltip_id"+idPrefix},"Properties"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18__.a,{id:"services_kerberos_realms_properties_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{maxWidth:300}},"Advanced additional properties to be added to the Realm configuration. These properties correspond to the properties in the [realms] <realm name> section of krb5.conf.",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"services_kerberos_realms_propertiesTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.a,{id:"services_kerberos_realms_propertiesTable"+idPrefix,isSortable:!0,headers:services_kerberos_realms_propertiesheaderData,rows:services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties,render:function(e){var _=e.rows,r=e.headers,a=e.getHeaderProps,s=(e.getRowProps,e.getTableProps);e.getToolbarProps,e.onInputChange,e.getTableContainerProps;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.a,{"aria-label":"data table toolbar"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:function(){services_kerberos_realms_propertieshandleAdd(idPrefix,[setservices_kerberos_realms_properties_name(""),setservices_kerberos_realms_properties_name_valid(!0),setservices_kerberos_realms_properties_value("")])}},"Add"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.a,Object.assign({size:"normal"},s()),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.a,null,r.map(function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.a,a({header:e}),e.header)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.a,null,"Actions"))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.a,null,_.map(function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.a,{key:e.id},e.cells.map(function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.a,{key:e.id},e.value)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ServiceskerberosrealmspropertiesDeleteModal,{row:e,loadGrid:services_kerberos_realms_propertiesloadGrid})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ServiceskerberosrealmspropertiesEdit,{data:services_kerberos_realms_propertiesrowData.services_kerberos_realms_properties,setData:setDataMain,row:e,loadGrid:services_kerberos_realms_propertiesloadGrid,dataLoad:dataLoad,editing:!0,name:"services_kerberos_realms_properties",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updateservices_kerberos_realms_properties_name:updateservices_kerberos_realms_properties_name,services_kerberos_realms_properties_name:services_kerberos_realms_properties_name,services_kerberos_realms_properties_name_valid:services_kerberos_realms_properties_name_valid,services_kerberos_realms_properties_name_invalid_text:services_kerberos_realms_properties_name_invalid_text,updateservices_kerberos_realms_properties_value:updateservices_kerberos_realms_properties_value,services_kerberos_realms_properties_value:services_kerberos_realms_properties_value}))))}))))}}))))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"iag_form_elem services_kerberos_realms_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:!props.services_kerberos_realms_name||!props.services_kerberos_realms_name_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save")))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ServiceskerberosrealmspropertiesAdd,{loadGrid:services_kerberos_realms_propertiesloadGrid,doClose:function(){closeAdd(idPrefix)},idPrefix:idPrefix,updateservices_kerberos_realms_properties_name:updateservices_kerberos_realms_properties_name,services_kerberos_realms_properties_name:services_kerberos_realms_properties_name,services_kerberos_realms_properties_name_valid:services_kerberos_realms_properties_name_valid,services_kerberos_realms_properties_name_invalid_text:services_kerberos_realms_properties_name_invalid_text,updateservices_kerberos_realms_properties_value:updateservices_kerberos_realms_properties_value,services_kerberos_realms_properties_value:services_kerberos_realms_properties_value})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ServiceskerberosrealmspropertiesEdit,{loadGrid:services_kerberos_realms_propertiesloadGrid,dataLoad:dataLoad,name:"services_kerberos_realms_properties",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updateservices_kerberos_realms_properties_name:updateservices_kerberos_realms_properties_name,services_kerberos_realms_properties_name:services_kerberos_realms_properties_name,services_kerberos_realms_properties_name_valid:services_kerberos_realms_properties_name_valid,services_kerberos_realms_properties_name_invalid_text:services_kerberos_realms_properties_name_invalid_text,updateservices_kerberos_realms_properties_value:updateservices_kerberos_realms_properties_value,services_kerberos_realms_properties_value:services_kerberos_realms_properties_value}))))};__webpack_exports__.default=Serviceskerberos_realmsAdd}}]);
//# sourceMappingURL=306.9962baa2.chunk.js.map