(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(t,e,a){},111:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(9),c=a.n(i);a(87),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,s,l=a(17),d=a(32),u=a(7),f=a(49),m=a(161),b={status:"idle",error:null},O=function(t){return{type:"SET-ERROR",error:t}},T=function(t){return{type:"SET-STATUS",status:t}},E=a(67),L=a.n(E).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"3de0712e-e19a-4637-bf5e-355c7a8ad46c"}}),k=function(){return L.get("todo-lists")},j=function(t){return L.post("todo-lists",{title:t})},h=function(t){return L.delete("todo-lists/".concat(t))},g=function(t,e){return L.put("todo-lists/".concat(t),{title:e})},p=function(t){return L.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return L.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e){return L.delete("todo-lists/".concat(t,"/tasks/").concat(e))},C=function(t,e,a){return L.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.High=2]="High",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var I=function(t,e){t.messages.length?e(O(t.messages[0])):e(O("Entered text length must be less than 101 symbol")),e(T("failed"))},y=function(t,e){e(O(t.message?t.message:"Some error is occurred")),e(T("failed"))},D=(Object(m.a)(),Object(m.a)(),[]),A=a(26),_={},w=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var c=Object(u.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);n(T("loading")),C(a,t,c).then((function(o){0===o.data.resultCode?(n(function(t,e,a){return{type:"UPDATE-TASK",id:t,model:e,todoListId:a}}(t,e,a)),n(T("succeeded"))):I(o.data,n)})).catch((function(t){y(t,n)}))}else console.warn("Task is not found in the state")}},N=a(68),R=Object(d.c)({todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todoList),{},{filter:"all",entityStatus:"idle"})].concat(Object(f.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.value}):t}));case"SET-TODOLISTS":return e.todoLists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todoListId,t[e.todoListId].filter((function(t){return e.id!==t.id}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.task.todoListId,[e.task].concat(Object(f.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todoListId,t[e.todoListId].map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var a=Object(u.a)({},t);return delete a[e.id],a;case"SET-TODOLISTS":var n=Object(u.a)({},t);return e.todoLists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todoListId,e.tasks));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});default:return Object(u.a)({},t)}}}),F=Object(d.d)(R,Object(d.a)(N.a));window.store=F;var x=a(22),H=(a(110),a(151)),K=a(152),U=a(146),G=a(154),M=a(149),P=a(155),V=a(156),B=a(153),J=a(150),W=a(112),Y=a(35),q=a(44),Q=a.n(q),$=a(157),z=a(147),X=o.a.memo((function(t){var e=t.disabled,a=void 0!==e&&e,i=Object(x.a)(t,["disabled"]),c=Object(n.useState)(""),r=Object(Y.a)(c,2),s=r[0],l=r[1],d=Object(n.useState)(null),u=Object(Y.a)(d,2),f=u[0],m=u[1],b=function(){l(""),""!==s.trim()?i.addItem(s):m("Title is required")};return o.a.createElement("div",null,o.a.createElement($.a,{disabled:a,id:"standard-basic",label:"Type text",error:!!f,helperText:f,onKeyPress:function(t){null!==f&&m(null),13===t.charCode&&b()},onChange:function(t){null!==f&&m(null),l(t.currentTarget.value)},value:s}),o.a.createElement(U.a,{disabled:a,color:"primary",className:Q.a.add_btn,onClick:b},o.a.createElement(z.a,null)))})),Z=o.a.memo((function(t){var e=Object(n.useState)(!1),a=Object(Y.a)(e,2),i=a[0],c=a[1],r=Object(n.useState)(""),s=Object(Y.a)(r,2),l=s[0],d=s[1];return o.a.createElement(o.a.Fragment,null,i?o.a.createElement($.a,{autoFocus:!0,value:l,onChange:function(t){return d(t.currentTarget.value)},onBlur:function(){c(!1),l.trim()?t.onChangeTitle(l):d(t.title)}}):o.a.createElement("span",{onDoubleClick:function(){d(t.title),c(!0)}},t.title))})),tt=a(148),et=a(159),at=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todoListId)}),[t.removeTask,t.task.id,t.todoListId]),a=Object(n.useCallback)((function(e){return t.changeTaskStatus(t.task.id,e.currentTarget.checked?r.Completed:r.New,t.todoListId)}),[t.changeTaskStatus,t.task.id,t.todoListId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListId)}),[t.changeTaskTitle,t.task.id,t.todoListId]);return o.a.createElement("div",{className:"completed"!==t.filter&&t.task.status===r.Completed?Q.a.is_done:""},o.a.createElement(et.a,{checked:t.task.status===r.Completed,onChange:a,value:"checkedA",inputProps:{"aria-label":"Checkbox A"}}),o.a.createElement(Z,{title:t.task.title,onChangeTitle:i}),o.a.createElement(U.a,{onClick:e,"aria-label":"delete"},o.a.createElement(tt.a,null)))})),nt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(x.a)(t,["demo"]),c=Object(l.b)();Object(n.useEffect)((function(){var t;a||c((t=i.todoList.id,function(e){e(T("loading")),p(t).then((function(a){e(function(t,e){return{type:"SET-TASKS",tasks:t,todoListId:e}}(a.data.items,t)),e(T("succeeded"))}))}))}),[]);var s=Object(n.useCallback)((function(){return i.changeFilter("all",i.todoList.id)}),[i.changeFilter,i.todoList.id]),d=Object(n.useCallback)((function(){return i.changeFilter("active",i.todoList.id)}),[i.changeFilter,i.todoList.id]),u=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todoList.id)}),[i.changeFilter,i.todoList.id]),f=Object(n.useCallback)((function(){return i.removeTodoList(i.todoList.id)}),[i.removeTodoList,i.todoList.id]),m=Object(n.useCallback)((function(t){return i.changeTodoListTitle(i.todoList.id,t)}),[i.changeTodoListTitle,i.todoList.id]),b=Object(n.useCallback)((function(t){i.addTask(t,i.todoList.id)}),[i.addTask,i.todoList.id]),O=i.tasks;return"active"===i.todoList.filter&&(O=i.tasks.filter((function(t){return t.status===r.New}))),"completed"===i.todoList.filter&&(O=i.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(Z,{title:i.todoList.title,onChangeTitle:m}),o.a.createElement(U.a,{onClick:f,"aria-label":"delete",disabled:"loading"===i.todoList.entityStatus},o.a.createElement(tt.a,null))),o.a.createElement(X,{addItem:b,disabled:"loading"===i.todoList.entityStatus}),o.a.createElement("div",null,O.map((function(t){return o.a.createElement(at,{key:t.id,task:t,changeTaskStatus:i.changeTaskStatus,changeTaskTitle:i.changeTaskTitle,filter:i.todoList.filter,removeTask:i.removeTask,todoListId:i.todoList.id})}))),o.a.createElement("div",null,o.a.createElement(M.a,{variant:"all"===i.todoList.filter?"contained":"text",onClick:s},"All"),o.a.createElement(M.a,{color:"primary",variant:"active"===i.todoList.filter?"contained":"text",onClick:d},"Active"),o.a.createElement(M.a,{color:"secondary",variant:"completed"===i.todoList.filter?"contained":"text",onClick:u},"Completed")))})),ot=function(t){var e=t.demo,a=void 0!==e&&e,i=(Object(x.a)(t,["demo"]),Object(l.c)((function(t){return t.todoLists}))),c=Object(l.c)((function(t){return t.tasks})),r=Object(l.b)();Object(n.useEffect)((function(){a||r((function(t){t(T("loading")),k().then((function(e){t({type:"SET-TODOLISTS",todoLists:e.data}),t(T("succeeded"))}))}))}),[]);var s=Object(n.useCallback)((function(t,e){r(function(t,e){return{type:"CHANGE-TODOLIST-FILTER",id:t,value:e}}(e,t))}),[r]),d=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(T("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),h(e).then((function(a){t({type:"REMOVE-TODOLIST",id:e}),t(T("succeeded"))}))});r(a)}),[r]),u=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(T("loading")),j(e).then((function(e){0===e.data.resultCode?(t({type:"ADD-TODOLIST",todoList:e.data.data.item}),t(T("succeeded"))):I(e.data,t)})).catch((function(e){y(e,t)}))});r(a)}),[r]),f=Object(n.useCallback)((function(t,e){r(function(t,e){return function(a){g(t,e).then((function(n){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e))}),[r]),m=Object(n.useCallback)((function(t,e){r(function(t,e){return function(a){a(T("loading")),v(t,e).then((function(t){0===t.data.resultCode?(a({type:"ADD-TASK",task:t.data.data.item}),a(T("succeeded"))):I(t.data,a)})).catch((function(t){y(t,a)}))}}(e,t))}),[r]),b=Object(n.useCallback)((function(t,e){r(function(t,e){return function(a){a(T("loading")),S(t,e).then((function(n){a(function(t,e){return{type:"REMOVE-TASK",id:t,todoListId:e}}(e,t)),a(T("succeeded"))}))}}(e,t))}),[r]),O=Object(n.useCallback)((function(t,e,a){r(w(t,{title:e},a))}),[r]),E=Object(n.useCallback)((function(t,e,a){r(w(t,{status:e},a))}),[r]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{container:!0,style:{padding:"10px"}},o.a.createElement(X,{addItem:u})),o.a.createElement(J.a,{container:!0,spacing:3},i.map((function(t){var e=c[t.id];return o.a.createElement(J.a,{key:t.id,item:!0},o.a.createElement(W.a,{style:{padding:"10px"}},o.a.createElement(nt,{key:t.id,todoList:t,tasks:e,changeFilter:s,removeTodoList:d,changeTodoListTitle:f,addTask:m,removeTask:b,changeTaskTitle:O,changeTaskStatus:E,demo:a})))}))))},it=a(162),ct=a(158);function rt(t){return o.a.createElement(ct.a,Object.assign({elevation:6,variant:"filled"},t))}function st(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),a=function(t,a){"clickaway"!==a&&e(O(null))},n=null!==t;return o.a.createElement(it.a,{open:n,autoHideDuration:3e3,onClose:a},o.a.createElement(rt,{onClose:a,severity:"error"},t))}var lt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,n=(Object(x.a)(t,["demo"]),Object(l.c)((function(t){return t.app.status})));return o.a.createElement("div",{className:"App"},o.a.createElement(st,null),o.a.createElement(H.a,{position:"static"},o.a.createElement(K.a,null,o.a.createElement(U.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(B.a,null)),o.a.createElement(G.a,{variant:"h6"},"News"),o.a.createElement(M.a,{color:"inherit"},"Login")),"loading"===n&&o.a.createElement(P.a,null)),o.a.createElement(V.a,{fixed:!0},o.a.createElement(ot,{demo:a})))}));c.a.render(o.a.createElement(l.a,{store:F},o.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},44:function(t,e,a){t.exports={error:"ToDoList_error__2_s7a",error_message:"ToDoList_error_message__2wJHE",add_btn:"ToDoList_add_btn__15G-N",filter_btn:"ToDoList_filter_btn__2gnWH",active_filter:"ToDoList_active_filter__3hqwS",is_done:"ToDoList_is_done__1wQHF"}},82:function(t,e,a){t.exports=a(111)},87:function(t,e,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.fa05688d.chunk.js.map