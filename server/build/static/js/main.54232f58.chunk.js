(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var r=n(3),c=n.n(r),a=n(18),s=n.n(a),o=(n(24),n(5)),i=(n(25),n(1)),u=n.n(i),d=n(19),l=n(4),j=n(7),b=n.n(j),p="/api/todos",f=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(p);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post(p,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.delete("".concat(p,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(l.a)(u.a.mark((function t(e,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.put("".concat(p,"/").concat(e),n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=n(0),m=function(t){var e=t.todos,n=t.setTodos,c=Object(r.useState)(""),a=Object(o.a)(c,2),s=a[0],i=a[1],j=function(){var t=Object(l.a)(u.a.mark((function t(r){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.preventDefault(),c={description:s},t.next=5,h(c);case 5:a=t.sent,n([].concat(Object(d.a)(e),[a])),i(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"text-center mt-5",children:"Pern Todo List"}),Object(O.jsxs)("form",{className:"d-flex mt-5",onSubmit:j,children:[Object(O.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(t){return i(t.target.value)},required:!0}),Object(O.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},g=function(t){var e=t.todo,n=t.todos,c=t.setTodos,a=Object(r.useState)(e.description),s=Object(o.a)(a,2),i=s[0],d=s[1],j=function(){var t=Object(l.a)(u.a.mark((function t(r){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.preventDefault(),a={description:i},t.next=5,v(e.todo_id,a);case 5:s=t.sent,c(n.map((function(t){return t.todo_id!==e.todo_id?t:s}))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(O.jsx)("div",{class:"modal",id:"id".concat(e.todo_id),children:Object(O.jsx)("div",{class:"modal-dialog",children:Object(O.jsxs)("div",{class:"modal-content",children:[Object(O.jsxs)("div",{class:"modal-header",children:[Object(O.jsx)("h4",{class:"modal-title",children:"Edit Todo"}),Object(O.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",onClick:function(){return d(e.description)},children:"\xd7"})]}),Object(O.jsx)("div",{class:"modal-body",children:Object(O.jsx)("input",{type:"text",className:"form-control",value:i,onChange:function(t){return d(t.target.value)}})}),Object(O.jsxs)("div",{class:"modal-footer",children:[Object(O.jsx)("button",{type:"button",class:"btn btn-warning","data-dismiss":"modal",onClick:function(t){return j(t)},children:"Edit"}),Object(O.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return d(e.description)},children:"Close"})]})]})})})]})},w=function(t){var e=t.todos,n=t.setTodos;Object(r.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[n]);var c=function(){var t=Object(l.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(r);case 3:n(e.filter((function(t){return t.todo_id!==r}))),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsxs)("table",{className:"table mt-5 text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Edit"}),Object(O.jsx)("th",{children:"Delete"})]})}),Object(O.jsx)("tbody",{children:e.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.description}),Object(O.jsx)("td",{children:Object(O.jsx)(g,{todo:t,todos:e,setTodos:n})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(t.todo_id)},children:"Delete"})})]},t.todo_id)}))})]})})};var k=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(m,{todos:n,setTodos:c}),Object(O.jsx)(w,{todos:n,setTodos:c})]})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.54232f58.chunk.js.map