(this["webpackJsonpmovie-trailer"]=this["webpackJsonpmovie-trailer"]||[]).push([[5],{40:function(e,a,c){"use strict";c(1);var s=c(0);a.a=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col l-6",children:Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"Ha Long, Quang Ninh"})]}),Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"fas fa-phone-alt"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"+84 347 748 751"})]}),Object(s.jsxs)("div",{className:"sub-contact",children:[Object(s.jsx)("i",{className:"far fa-envelope"}),Object(s.jsx)("span",{className:"sub-contact__span",children:"hoanghien99qn@gmail.com"})]})]})}),Object(s.jsx)("div",{className:"col l-6",children:Object(s.jsxs)("div",{className:"about-me",children:[Object(s.jsx)("h3",{children:"About Me"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(s.jsxs)("div",{className:"social",children:[Object(s.jsx)("i",{className:"fab fa-facebook-square"}),Object(s.jsx)("i",{className:"fab fa-linkedin"}),Object(s.jsx)("i",{className:"fab fa-github-square"})]})]})})]})})}},49:function(e,a,c){"use strict";c.r(a);var s=c(1),t=c(40),i=c(0);var n=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("label",{htmlFor:"search__input",className:"search__label",children:Object(i.jsx)("i",{className:"fas fa-search"})}),Object(i.jsx)("input",{type:"text",className:"search__input",id:"search__input",placeholder:"Search movies, hit album"})]}),Object(i.jsxs)("div",{className:"account",children:[Object(i.jsx)("i",{className:"far fa-user account__icon"}),Object(i.jsx)("div",{className:"account__option",children:Object(i.jsxs)("ul",{className:"account__option-list",children:[Object(i.jsx)("li",{className:"account__option-item",children:Object(i.jsx)("a",{href:"true",className:"account__option-link",children:"User"})}),Object(i.jsx)("li",{className:"account__option-item",children:Object(i.jsx)("a",{href:"true",className:"account__option-link",children:"Option"})}),Object(i.jsx)("li",{className:"account__option-item",children:Object(i.jsx)("a",{href:"true",className:"account__option-link",children:"Logout"})})]})})]})]})},r=c(41),l=c.n(r),o=c(42),j=c(11),d=c(43),b=(c(44),c(8)),m=c(13);var u=function(e){var a=e.genre,c="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1".concat(a?"&with_genres="+a:""),t=Object(s.useState)([]),n=Object(j.a)(t,2),r=n[0],u=n[1],h=Object(s.useState)(!0),p=Object(j.a)(h,2),x=p[0],O=p[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,u(s.results),O(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.massage);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(i.jsx)("div",{className:"row list",children:x?Object(i.jsx)(m.a,{}):r.map((function(e){return Object(i.jsx)("div",{className:"col l-2-4 m-4 c-6",children:Object(i.jsx)(b.b,{to:"/movie/".concat(e.id),children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsxs)("div",{className:"product__head",children:[Object(i.jsx)("img",{src:"https://www.themoviedb.org/t/p/w220_and_h330_face"+e.poster_path,alt:e.title,className:"product__img"}),Object(i.jsx)("div",{className:"CircularProgressbar",children:Object(i.jsx)(d.a,{value:e.vote_average,maxValue:10,text:e.vote_average+"/10",styles:{path:{stroke:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),strokeLinecap:"round",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#053752",strokeLinecap:"round"},text:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),fontSize:"22px"},background:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e")}}})})]}),Object(i.jsxs)("div",{className:"product__title",children:[Object(i.jsx)("p",{className:"product__title-name",children:e.title}),Object(i.jsx)("p",{className:"product__title-year",children:e.release_date})]})]})})},e.id)}))})};a.default=function(e){var a=e.location.id;return console.log(a),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("div",{className:"grid",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col l-12 m-12 c-12",children:Object(i.jsx)(n,{})})}),Object(i.jsx)(u,{genre:a}),Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("span",{className:"prevBtn page",children:Object(i.jsx)("i",{className:"fas fa-chevron-left"})}),Object(i.jsx)("span",{className:"page",children:"1"}),Object(i.jsx)("span",{className:"page",children:"2"}),Object(i.jsx)("span",{className:"page",children:"..."}),Object(i.jsx)("span",{className:"page",children:"5"}),Object(i.jsx)("span",{className:"nextBtn page",children:Object(i.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(i.jsx)(t.a,{})]})})}}}]);
//# sourceMappingURL=5.652e92d7.chunk.js.map