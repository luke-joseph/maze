(function(t){function e(e){for(var i,l,c=e[0],d=e[1],o=e[2],p=0,n=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&n.push(a[l][0]),a[l]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);g&&g(e);while(n.length)n.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,l=1;l<s.length;l++){var d=s[l];0!==a[d]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},a={app:0},r=[];function l(t){return c.p+"js/"+({NotFoundComponent:"NotFoundComponent",about:"about"}[t]||t)+"."+{NotFoundComponent:"be04b911",about:"855e6bd0"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,i){s=a[t]=[e,i]}));e.push(s[2]=i);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=l(t);var o=new Error;r=function(e){d.onerror=d.onload=null,clearTimeout(p);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,s[1](o)}a[t]=void 0}};var p=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var p=0;p<d.length;p++)e(d[p]);var g=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"2c6c":function(t,e,s){t.exports=s.p+"media/scream.9de76e32.mp3"},"34b4":function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAwASwDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUHAQQGAgMI/8QAQRAAAQIDBAUFDgMJAAAAAAAAAAECAwQFBhESFhMhMVXRFGGSk5QHCBUiNUFERVFUgYKRsiMyQxc2UmKDoaSz0v/EABwBAQEBAQACAwAAAAAAAAAAAAABAgMEBgUHCP/EADIRAAEBBQQIBAcBAAAAAAAAAAABAgMEEZESUVKSEyFTYaHR0uEUIzHTBhUWMkFiorH/2gAMAwEAAhEDEQA/ALrAB1OQAJW1VCyzXpqm6flOgw/i4MGK9qO2Xr7faARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYlk/IEr8/3qV2WJZPyBK/P96kUiksDzDiMjQ2vY5HsciOa5q3oqLsVFPRDPoAAAAAAVKbdKpU1W5+FJSULTTMW/AzEjb7kVV1qqJsRTUBo2dX+yy1G6/8iF/0dH3RO53aGqWxqEzLU/SwH6PC/TQ0vuhtRdSuv2opWJ1fdT/fyqf0v9TCFImu2VqlmdB4SleTafFo/wARr8V11/5VX2oRQBSEdUbQU+lR2wZqY0URzcaJgcuq9U8ycymrnSje+p1b+BNg5KjyepUp3PPdtwaMojx20q7m0RKWF/1SEznRvfm9B3AznOi+/s6LuBNAknuJKLzOmkgNk3nZ9shc50X3+H9HcBnKi7whf34E0BJ7iSi8yaSB2TedPbIbONF3jB+qjOFF3jA+pMgSe4kovMmkgdk3nT2yHzhRd5S/SM5uou85bpoS4EnuJKdyW4LZt506CJS1lGX1nK9YgzXRt6SnWoSwLJ5elO5LcHs2s6dBFZpoy+tJTrm8T1mejr60k+vbxJMCTy9KdyW4TZtZk6CNzLSN6yXaGcRmWkb1ku0M4kkYVqL5k+hZPL0p3JbhcDWZOgjsy0jesl2hnEZlpG9ZLtDOJv6Jn8DfoYWBDXbDYvyoSTy9Kdy2oPA1mTpNHMlI3pJdoZxGZKRvSS7Qzibqy0Ff0mdFDHI4C/oQ+ggk9vSnc1agsLWZOk1MyUnekl2hnEZjpO9JLtDOJtchll9HhdBDHg+VX0aD1aEk9vTjzLOCwt1Tka2YqVvOT7QziZzDSt5yfaGcT7+DZRfRYPVpwMeC5P3SB1beA83dxLOBubqnI+OYaXvKT69nE7GRtLQo9i4sm+tU5sSLAjQ8DpqGi+NiTZfznJ+CpJfQ5fqm8DvrL2dpUWhSzn0yTe5cV6ul2Kq+MvMZaR6qSWXE0y3AsNI0iN6t7PI/K9CtnW7LR1dS6jHlGquJYbHXw1XnYt7V+KFp2Z75OYgtZCrtPZMtRERZiUXA/nVWLqVV26lahVNEsjWLSzWhplPjTb0dhdo2+Kxf5nbG/G4tiyve3x3PbHrs+2EzUqS8s1HP9uty+Ki81zk26z1OE8XPyZy4cT78+IPp1GV+ZWbe77/5111FqWY7o9nrXLDhyFQZyp6XpKx00cVdSqtzV/NciLfhvTUdMc/Z2wFAsto30+mQYcxDTVMxExxk1XLc916pq8yXJr2HQHtjrSWfNlPcfnyO8Gr5fA2rH7Snw/AAB2PjypQAaNg26rVZqtz8WdnYummYt2N+FG33IiJqRETYiGoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWJZPyBK/P96ldliWT8gSvz/epFIpKMhthNVGNRiKquual2tVvVfiqqp6AIZ9QAAAAAD/2Q=="},3879:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen",attrs:{id:"app"}},[s("NavBar"),s("router-view",{staticClass:"container shadow-inner p-12 mx-auto h-full"})],1)},r=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden sm:flex items-center border-t-4 border-red-400 leading-loose tracking-wide text-base",attrs:{id:"large-nav"}},[s("div",{staticClass:"container mx-auto flex items-center justify-between"},[s("nav",{staticClass:"hidden sm:flex mx-auto"},[s("ul",{staticClass:"mx-auto flex"},[s("div",{staticClass:"flex pt-2 pb-2 text-grey-600 font-bold"},[s("router-link",{staticClass:"home tracking-wider pr-4 hover:no-underline text-lg",attrs:{to:"/"}},[t._v("Game")]),s("router-link",{staticClass:"tracks tracking-wider pr-4 hover:no-underline text-lg",attrs:{to:"/about"}},[t._v("About")])],1)])])])])},c=[],d={name:"NavBar"},o=d,p=s("2877"),g=Object(p["a"])(o,l,c,!1,null,null,null),n=g.exports,h={components:{NavBar:n}},x=h,u=(s("034f"),Object(p["a"])(x,a,r,!1,null,null,null)),m=u.exports,v=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game"},[!t.completed&&t.level>0?s("div",{staticClass:"flex mb-12 text-4xl justify-between w-1/2 mx-auto",attrs:{id:"stats"}},[s("h1",{staticClass:"creepy text-red-400"},[t._v("Level "+t._s(t.level))]),s("Timer",{attrs:{timer:t.timer}})],1):t._e(),t.gameOver?t._e():s("div",[0===t.level?s("Welcome"):t._e(),1===t.level?s("LevelOne"):t._e(),2===t.level?s("LevelTwo"):t._e(),3===t.level?s("LevelThree"):t._e(),4===t.level?s("LevelFour"):t._e(),5!==t.level||t.completed?t._e():s("LevelFive"),t.completed?s("GameComplete",{attrs:{timer:t.timer}}):t._e()],1),t.gameOver?s("GameOver"):t._e()],1)},f=[],A=s("5530"),b=s("2f62"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-12"},[s("h1",{staticClass:"creepy text-5xl mb-12 text-center text-red-400"},[t._v("Welcome to the Scary Maze")]),t._m(0),s("div",{staticClass:"flex justify-center"},[s("div",{staticClass:"w-1/3 bg-black text-white flex rounded-lg",staticStyle:{width:"150px",height:"50px","margin-right":"150px","margin-top":"420px"},attrs:{id:"progress-1"},on:{click:t.startGame}},[s("p",{staticClass:"m-auto font-bold uppercase cursor-pointer p-4 bg-red-400 text-white tracking-wider uppercase"},[t._v(" Start Game ")])])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-1/2 mx-auto",staticStyle:{height:"50px"}},[i("p",{staticClass:"text-white text-center text-2xl mb-12"},[t._v("In order to beat the maze:")]),i("p",{staticClass:"text-white text-center text-2xl"},[t._v("1. Keep your cursor inside the mazes path")]),i("p",{staticClass:"text-white text-center text-2xl mb-12"},[t._v("2. Reach the end of every level.")]),i("img",{staticClass:"mx-auto",attrs:{src:s("34b4"),alt:""}})])}],w={name:"Welcome",methods:{startGame:function(){this.$store.dispatch("startGame")}}},E=w,_=Object(p["a"])(E,C,S,!1,null,null,null),B=_.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-red-400"},[t._v(" "+t._s(t.formattedTime)+" ")])},O=[],M={name:"Timer",props:["timer"],computed:{formattedTime:function(){var t,e;return e=this.timer.seconds<10?"0"+this.timer.seconds:this.timer.seconds,t=this.timer.minutes<10?"0"+this.timer.minutes:this.timer.minutes,t+":"+e}}},Q=M,F=Object(p["a"])(Q,T,O,!1,null,null,null),L=F.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-12",attrs:{id:"lava-out"},on:{mouseover:function(e){return t.trackMouse(e)}}},[t._m(0)])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center",attrs:{id:"lava"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"150px",height:"500px"},attrs:{id:"progress-1"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"100px",height:"50px"},attrs:{id:"progress-2"}}),s("div",{staticClass:"bg-grey-400",staticStyle:{width:"50px",height:"50px"},attrs:{id:"escaped"}})])}],j={methods:{nextLevel:function(){this.$store.dispatch("updateLevel")},trackMouse:function(t){"lava"==t.target.id||"lava-out"==t.target.id||""==t.target.id?this.$store.dispatch("gameOver"):"escaped"==t.target.id&&this.nextLevel()}}},U={name:"LevelOne",mixins:[j]},k=U,D=Object(p["a"])(k,R,G,!1,null,null,null),P=D.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-12",attrs:{id:"lava-out"},on:{mouseover:function(e){return t.trackMouse(e)}}},[t._m(0)])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mx-auto",staticStyle:{width:"300px"},attrs:{id:"lava"}},[s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"130px"},attrs:{id:"progress-3"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"220px",height:"50px"},attrs:{id:"progress-2"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"50px",height:"50px"},attrs:{id:"progress-1"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"220px",height:"50px"},attrs:{id:"progress-4"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"270px",height:"50px"},attrs:{id:"progress-5"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"130px"},attrs:{id:"progress-6"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"130px"},attrs:{id:"progress-9"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"220px",height:"50px"},attrs:{id:"progress-8"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"50px",height:"50px"},attrs:{id:"progress-7"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"220px",height:"50px"},attrs:{id:"progress-10"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"270px",height:"50px"},attrs:{id:"progress-11"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"130px"},attrs:{id:"progress-12"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-400",staticStyle:{width:"30px",height:"50px"},attrs:{id:"escaped"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"220px",height:"50px"},attrs:{id:"progress-14"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"50px",height:"50px"},attrs:{id:"progress-13"}})])])}],q={name:"LevelTwo",mixins:[j]},N=q,W=Object(p["a"])(N,z,V,!1,null,null,null),Z=W.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-12",attrs:{id:"lava-out"},on:{mouseover:function(e){return t.trackMouse(e)}}},[t._m(0)])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mx-auto",staticStyle:{width:"300px"},attrs:{id:"lava"}},[s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"130px"},attrs:{id:"progress-22"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"75px",height:"20px"},attrs:{id:"progress-23"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"90px"},attrs:{id:"progress-24"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"70px",height:"20px","margin-top":"70px"},attrs:{id:"progress-25"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"90px"},attrs:{id:"progress-26"}}),s("div",{staticClass:"bg-grey-400",staticStyle:{width:"30px",height:"20px"},attrs:{id:"escaped"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-21"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-20"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-19"}}),s("div",{staticClass:"bg-grey-500 mb-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-18"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-17"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-16"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-15"}}),s("div",{staticClass:"bg-grey-500 mb-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-14"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-13"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-12"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"20px"},attrs:{id:"progress-11"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-10"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"25px",height:"130px"},attrs:{id:"progress-9"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"30px",height:"50px"},attrs:{id:"progress-8"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"120px",height:"50px"},attrs:{id:"progress-7"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"50px",height:"50px"},attrs:{id:"progress-6"}}),s("div",{staticClass:"bg-grey-500 mt-auto h-full",staticStyle:{width:"25px","margin-left":"40px"},attrs:{id:"progress-5"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"130px"},attrs:{id:"progress-2"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"50px",height:"40px","margin-left":"120px"},attrs:{id:"progress-3"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"65px",height:"40px"},attrs:{id:"progress-4"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"50px"},attrs:{id:"progress-1"}})])])}],K={name:"LevelThree",mixins:[j]},H=K,$=Object(p["a"])(H,I,J,!1,null,null,null),Y=$.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-12",attrs:{id:"lava-out"},on:{mouseover:function(e){return t.trackMouse(e)}}},[t._m(0)])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mx-auto",staticStyle:{width:"300px"},attrs:{id:"lava"}},[s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"130px"},attrs:{id:"progress-4"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"75px",height:"20px"},attrs:{id:"progress-3"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"110px",height:"20px"},attrs:{id:"progress-2"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"20px"},attrs:{id:"progress-1"}})]),s("div",{staticClass:"flex",staticStyle:{height:"100px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-5"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-6"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-7"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-8"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-9"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-10"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-10"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-12"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-13"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-14"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-15"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-16"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"25px",height:"100px"},attrs:{id:"progress-17"}})]),s("div",{staticClass:"flex",staticStyle:{height:"50px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"50px","margin-left":"40px"},attrs:{id:"progress-20"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"80px",height:"20px"},attrs:{id:"progress-19"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"115px",height:"20px"},attrs:{id:"progress-18"}})]),s("div",{staticClass:"flex",staticStyle:{height:"60px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"20px","margin-left":"40px"},attrs:{id:"progress-21"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"50px",height:"20px"},attrs:{id:"progress-22"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"65px",height:"20px"},attrs:{id:"progress-23"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"60px"},attrs:{id:"progress-24"}})]),s("div",{staticClass:"flex",staticStyle:{height:"130px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"130px","margin-left":"125px"},attrs:{id:"progress-26"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"60px",height:"20px"},attrs:{id:"progress-25"}})]),s("div",{staticClass:"flex",staticStyle:{height:"90px"}},[s("div",{staticClass:"bg-grey-400",staticStyle:{width:"20px",height:"50px","margin-left":"125px"},attrs:{id:"escaped"}})])])}],et={name:"LevelFour",mixins:[j]},st=et,it=Object(p["a"])(st,X,tt,!1,null,null,null),at=it.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-12",attrs:{id:"lava-out"},on:{mouseover:function(e){return t.trackMouse(e)}}},[t._m(0)])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mx-auto",staticStyle:{width:"300px"},attrs:{id:"lava"}},[s("div",{staticClass:"flex",staticStyle:{height:"20px"}},[s("div",{staticClass:"bg-grey-400 mt-auto",staticStyle:{width:"20px",height:"20px","margin-left":"190px"},attrs:{id:"escaped"}})]),s("div",{staticClass:"flex",staticStyle:{height:"40px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px","margin-left":"170px"},attrs:{id:"progress-32"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-33"}})]),s("div",{staticClass:"flex",staticStyle:{height:"60px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px","margin-left":"170px"},attrs:{id:"progress-31"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-30"}})]),s("div",{staticClass:"flex",staticStyle:{height:"80px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"40px","margin-left":"110px"},attrs:{id:"progress-26"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"40px",height:"20px","margin-top":"40px"},attrs:{id:"progress-27"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"60px"},attrs:{id:"progress-28"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-29"}})]),s("div",{staticClass:"flex",staticStyle:{height:"40px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px","margin-left":"20px"},attrs:{id:"progress-24"}}),s("div",{staticClass:"bg-grey-500 h-full",staticStyle:{width:"90px",height:"20px"},attrs:{id:"progress-25"}})]),s("div",{staticClass:"flex",staticStyle:{height:"80px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px","margin-left":"20px"},attrs:{id:"progress-23"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-22"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-21"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px","margin-top":"20px"},attrs:{id:"progress-20"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-19"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-18"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"40px","margin-top":"40px"},attrs:{id:"progress-17"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"70px",height:"20px","margin-top":"40px"},attrs:{id:"progress-16"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-15"}})]),s("div",{staticClass:"flex",staticStyle:{height:"50px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px","margin-left":"50px"},attrs:{id:"progress-9"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"80px",height:"20px"},attrs:{id:"progress-10"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"40px"},attrs:{id:"progress-11"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"20px","margin-top":"10px"},attrs:{id:"progress-12"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"30px"},attrs:{id:"progress-13"}}),s("div",{staticClass:"bg-grey-500",staticStyle:{width:"30px",height:"20px"},attrs:{id:"progress-14"}})]),s("div",{staticClass:"flex",staticStyle:{height:"50px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"50px","margin-left":"50px"},attrs:{id:"progress-8"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"50px",height:"20px"},attrs:{id:"progress-7"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"145px",height:"20px"},attrs:{id:"progress-6"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px"},attrs:{id:"progress-5"}})]),s("div",{staticClass:"flex",staticStyle:{height:"50px"}},[s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"20px","margin-left":"125px"},attrs:{id:"progress-1"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"60px",height:"20px"},attrs:{id:"progress-2"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"60px",height:"20px"},attrs:{id:"progress-3"}}),s("div",{staticClass:"bg-grey-500 mt-auto",staticStyle:{width:"20px",height:"100%"},attrs:{id:"progress-4"}})]),s("div",{staticClass:"flex",staticStyle:{height:"90px"}},[s("div",{staticClass:"bg-grey-500",staticStyle:{width:"20px",height:"50px","margin-left":"125px"},attrs:{id:"progress-0"}})])])}],ct={name:"LevelFive",mixins:[j]},dt=ct,ot=Object(p["a"])(dt,rt,lt,!1,null,null,null),pt=ot.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-12 text-red-400"},[s("h1",{staticClass:"text-5xl creepy text-center font-bold mb-16"},[t._v("You Defeated the Maze!")]),s("div",{staticClass:"mb-12",attrs:{id:"completed-stats"}},[s("p",{staticClass:"text-center text-3xl text-grey-100"},[t._v("Congrats you beat the maze in:")]),s("p",{staticClass:"text-center text-3xl mb-8 text-grey-100"},[t._v(t._s(t.completedTime))]),s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"rounded-full w-5 h-5 mr-2 ml-auto",class:t.MedalStyle}),s("span",{staticClass:"text-3xl mr-auto",class:t.MedalText},[t._v("You got the "+t._s(t.medal)+" medal")])])]),t._m(0),s("ResetGameButton",[t._v("Play Again")])],1)},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-12 bg-grey-700 w-1/3 py-8 mx-auto"},[s("p",{staticClass:"text-center mb-4 text-2xl text-yellow-400"},[t._v("Gold = Under 30 seconds")]),s("p",{staticClass:"text-center mb-4 text-2xl text-grey-400"},[t._v("Silver = Under 50 seconds")]),s("p",{staticClass:"text-center mb-4 text-2xl text-orange-400"},[t._v("Bronze = Over 50 seconds")])])}],ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("button",{staticClass:"bg-red-400 text-red-100 uppercase px-6 py-4 text-lg font-bold mx-auto",attrs:{type:"button"},on:{click:t.resetGame}},[t._t("default")],2)])},xt=[],ut={methods:{resetGame:function(){this.$store.dispatch("resetGame")}}},mt=ut,vt=Object(p["a"])(mt,ht,xt,!1,null,null,null),yt=vt.exports,ft={name:"GameComplete",components:{ResetGameButton:yt},props:["timer"],data:function(){return{gold:30,bronze:50}},computed:{completedTime:function(){var t=!!this.timer.minutes&&this.timer.minutes;return t?t>1?t+" minutes & "+this.timer.seconds+" seconds":t+" minute & "+this.timer.seconds+" seconds":this.timer.seconds+" seconds"},medal:function(){return this.timer.minutes>=1||this.timer.seconds>this.bronze?"bronze":this.timer.seconds>30?"silver":"gold"},MedalStyle:function(){return{"bg-orange-400":"bronze"===this.medal,"bg-grey-400":"silver"===this.medal,"bg-yellow-400":"gold"===this.medal}},MedalText:function(){return{"text-orange-400":"bronze"===this.medal,"text-grey-400":"silver"===this.medal,"text-yellow-400":"gold"===this.medal}}}},At=ft,bt=Object(p["a"])(At,gt,nt,!1,null,null,null),Ct=bt.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pb-12"},[i("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{id:"my-audio",src:s("2c6c"),preload:"auto"}}),i("img",{staticClass:"w-full h-full mb-12",attrs:{src:"https://i.ytimg.com/vi/RNoHcWE8tbQ/maxresdefault.jpg",alt:"scary zombie picture"}}),i("ResetGameButton",[t._v("Play Again")])],1)},wt=[],Et={name:"GameOver",components:{ResetGameButton:yt},methods:{startGame:function(){this.$store.dispatch("startGame")}},mounted:function(){this.$refs.audio.play()}},_t=Et,Bt=Object(p["a"])(_t,St,wt,!1,null,null,null),Tt=Bt.exports,Ot={name:"Game",components:{Welcome:B,Timer:L,LevelOne:P,LevelTwo:Z,LevelThree:Y,LevelFour:at,LevelFive:pt,GameComplete:Ct,GameOver:Tt},computed:Object(A["a"])({},Object(b["b"])(["score","level","timer","completed","gameOver"]))},Mt=Ot,Qt=(s("868a"),Object(p["a"])(Mt,y,f,!1,null,null,null)),Ft=Qt.exports;i["a"].use(v["a"]);var Lt=[{path:"/",name:"Game",component:Ft},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"*",component:function(){return s.e("NotFoundComponent").then(s.bind(null,"2946"))}}],Rt=new v["a"]({mode:"history",linkExactActiveClass:"text-red-400 font-bold",base:"/",routes:Lt}),Gt=Rt;i["a"].use(b["a"]);var jt=new b["a"].Store({state:{level:0,levelAmount:5,timer:{seconds:0,minutes:0,active:!1},completed:!1,gameOver:!1},mutations:{INCREMENT_LEVEL:function(t){t.level+=1},START_TIMER:function(t){t.timer.active=!0},GAME_COMPLETED:function(t){t.timer.active=!1,t.completed=!0},GAME_OVER:function(t){t.level=0,t.score=0,t.timer.seconds=0,t.timer.minutes=0,t.gameOver=!0,t.timer.active=!1},RESET_GAME:function(t){t.level=0,t.score=0,t.completed=!1,t.gameOver=!1,t.timer.seconds=0,t.timer.minutes=0,t.timer.active=!1},UPDATE_TIMER:function(t){t.timer.seconds<59?t.timer.seconds+=1:(t.timer.seconds=0,t.timer.minutes+=1)}},actions:{updateLevel:function(t){var e=t.commit,s=t.state,i=t.dispatch;s.levelAmount>s.level?e("INCREMENT_LEVEL"):i("gameCompleted")},startGame:function(t){var e=t.commit,s=t.dispatch;e("START_TIMER"),e("INCREMENT_LEVEL"),s("updateTimer")},gameCompleted:function(t){var e=t.commit;e("GAME_COMPLETED")},gameOver:function(t){var e=t.commit;e("GAME_OVER")},resetGame:function(t){var e=t.commit;e("RESET_GAME")},updateTimer:function(t){var e=t.state,s=t.commit,i=t.dispatch;setTimeout((function(){e.timer.active&&(s("UPDATE_TIMER"),i("updateTimer"))}),1e3)}},modules:{}});s("c898");i["a"].config.productionTip=!1,new i["a"]({router:Gt,store:jt,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,s){},"868a":function(t,e,s){"use strict";s("3879")},c898:function(t,e,s){}});
//# sourceMappingURL=app.eead19d8.js.map