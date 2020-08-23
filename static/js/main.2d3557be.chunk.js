(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(t,e,a){},103:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(8),o=a.n(c);a(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,l,s=a(21),u=a(27),d=a(30),f=a(11),m=a(146),T=a(60),b=a.n(T).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"3de0712e-e19a-4637-bf5e-355c7a8ad46c"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.High=2]="High",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var O=function(){return b.get("todo-lists")},k=function(t){return b.post("todo-lists",{title:t})},E=function(t){return b.delete("todo-lists/".concat(t))},v=function(t,e){return b.put("todo-lists/".concat(t),{title:e})},h=function(t){return b.get("todo-lists/".concat(t,"/tasks"))},p=function(t,e){return b.post("todo-lists/".concat(t,"/tasks"),{title:e})},L=function(t,e){return b.delete("todo-lists/".concat(t,"/tasks/").concat(e))},g=function(t,e,a){return b.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},j=(Object(m.a)(),Object(m.a)(),[]),C=a(38),I={},S=function(t,e,a){return function(n,i){var c=i().tasks[a].find((function(e){return e.id===t}));if(c){var o=Object(f.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);g(a,t,o).then((function(i){n(function(t,e,a){return{type:"UPDATE-TASK",id:t,model:e,todoListId:a}}(t,e,a))}))}else console.warn("Task is not found in the state")}},D=a(61),y=Object(u.c)({todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var a=Object(f.a)(Object(f.a)({},e.todoList),{},{filter:"all"});return[a].concat(Object(d.a)(t));case"CHANGE-TODOLIST-TITLE":var n=t.find((function(t){return t.id===e.id}));return n&&(n.title=e.title),Object(d.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.value),Object(d.a)(t);case"SET-TODOLISTS":return e.todoLists.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{filter:"all"})}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var a=Object(f.a)({},t),n=t[e.todoListId],i=n.filter((function(t){return e.id!==t.id}));return a[e.todoListId]=i,a;case"ADD-TASK":var c=Object(f.a)({},t),o=e.task,r=c[o.todoListId],l=[o].concat(Object(d.a)(r));return c[o.todoListId]=l,c;case"UPDATE-TASK":var s=t[e.todoListId],u=s.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),e.model):t}));return t[e.todoListId]=u,Object(f.a)({},t);case"ADD-TODOLIST":return Object(f.a)(Object(f.a)({},t),{},Object(C.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var m=Object(f.a)({},t);return delete m[e.id],m;case"SET-TODOLISTS":var T=Object(f.a)({},t);return e.todoLists.forEach((function(t){T[t.id]=[]})),T;case"SET-TASKS":var b=Object(f.a)({},t);return b[e.todoListId]=e.tasks,b;default:return t}}}),_=Object(u.d)(y,Object(u.a)(D.a));window.store=_;a(102);var A=a(31),w=a(39),x=a.n(w),F=a(144),N=a(134),K=a(135),R=i.a.memo((function(t){console.log("AddItemForm");var e=Object(n.useState)(""),a=Object(A.a)(e,2),c=a[0],o=a[1],r=Object(n.useState)(null),l=Object(A.a)(r,2),s=l[0],u=l[1],d=function(){o(""),""!==c.trim()?t.addItem(c):u("Title is required")};return i.a.createElement("div",null,i.a.createElement(F.a,{id:"standard-basic",label:"Type text",error:!!s,helperText:s,onKeyPress:function(t){null!==s&&u(null),13===t.charCode&&d()},onChange:function(t){null!==s&&u(null),o(t.currentTarget.value)},value:c}),i.a.createElement(N.a,{color:"primary",className:x.a.add_btn,onClick:d},i.a.createElement(K.a,null)))})),M=i.a.memo((function(t){console.log("editableSpan");var e=Object(n.useState)(!1),a=Object(A.a)(e,2),c=a[0],o=a[1],r=Object(n.useState)(""),l=Object(A.a)(r,2),s=l[0],u=l[1];return i.a.createElement(i.a.Fragment,null,c?i.a.createElement(F.a,{autoFocus:!0,value:s,onChange:function(t){return u(t.currentTarget.value)},onBlur:function(){o(!1),s.trim()?t.onChangeTitle(s):u(t.title)}}):i.a.createElement("span",{onDoubleClick:function(){u(t.title),o(!0)}},t.title))})),P=a(137),H=a(136),U=a(145),G=i.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todoListId)}),[t.removeTask,t.task.id,t.todoListId]),a=Object(n.useCallback)((function(e){return t.changeTaskStatus(t.task.id,e.currentTarget.checked?r.Completed:r.New,t.todoListId)}),[t.changeTaskStatus,t.task.id,t.todoListId]),c=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListId)}),[t.changeTaskTitle,t.task.id,t.todoListId]);return i.a.createElement("div",{className:"completed"!==t.filter&&t.task.status===r.Completed?x.a.is_done:""},i.a.createElement(U.a,{checked:t.task.status===r.Completed,onChange:a,value:"checkedA",inputProps:{"aria-label":"Checkbox A"}}),i.a.createElement(M,{title:t.task.title,onChangeTitle:c}),i.a.createElement(N.a,{onClick:e,"aria-label":"delete"},i.a.createElement(H.a,null)))})),V=i.a.memo((function(t){console.log("todoList");var e=Object(s.b)();Object(n.useEffect)((function(){var a;e((a=t.id,function(t){h(a).then((function(e){t(function(t,e){return{type:"SET-TASKS",tasks:t,todoListId:e}}(e.data.items,a))}))}))}),[]);var a=Object(n.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),c=Object(n.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),o=Object(n.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),l=Object(n.useCallback)((function(){return t.removeTodoList(t.id)}),[t.removeTodoList,t.id]),u=Object(n.useCallback)((function(e){return t.changeTodoListTitle(t.id,e)}),[t.changeTodoListTitle,t.id]),d=Object(n.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),f=t.tasks;return"active"===t.filter&&(f=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.filter&&(f=t.tasks.filter((function(t){return t.status===r.Completed}))),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(M,{title:t.title,onChangeTitle:u}),i.a.createElement(N.a,{onClick:l,"aria-label":"delete"},i.a.createElement(H.a,null))),i.a.createElement(R,{addItem:d}),i.a.createElement("div",null,f.map((function(e){return i.a.createElement(G,{key:e.id,task:e,changeTaskStatus:t.changeTaskStatus,changeTaskTitle:t.changeTaskTitle,filter:t.filter,removeTask:t.removeTask,todoListId:t.id})}))),i.a.createElement("div",null,i.a.createElement(P.a,{variant:"all"===t.filter?"contained":"text",onClick:a},"All"),i.a.createElement(P.a,{color:"primary",variant:"active"===t.filter?"contained":"text",onClick:c},"Active"),i.a.createElement(P.a,{color:"secondary",variant:"completed"===t.filter?"contained":"text",onClick:o},"Completed")))})),B=a(138),q=a(139),Y=a(141),z=a(142),J=a(143),W=a(104),X=a(140),$=i.a.memo((function(){console.log("App");var t=Object(s.c)((function(t){return t.todoLists})),e=Object(s.c)((function(t){return t.tasks})),a=Object(s.b)();Object(n.useEffect)((function(){a((function(t){O().then((function(e){t({type:"SET-TODOLISTS",todoLists:e.data})}))}))}),[]);var c=Object(n.useCallback)((function(t,e){a(function(t,e){return{type:"CHANGE-TODOLIST-FILTER",id:t,value:e}}(e,t))}),[a]),o=Object(n.useCallback)((function(t){var e,n=(e=t,function(t){E(e).then((function(a){t({type:"REMOVE-TODOLIST",id:e})}))});a(n)}),[a]),r=Object(n.useCallback)((function(t){var e,n=(e=t,function(t){k(e).then((function(e){t({type:"ADD-TODOLIST",todoList:e.data.data.item})}))});a(n)}),[a]),l=Object(n.useCallback)((function(t,e){a(function(t,e){return function(a){v(t,e).then((function(n){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e))}),[a]),u=Object(n.useCallback)((function(t,e){a(function(t,e){return function(a){p(t,e).then((function(t){a({type:"ADD-TASK",task:t.data.data.item})}))}}(e,t))}),[a]),d=Object(n.useCallback)((function(t,e){a(function(t,e){return function(a){L(t,e).then((function(n){a(function(t,e){return{type:"REMOVE-TASK",id:t,todoListId:e}}(e,t))}))}}(e,t))}),[a]),f=Object(n.useCallback)((function(t,e,n){a(S(t,{title:e},n))}),[a]),m=Object(n.useCallback)((function(t,e,n){a(S(t,{status:e},n))}),[a]);return i.a.createElement("div",{className:"App"},i.a.createElement(B.a,{position:"static"},i.a.createElement(q.a,null,i.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(X.a,null)),i.a.createElement(Y.a,{variant:"h6"},"News"),i.a.createElement(P.a,{color:"inherit"},"Login"))),i.a.createElement(z.a,{fixed:!0},i.a.createElement(J.a,{container:!0,style:{padding:"10px"}},i.a.createElement(R,{addItem:r})),i.a.createElement(J.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return i.a.createElement(J.a,{key:t.id,item:!0},i.a.createElement(W.a,{style:{padding:"10px"}},i.a.createElement(V,{key:t.id,id:t.id,title:t.title,tasks:a,filter:t.filter,changeFilter:c,removeTodoList:o,changeTodoListTitle:l,addTask:u,removeTask:d,changeTaskTitle:f,changeTaskStatus:m})))})))))}));o.a.render(i.a.createElement(s.a,{store:_},i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},39:function(t,e,a){t.exports={error:"ToDoList_error__q9bxq",error_message:"ToDoList_error_message__uv9gU",add_btn:"ToDoList_add_btn__3pzOX",filter_btn:"ToDoList_filter_btn__18yEB",active_filter:"ToDoList_active_filter__z5aGl",is_done:"ToDoList_is_done__1LYDY"}},74:function(t,e,a){t.exports=a(103)},79:function(t,e,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.2d3557be.chunk.js.map