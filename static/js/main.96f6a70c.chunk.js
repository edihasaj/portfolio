(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(3),c=n(1),s=n(0),r=Object(c.createContext)(),o=function(e){var t=e.children,n=Object(c.useState)("light"),a=Object(i.a)(n,2),o=a[0],l=a[1];Object(c.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&l("dark")}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="/",j="HOME.",d="Edi Hasaj",h="Software Engineer",b="My objective is to take a challenging and\nmanagerial role in the field of computer programming and\nimplement the expertise and experience gained in this field to\ndevelop complex projects with efficiency and quality.",u="/resume.pdf",m={linkedin:"https://linkedin.com/in/edihasaj",github:"https://github.com/edihasaj"},p=[{name:"Kosovo - Water Information System",description:"Designed and developed a complete GIS system for \nmanaging and interacting with national water data with the\npurpose of digitizing and interacting everyday with the \nsystem.",stack:["C#","Java","JavaScript","Razor"],sourceCode:"https://siu.rks-gov.net",livePreview:"https://siu.rks-gov.net"},{name:"Leaflet - Coordinate Projection",description:"Leaflet JS. MAP - Coordinate Projection of Kosovaref01. Show coordinates on mousemove in Leaflet map. Ability to change from different projections",stack:["JavaScript"],sourceCode:"https://github.com/edihasaj/leafletCoordProjection",livePreview:"http://edihasaj.github.io/leaflet-coord-projection/"},{name:"Drone vs Bird detection from Radar systems with Machine Learning",description:"Software solution that detects Drones or Birds from Radar systems data with high precision.",stack:["Python","Matlab"],sourceCode:"#projects",livePreview:"#projects"},{name:"Scanner CTRL Toshiba",description:"API for integration of Toshiba Hardware Scanner Control",stack:["C#"],sourceCode:"https://github.com/edihasaj/scanner-ctrl-toshiba",livePreview:"#projects"},{name:"Cash Drawer Toshiba",description:"API for integration of Toshiba Hardware Cash Drawer",stack:["C#"],sourceCode:"https://github.com/edihasaj/cash-drawer-toshiba",livePreview:"#projects"},{name:"Cash Display Toshiba",description:"API for integration of Toshiba Hardware Cash Display",stack:["C#"],sourceCode:"https://github.com/edihasaj/cash-display-toshiba",livePreview:"#projects"},{name:"E-Farming",description:"An automated agriculture irrigation system based on IoT and cloud platform.",stack:["C#","ASP.NET Core","JavaScript","Razor"],sourceCode:"https://github.com/edihasaj/EFarming",livePreview:"#projects"},{name:"E-Fiscalization API",description:"API that integrates ERP fiscal sales like POS, Wholesales, etc.",stack:["C#","ASP.NET Core"],sourceCode:"#projects",livePreview:"#projects"}],f=["C#","Java","Dart","Python","VB.NET","JavaScript","TypeScript","PHP",".NET & .NET Core","Spring Boot","Flutter","React","React Native","Node.js","Django","Flask","Express.js","NextJs","Laravel","SQL Server","PostgreSQL","MySQL","MongoDB","Redis","Angular","Vue.js","Docker","SASS","Git","CI/CD","Azure","Powershell","Linux","Unix"],O="edihasaj@outlook.com",x=n(14),v=n.n(x),g=n(12),k=n.n(g),N=n(16),C=n.n(N),_=n(15),w=n.n(_),P=(n(26),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,o=Object(c.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],h=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(w.a,{}):Object(s.jsx)(C.a,{})})]})}),S=(n(32),function(){var e=l,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(P,{})]})}),y=n(10),E=n.n(y),T=n(17),A=n.n(T),I=(n(33),n.p+"static/media/resume.34084c73.pdf"),D=function(){var e=d,t=h,n=b,a=u,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:I,target:"blank",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(A.a,{})})]})]})]})},L=n(7),J=n.n(L),R=n(18),H=n.n(R),B=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(H.a,{})})]})}),M=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(B,{project:e},J()())}))})]}):null}),z=(n(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),F=n(19),Q=n.n(F),G=(n(38),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(Q.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://edihasaj.github.io",className:"link footer__link",children:"Created By Edi Hasaj"})})}),W=(n(41),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(D,{}),Object(s.jsx)(M,{}),Object(s.jsx)(z,{}),Object(s.jsx)(K,{})]}),Object(s.jsx)(G,{}),Object(s.jsx)(V,{})]})});n(42);Object(a.render)(Object(s.jsx)(o,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.96f6a70c.chunk.js.map