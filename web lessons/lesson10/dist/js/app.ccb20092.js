(function(e){function t(t){for(var n,s,a=t[0],l=t[1],u=t[2],c=0,p=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header",{attrs:{userId:e.userId,users:e.users}}),o("Middle",{attrs:{posts:e.posts,users:e.users}}),o("Footer",{attrs:{userSize:e.userSize,postSize:e.postSize}})],1)},i=[],s=(o("4de4"),o("4160"),o("b64b"),o("07ac"),o("159b"),o("2909")),a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("img",{attrs:{src:"https://img.championat.com/s/735x490/news/big/y/q/dzhejson-stethem_15160383362036838957.jpg",alt:"Json",title:"Stethem"}}),o("div",{staticClass:"info"},[e._v(" Здесь будет инфа ")])])}],u={name:"Header"},d=u,c=o("2877"),p=Object(c["a"])(d,a,l,!1,null,"460385fc",null),h=p.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"middle"},[o("main",["Index"===e.page?o("Index"):e._e()],1)])},m=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div")},b=[],v={name:"Index"},w=v,y=Object(c["a"])(w,g,b,!1,null,"4b08e656",null),I=y.exports,$={name:"Middle",data:function(){return{page:"Index"}},components:{Index:I},props:["posts","users"],beforeCreate:function(){var e=this;this.$root.$on("onChangePage",(function(t){return e.page=t}))}},x=$,C=Object(c["a"])(x,f,m,!1,null,"f5f97b44",null),_=C.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",[o("div",[e._v("Здесь будет диффур")])])}],O={name:"Footer"},j=O,k=Object(c["a"])(j,P,E,!1,null,"09b013b6",null),M=k.exports,R={name:"App",components:{Footer:M,Middle:_,Header:h},data:function(){return this.$root.$data},computed:{userSize:function(){return Object.values(this.users).length},postSize:function(){return Object.values(this.posts).length}},beforeCreate:function(){var e=this;this.$root.$on("onEnter",(function(t,o){if(""!==o){var n=Object.values(e.users).filter((function(e){return e.login===t}));0===n.length?e.$root.$emit("onEnterValidationError","No such user"):(e.userId=n[0].id,e.$root.$emit("onChangePage","Index"))}else e.$root.$emit("onEnterValidationError","Password is required")})),this.$root.$on("onLogout",(function(){return e.userId=null})),this.$root.$on("onWritePost",(function(t,o){if(e.userId)if(!t||t.length<5)e.$root.$emit("onWritePostValidationError","Title is too short");else if(!o||o.length<10)e.$root.$emit("onWritePostValidationError","Text is too short");else{var n=Math.max.apply(Math,Object(s["a"])(Object.keys(e.posts)))+1;e.$root.$set(e.posts,n,{id:n,title:t,text:o,userId:e.userId})}else e.$root.$emit("onWritePostValidationError","No access")})),this.$root.$on("onEditPost",(function(t,o){if(e.userId)if(t)if(!o||o.length<10)e.$root.$emit("onEditPostValidationError","Text is too short");else{var n=Object.values(e.posts).filter((function(e){return e.id===parseInt(t)}));n.length?n.forEach((function(e){e.text=o})):e.$root.$emit("onEditPostValidationError","No such post")}else e.$root.$emit("onEditPostValidationError","ID is invalid");else e.$root.$emit("onEditPostValidationError","No access")}))}},S=R,T=(o("034f"),Object(c["a"])(S,r,i,!1,null,null,null)),z=T.exports,A={users:{1:{id:1,login:"mike",name:"Mike Mirzayanov",admin:!0},5:{id:5,login:"tourist",name:"Gennady Korotkevich",admin:!1},7:{id:7,login:"Petr",name:"Petr Mitrichev",admin:!1},11:{id:11,login:"andrewzta",name:"Andrew Stankevich",admin:!1}},userId:null,posts:{4:{id:4,userId:5,title:"About me",text:"Gennady Korotkevich (Belarusian: Генадзь Караткевіч, Hienadź Karatkievič, Russian: Геннадий Короткевич; born 25 September 1994), is a Belarusian sport programmer who has won major international competitions since age 11, as well as numerous national competitions. His top accomplishments include six consecutive gold medals in the International Olympiad in Informatics[1] as well as the world championship in the 2013 and 2015 International Collegiate Programming Contest World Finals. As of May 2018, Korotkevich is the highest-rated programmer at CodeChef,[2] Codeforces[3] Topcoder.[4] and Atcoder;[5] the second highest-rated algorithm competitor at HackerRank;[6]"},5:{id:5,userId:1,title:"Round 987",text:"This round will be rated for the participants with rating lower than 2100. It will be held on extented ACM ICPC rules. The penalty for each incorrect submission until the submission with a full solution is 10 minutes. After the end of the contest you will have 12 hours to hack any solution you want. You will have access to copy any solution and test it locally."},7:{id:7,userId:7,title:"An interactive week",text:"AtCoder has returned with its Grand Contest 027 during the Sep 10 - Sep 16 week (problems, results, top 5 on the left, my screencast, analysis). There was a pretty tense fight for the second place with cospleermusora getting problem B accepted with less than a minute remaining; but tourist's victory was not really in doubt as he finished all problems with 25 minutes to spare. Congratulations to both!"},6:{id:6,userId:1,title:"Mail.Ru Cup 2018 — Results of R1+R2+R3",text:"Here are merged results of Mail.Ru Cup 2018 Round 1, Mail.Ru Cup 2018 Round 2 and Mail.Ru Cup 2018 Round 3 according to the GP100 scores (see the announcement for the details https://codeforces.com/blog/entry/62355). Best two contests give the summary score of a participant. This table is unofficial yet. But anyway... congratulations to the winnerzzzz!"},8:{id:8,userId:7,title:"A birdie week",text:"TopCoder SRM 736 started the Aug 13 - Aug 19 week (problems, results, top 5 on the left, my screencast, analysis). This was the first round under the new system in which one can qualify for the last online round and even to the onsite round of TopCoder Open 2019 by placing well in all SRMs in a quarter. rng_58 has claimed the early."},9:{id:9,userId:1,title:"VK Cup 2029",text:"Participants are invited to achieve progress in solving an unusual problem. VK Cup teams which were advanced to the Round 2 (and didn't advance to the Round 3) will take part in VK Cup 2029 - Wild-card Round 2 officially. In addition, this round will be open to the public for unofficial participation for everybody. Registration will be open for the whole round duration."}},comments:{1:{id:1,userId:1,postId:4,text:"Thanks, tourist"},2:{id:2,userId:5,postId:4,text:"You can read more on Wikipedia"},3:{id:3,userId:1,postId:4,text:"Great!"},4:{id:4,userId:1,postId:5,text:"Welcome to the round."},5:{id:5,userId:7,postId:5,text:"Can Div.1 take part unofficially?"},6:{id:6,userId:5,postId:5,text:"I hope"},8:{id:8,userId:11,postId:8,text:"Please, write about TopCoder SRM 737"},9:{id:9,userId:7,postId:8,text:"I'll do"}}};n["a"].config.productionTip=!1,new n["a"]({data:function(){return A},render:function(e){return e(z)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.ccb20092.js.map