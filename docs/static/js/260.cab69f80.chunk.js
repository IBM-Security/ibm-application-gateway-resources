(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{361:function(e,t,n){"use strict";n.r(t);var r=n(413),o=n(100),a=n(101),c=n(104),i=n(103),l=n(88),s=n(3),u=n(0),p=n.n(u),d=n(78),f=n.n(d),m=n(412),h=n(415),b=n(87);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var y=function(e){var t=e.renderLauncher,n=e.children,r=Object(u.useState)(!1),o=Object(s.a)(r,2),a=o[0],c=o[1];return p.a.createElement(p.a.Fragment,null,n&&"undefined"!==typeof document?f.a.createPortal(p.a.createElement(n,{open:a,setOpen:c}),document.body):null,t&&p.a.createElement(t,{open:a,setOpen:c}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Cors",title:"Delete Cors?",iconDescription:"Close"}},g=function(){return{hasScrollingContent:!1,"aria-label":"Delete Cors?"}},w=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},j=function(){return{style:{margin:"5px"},icon:b.b,name:b.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},C=function(e,t,n,r,o,a,c,i){return c(e,t,n,r,o,a,!1),!0},E=function(e){Object(c.a)(n,e);var t=_(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,policies_cors_name:r.props.row.cells[0].value,policies_cors_host:r.props.row.cells[1].value,policies_cors_method:r.props.row.cells[2].value,open:!1},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=O(),n=t.size,o=Object(r.a)(t,["size"]),a=g();a.hasScrollingContent,Object(r.a)(a,["hasScrollingContent"]);return p.a.createElement(y,{renderLauncher:function(t){var n=t.setOpen;return p.a.createElement(m.a,Object.assign({},j(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,a=t.setOpen;return p.a.createElement(h.d,Object.assign({},o,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return a(!1)}}),p.a.createElement(h.c,v({titleOnly:!0,name:e.state.code+" "+e.state.model})),p.a.createElement(h.a,null),p.a.createElement(h.b,Object.assign({},w(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){C(e.state.policies_cors_name,e.state.policies_cors_host,e.state.policies_cors_method,e.state.policies_cors_policy_handle_pre_flight,e.state.policies_cors_policy_max_age,e.state.policies_cors_policy_allow_credentials,e.state.loadGrid,a)}})))})}}]),n}(p.a.Component);t.default=E}}]);
//# sourceMappingURL=260.cab69f80.chunk.js.map