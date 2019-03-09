(function(t){function e(e){for(var n,a,c=e[0],s=e[1],d=e[2],l=0,p=[];l<c.length;l++)a=c[l],i[a]&&p.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,c=1;c<o.length;c++){var s=o[c];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),i=o.n(n);i.a},"117a":function(t,e,o){},"317f":function(t,e,o){},"35e4":function(t,e,o){},"4a0f":function(t,e,o){"use strict";var n=o("6da5"),i=o.n(n);i.a},"51b4":function(t,e,o){"use strict";var n=o("ab69"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("The App")]),o("nav",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("\n      Home\n    ")]),o("router-link",{attrs:{to:"/admin"}},[t._v("\n      Admin\n    ")]),o("router-link",{attrs:{to:"/todo"}},[t._v("\n      Todo\n    ")])],1)])},c=[],s={name:"Header"},d=s,u=(o("51b4"),o("2877")),l=Object(u["a"])(d,a,c,!1,null,"7840c342",null),p=l.exports,f={name:"App",components:{Header:p}},m=f,h=(o("034f"),Object(u["a"])(m,i,r,!1,null,null,null)),v=h.exports,b=o("8c4f"),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("GridAdapter")],1)},_=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grid-adapter"},[o("GridContainer",t._l(t.photos,function(e){return o("GridItem",{key:e.id,attrs:{height:e.height},scopedSlots:t._u([{key:"item",fn:function(t){return[o("AppImage",{attrs:{"data-src":e.post_url,signal:t.signal,height:300}})]}}])})}),1)],1)},T=[],j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grid-container"},[t._t("default")],2)},O=[],P={name:"GridContainer"},$=P,x=(o("83ee"),Object(u["a"])($,j,O,!1,null,"185d5626",null)),w=x.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"item",staticClass:"grid-item",style:t.styleObjItem},[o("div",{ref:"content",staticClass:"grid-item-content",style:t.styleObjContent},[t._t("item",null,{signal:t.getHeight})],2)])},k=[],A={name:"GridItem",data:function(){return{styleObjItem:{},styleObjContent:{}}},mounted:function(){},methods:{getHeight:function(t){var e=t.clientHeight,o=Math.ceil((e+10)/10);this.styleObjItem={gridRowEnd:"span ".concat(o)},this.styleObjContent={height:"100%"}}}},E=A,S=(o("5f00"),Object(u["a"])(E,C,k,!1,null,"5cda117e",null)),I=S.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("img",{staticClass:"AppImage",style:t.style,attrs:{"data-src":t.lazySrc,"data-srcset":t.lazySrcset}})},H=[],L=(o("c5f6"),o("5f83")),M=o.n(L),z=function t(e,o){return 0!==e.naturalHeight?o():setTimeout(function(){return t(e,o)},100)},N={name:"AppImage",props:{backgroundColor:{type:String,default:"#efefef"},height:{type:Number,default:null},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null},width:{type:Number,default:null},signal:{type:Function,default:null}},data:function(){return{loading:!0}},computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var t={backgroundColor:this.backgroundColor};this.width&&(t.width="".concat(this.width,"px"));var e=this.loading&&this.aspectRatio;return e&&(t.height=0,t.paddingTop="".concat(this.aspectRatio,"%")),t}},mounted:function(){var t=this,e=function(){t.loading=!1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",function(){t.$el.removeEventListener("load",e)});var o=M()(this.$el,{loaded:function(e){z(e,function(){return t.signal(e)})}});o.observe()}},R=N,D=(o("5e4e"),Object(u["a"])(R,G,H,!1,null,null,null)),J=D.exports,X={name:"GridAdapter",components:{GridContainer:w,GridItem:I,AppImage:J},computed:{photos:function(){return this.$store.state.photo.data}},created:function(){}},F=X,q=(o("8f05"),Object(u["a"])(F,y,T,!1,null,"bb224f72",null)),B=q.exports,K={name:"HomePage",components:{GridAdapter:B}},Q=K,U=Object(u["a"])(Q,g,_,!1,null,null,null),V=U.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("form",{on:{submit:t.addPhoto}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",name:"description",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Submit"}})]),o("ol",t._l(t.photos,function(e){return o("li",{key:e.id},[t._v("\n      "+t._s(e.description)+"\n      "),o("button",{on:{click:function(o){return t.deletePhoto(e.id)}}},[t._v("\n        X\n      ")])])}),0)])},Y=[],Z={name:"AdminPage",data:function(){return{description:""}},computed:{photos:function(){return this.$store.state.photo.temp}},created:function(){this.$store.dispatch("photo/getPhotos")},methods:{addPhoto:function(t){t.preventDefault();var e={description:this.description};this.$store.dispatch("photo/addPhoto",e),this.description=""},deletePhoto:function(t){this.$store.dispatch("photo/deletePhoto",{id:t})}}},tt=Z,et=(o("4a0f"),Object(u["a"])(tt,W,Y,!1,null,"60a9444e",null)),ot=et.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("TodoAdapter")],1)},it=[],rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-adapter"},[o("TodoAdd",{on:{"add-todo":t.addTodo}}),o("TodoList",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},at=[],ct=o("cebc"),st=o("2f62"),dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-add"},[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Submit"}})])])},ut=[],lt={name:"TodoAdd",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},pt=lt,ft=(o("ba8d"),Object(u["a"])(pt,dt,ut,!1,null,"61e324b5",null)),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},t._l(t.todos,function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})}),1)},vt=[],bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.markComplete}}),o("p",{class:{"is-complete":t.todo.completed}},[t._v("\n    "+t._s(t.todo.title)+"\n  ")]),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("\n    X\n  ")])])},gt=[],_t={name:"TodoItem",props:{todo:{type:Object,default:function(){return{}}}},methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},yt=_t,Tt=(o("aba7"),Object(u["a"])(yt,bt,gt,!1,null,"1367e257",null)),jt=Tt.exports,Ot={name:"TodoList",components:{TodoItem:jt},props:{todos:{type:Array,default:function(){return[]}}}},Pt=Ot,$t=Object(u["a"])(Pt,ht,vt,!1,null,null,null),xt=$t.exports,wt=Object(st["a"])("todo"),Ct=wt.mapActions,kt=wt.mapGetters,At={name:"TodoAdapter",components:{TodoAdd:mt,TodoList:xt},computed:Object(ct["a"])({todos:function(){return this.$store.state.todo.todos}},kt(["niceTodos"])),created:function(){this.$store.dispatch("todo/getTodos")},methods:Object(ct["a"])({},Ct(["addTodo","deleteTodo"]))},Et=At,St=(o("8448"),Object(u["a"])(Et,rt,at,!1,null,"95f57908",null)),It=St.exports,Gt={name:"TodoPage",components:{TodoAdapter:It}},Ht=Gt,Lt=(o("b033"),Object(u["a"])(Ht,nt,it,!1,null,"30e5a678",null)),Mt=Lt.exports;n["a"].use(b["a"]);var zt=new b["a"]({routes:[{path:"/",name:"home",component:V},{path:"/admin",name:"admin",component:ot},{path:"/todo",name:"todo",component:Mt}],mode:"history"}),Nt=o("75fc"),Rt=o("bc3a"),Dt=o.n(Rt),Jt={namespaced:!0,state:{todos:[]},getters:{niceTodos:function(t){return t.todos.map(function(t){return{id:t.id,title:"nice_".concat(t.title),completed:t.completed}})}},mutations:{getTodos:function(t,e){t.todos=e},addTodo:function(t,e){t.todos=[].concat(Object(Nt["a"])(t.todos),[e])},deleteTodo:function(t,e){t.todos=e}},actions:{getTodos:function(t){Dt.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){t.commit("getTodos",e.data)}).catch(function(t){return console.error(t)})},addTodo:function(t,e){var o=e.title,n=e.completed;Dt.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(e){t.commit("addTodo",e.data)}).catch(function(t){return console.error(t)})},deleteTodo:function(t,e){Dt.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(){var o=t.state.todos.filter(function(t){return t.id!==e});t.commit("deleteTodo",o)}).catch(function(t){return console.error(t)})}}},Xt=Jt,Ft={namespaced:!0,state:{data:[{id:0,post_url:"https://picsum.photos/1024/768/"},{id:1,post_url:"https://picsum.photos/768/1024/"},{id:2,post_url:"https://picsum.photos/768/768/"},{id:3,post_url:"https://picsum.photos/800/1024/"},{id:4,post_url:"https://picsum.photos/1024/1024/"},{id:5,post_url:"https://picsum.photos/1024/768/"},{id:6,post_url:"https://picsum.photos/1024/768/"}],temp:[]},mutations:{getPhotos:function(t,e){t.temp=e},addPhoto:function(t,e){t.temp=[].concat(Object(Nt["a"])(t.temp),[e])},deletePhoto:function(t,e){t.temp=e}},actions:{getPhotos:function(t){Dt.a.get("/api/photo/").then(function(e){t.commit("getPhotos",e.data)}).catch(function(t){return console.error(t)})},addPhoto:function(t,e){var o=e.description;Dt.a.post("/api/photo/",{description:o}).then(function(e){t.commit("addPhoto",e.data)}).catch(function(t){return console.error(t)})},deletePhoto:function(t,e){var o=e.id;Dt.a.delete("/api/photo/".concat(o)).then(function(){var e=t.state.temp.filter(function(t){return t.id!==o});t.commit("deletePhoto",e)}).catch(function(t){return console.error(t)})}}},qt=Ft;n["a"].use(st["b"]);var Bt=new st["b"].Store({strict:!1,modules:{todo:Xt,photo:qt}}),Kt=Bt;n["a"].config.productionTip=!1,new n["a"]({store:Kt,router:zt,render:function(t){return t(v)}}).$mount("#app")},"5e4e":function(t,e,o){"use strict";var n=o("317f"),i=o.n(n);i.a},"5f00":function(t,e,o){"use strict";var n=o("35e4"),i=o.n(n);i.a},"63c6":function(t,e,o){},"64a9":function(t,e,o){},"6da5":function(t,e,o){},7392:function(t,e,o){},"83ee":function(t,e,o){"use strict";var n=o("9c3a"),i=o.n(n);i.a},8448:function(t,e,o){"use strict";var n=o("7392"),i=o.n(n);i.a},"8f05":function(t,e,o){"use strict";var n=o("c10b"),i=o.n(n);i.a},"9c3a":function(t,e,o){},ab69:function(t,e,o){},aba7:function(t,e,o){"use strict";var n=o("b4a0"),i=o.n(n);i.a},b033:function(t,e,o){"use strict";var n=o("117a"),i=o.n(n);i.a},b4a0:function(t,e,o){},ba8d:function(t,e,o){"use strict";var n=o("63c6"),i=o.n(n);i.a},c10b:function(t,e,o){}});
//# sourceMappingURL=app.fdeb919f.js.map