(function(e){function t(t){for(var a,s,i=t[0],l=t[1],u=t[2],d=0,m=[];d<i.length;d++)s=i[d],n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("c21b"),n=o.n(a);n.a},"08f2":function(e,t,o){},"0a3a":function(e,t,o){},2175:function(e,t,o){"use strict";var a=o("f587"),n=o.n(a);n.a},3599:function(e,t,o){},"366f":function(e,t,o){},"3e69":function(e,t,o){},"3f12":function(e,t,o){"use strict";var a=o("6ee2"),n=o.n(a);n.a},"513f":function(e,t,o){},"52d3":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d"),o("7f10");var a=o("2b0e"),n=(o("f9e3"),o("2dd8"),o("9f7b"));a["a"].use(n["a"]);var r=o("a65d"),s=o.n(r);a["a"].use(s.a,{iconPack:"fontawesome",duration:3e3}),a["a"].toasted.register("defaultSuccess",function(e){return e.msg?e.msg:"Operação realizada com sucesso!"},{type:"success",icon:"check"}),a["a"].toasted.register("defaultError",function(e){return e.msg?e.msg:"Oops.. Erro inesperado."},{type:"error",icon:"times"});var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header",{attrs:{title:"Gerenciamento de Produção",hideUserDropdown:!e.user}}),o("Content"),o("Footer")],1)},l=[],u=o("2f62"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header"},[o("h1",{staticClass:"title"},[o("router-link",{attrs:{to:"/home"}},[e._v(" "+e._s(e.title))])],1),e.hideUserDropdown?e._e():o("UserDropdown")],1)},d=[],m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user-dropdown"},[o("div",{staticClass:"user-button"},[o("span",{staticClass:"d-nome"},[e._v(e._s(e.user.name))])]),o("div",{staticClass:"user-dropdown-content"},[o("router-link",{attrs:{to:"/admin"}},[e._v(" Administração ")]),o("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Sair")])],1)])},f=[],p="__usuario",v="https://teste-backend-gb.herokuapp.com";function b(e){e&&e.response&&e.response.data?a["a"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?a["a"].toasted.global.defaultError({msg:e}):a["a"].toasted.global.defaultError()}var h={name:"UserDropdown",computed:Object(u["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(p),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},g=h,_=(o("a09f"),o("2877")),C=Object(_["a"])(g,m,f,!1,null,null,null);C.options.__file="UserDropdown.vue";var w=C.exports,y={name:"Header",components:{UserDropdown:w},props:{title:String,hideUserDropdown:Boolean}},k=y,P=(o("9f34"),Object(_["a"])(k,c,d,!1,null,null,null));P.options.__file="Header.vue";var S=P.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("router-view")],1)},$=[],O={name:"Content"},A=O,j=(o("9551"),Object(_["a"])(A,x,$,!1,null,null,null));j.options.__file="Content.vue";var U=j.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},[o("span",[e._v("Copyright "),o("strong",[e._v("Geovani Bueno")]),e._v(" 2021")])])}],q={name:"Footer"},I=q,D=(o("2175"),Object(_["a"])(I,E,N,!1,null,null,null));D.options.__file="Footer.vue";var T=D.exports,F={name:"App",components:{Header:S,Content:U,Footer:T},computed:Object(u["b"])(["user"])},H=F,B=(o("034f"),Object(_["a"])(H,i,l,!1,null,null,null));B.options.__file="App.vue";var J=B.exports,M=o("bc3a"),z=o.n(M);a["a"].use(u["a"]);var G=new u["a"].Store({state:{user:null},mutations:{setUser:function(e,t){e.user=t,t?z.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token):delete z.a.defaults.headers.common["Authorization"]}}}),L=o("8c4f"),R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("PageTitle",{attrs:{main:"Pedidos",sub:"semana"}})],1)},V=[],K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-title"},[o("h1",[e._v(e._s(e.main))]),o("h2",[e._v(e._s(e.sub))]),o("hr")])},Q=[],W={name:"PageTitle",props:["main","sub"]},X=W,Y=(o("a405"),Object(_["a"])(X,K,Q,!1,null,null,null));Y.options.__file="PageTitle.vue";var Z=Y.exports,ee=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"stat"},[o("div",{staticClass:"stat-info"},[o("span",{staticClass:"stat-title"},[e._v(e._s(e.title))]),o("span",{staticClass:"stat-value"},[e._v(e._s(e.value))])])])},te=[],oe={name:"Stat",props:["title","value"],computed:{}},ae=oe,ne=(o("5b5c"),Object(_["a"])(ae,ee,te,!1,null,null,null));ne.options.__file="Stat.vue";var re=ne.exports,se={name:"Home",components:{PageTitle:Z,Stat:re},data:function(){return{user:this.user,stat:{}}},methods:{getStats:function(){var e=this;z.a.get("".concat(v,"/stats")).then(function(t){return e.stat=t.data})}}},ie=se,le=(o("b497"),Object(_["a"])(ie,R,V,!1,null,null,null));le.options.__file="Home.vue";var ue=le.exports,ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"admin-pages"},[o("PageTitle",{attrs:{main:"Administração do sistema",sub:"controle de dados"}}),o("div",{staticClass:"admin-pages-tabs"},[o("b-card",{attrs:{"no-body":""}},[o("b-tabs",{attrs:{card:""}},[o("b-tab",{attrs:{title:"Pedidos"}},[o("PedidosAdmin")],1),o("b-tab",{attrs:{title:"Clientes"}},[o("ClientesAdmin")],1),o("b-tab",{attrs:{title:"Produtos"}},[o("ProdutosAdmin")],1),"administracao"===e.user.funcao?o("b-tab",{attrs:{title:"Usuários"}},[o("UsuarioAdmin")],1):e._e()],1)],1)],1)],1)},de=[],me=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pedidos-admin"},[o("b-form",[o("b-row",[o("b-col",{attrs:{md:"5",sm:"12"}},[o("b-form-group",{attrs:{label:"Número:","label-for":"pedido-numero"}},[o("b-form-input",{attrs:{id:"pedido-numero",type:"text",required:"",placeholder:"Número do Pedido..."},model:{value:e.pedido.numero,callback:function(t){e.$set(e.pedido,"numero",t)},expression:"pedido.numero"}})],1)],1),o("b-col",{attrs:{md:"2",sm:"12"}},[o("b-form-group",{attrs:{label:"Data da Entrega:","label-for":"data-entrega"}},[o("b-form-input",{attrs:{id:"data-entrega",type:"date",required:"",placeholder:"data da Entrega..."},model:{value:e.pedido.data_entrega,callback:function(t){e.$set(e.pedido,"data_entrega",t)},expression:"pedido.data_entrega"}})],1)],1),o("b-col",{attrs:{md:"5",sm:"12"}},[o("b-form-group",{attrs:{label:"Cliente:","label-for":"pedido-cliente"}},[o("b-form-select",{attrs:{id:"pedido-cliente",required:""},model:{value:e.pedido.cliente_id,callback:function(t){e.$set(e.pedido,"cliente_id",t)},expression:"pedido.cliente_id"}},e._l(e.clientes,function(t,a){return o("option",{key:a,attrs:{title:t.name||null},domProps:{value:t.id}},[e._v("\n                      "+e._s(t.name)+"\n                      ")])}))],1)],1)],1),"save"===e.mode?o("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?o("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Salvar")]):e._e(),o("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),o("hr")],1)},fe=[],pe=o("c93e"),ve={name:"PedidosAdmin",data:function(){return{mode:"save",clientes:[],pedido:{},pedidos:[]}},methods:{loadClientes:function(){var e=this,t="".concat(v,"/clientes");z.a.get(t).then(function(t){e.clientes=t.data})},reset:function(){this.mode="save",this.cliente={},this.loadClientes()},save:function(){var e=this,t=this.pedido.numero?"put":"post",o=this.pedido.numero?"/".concat(this.pedido.numero):"";z.a[t]("".concat(v,"/pedidos").concat(o),this.pedido).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},remove:function(){var e=this,t=this.pedido.numero;z.a.delete("".concat(v,"/pedidos/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},loadCliente:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.cliente=Object(pe["a"])({},e)}},mounted:function(){this.loadClientes()}},be=ve,he=(o("dea4"),Object(_["a"])(be,me,fe,!1,null,null,null));he.options.__file="PedidosAdmin.vue";var ge=he.exports,_e=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"clientes-admin"},[o("b-form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.id,expression:"cliente.id"}],attrs:{id:"cliente-id",type:"hidden"},domProps:{value:e.cliente.id},on:{input:function(t){t.target.composing||e.$set(e.cliente,"id",t.target.value)}}}),o("b-row",[o("b-col",{attrs:{md:"5",sm:"12"}},[o("b-form-group",{attrs:{label:"Nome:","label-for":"cliente-nome"}},[o("b-form-input",{attrs:{id:"cliente-nome",type:"text",required:"",placeholder:"Informe o Nome do Cliente..."},model:{value:e.cliente.name,callback:function(t){e.$set(e.cliente,"name",t)},expression:"cliente.name"}})],1)],1),o("b-col",{attrs:{md:"2",sm:"12"}},[o("b-form-group",{attrs:{label:"Fone:","label-for":"Cliente-fone"}},[o("b-form-input",{attrs:{id:"cliente-fome",type:"text",required:"",placeholder:"Fone do Cliente..."},model:{value:e.cliente.fone,callback:function(t){e.$set(e.cliente,"fone",t)},expression:"cliente.fone"}})],1)],1),o("b-col",{attrs:{md:"5",sm:"12"}},[o("b-form-group",{attrs:{label:"Bairro:","label-for":"cliente-bairro"}},[o("b-form-input",{attrs:{id:"cliente-fone",type:"text",required:"",placeholder:"Informe o Bairro do Cliente..."},model:{value:e.cliente.bairro,callback:function(t){e.$set(e.cliente,"bairro",t)},expression:"cliente.bairro"}})],1)],1)],1),"save"===e.mode?o("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?o("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Salvar")]):e._e(),o("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),o("hr"),o("b-table",{attrs:{hover:"",small:"",striped:"",items:e.clientes,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[o("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(o){e.loadCliente(t.item)}}},[o("i",{staticClass:"fa fa-pencil"})]),o("b-button",{attrs:{variant:"danger"},on:{click:function(o){e.loadCliente(t.item,"remove")}}},[o("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Ce=[],we={name:"ClientesAdmin",data:function(){return{mode:"save",cliente:{},clientes:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"fone",label:"Telefone"},{key:"bairro",label:"Bairro",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadClientes:function(){var e=this,t="".concat(v,"/clientes");z.a.get(t).then(function(t){e.clientes=t.data})},reset:function(){this.mode="save",this.cliente={},this.loadClientes()},save:function(){var e=this,t=this.cliente.id?"put":"post",o=this.cliente.id?"/".concat(this.cliente.id):"";z.a[t]("".concat(v,"/clientes").concat(o),this.cliente).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},remove:function(){var e=this,t=this.cliente.id;z.a.delete("".concat(v,"/clientes/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},loadCliente:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.cliente=Object(pe["a"])({},e)}},mounted:function(){this.loadClientes()}},ye=we,ke=(o("3f12"),Object(_["a"])(ye,_e,Ce,!1,null,null,null));ke.options.__file="ClientesAdmin.vue";var Pe=ke.exports,Se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"produtos-admin"},[o("b-form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.produto.id,expression:"produto.id"}],attrs:{id:"produto-id",type:"hidden"},domProps:{value:e.produto.id},on:{input:function(t){t.target.composing||e.$set(e.produto,"id",t.target.value)}}}),o("b-row",[o("b-col",{attrs:{md:"3",sm:"12"}},[o("b-form-group",{attrs:{label:"Código:","label-for":"produto-codigo"}},[o("b-form-input",{attrs:{id:"produto-codigo",type:"text",required:"",placeholder:"Informe o Código do Produto..."},model:{value:e.produto.codigo,callback:function(t){e.$set(e.produto,"codigo",t)},expression:"produto.codigo"}})],1)],1),o("b-col",{attrs:{md:"9",sm:"12"}},[o("b-form-group",{attrs:{label:"Nome:","label-for":"user-nome"}},[o("b-form-input",{attrs:{id:"produto-nome",type:"text",required:"",placeholder:"Informe Nome do Produto..."},model:{value:e.produto.name,callback:function(t){e.$set(e.produto,"name",t)},expression:"produto.name"}})],1)],1)],1),"save"===e.mode?o("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?o("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Salvar")]):e._e(),o("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),o("hr"),o("b-table",{attrs:{hover:"",small:"",striped:"",items:e.produtos,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[o("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(o){e.loadProduto(t.item)}}},[o("i",{staticClass:"fa fa-pencil"})]),o("b-button",{attrs:{variant:"danger"},on:{click:function(o){e.loadProduto(t.item,"remove")}}},[o("i",{staticClass:"fa fa-trash"})])]}}])})],1)},xe=[],$e={name:"ProdutosAdmin",data:function(){return{mode:"save",produto:{},produtos:[],fields:[{key:"id",label:"ID",sortable:!0},{key:"codigo",label:"Código",sortable:!0},{key:"name",label:"Nome"},{key:"actions",label:"Ações"}]}},methods:{loadProdutos:function(){var e=this,t="".concat(v,"/materiais");z.a.get(t).then(function(t){e.produtos=t.data})},reset:function(){this.mode="save",this.produto={},this.loadProdutos()},save:function(){var e=this,t=this.produto.id?"put":"post",o=this.produto.id?"/".concat(this.produto.id):"";z.a[t]("".concat(v,"/materiais").concat(o),this.produto).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},remove:function(){var e=this,t=this.produto.id;z.a.delete("".concat(v,"/users/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},loadProduto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.produto=Object(pe["a"])({},e)}},mounted:function(){this.loadProdutos()}},Oe=$e,Ae=(o("cf1c"),Object(_["a"])(Oe,Se,xe,!1,null,null,null));Ae.options.__file="ProdutosAdmin.vue";var je=Ae.exports,Ue=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"usuario-admin"},[o("b-form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),o("b-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:"Nome:","label-for":"user-name"}},[o("b-form-input",{attrs:{id:"user-name",type:"text",required:"",placeholder:"Informe o Nome do Usuário..."},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:"Função:","label-for":"user-funcao"}},[o("b-form-input",{attrs:{id:"user-funcao",type:"text",required:"",placeholder:"Informe a Função do Usuário..."},model:{value:e.user.funcao,callback:function(t){e.$set(e.user,"funcao",t)},expression:"user.funcao"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:"Senha:","label-for":"user-password"}},[o("b-form-input",{attrs:{id:"user-password",type:"password",required:"",placeholder:"Informe a Senha do Usuário..."},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:"Confirmação da Senha:","label-for":"user-confirmPassword"}},[o("b-form-input",{attrs:{id:"user-confirmPassword",type:"password",required:"",placeholder:"Confirme a Senha do Usuário..."},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),"save"===e.mode?o("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?o("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Salvar")]):e._e(),o("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),o("hr"),o("b-table",{attrs:{hover:"",small:"",striped:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[o("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(o){e.loadUser(t.item)}}},[o("i",{staticClass:"fa fa-pencil"})]),o("b-button",{attrs:{variant:"danger"},on:{click:function(o){e.loadUser(t.item,"remove")}}},[o("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Ee=[],Ne={name:"UsuarioAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"funcao",label:"Função"},{key:"actions",label:"Ações"}]}},methods:{loadUsers:function(){var e=this,t="".concat(v,"/users");z.a.get(t).then(function(t){e.users=t.data})},reset:function(){this.mode="save",this.user={},this.loadUsers()},save:function(){var e=this,t=this.user.id?"put":"post",o=this.user.id?"/".concat(this.user.id):"";z.a[t]("".concat(v,"/users").concat(o),this.user).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},remove:function(){var e=this,t=this.user.id;z.a.delete("".concat(v,"/users/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(b)},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(pe["a"])({},e)}},mounted:function(){this.loadUsers()}},qe=Ne,Ie=(o("a6a5"),Object(_["a"])(qe,Ue,Ee,!1,null,null,null));Ie.options.__file="UsuarioAdmin.vue";var De=Ie.exports,Te={name:"AdminPages",components:{PageTitle:Z,PedidosAdmin:ge,ClientesAdmin:Pe,ProdutosAdmin:je,UsuarioAdmin:De},computed:Object(u["b"])(["user"])},Fe=Te,He=(o("9519"),Object(_["a"])(Fe,ce,de,!1,null,null,null));He.options.__file="AdminPages.vue";var Be=He.exports,Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-content"},[a("div",{staticClass:"auth-modal"},[a("img",{attrs:{src:o("cf05"),width:"200",alt:"Logo"}}),a("hr"),a("div",{staticClass:"auth-title"},[e._v(" "+e._s(e.showSignup?"Cadastro":"Login")+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),e.showSignup?a("select",{directives:[{name:"model",rawName:"v-model",value:e.user.funcao,expression:"user.funcao"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.user,"funcao",t.target.multiple?o:o[0])}}},[a("option",{attrs:{value:"administracao"}},[e._v("Administração")]),a("option",{attrs:{value:"producao"}},[e._v("Operador produção")]),a("option",{attrs:{value:"vendedor",selected:""}},[e._v("Vendedor")])]):e._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirmando Senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?a("button",{on:{click:e.signUp}},[e._v(" Registrar ")]):a("button",{on:{click:e.signIn}},[e._v(" Entrar")]),a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?a("span",[e._v("Já tem cadastro? Acesse aqui")]):a("span",[e._v("Não tem cadastro? registre-se aqui!")])])])])},Me=[],ze={name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signIn:function(){var e=this;z.a.post("".concat(v,"/signin"),this.user).then(function(t){e.$store.commit("setUser",t.data),localStorage.setItem(p,JSON.stringify(t.data)),e.$router.push({path:"/home"})}).catch(b)},signUp:function(){var e=this;z.a.post("".concat(v,"/signup"),this.user).then(function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1}).catch(b)}}},Ge=ze,Le=(o("ee68"),Object(_["a"])(Ge,Je,Me,!1,null,null,null));Le.options.__file="Auth.vue";var Re=Le.exports;a["a"].use(L["a"]);var Ve=[{name:"home",path:"/home",component:ue},{name:"adminPages",path:"/admin",component:Be},{name:"auth",path:"/",component:Re}],Ke=new L["a"]({mode:"history",routes:Ve});a["a"].config.productionTip=!1,new a["a"]({store:G,router:Ke,render:function(e){return e(J)}}).$mount("#app")},"5b5c":function(e,t,o){"use strict";var a=o("3e69"),n=o.n(a);n.a},"6eda":function(e,t,o){},"6ee2":function(e,t,o){},9519:function(e,t,o){"use strict";var a=o("366f"),n=o.n(a);n.a},9551:function(e,t,o){"use strict";var a=o("6eda"),n=o.n(a);n.a},"9f20":function(e,t,o){},"9f34":function(e,t,o){"use strict";var a=o("08f2"),n=o.n(a);n.a},a09f:function(e,t,o){"use strict";var a=o("52d3"),n=o.n(a);n.a},a405:function(e,t,o){"use strict";var a=o("dda0"),n=o.n(a);n.a},a6a5:function(e,t,o){"use strict";var a=o("513f"),n=o.n(a);n.a},b497:function(e,t,o){"use strict";var a=o("3599"),n=o.n(a);n.a},c21b:function(e,t,o){},cda6:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.af224374.png"},cf1c:function(e,t,o){"use strict";var a=o("0a3a"),n=o.n(a);n.a},dda0:function(e,t,o){},dea4:function(e,t,o){"use strict";var a=o("cda6"),n=o.n(a);n.a},ee68:function(e,t,o){"use strict";var a=o("9f20"),n=o.n(a);n.a},f587:function(e,t,o){}});
//# sourceMappingURL=app.f856fd30.js.map