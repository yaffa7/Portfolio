(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{199:function(e,t,c){},200:function(e,t,c){},201:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},207:function(e,t,c){},208:function(e,t,c){},322:function(e,t){},346:function(e,t){},348:function(e,t){},371:function(e,t){},372:function(e,t){},373:function(e,t){},406:function(e,t){},408:function(e,t){},409:function(e,t){},410:function(e,t){},412:function(e,t,c){},413:function(e,t,c){},415:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(193),s=c.n(a),i=(c(199),c(45)),o=c(46),r=c(48),l=c(47),d=c(417),j=(c(200),c(201),c(0)),u=function(e){return Object(j.jsxs)("div",{className:e.expanded?"hamburger container-expanded":"hamburger container",children:[Object(j.jsx)("div",{className:"box"}),Object(j.jsx)("div",{className:"box"}),Object(j.jsx)("div",{className:"box"})]})},m=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).updateExpanded=function(){e.setState((function(e){return{y:e.y,expanded:!e.expanded}}),(function(){console.log(this.state)}))},e.handleClick=function(){e.setState((function(e){return{y:e.y,expanded:!1}}))},e}return Object(o.a)(c,[{key:"componentWillMount",value:function(){var e=this;this.setState({y:window.pageYOffset,expanded:!1}),window.addEventListener("scroll",(function(){e.updateScrollState()}))}},{key:"updateScrollState",value:function(){this.setState((function(e){return{y:window.pageYOffset,expanded:e.expanded}}))}},{key:"render",value:function(){var e=this.state&&this.state.y>65;return!1===(this.state&&this.state.expanded)?Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:e?"navbar-opaque":"navbar",children:Object(j.jsxs)("ul",{className:"item-list",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.a,{to:"/projects",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.a,{to:"/resume",children:"Resume"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"https://github.com/yaffa7",className:"nav-link",children:"Github"})}),Object(j.jsx)("li",{className:"nav-item",onClick:this.updateExpanded,children:Object(j.jsx)(u,{expanded:!1})})]})})}):Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar-opaque",children:[Object(j.jsx)("div",{onClick:this.updateExpanded,children:Object(j.jsx)(u,{expanded:!0})}),Object(j.jsxs)("ul",{className:"item-list-expanded",onClick:this.handleClick,children:[Object(j.jsx)("li",{className:"nav-item-expanded",children:Object(j.jsx)(d.a,{to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item-expanded",children:Object(j.jsx)(d.a,{to:"/projects",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item-expanded",onClick:this.handleClick,children:Object(j.jsx)(d.a,{to:"/resume",children:"Resume"})}),Object(j.jsx)("li",{className:"nav-item-expanded",onClick:this.handleClick,children:Object(j.jsx)("a",{href:"https://github.com/yaffa7",className:"nav-link",children:"Github"})})]})]})})}}]),c}(n.Component),h=(c(205),c.p+"static/media/linkedin.660cba3e.svg"),b=c.p+"static/media/github.19442ed5.svg",p=c.p+"static/media/meetup.864405fa.svg",x=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"title-container",children:[Object(j.jsx)("h1",{className:"title",children:"Brendan McMahon"}),Object(j.jsxs)("div",{className:"subtitle",children:[Object(j.jsx)("h4",{children:"I Build Things"}),Object(j.jsx)("a",{href:"https://github.com/yaffa7/",target:"__blank",children:Object(j.jsx)("img",{src:b,alt:""})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/brendan-mcmahon-009485101/",target:"__blank",children:Object(j.jsx)("img",{src:h,alt:""})}),Object(j.jsx)("a",{href:"https://www.meetup.com/Code-and-Coffee-SD/",target:"__blank",children:Object(j.jsx)("img",{src:p,alt:""})})]})]})})},O=(c(206),c(207),function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"breadcrumbs",children:[Object(j.jsx)(d.a,{to:"/",children:"Home"}),Object(j.jsx)("span",{className:"current-page",children:e.currentpage})]})})}),f=c.p+"static/media/todos-plus.808c063c.png",g=c.p+"static/media/quick-poll.c30b5c2c.png",v=c.p+"static/media/fields-of-aeorzia.8fc535eb.png",N=c.p+"static/media/weather.f40458bb.png",w=(c(208),c.p+"static/media/angular-icon.91fb4371.svg"),k=function(){return Object(j.jsx)("div",{className:"technology",children:Object(j.jsx)("img",{src:w,alt:"angular icon"})})},y=c.p+"static/media/express-icon.cca64e0f.png",C=function(){return Object(j.jsx)("div",{className:"technology",children:Object(j.jsx)("img",{src:y,alt:"express icon"})})},P=function(e){return Object(j.jsx)("div",{className:"generic-technology",children:e.text})},E=c.p+"static/media/mongo-icon.788ba14a.png",L=c.p+"static/media/nodejs-icon.2b495ee3.png",S=c.p+"static/media/react-icon.51193a6f.svg",_=c.p+"static/media/external-link.8d67dc23.svg",R=function(){return Object(j.jsx)("div",{className:"technology",children:Object(j.jsx)("img",{src:E,alt:"mongodb icon"})})},D=function(){return Object(j.jsx)("div",{className:"technology",children:Object(j.jsx)("img",{className:"node",src:L,alt:"node icon"})})},U=function(){return Object(j.jsx)("div",{className:"technology",children:Object(j.jsx)("img",{className:"react",src:S,alt:"react icon"})})},M=function(e){return Object(j.jsxs)("li",{className:"project-item",children:[Object(j.jsxs)("section",{className:"project-header",children:[Object(j.jsxs)("div",{className:"l-header",children:[Object(j.jsx)("span",{className:"project-title",children:e.projectName}),Object(j.jsx)("a",{href:e.demo,target:"__blank",children:Object(j.jsxs)("button",{className:"project-link",children:["Demo ",Object(j.jsx)("img",{src:_,alt:"external link icon"})]})})]}),Object(j.jsx)("div",{className:"r-header",children:Object(j.jsx)("div",{className:"project-technologies",children:e.technologies.split(",").map((function(e){return"angular"===e?Object(j.jsx)(k,{},e):"express"===e?Object(j.jsx)(C,{},e):"node"===e?Object(j.jsx)(D,{},e):"mongo"===e?Object(j.jsx)(R,{},e):"react"===e?Object(j.jsx)(U,{},e):Object(j.jsx)(P,{text:e})}))})})]}),Object(j.jsx)("section",{className:"project-content",children:Object(j.jsx)("img",{src:e.imgURL,alt:"project",className:"project-img"})}),Object(j.jsx)("p",{className:"project-description",children:e.desc?e.desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod! Velit in ducimus temporibus asperiores perspiciatis ea sed delectus impedit?"})]})},W=function(){return Object(j.jsxs)("section",{className:"content",children:[Object(j.jsx)("div",{className:"sticky-container",children:Object(j.jsx)(O,{currentpage:"Projects"})}),Object(j.jsx)("div",{className:"container-center",children:Object(j.jsxs)("ul",{className:"project-list",children:[Object(j.jsx)(M,{projectName:"Weath.er",demo:"https://yaffa7.github.io/weather/",imgURL:N,technologies:"OW",desc:"Weather app that changes depending on time of day. Powered by the OpenWeather API"}),Object(j.jsx)(M,{projectName:"Fields of Aeorzia (Work-in-Progress)",demo:"https://yaffa7.github.io/aeorzia/",imgURL:v,technologies:"react,MobX",desc:"Opensource turn-based dungeon crawler. Extendable framework for creating adventures."}),Object(j.jsx)(M,{projectName:"Todos Plus",demo:"https://sleepy-fortress-89639.herokuapp.com",technologies:"angular,express,mongo,node",imgURL:f,desc:"Write it down. Get it done. Todos Plus is a Full-Stack javascript app meant for creating a log of tasks and keeping track of things you gotta do. The frontend is an Angular 6 app supported by an Express backend for the API--using Mongodb for the database with JSON web tokens for authentication."}),Object(j.jsx)(M,{projectName:"Quick Poll (Front End)",demo:"http://yaffa7.github.io/quick-poll",technologies:"react",imgURL:g,desc:"Quick Poll is the front end for an anonymous poll website where you can easily create your own poll"})]})})]})},A=c(127),T=(c(412),c.p+"static/media/Resume-2021.5f598fb7.pdf"),q=c.p+"static/media/Resume-2020.9f2a40e5.docx",F=c.p+"static/media/arrow-circle-down.c6f0b799.svg",B=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={numPages:null,pageNumber:1},e.onDocumentLoad=function(t){var c=t.numPages;e.setState({numPages:c})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.pageNumber;return Object(j.jsxs)("section",{className:"content",children:[Object(j.jsx)("div",{className:"sticky-container",children:Object(j.jsx)(O,{currentpage:"Resume"})}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("a",{href:T,download:!0,children:Object(j.jsxs)("div",{className:"download-btn pdf",children:["pdf",Object(j.jsx)("img",{src:F,alt:"pdf download"})]})}),Object(j.jsx)("a",{href:q,download:!0,children:Object(j.jsxs)("div",{className:"download-btn word",children:["Word",Object(j.jsx)("img",{src:F,alt:"word download"})]})})]}),Object(j.jsx)("div",{className:"pdf-content",children:Object(j.jsx)(A.Document,{file:T,onLoadSuccess:this.onDocumentLoad,loading:"Loading...",children:Object(j.jsx)(A.Page,{className:"pdf-page",pageNumber:e,scale:2,renderMode:"svg"})})})]})}}]),c}(n.Component),I=c(418),z=(c(413),function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(I.a,{path:"/projects",component:W}),Object(j.jsx)(I.a,{path:"/resume",component:B}),Object(j.jsx)(I.a,{exact:!0,path:"/",component:x})]})}}]),c}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=c(419);s.a.render(Object(j.jsx)(G.a,{basename:"",children:Object(j.jsx)(z,{})}),document.getElementById("root"))},79:function(e,t){function c(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}c.keys=function(){return[]},c.resolve=c,e.exports=c,c.id=79},84:function(e,t){function c(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}c.keys=function(){return[]},c.resolve=c,e.exports=c,c.id=84}},[[415,1,2]]]);
//# sourceMappingURL=main.3d6e1946.chunk.js.map