(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),i=t.n(r),o=(t(12),t(1)),l=t.n(o),s=t(3),u=t(2),m=(t(14),t(15),function(e){return c.a.createElement("button",Object.assign({},e,{className:"button ".concat(e.className?e.className:"")}),e.children)}),d=(t(16),"http://localhost:8000/api"),p=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(""),p=Object(u.a)(o,2),f=p[0],b=p[1];Object(n.useEffect)(function(){v()},[f]);var v=function(){var e=Object(s.a)(l.a.mark(function e(){var a,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/job/list?searchKey=").concat(f));case 2:return a=e.sent,e.next=5,a.json();case 5:"SUCCESS"===(t=e.sent).status&&i(t.data);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=r.map(function(a){return c.a.createElement("div",{key:a.id,className:"row",onClick:function(){var t;t=a.id,e.goToJobDetails(t)}},c.a.createElement("div",null,a.companyName),c.a.createElement("div",null,a.jobTitle),c.a.createElement("div",null,"$",a.pipelineForecast))});return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(m,{onClick:function(){e.goToAddJobScreen()}},"Add New Job"),c.a.createElement("div",{className:"search-container  form-input"},c.a.createElement("input",{type:"text",className:"job-search",placeholder:"Search by Company, Job Title",value:f,onChange:function(e){b(e.target.value)}}))),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"table table-header"},c.a.createElement("div",null,"Company Name"),c.a.createElement("div",null,"Job Title"),c.a.createElement("div",null,"Pipeline Forecast")),c.a.createElement("div",{id:"jobListTable",className:"table"},E)))},f=(t(17),function(e){var a=Object(n.useState)(e),t=Object(u.a)(a,2),c=t[0],r=t[1];return{value:c,onChange:function(e){r(e.target.value)}}}),b=function(e){var a=f(""),t=f(""),r=f(""),i=f(""),o=f(""),u=function(){var n=Object(s.a)(l.a.mark(function n(c){var s,u,m;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),s={companyName:a.value,jobTitle:t.value,jobDescription:r.value,hiringManagerName:i.value,hiringManagerEmail:o.value},n.next=4,fetch("".concat(d,"/job/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:return u=n.sent,n.next=7,u.json();case 7:m=n.sent,console.log(m),e.goToJobScreen();case 10:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},"ADD JOB"),c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("a",{href:"#",onClick:e.goToJobScreen},"Back")),c.a.createElement("form",{onSubmit:u},c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Company Name"),c.a.createElement("input",Object.assign({name:"companyName",maxLength:"100",type:"text"},a))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Job Title"),c.a.createElement("input",Object.assign({name:"jobTitle",maxLength:"50",type:"text"},t))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Job Description"),c.a.createElement("textarea",Object.assign({name:"jobDescription",rows:"6",maxLength:"500"},r))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Hiring Manager Name"),c.a.createElement("input",Object.assign({name:"managerName",maxLength:"50",type:"text"},i))),c.a.createElement("div",{className:"form-input"},c.a.createElement("label",null," Hiring Manager Email"),c.a.createElement("input",Object.assign({name:"managerEmail",type:"email",maxLength:"50"},o))),c.a.createElement(m,{type:"submit"},"Add Job"))))},v=(t(18),t(19),"PROSPECT"),E={PROSPECT:"Prospect",INTERVIEWING:"Interviewing",OFFER:"Offer",REJECTED:"Rejected",ACCEPTED:"Accepted"},h=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(""),p=Object(u.a)(o,2),f=p[0],b=p[1],h=Object(n.useState)(""),j=Object(u.a)(h,2),g=j[0],N=j[1];Object(n.useEffect)(function(){y()},[f]);var O=function(){var a=Object(s.a)(l.a.mark(function a(t){var n,c;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(g){a.next=2;break}return a.abrupt("return");case 2:return n={email:g,jobId:e.jobId,stage:v},a.next=5,fetch("".concat(d,"/candidate/tag"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return c=a.sent,a.next=8,c.json();case 8:"SUCCESS"===a.sent.status&&(N(""),y());case 10:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),y=function(){var a=Object(s.a)(l.a.mark(function a(){var t,n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(d,"/candidate/list?jobId=").concat(e.jobId,"&&searchKey=").concat(f));case 2:return t=a.sent,a.next=5,t.json();case 5:"SUCCESS"===(n=a.sent).status&&i(n.data);case 7:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(l.a.mark(function e(a,t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={stage:t},e.next=3,fetch("".concat(d,"/candidate/update/stage?id=").concat(a),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:e.sent,y();case 5:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),x=Object.entries(E).map(function(e){return c.a.createElement("option",{value:e[0]},e[1])}),w=r.map(function(e,a){return[c.a.createElement("div",{key:a+"1"},e.email),c.a.createElement("div",{key:a+"2"},c.a.createElement("select",{value:e.stage,onChange:function(e){return function(e,a){var t=e.target.value;S(r[a].id,t)}(e,a)}},x))]});return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"form-input margin-15"},c.a.createElement("input",{type:"email",className:"tag-input",placeholder:"Candidate Email To Tag",name:"tag",value:g,onChange:function(e){return N(e.target.value)}}),c.a.createElement(m,{className:"tag-button",onClick:O},"@Tag")),c.a.createElement("div",{className:"form-input"},c.a.createElement("input",{type:"text",value:f,onChange:function(e){var a=e.target.value;b(a)},placeholder:"Search for candidate by email, stage",className:"tag-input"})),c.a.createElement("div",{className:"candidate-table"},c.a.createElement("div",{className:"ct-header"},"Candidate Email"),c.a.createElement("div",{className:"ct-header"},"Stage"),w))},j=(t(20),function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],i=t[1];Object(n.useEffect)(function(){o()},[e]);var o=function(){var a=Object(s.a)(l.a.mark(function a(){var t,n,c;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(d,"/candidate/dashboard/").concat(e.jobId));case 2:return t=a.sent,a.next=5,t.json();case 5:"SUCCESS"===(n=a.sent).status&&(c={},n.data.map(function(e){c[e._id.stage]=e.count}),i(c));case 7:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}(),m=[];for(var p in E){var f=c.a.createElement("div",{className:"badge"},E[p],c.a.createElement("span",{className:"count"},r[p]?r[p]:0));m.push(f)}return c.a.createElement("div",{className:"dcontainer"},m)}),g=(t(21),function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),r=t[0],i=t[1];return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"collapsible",onClick:function(){i(!r)}},e.header,c.a.createElement("span",{className:"arrow"},r?"\u2bc5":"\u2bc6")),c.a.createElement("div",{className:r?"display-block":"display-none"},e.children))}),N=function(e){var a=Object(n.useState)({companyName:"",jobTitle:"",jobDescription:"",hiringManagerName:"",hiringManagerEmail:""}),t=Object(u.a)(a,2),r=t[0],i=t[1];Object(n.useEffect)(function(){o()},[e]);var o=function(){var a=Object(s.a)(l.a.mark(function a(){var t,n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(d,"/job/detail/").concat(e.jobId));case 2:return t=a.sent,a.next=5,t.json();case 5:"SUCCESS"===(n=a.sent).status&&i(n.data);case 7:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement("a",{href:"#",onClick:e.goToJobScreen},"Back")),c.a.createElement(g,{id:"collapse1",header:"Dashboard"},c.a.createElement(j,{jobId:e.jobId})),c.a.createElement(g,{header:"Job Details"},c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"label"},"Company Name:"),c.a.createElement("div",{className:"text-value"},r.companyName),c.a.createElement("div",{className:"label"},"Title:"),c.a.createElement("div",{className:"text-value"},r.jobTitle),c.a.createElement("div",{className:"label"},"Description:"),c.a.createElement("div",{className:"text-value"},r.jobDescription),c.a.createElement("div",{className:"label"},"HR Name:"),c.a.createElement("div",{className:"text-value"},r.hiringManagerName),c.a.createElement("div",{className:"label"},"HR Email:"),c.a.createElement("div",{className:"text-value"},r.hiringManagerEmail))),c.a.createElement(h,{jobId:e.jobId})))};var O=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!0),o=Object(u.a)(i,2),m=o[0],d=o[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),E=v[0],h=v[1],j=Object(n.useState)(""),g=Object(u.a)(j,2),O=g[0],y=g[1],S=function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d(!1),h(!1),r(!0);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h(!1),r(!1),d(!0);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark(function e(a){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(a),r(!1),d(!1),h(!0);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",null,E&&c.a.createElement(N,{jobId:O,goToJobScreen:x}),t&&c.a.createElement(b,{goToJobScreen:x}),m&&c.a.createElement(p,{goToAddJobScreen:S,goToJobDetails:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.5a3e4599.chunk.js.map