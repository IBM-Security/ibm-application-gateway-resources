(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{374:function(t,e,n){"use strict";n.r(e);var o=n(435),r=n(101),a=n(102),i=n(105),s=n(104),l=n(88),c=n(3),u=n(0),p=n.n(u),f=n(77),d=n.n(f),m=n(434),h=n(437),_=n(87);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(t){var e=t.renderLauncher,n=t.children,o=Object(u.useState)(!1),r=Object(c.a)(o,2),a=r[0],i=r[1];return p.a.createElement(p.a.Fragment,null,n&&"undefined"!==typeof document?d.a.createPortal(p.a.createElement(n,{open:a,setOpen:i}),document.body):null,e&&p.a.createElement(e,{open:a,setOpen:i}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.titleOnly,t.name;return{label:"Postazn",title:"Delete Postazn?",iconDescription:"Close"}},w=function(){return{hasScrollingContent:!1,"aria-label":"Delete Postazn?"}},g=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},z=function(){return{style:{margin:"5px"},icon:_.b,name:_.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},j=function(t,e,n,o,r,a){return r(t,e,n,o,!1),!0},C=function(t){Object(i.a)(n,t);var e=b(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={row:t.row,loadGrid:t.loadGrid,policies_http_transformations_postazn_name:o.props.row.cells[0].value,policies_http_transformations_postazn_host:o.props.row.cells[1].value,policies_http_transformations_postazn_method:o.props.row.cells[2].value,policies_http_transformations_postazn_rule:o.props.row.cells[3].value,open:!1},o}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=O(),n=e.size,r=Object(o.a)(e,["size"]),a=w();a.hasScrollingContent,Object(o.a)(a,["hasScrollingContent"]);return p.a.createElement(v,{renderLauncher:function(e){var n=e.setOpen;return p.a.createElement(m.a,Object.assign({},z(),{onClick:function(){return n(!0)},title:t.state.id}))}},function(e){var o=e.open,a=e.setOpen;return p.a.createElement(h.d,Object.assign({},r,{open:o,row:t.props.row,loadGrid:t.state.loadGrid,size:n||void 0,onClose:function(){return a(!1)}}),p.a.createElement(h.c,y({titleOnly:!0,name:t.state.code+" "+t.state.model})),p.a.createElement(h.a,null),p.a.createElement(h.b,Object.assign({},g(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){j(t.state.policies_http_transformations_postazn_name,t.state.policies_http_transformations_postazn_host,t.state.policies_http_transformations_postazn_method,t.state.policies_http_transformations_postazn_rule,t.state.loadGrid,a)}})))})}}]),n}(p.a.Component);e.default=C}}]);
//# sourceMappingURL=290.12c24bcf.chunk.js.map