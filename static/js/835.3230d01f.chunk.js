"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{938:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(689),i=r(87),a="BackBtn_movie_goback_btn__GYAh9",s=r(184),o=function(){var e=(0,n.TH)(),t=e.state&&e.state.from?e.state.from:"/";return(0,s.jsx)(i.rU,{to:t,className:a,children:"Go back"})}},10:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(938),i="Error_header_error__8xhVO",a="Error_description_error__n-HWJ",s=r(184),o=function(e){var t=e.message;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)("h2",{className:i,children:"Opps something went wrong! Try reloading the page"}),(0,s.jsx)("p",{className:a,children:t})]})}},762:function(e,t,r){r.d(t,{Z:function(){return _}});var n={container:"MovieList_container__sSMe5",movie_list:"MovieList_movie_list__IWl2j",movie_title:"MovieList_movie_title__6L8Eg"},i="MovieItem_movie_item__oWbsm",a="MovieItem_movie_img__JWv8I",s="MovieItem_movie_link__c59zy",o="MovieItem_movie_title__waPE3",c=r(689),l=r(87),u=r(184),m=function(e){var t=e.title,r=e.id,n=e.img,m=(0,c.TH)().pathname;return(0,u.jsx)("li",{className:i,children:(0,u.jsxs)(l.rU,{className:s,to:"/movies/".concat(r),state:{from:m},children:[(0,u.jsx)("img",{className:a,src:"https://image.tmdb.org/t/p/w500"+n,alt:t,loading:"lazy"}),(0,u.jsx)("p",{className:o,children:t})]})})},_=function(e){var t=e.movies,r=e.page,i=Boolean(t.length),a="home"===r?"This is popular movie list in the day:":"This is movie list according to your search:";return(0,u.jsxs)("div",{className:n.container,children:[i&&(0,u.jsx)("h1",{className:n.movite_title,children:a}),(0,u.jsx)("ul",{className:n.movie_list,children:t.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return(0,u.jsx)(m,{title:t,id:r,img:n},r)}))})]})}},835:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(861),i=r(439),a=r(757),s=r.n(a),o=r(694),c=r(791),l=r(87),u=r(227),m=r(795),_="SearchBar_form__gW7Gj",h="SearchBar_input_wrap__6ajq5",f="SearchBar_input__bIy50",v="SearchBar_search_svg__UtS-c",d="SearchBar_form_btn__JyFJK",g=r(689),p=r(184),j=function(){var e,t,r=(0,c.useState)([]),n=(0,i.Z)(r,2),a=n[0],s=n[1],j=(0,l.lr)(),x=(0,i.Z)(j,2),E=x[0],N=x[1],Z=(0,c.useState)(null!==(e=E.get("query"))&&void 0!==e?e:""),y=(0,i.Z)(Z,2),S=y[0],w=y[1],D=(0,g.TH)(),b=null!==(t=E.get("query"))&&void 0!==t?t:"";(0,c.useEffect)((function(){b&&(0,u.X5)(b).then((function(e){e.length||(o.Notify.failure("Sorry, we dont found ".concat(b)),console.log(b)),s(e),console.log(e)})).catch((function(e){return console.log(e)}))}),[b]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault(),""===S&&o.Notify.failure("You have to write something here for a successful search"),N({query:S})},className:_,children:(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("input",{className:f,value:S,onChange:function(e){w(e.target.value)},type:"text"}),(0,p.jsx)("button",{className:d,type:"submit",children:(0,p.jsx)(m.wTD,{className:v})})]})}),(0,p.jsx)("ul",{children:a.map((function(e){var t=e.original_title,r=e.id;return(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"/movies/".concat(r),state:{from:D},children:t})},r)}))})]})},x=r(762),E=r(784),N=r(10),Z=r(830),y=function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],m=(0,c.useState)([]),_=(0,i.Z)(m,2),h=_[0],f=_[1],v=(0,l.lr)(),d=(0,i.Z)(v,2),g=d[0],y=d[1],S=(0,c.useState)([]),w=(0,i.Z)(S,2),D=w[0],b=w[1];return(0,c.useEffect)((function(){var e,t=null!==(e=g.get("query"))&&void 0!==e?e:"";D?y({query:D}):b(t)}),[g,b,D,y]),(0,c.useEffect)((function(){if(D){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.X5)(D);case 2:t=e.sent,f(t),a(Z.Z.PENDING);try{a(Z.Z.RESOLVED)}catch(r){a(Z.Z.REJECTED),o.Notify.failure("Oops something went wrong! Try reloading the page")}case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[D]),(0,p.jsxs)(p.Fragment,{children:[(r===Z.Z.RESOLVED||r===Z.Z.IDLE)&&(0,p.jsx)(j,{}),r===Z.Z.RESOLVED&&(0,p.jsx)(x.Z,{movies:h,page:"movie"}),r===Z.Z.PENDING&&(0,p.jsx)(E.Z,{}),r===Z.Z.REJECTED&&(0,p.jsx)(N.Z,{message:"Load failed your movies"})]})}},830:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=835.3230d01f.chunk.js.map