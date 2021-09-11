(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a(6),c=a(1),s=a(0),r=Object(c.createContext)(),o=function(e){var t=e.children,a=Object(c.useState)("light"),n=Object(i.a)(a,2),o=n[0],l=n[1];Object(c.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&l("dark")}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="/portfolio",j="HOME.",d="Edi Hasaj",h="Software Engineer",b="My objective is to take a challenging and\nmanagerial role in the field of computer programming and\nimplement the expertise and experience gained in this field to\ndevelop complex projects with efficiency and quality.",u="/resume.pdf",m={linkedin:"https://linkedin.com/in/edihasaj",github:"https://github.com/edihasaj",twitter:"https://twitter.com/hasajedi"},p=[{name:"Kosovo - Water Information System",description:"Designed and developed a complete GIS system for \nmanaging and interacting with national water data with the\npurpose of digitizing and interacting everyday with the \nsystem.",stack:["C#","Java","JavaScript","Razor"],sourceCode:"https://siu.rks-gov.net",livePreview:"https://siu.rks-gov.net"},{name:"Leaflet - Coordinate Projection",description:"Leaflet JS. MAP - Coordinate Projection of Kosovaref01. Show coordinates on mousemove in Leaflet map. Ability to change from different projections",stack:["JavaScript"],sourceCode:"https://github.com/edihasaj/leafletCoordProjection",livePreview:"http://edihasaj.github.io/leaflet-coord-projection/"},{name:"Drone vs Bird detection from Radar systems with Machine Learning",description:"Software solution that detects Drones or Birds from Radar systems data with high precision.",stack:["Python","Matlab"],sourceCode:"#projects",livePreview:"#projects"},{name:"Scanner CTRL Toshiba",description:"API for integration of Toshiba Hardware Scanner Control",stack:["C#"],sourceCode:"https://github.com/edihasaj/scanner-ctrl-toshiba",livePreview:"#projects"},{name:"Cash Drawer Toshiba",description:"API for integration of Toshiba Hardware Cash Drawer",stack:["C#"],sourceCode:"https://github.com/edihasaj/cash-drawer-toshiba",livePreview:"#projects"},{name:"Cash Display Toshiba",description:"API for integration of Toshiba Hardware Cash Display",stack:["C#"],sourceCode:"https://github.com/edihasaj/cash-display-toshiba",livePreview:"#projects"},{name:"E-Farming",description:"An automated agriculture irrigation system based on IoT and cloud platform.",stack:["C#","ASP.NET Core","JavaScript","Razor"],sourceCode:"https://github.com/edihasaj/EFarming",livePreview:"#projects"},{name:"E-Fiscalization API",description:"API that integrates ERP fiscal sales like POS, Wholesales, etc.",stack:["C#","ASP.NET Core"],sourceCode:"#projects",livePreview:"#projects"}],f=["C#","Java","Dart","Python","VB.NET","JavaScript","TypeScript","PHP",".NET & .NET Core","Spring Boot","Flutter","React","React Native","Node.js","Django","Flask","Express.js","NextJs","Laravel","SQL Server","PostgreSQL","MySQL","MongoDB","Redis","Angular","Vue.js","Docker","SASS","Git","CI/CD","Azure","Powershell","Linux","Unix"],O="edihasaj@outlook.com",x=a(14),v=a.n(x),g=a(12),k=a.n(g),N=a(16),w=a.n(N),C=a(15),_=a.n(C),P=(a(27),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,o=Object(c.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],h=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:n,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===a?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(w.a,{})})]})}),S=(a(33),function(){var e=l,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(P,{})]})}),y=a(10),E=a.n(y),T=a(17),A=a.n(T),I=a(18),D=a.n(I),L=(a(34),a.p+"static/media/resume.34084c73.pdf"),J=function(){var e=d,t=h,a=b,n=u,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:a&&a}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:L,target:"blank",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),i.twitter&&Object(s.jsx)("a",{href:i.twitter,"aria-label":"twitter",className:"link link--icon",children:Object(s.jsx)(D.a,{})})]})]})]})},R=a(7),H=a.n(R),B=a(19),M=a.n(B),z=(a(36),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),F=(a(37),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(z,{project:e},H()())}))})]}):null}),Q=(a(38),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),G=a(20),K=a.n(G),V=(a(39),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(K.a,{fontSize:"large"})})}):null}),W=(a(40),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(a(41),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://twitter.com/hasajedi",className:"link footer__link",children:"Created By Edi Hasaj"})})}),U=(a(42),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(F,{}),Object(s.jsx)(Q,{}),Object(s.jsx)(W,{})]}),Object(s.jsx)(V,{}),Object(s.jsx)(q,{})]})});a(43);Object(n.render)(Object(s.jsx)(o,{children:Object(s.jsx)(U,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.41f28658.chunk.js.map