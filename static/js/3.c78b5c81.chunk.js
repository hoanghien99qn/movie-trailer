(this["webpackJsonpmovie-trailer"]=this["webpackJsonpmovie-trailer"]||[]).push([[3],{92:function(e,t,a){"use strict";a(1);var s=a(0);t.a=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col l-6",children:Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"Ha Long, Quang Ninh"})]}),Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"fas fa-phone-alt"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"+84 347 748 751"})]}),Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"far fa-envelope"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"hoanghien99qn@gmail.com"})]})]})}),Object(s.jsx)("div",{className:"col l-6",children:Object(s.jsxs)("div",{className:"about-me",children:[Object(s.jsx)("h3",{children:"About Me"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(s.jsxs)("div",{className:"social",children:[Object(s.jsx)("i",{className:"fab fa-facebook-square"}),Object(s.jsx)("i",{className:"fab fa-linkedin"}),Object(s.jsx)("i",{className:"fab fa-github-square"})]})]})})]})})}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(1),c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e){var t=e.className,a=e.counterClockwise,c=e.dashRatio,r=e.pathRadius,n=e.strokeWidth,l=e.style;return Object(s.createElement)("path",{className:t,style:Object.assign({},l,o({pathRadius:r,dashRatio:c,counterClockwise:a})),d:i({pathRadius:r,counterClockwise:a}),strokeWidth:n,fillOpacity:0})}function i(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,a=e.dashRatio,s=e.pathRadius,c=2*Math.PI*s,r=(1-a)*c;return{strokeDasharray:c+"px "+c+"px",strokeDashoffset:(t?-r:r)+"px"}}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,s=e.maxValue;return(Math.min(Math.max(t,a),s)-a)/(s-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,c=e.classes,i=e.counterClockwise,o=e.styles,n=e.strokeWidth,l=e.text,u=this.getPathRadius(),d=this.getPathRatio();return Object(s.createElement)("svg",{className:c.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(s.createElement)("circle",{className:c.background,style:o.background,cx:50,cy:50,r:50}):null,Object(s.createElement)(r,{className:c.trail,counterClockwise:i,dashRatio:t,pathRadius:u,strokeWidth:n,style:o.trail}),Object(s.createElement)(r,{className:c.path,counterClockwise:i,dashRatio:d*t,pathRadius:u,strokeWidth:n,style:o.path}),l?Object(s.createElement)("text",{className:c.text,style:o.text,x:50,y:50},l):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(s.Component)},94:function(e,t,a){},95:function(e,t,a){"use strict";a(1);var s=a(93),c=(a(94),a(8)),r=a(20),i=a(0);t.a=function(e){var t=e.list;return Object(i.jsx)("div",{className:"row list",children:t&&t.map((function(e){return e.poster_path||e.backdrop_path?Object(i.jsx)("div",{className:"col l-2-4 m-4 c-6",children:Object(i.jsx)(c.b,{to:"/detail/".concat(e.id),children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsxs)("div",{className:"product__head",children:[Object(i.jsx)("img",{src:r.a.w220Image(e.poster_path||e.backdrop_path),alt:e.title,className:"product__img"}),Object(i.jsx)("div",{className:"CircularProgressbar",children:Object(i.jsx)(s.a,{value:e.vote_average,maxValue:10,text:e.vote_average+"/10",styles:{path:{stroke:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),strokeLinecap:"round",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#053752",strokeLinecap:"round"},text:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),fontSize:"22px"},background:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e")}}})})]}),Object(i.jsxs)("div",{className:"product__title",children:[Object(i.jsx)("p",{className:"product__title-name",children:e.title}),Object(i.jsx)("p",{className:"product__title-year",children:e.release_date})]})]})})},e.id):void 0}))})}},98:function(e,t,a){"use strict";a.r(t);var s=a(19),c=a.n(s),r=a(26),i=a(14),o=a(1),n=a(27),l=a(95),u=a(17),d=a(92),p=a(0);t.default=function(){var e=Object(o.useContext)(n.a).favorites,t=Object(o.useState)([]),a=Object(i.a)(t,2),s=a[0],h=a[1],b=Object(o.useState)(!0),j=Object(i.a)(b,2),m=j[0],f=j[1];return console.log(e),Object(o.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},Promise.all(e.map((function(e){return u.a.detail(e,{params:a})}))).then((function(e){h(e)})),f(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsx)("h2",{className:"favorite-title ".concat(0===e.length?"no":""),children:0===e.length?"You dont have any favorite movies":"Favorites List"}),m?void 0:Object(p.jsx)(l.a,{list:s}),Object(p.jsx)(d.a,{})]})})}}}]);
//# sourceMappingURL=3.c78b5c81.chunk.js.map