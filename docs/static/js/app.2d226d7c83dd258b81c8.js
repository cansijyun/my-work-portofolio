webpackJsonp([7],{"/aLm":function(t,n){},LQo0:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"Navbar",data:function(){},methods:{getPath:function(){console.log(this.$route.path)}},watch:{}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("nav",{staticClass:"mytopbar"},[e("img",{staticClass:"background-img",attrs:{src:"static/img/navbar/color_nav_bg.jpg"}}),t._v(" "),e("ul",{staticClass:"nav-bar-right nav-menu"},[e("router-link",{attrs:{to:"/"}},[e("li",{class:{active:"home"===t.$route.name}},[t._v("首页")])]),t._v(" "),e("router-link",{attrs:{to:"/three-d"}},[e("li",{class:{active:t.$route.path.indexOf("three-d")>=0}},[t._v("三维视觉")])]),t._v(" "),e("router-link",{attrs:{to:"/website"}},[e("li",{class:{active:t.$route.path.indexOf("website")>=0}},[t._v("页面/服务器/公众号")])]),t._v(" "),e("router-link",{attrs:{to:"/data-visual"}},[e("li",{class:{active:t.$route.path.indexOf("data-visual")>=0}},[t._v("数据可视化")])])],1)])])},staticRenderFns:[]};var r=e("VU/8")(a,i,!1,function(t){e("azjk")},"data-v-269703d6",null);n.default=r.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("/5sW"),i=e("LQo0"),r={name:"Footer",data:function(){},methods:{getPath:function(){console.log(this.$route.path)}},watch:{}},o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("footer",{staticClass:"midnight-blue col-md-12",attrs:{id:"footer"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6",staticStyle:{float:"right","margin-right":"100px"}},[this._v("\n            © 2018-2022 Tsan Siyun\n          ")])])])])])}]};var c=e("VU/8")(r,o,!1,function(t){e("whul")},"data-v-5f94f207",null).exports,s={name:"App",components:{Navbar:i.default,Footer:c}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),this._v(" "),n("router-view"),this._v(" "),n("Footer")],1)},staticRenderFns:[]};var l=e("VU/8")(s,u,!1,function(t){e("/aLm")},null,null).exports,h=e("/ocq");a.a.use(h.a);var d=new h.a({routes:[{path:"/",name:"home",component:function(){return e.e(4).then(e.bind(null,"Oj/O"))}},{path:"/three-d",name:"index-three-d",component:function(t){return e.e(2).then(function(){var n=[e("zuDa")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/three-d/jump",name:"jump",component:function(t){return e.e(1).then(function(){var n=[e("RJNZ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/three-d/mini-city",name:"mini-city",component:function(t){return e.e(6).then(function(){var n=[e("Eb6g")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/three-d/china-map",name:"mall",component:function(t){return e.e(0).then(function(){var n=[e("3H1C")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/data-visual",name:"data-visual",component:function(){return e.e(5).then(e.bind(null,"A7Nk"))}},{path:"/website",name:"website",component:function(){return e.e(3).then(e.bind(null,"/jf6"))}},{path:"/nav",name:"Navbar",component:function(){return new Promise(function(t){t()}).then(e.bind(null,"LQo0"))}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:d,render:function(t){return t(l)}})},azjk:function(t,n){},whul:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.2d226d7c83dd258b81c8.js.map