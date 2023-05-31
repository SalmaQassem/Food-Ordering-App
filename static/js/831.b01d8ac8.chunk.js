"use strict";(self.webpackChunkfood_ordering_app=self.webpackChunkfood_ordering_app||[]).push([[831],{1007:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(9439),a=t(2791),s=t(1087),c=t(7689),i=t(9434),u=t(4165),o=t(5861),l=t(5247),f=t(2855),p=t(4994),h=t(8206),d=(t.p,t.p,t.p,t.p,t(184)),x=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(355),t.e(856),t.e(71),t.e(766),t.e(278)]).then(t.bind(t,4261))})),b=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(355),t.e(853),t.e(139),t.e(766),t.e(94)]).then(t.bind(t,4114))})),m=(0,a.lazy)((function(){return t.e(562).then(t.bind(t,4562))})),j=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(355),t.e(856),t.e(71),t.e(890)]).then(t.bind(t,6792))})),v=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(71),t.e(853),t.e(486)]).then(t.bind(t,1252))})),k=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(355),t.e(820)]).then(t.bind(t,9820))})),g=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(959)]).then(t.bind(t,1692))})),w=(0,a.lazy)((function(){return Promise.all([t.e(881),t.e(853),t.e(139),t.e(835)]).then(t.bind(t,4211))})),Z=(0,a.lazy)((function(){return Promise.all([t.e(355),t.e(856),t.e(968),t.e(940)]).then(t.bind(t,393))})),y=(0,s.aj)([{path:"/Food-Ordering-App/",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(x,{})}),errorElement:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(m,{})}),children:[{index:!0,element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(b,{})})}]},{path:"/Food-Ordering-App/",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(j,{})}),errorElement:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(m,{})}),children:[{path:"Checkout",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(v,{})})},{path:"Menu",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(k,{})})},{path:"About",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(g,{})})},{path:"BookTable",element:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(Z,{}),children:(0,d.jsx)(w,{})})}]}]);var F=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),t=n[0],s=n[1],x=(0,i.I0)(),b=(0,i.I0)(),m=(0,i.I0)(),j=(0,i.I0)(),v=t?(0,d.jsx)(Z,{}):(0,d.jsx)(c.pG,{router:y});return(0,a.useEffect)((function(){s(!0),x(function(){var e=(0,o.Z)((0,u.Z)().mark((function e(n){var t,r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var n,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://feane-751cb-default-rtdb.firebaseio.com/Landing.json");case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Fetching Landing Data Failed!");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,t();case 4:for(s in r=e.sent,a=[],r)a.push({id:r[s].id,title:r[s].title,description:r[s].description});n(l.U.setLandingData(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()),b(function(){var e=(0,o.Z)((0,u.Z)().mark((function e(n){var t,r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var n,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://feane-751cb-default-rtdb.firebaseio.com/Offers.json");case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Fetching Offers Data Failed!");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,t();case 4:for(s in r=e.sent,a=[],r)a.push({id:r[s].id,title:r[s].title,percentage:r[s].percentage,imageUrl:r[s].imageUrl});n(f.i.setOffersData(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()),m(function(){var e=(0,o.Z)((0,u.Z)().mark((function e(n){var t,r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var n,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://feane-751cb-default-rtdb.firebaseio.com/menuList.json");case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Fetching Menu Failed!");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,t();case 4:for(s in r=e.sent,a=[],r)a.push({id:r[s].id,imageUrl:r[s].imageUrl,name:r[s].name,description:r[s].description,price:r[s].price,category:r[s].category});n(p.b.setMenuData(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()),j(function(){var e=(0,o.Z)((0,u.Z)().mark((function e(n){var t,r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var n,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://feane-751cb-default-rtdb.firebaseio.com/Reviews.json");case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Fetching reviews Failed!");case 5:return t=n.json(),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,t();case 4:for(s in r=e.sent,a=[],r)a.push({id:r[s].id,name:r[s].name,text:r[s].text,imageUrl:r[s].imageUrl,title:r[s].title});n(h.g.setReviewsData(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()),setTimeout((function(){s(!1)}),3e3)}),[x,b,m,j]),v}}}]);
//# sourceMappingURL=831.b01d8ac8.chunk.js.map