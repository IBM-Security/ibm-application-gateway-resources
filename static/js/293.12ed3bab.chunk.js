(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{371:function(e,t,n){"use strict";n.r(t);var r=n(435),o=n(101),a=n(102),i=n(105),s=n(104),l=n(88),c=n(3),u=n(0),p=n.n(u),f=n(77),d=n.n(f),m=n(434),h=n(437),_=n(87);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(e){var t=e.renderLauncher,n=e.children,r=Object(u.useState)(!1),o=Object(c.a)(r,2),a=o[0],i=o[1];return p.a.createElement(p.a.Fragment,null,n&&"undefined"!==typeof document?d.a.createPortal(p.a.createElement(n,{open:a,setOpen:i}),document.body):null,t&&p.a.createElement(t,{open:a,setOpen:i}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Request",title:"Delete Request?",iconDescription:"Close"}},w=function(){return{hasScrollingContent:!1,"aria-label":"Delete Request?"}},g=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},j=function(){return{style:{margin:"5px"},icon:_.b,name:_.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},q=function(e,t,n,r,o,a){return o(e,t,n,r,!1),!0},C=function(e){Object(i.a)(n,e);var t=b(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,policies_http_transformations_request_name:r.props.row.cells[0].value,policies_http_transformations_request_host:r.props.row.cells[1].value,policies_http_transformations_request_method:r.props.row.cells[2].value,policies_http_transformations_request_rule:r.props.row.cells[3].value,open:!1},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=O(),n=t.size,o=Object(r.a)(t,["size"]),a=w();a.hasScrollingContent,Object(r.a)(a,["hasScrollingContent"]);return p.a.createElement(v,{renderLauncher:function(t){var n=t.setOpen;return p.a.createElement(m.a,Object.assign({},j(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,a=t.setOpen;return p.a.createElement(h.d,Object.assign({},o,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return a(!1)}}),p.a.createElement(h.c,y({titleOnly:!0,name:e.state.code+" "+e.state.model})),p.a.createElement(h.a,null),p.a.createElement(h.b,Object.assign({},g(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){q(e.state.policies_http_transformations_request_name,e.state.policies_http_transformations_request_host,e.state.policies_http_transformations_request_method,e.state.policies_http_transformations_request_rule,e.state.loadGrid,a)}})))})}}]),n}(p.a.Component);t.default=C}}]);
//# sourceMappingURL=293.12ed3bab.chunk.js.map