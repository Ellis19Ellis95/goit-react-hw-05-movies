"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[627],{938:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(689),o=t(87),r="BackBtn_movie_goback_btn__GYAh9",a=t(184),_=function(){var e=(0,i.TH)(),n=e.state&&e.state.from?e.state.from:"/";return(0,a.jsx)(o.rU,{to:n,className:r,children:"Go back"})}},10:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(938),o="Error_header_error__8xhVO",r="Error_description_error__n-HWJ",a=t(184),_=function(e){var n=e.message;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)("h2",{className:o,children:"Opps something went wrong! Try reloading the page"}),(0,a.jsx)("p",{className:r,children:n})]})}},627:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(861),o=t(439),r=t(757),a=t.n(r),_=t(694),s=t(689),c=t(227),d=t(784),l=t(10),v=t(791),m=t(830),f=t(938),h={movie_info_wrap:"CardContent_movie_info_wrap__vo5FU",movie_info_image:"CardContent_movie_info_image__Xhkep",movie_info_content:"CardContent_movie_info_content__nVXl8",movie_info_score:"CardContent_movie_info_score__LLE9h",movie_info_title:"CardContent_movie_info_title__qs-zW",overview_wrap:"CardContent_overview_wrap__2Vppg",movie_info_overview_title:"CardContent_movie_info_overview_title__N9FYf",movie_info_overview:"CardContent_movie_info_overview__OA5IJ",movie_info_genres_title:"CardContent_movie_info_genres_title__osGnE",movie_info_list:"CardContent_movie_info_list__bM1HG"},u=t(184),p=function(e){var n=e.movieData,t=n.title,i=n.image,o=n.userRate,r=n.overview,a=n.genres;return(0,u.jsxs)("div",{className:h.movie_info_wrap,children:[(0,u.jsx)("img",{className:h.movie_info_image,src:i,alt:t,loading:"lazy"}),(0,u.jsxs)("div",{className:h.movie_info_content,children:[(0,u.jsx)("h2",{className:h.movie_info_title,children:t}),(0,u.jsxs)("p",{className:h.movie_info_score,children:[(0,u.jsx)("b",{children:"User Score:"})," ",o,"%"]}),(0,u.jsxs)("div",{className:h.overview_wrap,children:[(0,u.jsx)("h3",{className:h.movie_info_overview_title,children:"Overview:"}),(0,u.jsx)("p",{className:h.movie_info_overview,children:r})]}),(0,u.jsxs)("div",{className:h.movie_info_genres_wrap,children:[(0,u.jsx)("h3",{className:h.movie_info_genres_title,children:"Genres"}),(0,u.jsx)("ul",{className:h.movie_info_list,children:a.map((function(e){var n=e.name,t=e.id;return(0,u.jsx)("li",{children:n},t)}))})]})]})]})},x={add_content_wrap:"AddContent_add_content_wrap__ipCmN",add_content_wrap_info:"AddContent_add_content_wrap_info__peZAe",add_content_title:"AddContent_add_content_title__ZYIR+",add_content_list:"AddContent_add_content_list__RzrvI",add_content_link:"AddContent_add_content_link__MFOx6"},j=t(87),w=function(){var e=(0,s.TH)(),n=e.state&&e.state.from?e.state.from:"/";return(0,u.jsxs)("div",{className:x.add_content_wrap,children:[(0,u.jsxs)("div",{className:x.add_content_wrap_info,children:[(0,u.jsx)("h2",{className:x.add_content_title,children:"Additional information:"}),(0,u.jsxs)("ul",{className:x.add_content_list,children:[(0,u.jsx)("li",{className:x.add_content_item,children:(0,u.jsx)(j.rU,{className:x.add_content_link,to:"cast",state:{from:n},children:"Cast"})}),(0,u.jsx)("li",{className:x.add_content_item,children:(0,u.jsx)(j.rU,{className:x.add_content_link,to:"reviews",state:{from:n},children:"Reviews"})})]})]}),(0,u.jsx)(v.Suspense,{fallback:(0,u.jsx)(d.Z,{}),children:(0,u.jsx)(s.j3,{})})]})},g=function(e){var n=e.details,t=n.title,i=n.poster_path,o=n.vote_average,r=n.overview,a=n.genres,_=(10*o).toFixed(1),s="https://image.tmdb.org/t/p/w500"+i;return(0,u.jsxs)(v.Suspense,{fallback:(0,u.jsx)(d.Z,{}),children:[(0,u.jsx)(f.Z,{}),(0,u.jsx)(p,{movieData:{title:t,userRate:_,overview:r,genres:a,image:s}}),(0,u.jsx)(w,{})]})},C=function(){var e=(0,v.useState)(m.Z.IDLE),n=(0,o.Z)(e,2),t=n[0],r=n[1],f=(0,v.useState)([]),h=(0,o.Z)(f,2),p=h[0],x=h[1],j=(0,s.UO)().movieId;return(0,v.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(m.Z.PENDING),e.prev=1,e.next=4,(0,c.mU)(j);case 4:n=e.sent,x(n),r(m.Z.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),_.Notify.failure("Oops something went wrong! Try reloading the page"),r(m.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]),(0,u.jsxs)(u.Fragment,{children:[t===m.Z.PENDING&&(0,u.jsx)(d.Z,{}),t===m.Z.RESOLVED&&(0,u.jsx)(g,{details:p}),t===m.Z.REJECTED&&(0,u.jsx)(l.Z,{message:"Load failed details of movie"})]})}},830:function(e,n){n.Z={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=627.4e7ea77f.chunk.js.map