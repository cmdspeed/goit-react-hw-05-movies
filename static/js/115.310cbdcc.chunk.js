"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{156:function(n,t,e){e.d(t,{Eg:function(){return f},hz:function(){return i},q8:function(){return s}});var r=e(861),u=e(687),c=e.n(u),a="3ff6f99473ad32775432a3dc640480bc",o="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/all/day?api_key=").concat(a));case 2:if(!(t=n.sent).ok){n.next=8;break}return n.next=6,t.json();case 6:return e=n.sent,n.abrupt("return",e);case 8:return n.abrupt("return","error");case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t).concat(e,"?api_key=").concat(a));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return u=n.sent,n.abrupt("return",u);case 8:return n.abrupt("return","error");case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?query=").concat(t,"&include_adult=false&api_key=").concat(a));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:return n.abrupt("return","error");case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},115:function(n,t,e){e.r(t);var r=e(861),u=e(439),c=e(687),a=e.n(c),o=e(791),i=e(156),s=e(87),f=e(184);t.default=function(){var n=(0,o.useState)(""),t=(0,u.Z)(n,2),e=t[0],c=t[1],p=(0,o.useState)([]),h=(0,u.Z)(p,2),l=h[0],v=h[1],m=(0,s.lr)(),d=(0,u.Z)(m,2),x=d[0],y=d[1],b=(0,o.useState)(x.get("query")),k=(0,u.Z)(b,2),w=k[0],g=k[1],j=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Eg)(t).then((function(n){v(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();(0,o.useEffect)((function(){j(w),g(x.get("query"))}),[w,x]);var q=function(n){n.preventDefault(),y("query=".concat(e)),j(e)};return null===w?(0,f.jsxs)("form",{name:"form",onSubmit:q,children:[(0,f.jsx)("input",{type:"input",name:"query",onChange:function(n){return c(n.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}):w.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{name:"form",onSubmit:q,children:[(0,f.jsx)("input",{type:"input",name:"query",onChange:function(n){return c(n.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:l.map((function(n){var t=n.id,e=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:"/movies?query=".concat(x.get("query"))},children:e})},t)}))})]}):void 0}},861:function(n,t,e){function r(n,t,e,r,u,c,a){try{var o=n[c](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,c){var a=n.apply(t,e);function o(n){r(a,u,c,o,i,"next",n)}function i(n){r(a,u,c,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return u}})}}]);
//# sourceMappingURL=115.310cbdcc.chunk.js.map