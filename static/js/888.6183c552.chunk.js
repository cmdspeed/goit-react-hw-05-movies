"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{785:function(e,t,r){function n(e,t,r,n,s,a,c){try{var i=e[a](c),o=i.value}catch(u){return void r(u)}i.done?t(o):Promise.resolve(o).then(n,s)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(s,a){var c=e.apply(t,r);function i(e){n(c,s,a,i,o,"next",e)}function o(e){n(c,s,a,i,o,"throw",e)}i(void 0)}))}}r.d(t,{q:function(){return l},h:function(){return u}});var a=r(687),c=r.n(a),i="3ff6f99473ad32775432a3dc640480bc",o="https://api.themoviedb.org/3",u=function(){var e=s(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/trending/all/day?api_key=").concat(i));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return","error");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=s(c().mark((function e(t,r){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/movie/").concat(t).concat(r,"?api_key=").concat(i));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:return e.abrupt("return","error");case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},888:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(439),s=r(689),a=r(87),c=r(785),i=r(791),o="MovieDetails_detailsContainer__fp5oH",u="MovieDetails_genres__80iSK",l="MovieDetails_title__RBndM",d="MovieDetails_userScore__cWf6H",h="MovieDetails_overview__EVogb",f="MovieDetails_additional__EaCvI",v="MovieDetails_border__gFdHN",p=r(184),x=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,n.Z)(t,2),x=r[0],_=r[1],m=(0,i.useState)([]),j=(0,n.Z)(m,2),b=j[0],k=j[1],w=(0,i.useState)("none"),g=(0,n.Z)(w,2),y=g[0],N=g[1];return(0,i.useEffect)((function(){(0,c.q)(e).then((function(e){_(e),k(e.genres),"error"!==e&&N("ok")}))}),[e]),"ok"===y?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.rU,{to:"/",children:(0,p.jsx)("button",{children:"\u2b05 Go back"})}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("img",{src:x.poster_path?"https://image.tmdb.org/t/p//w300/".concat(x.poster_path):"https://img.freepik.com/free-vector/glitch-style-poster_1284-24645.jpg?w=300&t=st=1687363450~exp=1687364050~hmac=c62699308b0e7656912ddd48d9a5df99c7b5de993d3b5d3b02d749643b6d89c1",alt:"".concat(x.title)}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{className:l,children:x.title}),(0,p.jsxs)("p",{className:d,children:["User Score: ",10*x.vote_average,"%"]}),(0,p.jsx)("h3",{className:l,children:"Overview"}),(0,p.jsx)("p",{className:h,children:x.overview}),(0,p.jsx)("h3",{className:l,children:"Genres"}),(0,p.jsx)("ul",{className:u,children:b.map((function(e){var t=e.id,r=e.name;return(0,p.jsx)("li",{children:r},t)}))})]})]}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("p",{className:f,children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(s.j3,{})]}):(0,p.jsx)("h2",{children:"sorry, there is no access to this data yet "})}}}]);
//# sourceMappingURL=888.6183c552.chunk.js.map