(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(29),a=c.n(s),i=(c(37),c(3)),o=c(5),l=c.p+"static/media/footer-bg.67e95f05.jpg",j=c.p+"static/media/tmovie.67797e94.png",u=(c(38),c(0)),d=function(){return Object(u.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(l,")")},children:Object(u.jsxs)("div",{className:"footer__content container",children:[Object(u.jsx)("div",{className:"footer__content__logo",children:Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",children:"4K Movie"})]})}),Object(u.jsxs)("div",{className:"footer__content__menus",children:[Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),Object(u.jsx)(o.b,{to:"/",children:"Contact"}),Object(u.jsx)(o.b,{to:"/",children:"Term of Service"}),Object(u.jsx)(o.b,{to:"/",children:"About Us"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Live"}),Object(u.jsx)(o.b,{to:"/",children:"FAQ"}),Object(u.jsx)(o.b,{to:"/",children:"Preium "}),Object(u.jsx)(o.b,{to:"/",children:"Policy"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"You mush watch"}),Object(u.jsx)(o.b,{to:"/",children:"Release"}),Object(u.jsx)(o.b,{to:"/",children:"Term of Service"}),Object(u.jsx)(o.b,{to:"/",children:"About Us"})]})]})]})})},b=(c(40),[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}]),m=function(){var e=Object(i.e)().pathname,t=Object(n.useRef)(null),c=function(t){return t.path===e};return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(u.jsx)("div",{ref:t,className:"header",children:Object(u.jsxs)("div",{className:"header__wrap container",children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",children:"4K Movie"})]}),Object(u.jsx)("ul",{className:"header__nav",children:b.map((function(e,t){return Object(u.jsx)("li",{className:c(e)?"active":"",children:Object(u.jsxs)(o.b,{to:e.path,children:[" ",e.display," "]})},t)}))})]})})},h=(c(41),function(e){return Object(u.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(l,")")},children:Object(u.jsx)("h2",{children:e.children})})}),v=c(20),O=c(30),p=c.n(O),x=c(31),f=c.n(x),g={baseUrl:"https://api.themoviedb.org/3/",apiKey:"92f1e6742a71a42560ce0af78ac6ddd4",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},_=p.a.create({baseURL:g.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return f.a.stringify(Object(v.a)(Object(v.a)({},e),{},{api_key:g.apiKey}))}});_.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),_.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){return Promise.reject(e)}));var y=_,N={movie:"movie",tv:"tv"},k={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},w={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},C={getMovieList:function(e,t){var c="movie/"+k[e];return y.get(c,t)},getTvList:function(e,t){var c="tv/"+w[e];return y.get(c,t)},getVideos:function(e,t){var c=N[e]+"/"+t+"/videos";return y.get(c,{params:{}})},search:function(e,t){var c="search/"+N[e];return y.get(c,t)},detail:function(e,t,c){var n=N[e]+"/"+t;return y.get(n,c)},credits:function(e,t){var c=N[e]+"/"+t+"/credits";return y.get(c,{params:{}})},similar:function(e,t){var c=N[e]+"/"+t+"/similar";return y.get(c,{params:{}})}},L=c(19),S=c(8),T=c.n(S),M=c(9),E=c(7);c(62);function I(e){var t=e.onClick,c=void 0===t?null:t,n=e.className,r=void 0===n?"":n,s=e.children;return Object(u.jsx)("button",{className:"btn ".concat(r),onClick:function(){return c()},children:s})}function V(e){var t=e.onClick,c=void 0===t?null:t,n=e.className,r=void 0===n?"":n,s=e.children;return Object(u.jsx)(I,{className:"btn-outline ".concat(r),onClick:function(){return c()},children:s})}var R=I,A=(c(63),c(64),function(e){var t=e.item,c="/"+N[e.category]+"/"+t.id,n=g.w500Image(t.poster_path||t.backdrop_path);return Object(u.jsxs)(o.b,{to:c,children:[Object(u.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsx)(R,{onClick:function(){return console.log(1)},children:Object(u.jsx)("box-icon",{name:"play"})})}),Object(u.jsx)("h3",{children:t.title||t.name})]})}),q=(c(65),function(e){var t=e.value,c=e.onChange,n=void 0===c?null:c,r=e.type,s=e.placeholder;return Object(u.jsx)("input",{type:r,placeholder:s,value:t,onChange:n})}),F=function(e){var t=Object(n.useState)(e.keyword?e.keyword:""),c=Object(E.a)(t,2),r=c[0],s=c[1],a=Object(i.f)(),o=Object(n.useCallback)((function(){r.trim().length>0&&a("/".concat(N[e.category],"/search/").concat(r))}),[r,e.category,a.search]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&o()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[r,o]),Object(u.jsxs)("div",{className:"movie-search",children:[Object(u.jsx)(q,{type:"text",placeholder:"Enter keyword",value:r,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(R,{className:"small",onClick:o,children:"Search"})]})},P=function(e){var t=Object(n.useState)([]),c=Object(E.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(1),o=Object(E.a)(a,2),l=o[0],j=o[1],d=Object(n.useState)(0),b=Object(E.a)(d,2),m=b[0],h=b[1],v=Object(i.g)().keyword;Object(n.useEffect)((function(){Object(M.a)(T.a.mark((function t(){var c,n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==v){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===N.movie?6:10;break;case 6:return t.next=8,C.getMovieList(k.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,C.getTvList(k.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:v},t.next=18,C.search(e.category,{params:r});case 18:c=t.sent;case 19:s(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})))()}),[e.category,v]);var O=function(){var t=Object(M.a)(T.a.mark((function t(){var c,n,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==v){t.next=15;break}n={page:l+1},t.t0=e.category,t.next=t.t0===N.movie?6:10;break;case 6:return t.next=8,C.getMovieList(k.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,C.getTvList(k.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return a={page:l+1,query:v},t.next=18,C.search(e.category,{params:a});case 18:c=t.sent;case 19:s([].concat(Object(L.a)(r),Object(L.a)(c.results))),j(l+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(F,{category:e.category,keyword:v})}),Object(u.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(u.jsx)(A,{category:e.category,item:t},c)}))}),l<m?Object(u.jsx)("div",{className:"movie-grid__loadmore",children:Object(u.jsx)(V,{className:"small",onClick:O,children:"Load More"})}):null]})},U=function(){var e=Object(i.g)().category;return console.log(e),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{children:N.movie===e?"Movies":"TV Series"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(P,{category:e})})})]})},K=(c(66),function(e){var t=Object(i.g)().category,c=Object(n.useState)([]),r=Object(E.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){!function(){var c=Object(M.a)(T.a.mark((function c(){var n;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C.credits(t,e.id);case 2:n=c.sent,a(n.cast.splice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[t,e.id]),Object(u.jsx)("div",{className:"casts",children:s.map((function(e,t){return Object(u.jsxs)("div",{className:"casts__item",children:[Object(u.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(g.w500Image(e.profile_path),")")}}),Object(u.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})}),B=function(e){var t=e.video,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)("div",{className:"video__title",children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),width:"100%",ref:c,title:"video"})]})},H=function(e){var t=Object(i.g)().category,c=Object(n.useState)([]),r=Object(E.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){!function(){var c=Object(M.a)(T.a.mark((function c(){var n;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C.getVideos(t,e.id);case 2:n=c.sent,a(n.results.splice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[t,e.id]),Object(u.jsx)(u.Fragment,{children:s.map((function(e,t){return Object(u.jsx)(B,{video:e},t)}))})},W=c(77),J=c(74),z=(c(67),function(e){var t=Object(n.useState)([]),c=Object(E.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){Object(M.a)(T.a.mark((function t(){var c,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.type,t.next=t.t0===N.movie?6:10;break;case 6:return t.next=8,C.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,C.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,C.similar(e.category,e.id);case 17:c=t.sent;case 18:s(c.results);case 19:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)("div",{className:"movie-list",children:Object(u.jsx)(W.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(u.jsx)(J.a,{children:Object(u.jsx)(A,{item:t,category:e.category})},c)}))})})}),D=function(e){var t=Object(i.g)(),c=t.category,r=t.id,s=Object(n.useState)(),a=Object(E.a)(s,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){!function(){var e=Object(M.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.detail(c,r,{params:{}});case 2:t=e.sent,l(t),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,r]),console.log("item",o),Object(u.jsx)(u.Fragment,{children:o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(g.originalImage(o.backdrop_path||o.poster_path),")")}}),Object(u.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(u.jsx)("div",{className:"movie-content__poster",children:Object(u.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(g.originalImage(o.poster_path||o.backdrop_path),")")}})}),Object(u.jsxs)("div",{className:"movie-content__info",children:[Object(u.jsx)("h1",{className:"title",children:o.title||o.name}),Object(u.jsx)("div",{className:"genres",children:o.genres&&o.genres.slice(0,5).map((function(e,t){return Object(u.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(u.jsx)("p",{className:"overview",children:o.overview}),Object(u.jsxs)("div",{className:"cast",children:[Object(u.jsx)("div",{className:"section__header",children:Object(u.jsx)("h2",{children:"Cast"})}),Object(u.jsx)(K,{id:o.id})]})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(H,{id:o.id})}),Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(z,{id:o.id,category:c,type:"similar"})})]})]})})},Q=c(76),X=c(75),Y=(c(68),c(69),c(70),c(71),c(72),function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(u.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(u.jsx)("span",{children:"X"})})]})}),G=function(e){var t=Object(n.useState)(!1),c=Object(E.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){s(e.active)}),[e.active]),Object(u.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""," "),children:e.children})},Z=function(e){var t=e.item,c=Object(i.f)(),n=g.originalImage(t.backdrop_path?t.backdrop_path:t.posters_path),r=function(){var e=Object(M.a)(T.a.mark((function e(){var c,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=document.querySelector("#modal_".concat(t.id)),e.next=3,C.getVideos(N.movie,t.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/".concat(n.results[0].key),c.querySelector(".modal__content > iframe").setAttribute("src",r)):c.querySelector(".modal__content").innerHTML="No Trailer",c.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(u.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(u.jsx)("h2",{className:"title",children:t.title}),Object(u.jsx)("div",{className:"overview",children:t.overview}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(R,{onClick:function(){return c("/movie/ + ".concat(t.id))},children:"Watch Now"}),Object(u.jsx)(V,{onClick:r,children:"Watch Trailer"})]})]}),Object(u.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(u.jsx)("img",{src:g.w500Image(t.poster_path),alt:""})})]})})},$=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(u.jsx)(G,{id:"modal_".concat(t.id),children:Object(u.jsx)(Y,{active:!1,onClose:function(){c.current.setAttribute("src","")},children:Object(u.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"traile"})})})},ee=function(){Q.a.use([X.a]);var e=Object(n.useState)([]),t=Object(E.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){Object(M.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={page:1},e.next=4,C.getMovieList(k.popular,{params:t});case 4:c=e.sent,r(c.results.splice(0,4)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(u.jsxs)("div",{className:"hero-slide",children:[Object(u.jsx)(W.a,{modules:[X.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:c.map((function(e,t){return Object(u.jsx)(J.a,{className:"mySwiper",children:function(t){var c=t.isActive;return Object(u.jsx)(Z,{item:e,className:c?"active":""})}},t)}))}),c.map((function(e,t){return Object(u.jsx)($,{item:e},t)}))]})},te=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ee,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending Movie"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(V,{className:"small",children:"View More"})})]}),Object(u.jsx)(z,{category:N.movie,type:k.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rate Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(V,{className:"small",children:"View More"})})]}),Object(u.jsx)(z,{category:N.movie,type:k.top_rated})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(V,{className:"small",children:"View More"})})]}),Object(u.jsx)(z,{category:N.tv,type:w.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rate TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(V,{className:"small",children:"View More"})})]}),Object(u.jsx)(z,{category:N.tv,type:w.top_rated})]})]})]})},ce=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/:category/search/:keyword",element:Object(u.jsx)(U,{})}),Object(u.jsx)(i.a,{path:"/:category/:id",element:Object(u.jsx)(D,{})}),Object(u.jsx)(i.a,{path:"/:category",element:Object(u.jsx)(U,{})}),Object(u.jsx)(i.a,{path:"/",element:Object(u.jsx)(te,{})})]}),Object(u.jsx)(d,{})]})},ne=function(){return Object(u.jsx)(ce,{})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.0bc59561.chunk.js.map