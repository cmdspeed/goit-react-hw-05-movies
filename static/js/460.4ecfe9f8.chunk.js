"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{156:function(t,n,e){e.d(n,{Eg:function(){return f},hz:function(){return i},q8:function(){return s}});var r=e(861),c=e(687),a=e.n(c),u="3ff6f99473ad32775432a3dc640480bc",o="https://api.themoviedb.org/3",i=function(){var t=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/trending/all/day?api_key=").concat(u));case 2:if(!(n=t.sent).ok){t.next=8;break}return t.next=6,n.json();case 6:return e=t.sent,t.abrupt("return",e);case 8:return t.abrupt("return","error");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n).concat(e,"?api_key=").concat(u));case 2:if(!(r=t.sent).ok){t.next=8;break}return t.next=6,r.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:return t.abrupt("return","error");case 9:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/search/movie?query=").concat(n,"&include_adult=false&api_key=").concat(u));case 2:if(!(e=t.sent).ok){t.next=8;break}return t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:return t.abrupt("return","error");case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},460:function(t,n,e){e.r(n);var r=e(439),c=e(791),a=e(689),u=e(156),o=e(816),i=e(184);n.default=function(){var t=(0,a.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),s=e[0],f=e[1];return(0,c.useEffect)((function(){(0,u.q8)(t,"/credits").then((function(t){f(t.cast)}))}),[t]),s.length?(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:s.map((function(t){var n=t.cast_id,e=t.name,r=t.profile_path,c=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:r?"https://image.tmdb.org/t/p//w200/".concat(r):"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=200&t=st=1687362525~exp=1687363125~hmac=0b38e340921c7c42beb3fc2b7370fa7a73acf9815fd13471f441ff07e6ae0246",alt:"".concat(e)}),(0,i.jsx)("h3",{children:e}),(0,i.jsxs)("p",{children:["charakter: ",c]})]},n)}))})}):(0,i.jsx)(o.Z,{site:"cast"})}},816:function(t,n,e){var r=e(184);n.Z=function(t){return(0,r.jsxs)("div",{children:["We don't have information about ",t.site," for this movie"]})}},861:function(t,n,e){function r(t,n,e,r,c,a,u){try{var o=t[a](u),i=o.value}catch(s){return void e(s)}o.done?n(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function o(t){r(u,c,a,o,i,"next",t)}function i(t){r(u,c,a,o,i,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=460.4ecfe9f8.chunk.js.map