(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navbar"),a("v-content",[a("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("v-toolbar",[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("i",{staticClass:"material-icons"},[t._v(" reorder ")])])],1),a("v-spacer"),a("v-toolbar-title",[a("v-btn",{attrs:{text:"",to:"/home"}},[t._v("VueShop ")])],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",to:"/search"},on:{click:function(e){e.stopPropagation(),t.searchIcon=!t.searchIcon}}},[a("i",{staticClass:"material-icons"},[t._v(" search ")])]),a("v-btn",{attrs:{text:""}},[a("i",{staticClass:"material-icons"},[t._v(" shopping_cart ")])]),a("v-btn",{attrs:{text:"",to:"/login"}},[a("i",{staticClass:"material-icons"},[t._v(" perm_identity ")])])],1),a("v-spacer")],1),a("v-sheet",[a("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://i.stack.imgur.com/l60Hf.png"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Welcome, guest")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{link:"",to:"/home"}},[a("v-list-item-icon",[a("v-icon",[t._v("dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Home")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("shopping_cart")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Shopping cart")])],1)],1),a("v-list-item",{attrs:{link:"",to:"/search"}},[a("v-list-item-icon",[a("v-icon",[t._v("search")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Search")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{link:""},on:{click:t.logout}},[a("v-list-item-icon",[a("v-icon",[t._v("logout")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)],1)],1)},s=[],c=(a("ac1f"),a("5319"),a("8aa5")),l=a.n(c),d={name:"Navbar",data:function(){return{user:"",drawer:null,searchIcon:null}},methods:{logout:function(){var t=this;l.a.auth().signOut().then((function(){return t.$router.replace("login")}))}}},u=d,v=a("2877"),p=a("6544"),m=a.n(p),h=a("8336"),f=a("ce7e"),b=a("132d"),g=a("adda"),_=a("8860"),x=a("da13"),y=a("8270"),w=a("5d23"),V=a("34c3"),C=a("f774"),P=a("8dd9"),k=a("2fa4"),S=a("71d9"),E=a("2a7f"),I=Object(v["a"])(u,i,s,!1,null,"42b7176c",null),j=I.exports;m()(I,{VBtn:h["a"],VDivider:f["a"],VIcon:b["a"],VImg:g["a"],VList:_["a"],VListItem:x["a"],VListItemAvatar:y["a"],VListItemContent:w["a"],VListItemIcon:V["a"],VListItemTitle:w["b"],VNavigationDrawer:C["a"],VSheet:P["a"],VSpacer:k["a"],VToolbar:S["a"],VToolbarItems:E["a"],VToolbarTitle:E["b"]});var O={name:"App",components:{navbar:j}},T=O,A=a("7496"),B=a("a75b"),L=Object(v["a"])(T,o,n,!1,null,null,null),$=L.exports;m()(L,{VApp:A["a"],VContent:B["a"]});var R=a("f309");r["a"].use(R["a"]);var D=new R["a"]({}),F=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-select",{attrs:{items:t.categoryProducts,label:"Sort by categories",multiple:""},model:{value:t.categorySelect,callback:function(e){t.categorySelect=e},expression:"categorySelect"}})],1)],1),t._l(t.products,(function(e){return a("v-layout",{key:e.name,staticClass:"my-5",staticStyle:{height:"auto"},attrs:{"justify-center":"center"}},[a("v-card",{attrs:{width:"400px"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.image_url,height:"400px",width:"400px"}}),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.brand))]),a("v-card-title",{staticClass:"py-0"},[t._v(t._s(e.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",{staticClass:"pb-1"}),a("div",[t._v("Price: "+t._s(e.price)+" zł")])]),a("v-card-actions",[a("v-btn",{attrs:{color:"green",text:""}},[a("v-icon",[t._v("shopping_cart")]),t._v(" Add to cart ")],1)],1)],1)],1)}))],2)},M=[],W=(a("a4d3"),a("e01a"),a("4160"),a("b0c0"),a("159b"),a("e71f"),{apiKey:"AIzaSyBLiVXnJyj5MP_LfRIp_d9JF_0ufKQEa8Q",authDomain:"uczelnia-bbbc6.firebaseapp.com",databaseURL:"https://uczelnia-bbbc6.firebaseio.com",projectId:"uczelnia-bbbc6",storageBucket:"uczelnia-bbbc6.appspot.com",messagingSenderId:"531838899222"}),G=l.a.initializeApp(W),N=G.firestore(),J={name:"home",data:function(){return{products:[],categoryProducts:["Brush","Dryer","Glass","Shampoo","Sponge","Tires","Wax"],categorySelect:""}},created:function(){var t=this;N.collection("products").get().then((function(e){e.forEach((function(e){var a={id:e.id,brand:e.data().brand,category:e.data().category,description:e.data().description,image_url:e.data().image_url,name:e.data().name,price:e.data().price};t.products.push(a)}))}))}},K=J,U=a("b0af"),H=a("99d9"),Q=a("62ad"),X=a("a523"),q=a("a722"),Y=a("0fd9"),Z=a("b974"),tt=Object(v["a"])(K,z,M,!1,null,"6c125f6f",null),et=tt.exports;m()(tt,{VBtn:h["a"],VCard:U["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCardTitle:H["d"],VCol:Q["a"],VContainer:X["a"],VIcon:b["a"],VImg:g["a"],VLayout:q["a"],VRow:Y["a"],VSelect:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400"}},[a("v-card-title",[a("h1",[t._v("Login")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"E-Mail","prepend-icon":"mdi-account-circle"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"success",to:"/register"}},[t._v("Register ")]),a("v-btn",{attrs:{color:"info"},on:{click:t.login}},[t._v("Login ")])],1)],1)],1)],1)},rt=[],ot={name:"login",data:function(){return{email:"",password:"",loginAlert:"",showPassword:!1}},methods:{login:function(){var t=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){t.$router.replace("crud")}),(function(t){alert("Błąd. "+t.message)}))}}},nt=ot,it=a("4bd4"),st=a("8654"),ct=Object(v["a"])(nt,at,rt,!1,null,"59d6fa1c",null),lt=ct.exports;m()(ct,{VBtn:h["a"],VCard:U["a"],VCardActions:H["a"],VCardText:H["c"],VCardTitle:H["d"],VContainer:X["a"],VDivider:f["a"],VForm:it["a"],VLayout:q["a"],VTextField:st["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400"}},[a("v-card-title",[a("h1",[t._v("Register")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"E-Mail","prepend-icon":"mdi-account-circle"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"info"},on:{click:t.register}},[t._v("Register ")]),a("v-btn",{attrs:{color:"secondary",to:"/login"}},[t._v("Back ")])],1)],1)],1)],1)},ut=[],vt={name:"register",data:function(){return{email:"",password:"",showPassword:!1}},methods:{register:function(){l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){alert("Konto zostało założone pomyślnie"),this.$router.replace("login")}),(function(t){alert("Błąd. "+t.message)}))}},mounted:function(){}},pt=vt,mt=Object(v["a"])(pt,dt,ut,!1,null,"36d78bdf",null),ht=mt.exports;m()(mt,{VBtn:h["a"],VCard:U["a"],VCardActions:H["a"],VCardText:H["c"],VCardTitle:H["d"],VContainer:X["a"],VDivider:f["a"],VForm:it["a"],VLayout:q["a"],VTextField:st["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",[t._v("Add new product")])]),a("v-col",{attrs:{cols:"10",md:"7"}}),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-text-field",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-select",{attrs:{items:t.brand,label:"Brand"},model:{value:t.selectedBrand,callback:function(e){t.selectedBrand=e},expression:"selectedBrand"}})],1),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-text-field",{attrs:{label:"Price",prefix:"PLN",type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-select",{attrs:{items:t.category,label:"Category"},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}})],1),a("v-col",{attrs:{cols:"10",md:"7"}},[a("v-text-field",{attrs:{label:"Image URL"},model:{value:t.image_url,callback:function(e){t.image_url=e},expression:"image_url"}})],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-btn",{attrs:{color:"green",dark:"",type:"submit"},on:{click:t.addProduct}},[t._v("Add product ")])],1),t.showError?a("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Error! ")]):t._e(),t.showSuccess?a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" Product was added ")]):t._e()],1)],1)],1)},bt=[],gt={name:"addProduct",data:function(){return{name:"",brand:["ADBL","Vikan","Work_Stuff","Monster_Shine","Madness","CarPRO","CARTEC","Shiny Garage","Angerlwax","Chemical Guys","Swissvax","Nielsen","GOOD Stuff","Soft99"],description:"",price:null,category:["Brush","Dryer","Glass","Shampoo","Sponge","Tires","Wax"],image_url:"",selectedCategory:"",selectedBrand:"",showSuccess:null,showError:null}},methods:{addProduct:function(){var t=this;N.collection("products").doc().set({name:this.name,brand:this.selectedBrand,description:this.description,price:this.price,category:this.selectedCategory,image_url:this.image_url}).then((function(){t.showSuccess=!0}),(function(e){t.showError=e.message}))}}},_t=gt,xt=a("0798"),yt=a("a844"),wt=Object(v["a"])(_t,ft,bt,!1,null,"59f5a35d",null),Vt=wt.exports;m()(wt,{VAlert:xt["a"],VBtn:h["a"],VCol:Q["a"],VContainer:X["a"],VForm:it["a"],VRow:Y["a"],VSelect:Z["a"],VTextField:st["a"],VTextarea:yt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-col",{attrs:{cols:"12"}},[t.showError?a("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Error! ")]):t._e(),t.showSuccess?a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" Product deleted ")]):t._e()],1),a("v-row",t._l(t.products,(function(e){return a("v-layout",{key:e.name,staticClass:"my-5",attrs:{"align-center":""}},[a("v-card",{staticClass:"mx-auto",attrs:{width:"400px"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.image_url,height:"400px",width:"400px"}}),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.brand))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(e.name))]),a("div",[t._v("Cena: "+t._s(e.price)+" zł")])]),a("v-card-actions",[a("v-btn",{attrs:{color:"blue",text:"",type:"submit"}},[a("v-icon",[t._v("edit")]),t._v(" Edit ")],1)],1)],1)],1)})),1)],1)},Pt=[],kt={name:"editProduct",data:function(){return{products:[]}},created:function(){var t=this;N.collection("products").get().then((function(e){e.forEach((function(e){var a={id:e.id,brand:e.data().brand,category:e.data().category,description:e.data().description,image_url:e.data().image_url,name:e.data().name,price:e.data().price};t.products.push(a)}))}))}},St=kt,Et=Object(v["a"])(St,Ct,Pt,!1,null,"419470aa",null),It=Et.exports;m()(Et,{VAlert:xt["a"],VBtn:h["a"],VCard:U["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCol:Q["a"],VContainer:X["a"],VIcon:b["a"],VImg:g["a"],VLayout:q["a"],VRow:Y["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-col",{attrs:{cols:"12"}},[t.showError?a("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Error! ")]):t._e(),t.showSuccess?a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" Product deleted ")]):t._e()],1),a("v-row",t._l(t.products,(function(e){return a("v-layout",{key:e.name,staticClass:"my-5",attrs:{"align-center":""}},[a("v-card",{staticClass:"mx-auto",attrs:{width:"400px"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.image_url,height:"400px",width:"400px"}}),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.brand))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(e.name))]),a("div",[t._v("Cena: "+t._s(e.price)+" zł")])]),a("v-card-actions",[a("v-btn",{attrs:{color:"red",text:"",type:"submit"},on:{click:function(a){return t.deleteProduct(e.id)}}},[a("v-icon",[t._v("delete")]),t._v(" Delete ")],1)],1)],1)],1)})),1)],1)},Ot=[],Tt={name:"removeProduct",data:function(){return{products:[],showSuccess:"",showError:""}},created:function(){var t=this;N.collection("products").get().then((function(e){e.forEach((function(e){var a={id:e.id,brand:e.data().brand,category:e.data().category,description:e.data().description,image_url:e.data().image_url,name:e.data().name,price:e.data().price};t.products.push(a)}))}))},methods:{deleteProduct:function(t){var e=this;N.collection("products").doc(t).delete().then((function(){e.showSuccess=!0}),(function(t){e.showError=t.message}))}}},At=Tt,Bt=Object(v["a"])(At,jt,Ot,!1,null,"eb85c19c",null),Lt=Bt.exports;m()(Bt,{VAlert:xt["a"],VBtn:h["a"],VCard:U["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCol:Q["a"],VContainer:X["a"],VIcon:b["a"],VImg:g["a"],VLayout:q["a"],VRow:Y["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"green",text:"",to:"/addProduct"}},[a("v-icon",[t._v("add")]),t._v(" Add product ")],1),a("v-btn",{attrs:{color:"blue",to:"/editProduct",text:""}},[a("v-icon",[t._v("edit")]),t._v(" Edit product ")],1),a("v-btn",{attrs:{color:"red",text:"",to:"/deleteProduct",light:""}},[a("v-icon",[t._v("delete")]),t._v(" Delete product ")],1)],1)],1)},Rt=[],Dt={name:"crud"},Ft=Dt,zt=Object(v["a"])(Ft,$t,Rt,!1,null,"51a7b032",null),Mt=zt.exports;m()(zt,{VBtn:h["a"],VContainer:X["a"],VIcon:b["a"],VRow:Y["a"]});var Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-text-field",{on:{keyup:t.searchInput},model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}})],1),t._l(t.products,(function(e){return a("v-layout",{key:e.id},[t._v(" "+t._s(e.name)+" ")])}))],2)},Gt=[],Nt={name:"search",data:function(){return{searchField:"",products:[]}},methods:{searchInput:function(){var t=this;N.collection("products").get().then((function(e){e.forEach((function(e){var a={id:e.id,name:e.data().name};t.products.push(a)}))}))}}},Jt=Nt,Kt=Object(v["a"])(Jt,Wt,Gt,!1,null,"6f54d972",null),Ut=Kt.exports;m()(Kt,{VContainer:X["a"],VLayout:q["a"],VTextField:st["a"]}),r["a"].use(F["a"]);var Ht=new F["a"]({mode:"history",routes:[{path:"*",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/home",name:"home",component:et},{path:"/login",name:"login",component:lt},{path:"/register",name:"register",component:ht},{path:"/crud",name:"crud",component:Mt},{path:"/addproduct",name:"addProduct",component:Vt},{path:"/editproduct",name:"editProduct",component:It},{path:"/deleteProduct",name:"deleteProduct",component:Lt},{path:"/search",name:"search",component:Ut}]}),Qt=Ht;r["a"].config.productionTip=!1,new r["a"]({vuetify:D,router:Qt,render:function(t){return t($)}}).$mount("#app")}});
//# sourceMappingURL=app.6c3bafca.js.map