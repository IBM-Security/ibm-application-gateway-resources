"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[4375,5167],{4375:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(5043),i=n(7950),l=n(5167),o=n(3867),s=n(3466),a=n(4888),c=n(579);const u=e=>{let{renderLauncher:t,children:n}=e;const[l,o]=(0,r.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[n&&"undefined"!==typeof document?i.createPortal((0,c.jsx)(n,{open:l,setOpen:o}),document.body):null,t&&(0,c.jsx)(t,{open:l,setOpen:o})]})},d=function(){let{titleOnly:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},p=function(){let{titleOnly:e,name:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{label:"Enabled Languages",title:"Delete Enabled Languages?",iconDescription:"Close"}},g=()=>({hasScrollingContent:!1,"aria-label":"Delete Enabled Languages?"}),h=()=>({primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}),f=()=>({style:{margin:"5px"},icon:a.fk,name:a.fk,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}),y=(e,t,n)=>(t(e,!1),!0);class m extends r.Component{constructor(e){super(e),this.state={row:e.row,loadGrid:e.loadGrid,server_enabled_languages_enabled_languages:this.props.row.cells[0].value,open:!1}}render(){const{size:e,...t}=d(),{hasScrollingContent:n,...r}=g();return(0,c.jsx)(u,{renderLauncher:e=>{let{setOpen:t}=e;return(0,c.jsx)(l.Ay,{...f(),onClick:()=>t(!0),title:this.state.id})},children:n=>{let{open:r,setOpen:i}=n;return(0,c.jsxs)(o.Ay,{...t,open:r,row:this.props.row,loadGrid:this.state.loadGrid,size:e||void 0,onClose:()=>i(!1),children:[(0,c.jsx)(s.rQ,{...p({titleOnly:!0,name:this.state.code+" "+this.state.model})}),(0,c.jsx)(o.cw,{}),(0,c.jsx)(s.jl,{...h(),shouldCloseAfterSubmit:!0,onRequestSubmit:()=>{y(this.state.server_enabled_languages_enabled_languages,this.state.loadGrid,i)}})]})}})}}const b=m},5167:(e,t,n)=>{n.d(t,{Ay:()=>g});var r=n(4467),i=n(3986),l=n(8168),o=(n(2740),n(5173)),s=n.n(o),a=n(5043),c=(n(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){return e&&"icon"===e.split("--")[0]}var p=function(e){var t,n=e.className,o=e.iconTitle,s=e.description,p=e.fill,g=e.fillRule,h=e.height,f=e.name,y=e.icon,m=e.role,b=e.style,w=e.width,O=e.iconRef,j=(0,i.A)(e,c),v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:n,fill:p,fillRule:g,height:h||y.height,name:d?f:"icon--".concat(f),role:m,style:b,viewBox:y.viewBox,width:w||y.width,ref:O},j),x=y?(t=y.svgData,Object.keys(t).filter((function(e){return t[e]})).map((function(e){var n=t[e];return"circles"===e?n.map((function(e,t){var n={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(t)};return a.createElement("circle",(0,l.A)({key:t},n))})):"paths"===e?n.map((function(e,t){return a.createElement("path",{d:e.d,key:"key".concat(t)})})):"polygons"===e?n.map((function(e,t){return a.createElement("polygon",{points:e.points,key:"key".concat(t)})})):""}))):"";return a.createElement("svg",(0,l.A)({},v,{"aria-label":s}),a.createElement("title",null,"undefined"===typeof o?s:o),x)};p.propTypes={className:s().string,description:s().string.isRequired,fill:s().string,fillRule:s().string,height:s().string,icon:s().shape({width:s().string,height:s().string,viewBox:s().string.isRequired,svgData:s().object.isRequired}),iconRef:s().func,iconTitle:s().string,name:s().string,role:s().string,style:s().object,viewBox:s().string,width:s().string},p.defaultProps={fillRule:"evenodd",role:"img"};const g=p}}]);
//# sourceMappingURL=4375.6f74e415.chunk.js.map