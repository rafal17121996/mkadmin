(this.webpackJsonpmkadmin=this.webpackJsonpmkadmin||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),s=n(12),a=n.n(s),o=(n(19),n(14)),r=(n(20),n(13)),u=n.n(r),d=n(1);var l=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1];Object(i.useEffect)((function(){s()}),[]);var s=function(){u.a.get("https://weddingonline-test.azurewebsites.net/api/wedding/\u015alubMoniki_i_kacpra",{headers:{ApiKij:"12nfhfkjaha983ZKsakjh12989S11"}}).then((function(t){console.log(t),c(t.data.guests)})).catch((function(t){console.log("error")}))};return Object(d.jsx)("div",{children:Object(d.jsx)("table",{children:n.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.firstName})," ",Object(d.jsx)("td",{children:t.lastName})," ",Object(d.jsxs)("td",{children:[3==t.decisionStatus?"Potwierdzony":null," ",2==t.decisionStatus?"Mo\u017ce":null," ",1==t.decisionStatus?"Nie b\u0119de":null," ",0==t.decisionStatus?"Nie zaznaczy\u0142":null]})]})}))})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),j()}},[[40,1,2]]]);
//# sourceMappingURL=main.fd58e85a.chunk.js.map