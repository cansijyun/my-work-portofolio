webpackJsonp([1],{"+kaZ":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"1W9W":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"1j1a":function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},"2KLU":function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},"2gH+":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},AA3o:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},FHEs:function(t,e,i){var n=i("+kaZ");t.exports=function(t,e){if(!n(t))return t;var i,s;if(e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;if("function"==typeof(i=t.valueOf)&&!n(s=i.call(t)))return s;if(!e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},JtRZ:function(t,e){},"P/bz":function(t,e,i){var n=i("+kaZ"),s=i("2KLU").document,r=n(s)&&n(s.createElement);t.exports=function(t){return r?s.createElement(t):{}}},RJNZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("AA3o"),s=i.n(n),r=i("xSur"),a=i.n(r),o=function(){function t(){s()(this,t),this.config={isMobile:!1,background:2631720,ground:-1,fallingSpeed:.2,cubeColor:12500670,cubeWidth:4,cubeHeight:2,cubeDeep:4,jumperColor:2302755,jumperWidth:1,jumperHeight:2,jumperDeep:1},this.score=0,this.size={width:window.innerWidth,height:window.innerHeight},this.scene=new THREE.Scene,this.cameraPos={current:new THREE.Vector3(0,0,0),next:new THREE.Vector3},this.camera=new THREE.OrthographicCamera(this.size.width/-80,this.size.width/80,this.size.height/80,this.size.height/-80,0,5e3),this.renderer=new THREE.WebGLRenderer({antialias:!0,canvas:document.querySelector("canvas")}),this.cubes=[],this.cubeStat={nextDir:""},this.jumperStat={ready:!1,xSpeed:0,ySpeed:0},this.falledStat={location:-1,distance:0},this.fallingStat={speed:.2,end:!1}}return a()(t,[{key:"init",value:function(){var t=this;this._checkUserAgent(),this._setCamera(),this._setRenderer(),this._setLight(),this._createCube(),this._createCube(),this._createJumper(),this._updateCamera();var e=this.config.isMobile?{down:"touchstart",up:"touchend"}:{down:"mousedown",up:"mouseup"},i=document.querySelector("canvas");i.addEventListener(e.down,function(){t._handleMousedown()}),i.addEventListener(e.up,function(e){t._handleMouseup()}),window.addEventListener("resize",function(){t._handleWindowResize()})}},{key:"restart",value:function(){this.score=0,this.cameraPos={current:new THREE.Vector3(0,0,0),next:new THREE.Vector3},this.fallingStat={speed:.2,end:!1};for(var t=this.cubes.length,e=0;e<t;e++)this.scene.remove(this.cubes.pop());this.scene.remove(this.jumper),this.successCallback(this.score),this._createCube(),this._createCube(),this._createJumper(),this._updateCamera()}},{key:"addSuccessFn",value:function(t){this.successCallback=t}},{key:"addFailedFn",value:function(t){this.failedCallback=t}},{key:"_checkUserAgent",value:function(){var t=navigator.userAgent;(t.match(/Android/i)||t.match(/webOS/i)||t.match(/iPhone/i)||t.match(/iPad/i)||t.match(/iPod/i)||t.match(/BlackBerry/i))&&(this.config.isMobile=!0)}},{key:"_createHelpers",value:function(){var t=new THREE.AxesHelper(10);this.scene.add(t)}},{key:"_handleWindowResize",value:function(){this._setSize(),this.camera.left=this.size.width/-80,this.camera.right=this.size.width/80,this.camera.top=this.size.height/80,this.camera.bottom=this.size.height/-80,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.width,this.size.height),this._render()}},{key:"_handleMousedown",value:function(){var t=this;!this.jumperStat.ready&&this.jumper.scale.y>.02&&(this.jumper.scale.y-=.01,this.jumperStat.xSpeed+=.004,this.jumperStat.ySpeed+=.008,this._render(this.scene,this.camera),requestAnimationFrame(function(){t._handleMousedown()}))}},{key:"_handleMouseup",value:function(){var t=this;this.jumperStat.ready=!0,this.jumper.position.y>=1?("left"===this.cubeStat.nextDir?this.jumper.position.x-=this.jumperStat.xSpeed:this.jumper.position.z-=this.jumperStat.xSpeed,this.jumper.position.y+=this.jumperStat.ySpeed,this.jumper.scale.y<1&&(this.jumper.scale.y+=.02),this.jumperStat.ySpeed-=.01,this._render(this.scene,this.camera),requestAnimationFrame(function(){t._handleMouseup()})):(this.jumperStat.ready=!1,this.jumperStat.xSpeed=0,this.jumperStat.ySpeed=0,this.jumper.position.y=1,this._checkInCube(),1===this.falledStat.location?(this.score++,this._createCube(),this._updateCamera(),this.successCallback&&this.successCallback(this.score)):this._falling())}},{key:"_fallingRotate",value:function(t){var e=this,i=this.falledStat.distance-this.config.cubeWidth/2,n="z",s=this.jumper.rotation[n]+.1,r=this.jumper.rotation[n]<Math.PI/2,a=this.config.ground+this.config.jumperWidth/2+i;if("rightTop"===t)n="x",s=this.jumper.rotation[n]-.1,r=this.jumper.rotation[n]>-Math.PI/2,this.jumper.geometry.translate.z=i;else if("rightBottom"===t)n="x",s=this.jumper.rotation[n]+.1,r=this.jumper.rotation[n]<Math.PI/2,this.jumper.geometry.translate.z=-i;else if("leftBottom"===t)n="z",s=this.jumper.rotation[n]-.1,r=this.jumper.rotation[n]>-Math.PI/2,this.jumper.geometry.translate.x=-i;else if("leftTop"===t)n="z",s=this.jumper.rotation[n]+.1,r=this.jumper.rotation[n]<Math.PI/2,this.jumper.geometry.translate.x=i;else{if("none"!==t)throw Error("Arguments Error");r=!1,a=this.config.ground}this.fallingStat.end?this.failedCallback&&this.failedCallback():(r?this.jumper.rotation[n]=s:this.jumper.position.y>a?this.jumper.position.y-=this.config.fallingSpeed:this.fallingStat.end=!0,this._render(),requestAnimationFrame(function(){e._falling()}))}},{key:"_falling",value:function(){0==this.falledStat.location?this._fallingRotate("none"):-10===this.falledStat.location?"left"==this.cubeStat.nextDir?this._fallingRotate("leftTop"):this._fallingRotate("rightTop"):10===this.falledStat.location&&("left"==this.cubeStat.nextDir?this.jumper.position.x<this.cubes[this.cubes.length-1].position.x?this._fallingRotate("leftTop"):this._fallingRotate("leftBottom"):this.jumper.position.z<this.cubes[this.cubes.length-1].position.z?this._fallingRotate("rightTop"):this._fallingRotate("rightBottom"))}},{key:"_checkInCube",value:function(){if(this.cubes.length>1){var t={x:this.jumper.position.x,z:this.jumper.position.z},e={x:this.cubes[this.cubes.length-1-1].position.x,z:this.cubes[this.cubes.length-1-1].position.z},i={x:this.cubes[this.cubes.length-1].position.x,z:this.cubes[this.cubes.length-1].position.z},n=void 0,s=void 0;"left"===this.cubeStat.nextDir?(n=Math.abs(t.x-e.x),s=Math.abs(t.x-i.x)):(n=Math.abs(t.z-e.z),s=Math.abs(t.z-i.z));var r=this.config.cubeWidth/2+this.config.jumperWidth/2,a=0;n<r?(this.falledStat.distance=n,a=n<this.config.cubeWidth/2?-1:-10):s<r?(this.falledStat.distance=s,a=s<this.config.cubeWidth/2?1:10):a=0,this.falledStat.location=a}}},{key:"_updateCameraPos",value:function(){var t=this.cubes.length-1,e=this.cubes[t].position.x,i=this.cubes[t].position.z,n=this.cubes[t-1].position.x,s=this.cubes[t-1].position.z,r=new THREE.Vector3;r.x=(e+n)/2,r.y=0,r.z=(i+s)/2,this.cameraPos.next=r}},{key:"_updateCamera",value:function(){var t=this,e={x:this.cameraPos.current.x,y:this.cameraPos.current.y,z:this.cameraPos.current.z},i=this.cameraPos.next.x,n=(this.cameraPos.next.y,this.cameraPos.next.z);(e.x>i||e.z>n)&&(this.cameraPos.current.x-=.1,this.cameraPos.current.z-=.1,this.cameraPos.current.x-this.cameraPos.next.x<.05&&(this.cameraPos.current.x=this.cameraPos.next.x),this.cameraPos.current.z-this.cameraPos.next.z<.05&&(this.cameraPos.current.z=this.cameraPos.next.z),this.camera.lookAt(new THREE.Vector3(e.x,0,e.z)),this._render(),requestAnimationFrame(function(){t._updateCamera()}))}},{key:"_createJumper",value:function(){var t=new THREE.MeshLambertMaterial({color:this.config.jumperColor}),e=new THREE.CubeGeometry(this.config.jumperWidth,this.config.jumperHeight,this.config.jumperDeep);e.translate(0,1,0);var i=new THREE.Mesh(e,t);i.position.y=1,this.jumper=i,this.scene.add(this.jumper)}},{key:"_createCube",value:function(){var t=new THREE.MeshLambertMaterial({color:this.config.cubeColor}),e=new THREE.CubeGeometry(this.config.cubeWidth,this.config.cubeHeight,this.config.cubeDeep),i=new THREE.Mesh(e,t);if(this.cubes.length){var n=Math.random();this.cubeStat.nextDir=n>.5?"left":"right",i.position.x=this.cubes[this.cubes.length-1].position.x,i.position.y=this.cubes[this.cubes.length-1].position.y,i.position.z=this.cubes[this.cubes.length-1].position.z,"left"===this.cubeStat.nextDir?i.position.x=this.cubes[this.cubes.length-1].position.x-4*Math.random()-6:i.position.z=this.cubes[this.cubes.length-1].position.z-4*Math.random()-6}this.cubes.push(i),this.cubes.length>6&&this.scene.remove(this.cubes.shift()),this.scene.add(i),this.cubes.length>1&&this._updateCameraPos()}},{key:"_render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"_setLight",value:function(){var t=new THREE.DirectionalLight(16777215,1.1);t.position.set(3,10,5),this.scene.add(t);var e=new THREE.AmbientLight(16777215,.3);this.scene.add(e)}},{key:"_setCamera",value:function(){this.camera.position.set(100,100,100),this.camera.lookAt(this.cameraPos.current)}},{key:"_setRenderer",value:function(){this.renderer.setSize(this.size.width,this.size.height),this.renderer.setClearColor(this.config.background)}},{key:"_setSize",value:function(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}}]),t}(),c={data:function(){return{game:null,score:0,finalPanelShow:!1}},methods:{restart:function(){this.finalPanelShow=!1,this.game.restart()},failed:function(){console.log("失败了"),this.score=this.game.score,this.finalPanelShow=!0},success:function(t){this.score=t}},mounted:function(){this.game=new o,this.game.addSuccessFn(this.success),this.game.addFailedFn(this.failed),this.game.init()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t.finalPanelShow?i("div",{staticClass:"mask"},[i("div",{staticClass:"content"},[i("div",{staticClass:"score-container"},[i("p",{staticClass:"title"},[t._v("本次得分")]),t._v(" "),i("p",{staticClass:"score"},[t._v(t._s(t.score))])]),t._v(" "),i("button",{staticClass:"restart",on:{click:t.restart}},[t._v("\n                重新开始\n            ")])])]):t._e(),t._v(" "),i("div",{staticClass:"info"},[i("a",{staticClass:"title",attrs:{href:"https://github.com/luosijie/threejs-examples",target:"_blank"}},[t._v("\n          Jump\n        ")]),t._v(" "),i("a",{staticClass:"author",attrs:{href:"https://luosijie.github.io/",target:"_blank"}},[t._v("\n          Created By Jesse Luo\n        ")]),t._v(" "),i("div",{staticClass:"score-gaming"},[t._v("\n            得分："),i("span",{staticClass:"score-current"},[t._v(t._s(t.score))])])]),t._v(" "),i("canvas")])},staticRenderFns:[]};var h=i("C7Lr")(c,u,!1,function(t){i("JtRZ")},"data-v-5832def2",null);e.default=h.exports},RUR6:function(t,e,i){var n=i("Wtcz");n(n.S+n.F*!i("uoC7"),"Object",{defineProperty:i("hHwa").f})},VfK5:function(t,e,i){var n=i("1W9W");t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,s){return t.call(e,i,n,s)}}return function(){return t.apply(e,arguments)}}},W4r7:function(t,e,i){var n=i("hHwa"),s=i("gwUl");t.exports=i("uoC7")?function(t,e,i){return n.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},Wtcz:function(t,e,i){var n=i("2KLU"),s=i("ZuHZ"),r=i("VfK5"),a=i("W4r7"),o=i("1j1a"),c=function(t,e,i){var u,h,l,f=t&c.F,p=t&c.G,d=t&c.S,m=t&c.P,g=t&c.B,b=t&c.W,v=p?s:s[e]||(s[e]={}),_=v.prototype,y=p?n:d?n[e]:(n[e]||{}).prototype;for(u in p&&(i=e),i)(h=!f&&y&&void 0!==y[u])&&o(v,u)||(l=h?y[u]:i[u],v[u]=p&&"function"!=typeof y[u]?i[u]:g&&h?r(l,n):b&&y[u]==l?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?r(Function.call,l):l,m&&((v.virtual||(v.virtual={}))[u]=l,t&c.R&&_&&!_[u]&&a(_,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},ZuHZ:function(t,e){var i=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=i)},"bBK/":function(t,e,i){t.exports=!i("uoC7")&&!i("2gH+")(function(){return 7!=Object.defineProperty(i("P/bz")("div"),"a",{get:function(){return 7}}).a})},gwUl:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},hHwa:function(t,e,i){var n=i("xgeF"),s=i("bBK/"),r=i("FHEs"),a=Object.defineProperty;e.f=i("uoC7")?Object.defineProperty:function(t,e,i){if(n(t),e=r(e,!0),n(i),s)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},liLe:function(t,e,i){t.exports={default:i("zhwF"),__esModule:!0}},uoC7:function(t,e,i){t.exports=!i("2gH+")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},xSur:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("liLe"),r=(n=s)&&n.__esModule?n:{default:n};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},xgeF:function(t,e,i){var n=i("+kaZ");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},zhwF:function(t,e,i){i("RUR6");var n=i("ZuHZ").Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}}});
//# sourceMappingURL=1.01852caf2e8e5c9acf4c.js.map