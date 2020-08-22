(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r);a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,l,s=a(21),d=a(27),u=a(11),T=a(30),m=a(146),f=a(60),b=a.n(f).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"3de0712e-e19a-4637-bf5e-355c7a8ad46c"}});!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(o||(o={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.High=2]="High",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var O=function(){return b.get("todo-lists")},k=function(e){return b.get("todo-lists/".concat(e,"/tasks"))},E=(Object(m.a)(),Object(m.a)(),[]),L=a(37),v={},p=a(61),h=Object(d.c)({todoLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":return[{id:t.todoListId,title:t.title,filter:"all",addedDate:"",order:0}].concat(Object(T.a)(e));case"CHANGE-TODOLIST-TITLE":var a=e.find((function(e){return e.id===t.id}));return a&&(a.title=t.title),Object(T.a)(e);case"CHANGE-TODOLIST-FILTER":var n=e.find((function(e){return e.id===t.id}));return n&&(n.filter=t.value),Object(T.a)(e);case"SET-TODOLISTS":return t.todoLists.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{filter:"all"})}));default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(u.a)({},e),n=e[t.todoListId],i=n.filter((function(e){return t.id!==e.id}));return a[t.todoListId]=i,a;case"ADD-TASK":var r=Object(u.a)({},e),c={id:Object(m.a)(),title:t.newTaskTitle,status:o.New,description:"",priority:l.Low,startDate:"",deadline:"",todoListId:t.todoListId,order:0,addedDate:""},s=[c].concat(Object(T.a)(r[t.todoListId]));return r[t.todoListId]=s,r;case"CHANGE-TASK-STATUS":var d=e[t.todoListId];return e[t.todoListId]=d.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{status:t.status}):e})),Object(u.a)({},e);case"CHANGE-TASK-TITLE":var f=e[t.todoListId];return e[t.todoListId]=f.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{title:t.title}):e})),Object(u.a)({},e);case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},e),{},Object(L.a)({},t.todoListId,[]));case"REMOVE-TODOLIST":var b=Object(u.a)({},e);return delete b[t.id],b;case"SET-TODOLISTS":var O=Object(u.a)({},e);return t.todoLists.forEach((function(e){O[e.id]=[]})),O;case"SET-TASKS":var k=Object(u.a)({},e);return k[t.todoListId]=t.tasks,k;default:return e}}}),g=Object(d.d)(h,Object(d.a)(p.a));window.store=g;a(103);var j=a(31),I=a(39),C=a.n(I),S=a(144),D=a(134),A=a(135),y=i.a.memo((function(e){console.log("AddItemForm");var t=Object(n.useState)(""),a=Object(j.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),l=Object(j.a)(o,2),s=l[0],d=l[1],u=function(){c(""),""!==r.trim()?e.addItem(r):d("Title is required")};return i.a.createElement("div",null,i.a.createElement(S.a,{id:"standard-basic",label:"Type text",error:!!s,helperText:s,onKeyPress:function(e){null!==s&&d(null),13===e.charCode&&u()},onChange:function(e){null!==s&&d(null),c(e.currentTarget.value)},value:r}),i.a.createElement(D.a,{color:"primary",className:C.a.add_btn,onClick:u},i.a.createElement(A.a,null)))})),_=i.a.memo((function(e){console.log("editableSpan");var t=Object(n.useState)(!1),a=Object(j.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),s=l[0],d=l[1];return i.a.createElement(i.a.Fragment,null,r?i.a.createElement(S.a,{autoFocus:!0,value:s,onChange:function(e){return d(e.currentTarget.value)},onBlur:function(){c(!1),s.trim()?e.onChangeTitle(s):d(e.title)}}):i.a.createElement("span",{onDoubleClick:function(){d(e.title),c(!0)}},e.title))})),w=a(137),N=a(136),x=a(145),F=i.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todoListId)}),[e.removeTask,e.task.id,e.todoListId]),a=Object(n.useCallback)((function(t){return e.changeTaskStatus(e.task.id,t.currentTarget.checked?o.Completed:o.New,e.todoListId)}),[e.changeTaskStatus,e.task.id,e.todoListId]),r=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todoListId)}),[e.changeTaskTitle,e.task.id,e.todoListId]);return i.a.createElement("div",{className:"completed"!==e.filter&&e.task.status===o.Completed?C.a.is_done:""},i.a.createElement(x.a,{checked:e.task.status===o.Completed,onChange:a,value:"checkedA",inputProps:{"aria-label":"Checkbox A"}}),i.a.createElement(_,{title:e.task.title,onChangeTitle:r}),i.a.createElement(D.a,{onClick:t,"aria-label":"delete"},i.a.createElement(N.a,null)))})),K=i.a.memo((function(e){console.log("todoList");var t=Object(s.b)();Object(n.useEffect)((function(){var a;t((a=e.id,function(e){k(a).then((function(t){e(function(e,t){return{type:"SET-TASKS",tasks:e,todoListId:t}}(t.data.items,a))}))}))}),[]);var a=Object(n.useCallback)((function(){return e.changeFilter("all",e.id)}),[e.changeFilter,e.id]),r=Object(n.useCallback)((function(){return e.changeFilter("active",e.id)}),[e.changeFilter,e.id]),c=Object(n.useCallback)((function(){return e.changeFilter("completed",e.id)}),[e.changeFilter,e.id]),l=Object(n.useCallback)((function(){return e.removeTodoList(e.id)}),[e.removeTodoList,e.id]),d=Object(n.useCallback)((function(t){return e.changeTodoListTitle(e.id,t)}),[e.changeTodoListTitle,e.id]),u=Object(n.useCallback)((function(t){e.addTask(t,e.id)}),[e.addTask,e.id]),T=e.tasks;return"active"===e.filter&&(T=e.tasks.filter((function(e){return e.status===o.New}))),"completed"===e.filter&&(T=e.tasks.filter((function(e){return e.status===o.Completed}))),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(_,{title:e.title,onChangeTitle:d}),i.a.createElement(D.a,{onClick:l,"aria-label":"delete"},i.a.createElement(N.a,null))),i.a.createElement(y,{addItem:u}),i.a.createElement("div",null,T.map((function(t){return i.a.createElement(F,{key:t.id,task:t,changeTaskStatus:e.changeTaskStatus,changeTaskTitle:e.changeTaskTitle,filter:e.filter,removeTask:e.removeTask,todoListId:e.id})}))),i.a.createElement("div",null,i.a.createElement(w.a,{variant:"all"===e.filter?"contained":"text",onClick:a},"All"),i.a.createElement(w.a,{color:"primary",variant:"active"===e.filter?"contained":"text",onClick:r},"Active"),i.a.createElement(w.a,{color:"secondary",variant:"completed"===e.filter?"contained":"text",onClick:c},"Completed")))})),H=a(138),G=a(139),R=a(141),M=a(142),U=a(143),P=a(105),V=a(140),B=i.a.memo((function(){console.log("App");var e=Object(s.c)((function(e){return e.todoLists})),t=Object(s.c)((function(e){return e.tasks})),a=Object(s.b)();Object(n.useEffect)((function(){a((function(e){O().then((function(t){e({type:"SET-TODOLISTS",todoLists:t.data})}))}))}),[]);var r=Object(n.useCallback)((function(e,t){a(function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,value:t}}(t,e))}),[a]),c=Object(n.useCallback)((function(e){var t={type:"REMOVE-TODOLIST",id:e};a(t)}),[a]),o=Object(n.useCallback)((function(e){var t={type:"ADD-TODOLIST",title:e,todoListId:Object(m.a)()};a(t)}),[a]),l=Object(n.useCallback)((function(e,t){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}),[a]),d=Object(n.useCallback)((function(e,t){a({type:"ADD-TASK",newTaskTitle:e,todoListId:t})}),[a]),u=Object(n.useCallback)((function(e,t){a(function(e,t){return{type:"REMOVE-TASK",id:e,todoListId:t}}(e,t))}),[a]),T=Object(n.useCallback)((function(e,t,n){a(function(e,t,a){return{type:"CHANGE-TASK-TITLE",id:e,title:t,todoListId:a}}(e,t,n))}),[a]),f=Object(n.useCallback)((function(e,t,n){a(function(e,t,a){return{type:"CHANGE-TASK-STATUS",id:e,status:t,todoListId:a}}(e,t,n))}),[a]);return i.a.createElement("div",{className:"App"},i.a.createElement(H.a,{position:"static"},i.a.createElement(G.a,null,i.a.createElement(D.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(V.a,null)),i.a.createElement(R.a,{variant:"h6"},"News"),i.a.createElement(w.a,{color:"inherit"},"Login"))),i.a.createElement(M.a,{fixed:!0},i.a.createElement(U.a,{container:!0,style:{padding:"10px"}},i.a.createElement(y,{addItem:o})),i.a.createElement(U.a,{container:!0,spacing:3},e.map((function(e){var a=t[e.id];return i.a.createElement(U.a,{key:e.id,item:!0},i.a.createElement(P.a,{style:{padding:"10px"}},i.a.createElement(K,{key:e.id,id:e.id,title:e.title,tasks:a,filter:e.filter,changeFilter:r,removeTodoList:c,changeTodoListTitle:l,addTask:d,removeTask:u,changeTaskTitle:T,changeTaskStatus:f})))})))))}));c.a.render(i.a.createElement(s.a,{store:g},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports={error:"ToDoList_error__q9bxq",error_message:"ToDoList_error_message__uv9gU",add_btn:"ToDoList_add_btn__3pzOX",filter_btn:"ToDoList_filter_btn__18yEB",active_filter:"ToDoList_active_filter__z5aGl",is_done:"ToDoList_is_done__1LYDY"}},75:function(e,t,a){e.exports=a(104)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.8d6baa9c.chunk.js.map