(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=(a(12),a(1)),l=a.n(i),s=a(3),u=a(2),m=(a(14),a(15),function(e){return c.a.createElement("button",Object.assign({},e,{className:"button ".concat(e.className?e.className:"")}),e.children)}),d=(a(16),"http://localhost:8000/api"),p=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(0),p=Object(u.a)(i,2),f=p[0],b=p[1],v=Object(n.useState)(""),E=Object(u.a)(v,2),h=E[0],j=E[1];Object(n.useEffect)(function(){g()},[h]);var g=function(){var e=Object(s.a)(l.a.mark(function e(){var t,a,n,c=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]&&c[0],e.next=3,fetch("".concat(d,"/job/list?searchKey=").concat(h,"&&page=").concat(t?f:0));case 3:return a=e.sent,e.next=6,a.json();case 6:"SUCCESS"===(n=e.sent).status&&(n.data.length>0&&b(f+1),t?o(r.concat(n.data)):(b(1),o(n.data)));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=r.map(function(t){return c.a.createElement("div",{key:t.id,className:"row",onClick:function(){var a;a=t.id,e.goToJobDetails(a)}},c.a.createElement("div",null,t.companyName),c.a.createElement("div",null,t.jobTitle),c.a.createElement("div",null,"$",t.pipelineForecast))});return window.onscroll=function(){parseInt(window.innerHeight+document.documentElement.scrollTop)===document.documentElement.offsetHeight-1&&g(!0)},c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(m,{onClick:function(){e.goToAddJobScreen()},className:"addButton"},"Add New Job"),c.a.createElement("div",{className:"form-input"},c.a.createElement("input",{type:"text",className:"job-search",placeholder:"Search by company, job title",value:h,onChange:function(e){j(e.target.value)}}))),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"table table-header"},c.a.createElement("div",null,"Company Name"),c.a.createElement("div",null,"Job Title"),c.a.createElement("div",null,"Pipeline Forecast")),c.a.createElement("div",{className:"table"},N)))},f=(a(17),function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),c=a[0],r=a[1];return{value:c,onChange:function(e){r(e.target.value)}}}),b=function(e){var t=f(""),a=f(""),r=f(""),o=f(""),i=f(""),u=function(){var n=Object(s.a)(l.a.mark(function n(c){var s,u,m;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),s={companyName:t.value,jobTitle:a.value,jobDescription:r.value,hiringManagerName:o.value,hiringManagerEmail:i.value},n.next=4,fetch("".concat(d,"/job/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:return u=n.sent,n.next=7,u.json();case 7:m=n.sent,console.log(m),e.goToJobScreen();case 10:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("a",{href:"#",onClick:e.goToJobScreen},"\u2b05 Back")),c.a.createElement("form",{onSubmit:u},c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Company Name"),c.a.createElement("input",Object.assign({name:"companyName",maxLength:"100",type:"text"},t,{required:!0}))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Job Title"),c.a.createElement("input",Object.assign({name:"jobTitle",maxLength:"50",type:"text"},a,{required:!0}))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Job Description"),c.a.createElement("textarea",Object.assign({name:"jobDescription",rows:"6",maxLength:"500"},r))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Hiring Manager Name"),c.a.createElement("input",Object.assign({name:"managerName",maxLength:"50",type:"text"},o,{required:!0}))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Hiring Manager Email"),c.a.createElement("input",Object.assign({name:"managerEmail",type:"email",maxLength:"50"},i,{required:!0}))),c.a.createElement(m,{type:"submit"},"Add Job"))))},v=(a(18),a(19),"PROSPECT"),E={PROSPECT:"Prospect",INTERVIEWING:"Interviewing",OFFER:"Offer",REJECTED:"Rejected",ACCEPTED:"Accepted"},h=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),p=Object(u.a)(i,2),f=p[0],b=p[1],h=Object(n.useState)(""),j=Object(u.a)(h,2),g=j[0],N=j[1];Object(n.useEffect)(function(){y()},[f]);var O=function(){var t=Object(s.a)(l.a.mark(function t(a){var n,c;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(g){t.next=2;break}return t.abrupt("return");case 2:return n={email:g,jobId:e.jobId,stage:v},t.next=5,fetch("".concat(d,"/candidate/tag"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return c=t.sent,t.next=8,c.json();case 8:"SUCCESS"===t.sent.status&&(N(""),y());case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(s.a)(l.a.mark(function t(){var a,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/candidate/list?jobId=").concat(e.jobId,"&&searchKey=").concat(f));case 2:return a=t.sent,t.next=5,a.json();case 5:"SUCCESS"===(n=t.sent).status&&o(n.data);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(l.a.mark(function e(t,a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={stage:a},e.next=3,fetch("".concat(d,"/candidate/update/stage?id=").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:e.sent,y();case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),w=Object.entries(E).map(function(e){return c.a.createElement("option",{value:e[0]},e[1])}),x=r.map(function(e,t){return[c.a.createElement("div",{key:t+"1"},e.email),c.a.createElement("div",{key:t+"2"},c.a.createElement("select",{value:e.stage,onChange:function(e){return function(e,t){var a=e.target.value;S(r[t].id,a)}(e,t)}},w))]}),C=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"form-input margin-top-10"},c.a.createElement("input",{type:"email",className:"tag-input",placeholder:"Candidate Email To Tag",name:"tag",value:g,onChange:function(e){return N(e.target.value)},onKeyDown:function(e){13===e.keyCode&&C(g)&&O()}}),c.a.createElement(m,{className:"tag-button",onClick:O},"@Tag")),c.a.createElement("div",{className:"form-input"},c.a.createElement("input",{type:"text",value:f,onChange:function(e){var t=e.target.value;b(t)},placeholder:"Search for candidate by email, stage",className:"search-input"})),c.a.createElement("div",{className:"candidate-table"},c.a.createElement("div",{className:"ct-header"},"Candidate Email"),c.a.createElement("div",{className:"ct-header"},"Stage"),x))},j=(a(20),function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)(function(){i()},[e]);var i=function(){var t=Object(s.a)(l.a.mark(function t(){var a,n,c;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/candidate/dashboard/").concat(e.jobId));case 2:return a=t.sent,t.next=5,a.json();case 5:"SUCCESS"===(n=t.sent).status&&(c={},n.data.map(function(e){c[e._id.stage]=e.count}),o(c));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),m=[];for(var p in E){var f=c.a.createElement("div",{className:"badge"},E[p],c.a.createElement("span",{className:"count"},r[p]?r[p]:0));m.push(f)}return c.a.createElement("div",{className:"dcontainer"},m)}),g=(a(21),function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],o=a[1];return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"collapsible",onClick:function(){o(!r)}},e.header,c.a.createElement("span",{className:"arrow"},r?"\u2bc5":"\u2bc6")),c.a.createElement("div",{className:r?"display-block":"display-none"},e.children))}),N=function(e){var t=Object(n.useState)({companyName:"",jobTitle:"",jobDescription:"",hiringManagerName:"",hiringManagerEmail:""}),a=Object(u.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)(function(){i()},[e]);var i=function(){var t=Object(s.a)(l.a.mark(function t(){var a,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/job/detail/").concat(e.jobId));case 2:return a=t.sent,t.next=5,a.json();case 5:"SUCCESS"===(n=t.sent).status&&o(n.data);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("a",{href:"#",onClick:e.goToJobScreen},"\u2b05 Back")),c.a.createElement(g,{header:"Dashboard"},c.a.createElement(j,{jobId:e.jobId})),c.a.createElement(g,{header:"Job Details"},c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"label"},"Company Name:"),c.a.createElement("div",{className:"text-value"},r.companyName),c.a.createElement("div",{className:"label"},"Title:"),c.a.createElement("div",{className:"text-value"},r.jobTitle),c.a.createElement("div",{className:"label"},"Description:"),c.a.createElement("div",{className:"text-value"},r.jobDescription),c.a.createElement("div",{className:"label"},"HR Name:"),c.a.createElement("div",{className:"text-value"},r.hiringManagerName),c.a.createElement("div",{className:"label"},"HR Email:"),c.a.createElement("div",{className:"text-value"},r.hiringManagerEmail))),c.a.createElement(h,{jobId:e.jobId})))};var O=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),i=Object(u.a)(o,2),m=i[0],d=i[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),E=v[0],h=v[1],j=Object(n.useState)(""),g=Object(u.a)(j,2),O=g[0],y=g[1],S=function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d(!1),h(!1),r(!0);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h(!1),r(!1),d(!0);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(t),r(!1),d(!1),h(!0);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,E&&c.a.createElement(N,{jobId:O,goToJobScreen:w}),a&&c.a.createElement(b,{goToJobScreen:w}),m&&c.a.createElement(p,{goToAddJobScreen:S,goToJobDetails:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.c49515f4.chunk.js.map