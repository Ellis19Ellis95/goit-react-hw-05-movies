"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{938:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n(689),s=n(87),i="BackBtn_movie_goback_btn__GYAh9",a=n(184),c=function(){var e=(0,t.TH)(),r=e.state&&e.state.from?e.state.from:"/";return(0,a.jsx)(s.rU,{to:r,className:i,children:"Go back"})}},10:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n(938),s="Error_header_error__8xhVO",i="Error_description_error__n-HWJ",a=n(184),c=function(e){var r=e.message;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{}),(0,a.jsx)("h2",{className:s,children:"Opps something went wrong! Try reloading the page"}),(0,a.jsx)("p",{className:i,children:r})]})}},231:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(861),s=n(439),i=n(757),a=n.n(i),c={review_title:"Reviews_review_title__usxnG",review_list:"Reviews_review_list__gwCIw",review_name:"Reviews_review_name__HRsSC"},o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",l=n(184),u=function(e){var r=e.reviews;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:c.review_title,children:"Review:"}),r.length?(0,l.jsx)("ul",{className:c.review_list,children:r.map((function(e){var r=e.author,n=e.content,t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,r="",n=crypto.getRandomValues(new Uint8Array(e));e--;)r+=o[63&n[e]];return r}();return(0,l.jsxs)("li",{className:c.review_item,children:[(0,l.jsxs)("h2",{className:c.review_name,children:["Author: ",r]}),(0,l.jsxs)("p",{className:c.review_content,children:[(0,l.jsx)("b",{children:"Content:"})," ",n]})]},t)}))}):(0,l.jsx)("h2",{children:"Reviews information will be available soon"})]})},v=n(784),_=n(10),h=n(791),w=n(689),f=n(694),m=n(227),d=n(830),p=function(){var e=(0,h.useState)(""),r=(0,s.Z)(e,2),n=r[0],i=r[1],c=(0,h.useState)([]),o=(0,s.Z)(c,2),p=o[0],x=o[1],E=(0,w.UO)().movieId;return(0,h.useEffect)((function(){i(d.Z.PENDING);var e=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.oc)(E);case 3:r=e.sent,i(d.Z.RESOLVED),x(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),i(d.Z.REJECTED),f.Notify.failure("Oops something went wrong! Try reloading the page");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[E]),(0,l.jsxs)(l.Fragment,{children:[n===d.Z.RESOLVED&&(0,l.jsx)(u,{reviews:p}),n===d.Z.PENDING&&(0,l.jsx)(v.Z,{}),n===d.Z.REJECTED&&(0,l.jsx)(_.Z,{message:"Load failed reviews of movie"})]})}},830:function(e,r){r.Z={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=613.33dd3677.chunk.js.map