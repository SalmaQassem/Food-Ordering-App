"use strict";(self.webpackChunkfood_ordering_app=self.webpackChunkfood_ordering_app||[]).push([[278],{3649:function(n,e,a){var r=a(2791).createContext({isCartOpened:!1,setIsCartOpened:function(n){}});e.Z=r},6787:function(n,e,a){var r=a(9439),i=a(3649),t=a(2791),s=a(184);e.Z=function(n){var e=(0,t.useState)(!1),a=(0,r.Z)(e,2),o=a[0],c=a[1],l={isCartOpened:o,setIsCartOpened:function(n){c(n)}};return(0,s.jsx)(i.Z.Provider,{value:l,children:n.children})}},6941:function(n,e,a){a.d(e,{Z:function(){return l}});var r="Background_background__-FgTr",i="Background_sub__U8SYH",t="Background_image__CY1Qa",s="Background_subImage__gM2Y8",o=a.p+"static/media/hero-bg.90c013e90f6e262bf3ca.webp",c=a(184),l=function(n){return(0,c.jsxs)("section",{className:"sub"===n.class?"".concat(i):r,children:[(0,c.jsx)("div",{className:"sub"===n.class?"".concat(s):t,children:(0,c.jsx)("img",{src:o,alt:"background"})}),n.children]})}},1298:function(n,e,a){a.d(e,{Z:function(){return k}});var r="Cart_cart__I0f-B",i="Cart_opened__11GBN",t="Cart_overlay__elVvT",s="Cart_content__8tpAL",o="Cart_header__xdRee",c="Cart_body__aUgch",l="Cart_items__2GrGf",d="Cart_checkout__ppZWE",u="Cart_checkoutContent__8PLHv",x="Cart_total__1tICW",m="Cart_checkoutButtons__UmkbM",h=a(3855),_=a(4253),p=a(5318),j=a(5783),f=a(2791),v=a(5487),g=a(9434),b=a(184),C=function(n){var e=(0,g.I0)(),a=(0,f.useCallback)((function(){e(j.U.addItems(n.data))}),[e,n]),r=(0,f.useCallback)((function(){e(j.U.decreaseItems(n.data))}),[e,n]),i=(0,f.useCallback)((function(){e(j.U.removeItems(n.data))}),[e,n]);return(0,b.jsxs)("div",{className:v.Z.cartItem,children:[(0,b.jsx)("div",{className:v.Z.image,children:(0,b.jsx)("img",{src:n.data.imageUrl,alt:"cart_item",loading:"lazy"})}),(0,b.jsx)("p",{className:v.Z.name,children:n.data.name}),(0,b.jsxs)("div",{className:v.Z.amountButtons,children:[(0,b.jsx)("button",{type:"button",className:v.Z.button,onClick:r,children:"-"}),(0,b.jsx)("p",{className:v.Z.amount,children:n.data.quantity}),(0,b.jsx)("button",{type:"button",className:v.Z.button,onClick:a,children:"+"})]}),(0,b.jsxs)("div",{className:v.Z.price,children:[(0,b.jsxs)("p",{children:["$",n.data.totalPrice]}),(0,b.jsx)(p.Z,{onClick:i,children:"remove"})]})]})},N=a(3649),k=function(){var n=(0,f.useContext)(N.Z),e=(0,g.v9)((function(n){return n.cart})),a=(0,g.I0)(),v=(0,f.useCallback)((function(){a(j.U.removeAll())}),[a]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{className:!0===n.isCartOpened?"".concat(t," ").concat(i):t}),(0,b.jsxs)("section",{className:!0===n.isCartOpened?"".concat(r," ").concat(i):r,children:[(0,b.jsxs)("div",{className:s,children:[(0,b.jsxs)("div",{className:o,children:[(0,b.jsx)("h1",{children:"shopping cart"}),(0,b.jsx)(p.Z,{onClick:v,children:"remove all"})]}),(0,b.jsx)("div",{className:c,children:(0,b.jsx)("div",{className:l,children:e.items.length>0&&e.items.map((function(n){return(0,b.jsx)(C,{data:n},n.id)}))})})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsxs)("div",{className:u,children:[(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("h1",{children:"sub-total"}),(0,b.jsxs)("p",{children:[e.totalAmount," items"]})]}),(0,b.jsxs)("h1",{children:["$",e.totalPrice]})]}),(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(_.Z,{to:"/",onClick:function(e){e.preventDefault(),n.setIsCartOpened(!1)},children:"cancel"}),(0,b.jsx)(_.Z,{to:"Checkout",onClick:function(e){n.setIsCartOpened(!1)},children:"checkout"})]})]})]})]})}},6316:function(n,e,a){a.d(e,{Z:function(){return A}});var r,i,t="Footer_footer__DArXY",s="Footer_box__HSjUi",o="Footer_item__VqwkY",c="Footer_info__6gmdQ",l=a(919),d="ContactUs_box__qjBrg",u="ContactUs_icon__9B1Ju",x=a(71),m=a(6856),h=a(168),_=a(6444),p=_.ZP.h4(r||(r=(0,h.Z)(['\n  margin-bottom: 20px;\n  font-family: "DancingScript-Regular", cursive;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1.2;\n  text-transform: capitalize;\n']))),j=a(1087),f=a(184),v=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{children:"contact us"}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsxs)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Location",children:[(0,f.jsx)("span",{className:u,children:(0,f.jsx)(x.UXH,{})}),(0,f.jsx)("span",{children:"Location"})]}),(0,f.jsxs)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Phone",children:[(0,f.jsx)("span",{className:u,children:(0,f.jsx)(x.DsV,{})}),(0,f.jsx)("span",{children:" Call +01 1234567890"})]}),(0,f.jsxs)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Email",children:[(0,f.jsx)("span",{className:u,children:(0,f.jsx)(m.ixJ,{})}),(0,f.jsx)("span",{children:"demo@gmail.com"})]})]})]})},g="Social_social__dsi6w",b="Social_header__f-jYM",C="Social_links__jNl2p",N=_.ZP.p(i||(i=(0,h.Z)(["\n  color: #dbdbdb;\n  margin-bottom: 16px;\n"]))),k=a(6355),Z=function(){return(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)(p,{children:(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/",className:b,"aria-label":"Home Page",children:"feane"})}),(0,f.jsx)(N,{children:"Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with"}),(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Facebook Link",children:(0,f.jsx)(k.tBk,{})}),(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Twitter Link",children:(0,f.jsx)(k.fWC,{})}),(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/","aria-label":"LinkedIn Link",children:(0,f.jsx)(k.BUd,{})}),(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Instagram Link",children:(0,f.jsx)(k.Zf_,{})}),(0,f.jsx)(j.rU,{to:"/Food-Ordering-App/","aria-label":"Pinterest Link",children:(0,f.jsx)(k.oIN,{})})]})]})},O=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{children:"opening hours"}),(0,f.jsx)(N,{children:"Everyday"}),(0,f.jsx)(N,{children:"10.00 Am -10.00 Pm"})]})},A=function(){return(0,f.jsx)("section",{className:t,children:(0,f.jsxs)(l.Z,{children:[(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("div",{className:o,children:(0,f.jsx)(v,{})}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)(Z,{})}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)(O,{})})]}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," All Rights Reserved By Free Html Templates"]}),(0,f.jsx)("p",{children:"\xa9 Distributed By ThemeWagon"})]})]})})}},9893:function(n,e,a){a.d(e,{Z:function(){return k}});var r=a(9439),i="NavBar_navbar__i01vL",t="NavBar_items__sInqS",s="NavBar_logo__hobfT",o="NavBar_toggler__N5ZmV",c="NavBar_open__+9QY2",l="NavBar_collapse__xzeet",d="NavBar_opened__Pmali",u="NavBar_links__4Qojj",x="NavBar_sideList__Tpbll",m="NavBar_cart__fTB-m",h="NavBar_active__WvqV0",_="NavBar_user__gBZr5",p=a(2791),j=a(9434),f=a(919),v=a(4253),g=a(6355),b=a(1087),C=a(3649),N=a(184),k=function(){var n=(0,p.useContext)(C.Z),e=(0,j.v9)((function(n){return n.cart.totalAmount})),a=(0,p.useState)(!1),k=(0,r.Z)(a,2),Z=k[0],O=k[1],A=(0,p.useCallback)((function(){O((function(n){return!n}))}),[]),B=function(){Z&&O(!1)};return(0,N.jsx)("nav",{className:i,children:(0,N.jsx)(f.Z,{children:(0,N.jsxs)("nav",{className:t,children:[(0,N.jsx)(b.rU,{to:"/Food-Ordering-App/","aria-label":"Home Page",className:s,children:(0,N.jsx)("span",{children:"feane"})}),(0,N.jsxs)("div",{className:Z?"".concat(o," ").concat(c):o,onClick:A,children:[(0,N.jsx)("span",{}),(0,N.jsx)("span",{}),(0,N.jsx)("span",{})]}),(0,N.jsxs)("div",{className:Z?"".concat(l," ").concat(d):l,children:[(0,N.jsxs)("ul",{className:u,children:[(0,N.jsx)("li",{children:(0,N.jsx)(b.OL,{to:"/Food-Ordering-App/","aria-label":"Home Page",className:function(n){return n.isActive?h:void 0},end:!0,onClick:B,children:"home"})}),(0,N.jsx)("li",{children:(0,N.jsx)(b.OL,{to:"/Food-Ordering-App/Menu","aria-label":"Menu Page",className:function(n){return n.isActive?h:void 0},onClick:B,children:"menu"})}),(0,N.jsx)("li",{children:(0,N.jsx)(b.OL,{to:"/Food-Ordering-App/About","aria-label":"About Page",className:function(n){return n.isActive?h:void 0},onClick:B,children:"about"})}),(0,N.jsx)("li",{children:(0,N.jsx)(b.OL,{to:"/Food-Ordering-App/BookTable","aria-label":"BookTable Page",className:function(n){return n.isActive?h:void 0},onClick:B,children:"book table"})})]}),(0,N.jsxs)("div",{className:_,children:[(0,N.jsxs)("ul",{className:x,children:[(0,N.jsx)("li",{children:(0,N.jsx)(b.rU,{to:"/Food-Ordering-App/Login","aria-label":"Profile Page",onClick:B,children:(0,N.jsx)(g.Xws,{})})}),(0,N.jsx)("li",{className:m,"data-before":e,children:(0,N.jsx)("span",{onClick:function(){n.setIsCartOpened(!0)},children:(0,N.jsx)(g.FeP,{})})}),(0,N.jsx)("li",{children:(0,N.jsx)(b.rU,{to:"/Food-Ordering-App/","aria-label":"Search Page",onClick:B,children:(0,N.jsx)(g.U41,{})})})]}),(0,N.jsx)(v.Z,{to:"/Food-Ordering-App/Menu","aria-label":"Order Button",onClick:B,children:"order online"})]})]})]})})})}},4261:function(n,e,a){a.r(e),a.d(e,{default:function(){return O}});var r=a(6787),i=a(6941),t=a(9893),s=a(1298),o=a(4925),c="Landing_landing__7oQI8",l="Landing_text__uQg8S",d="Landing_button__A1vX0",u="Landing_dots__QAlgd",x="Landing_dot__Vqb5X",m="Landing_active__tE+Xo",h=a(2791),_=a(919),p=a(6766),j=a(4253),f=a(9434),v=a(184),g=["onClick"],b={desktop:{breakpoint:{max:3e3,min:1024},items:1},mobile:{breakpoint:{max:464,min:0},items:1},tablet:{breakpoint:{max:1024,min:464},items:1}},C=function(){var n=(0,f.v9)((function(n){return n.landing.items})),e=function(n){var e=n.onClick,a=(0,o.Z)(n,g).active;return(0,v.jsx)("li",{className:a?"".concat(x,"  ").concat(m):"".concat(x),"aria-label":"dot",onClick:function(){return e()}})};return(0,v.jsx)("section",{className:c,children:(0,v.jsx)(_.Z,{children:(0,v.jsx)(p.default,{additionalTransfrom:0,arrows:!1,autoPlay:!0,autoPlaySpeed:6e3,centerMode:!1,className:"",containerClass:"container",customDot:(0,v.jsx)(e,{}),dotListClass:u,draggable:!1,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,pauseOnHover:!0,renderArrowsWhenDisabled:!1,renderButtonGroupOutside:!1,responsive:b,rewind:!1,rewindWithAnimation:!1,rtl:!1,shouldResetAutoplay:!0,showDots:!0,sliderClass:"",slidesToSlide:1,swipeable:!0,children:n.map((function(n){return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h1",{children:n.title}),(0,v.jsx)("p",{children:n.description}),(0,v.jsx)(j.Z,{to:"/Food-Ordering-App/Menu",className:d,"aria-label":"Menu Page",children:"order now"})]},n.id)}))})})})},N=h.memo(C),k=a(7689),Z=a(6316),O=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.Z,{children:(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(t.Z,{}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(N,{})]})}),(0,v.jsx)(k.j3,{}),(0,v.jsx)(Z.Z,{})]})}},4253:function(n,e,a){var r,i=a(168),t=a(6444),s=a(1087),o=(0,t.ZP)(s.rU)(r||(r=(0,i.Z)(["\n  display: inline-block;\n  background-color: var(--MainColor);\n  color: #fff;\n  border-radius: 45px;\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: var(--HoverColor);\n  }\n"])));e.Z=o},919:function(n,e,a){var r,i=a(168),t=a(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media (min-width: 576px) {\n    & {\n      max-width: 540px;\n    }\n  }\n  @media (min-width: 768px) {\n    & {\n      max-width: 720px;\n    }\n  }\n  @media (min-width: 992px) {\n    & {\n      max-width: 960px;\n    }\n  }\n  @media (min-width: 1200px) {\n    & {\n      max-width: 1170px;\n    }\n  }\n"])));e.Z=t},3855:function(n,e,a){var r,i=a(168),t=a(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.5);\n"])));e.Z=t},5318:function(n,e,a){var r,i=a(168),t=a(6444).ZP.button(r||(r=(0,i.Z)(["\n  color: var(--MainColor);\n  font-size: 15px;\n  text-transform: capitalize;\n  text-decoration: underline;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"])));e.Z=t},5487:function(n,e){e.Z={cartItem:"CartItem_cartItem__Zn-Yg",image:"CartItem_image__xSRnk",name:"CartItem_name__haxzT",amountButtons:"CartItem_amountButtons__SbKXn",button:"CartItem_button__BT8uF",amount:"CartItem_amount__Nxukp",price:"CartItem_price__QpRij"}},4925:function(n,e,a){function r(n,e){if(null==n)return{};var a,r,i=function(n,e){if(null==n)return{};var a,r,i={},t=Object.keys(n);for(r=0;r<t.length;r++)a=t[r],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(r=0;r<t.length;r++)a=t[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=278.a64633a0.chunk.js.map