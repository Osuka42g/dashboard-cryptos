(this["webpackJsonpdashboard-unir"]=this["webpackJsonpdashboard-unir"]||[]).push([[0],{202:function(e,t,a){},211:function(e,t){},213:function(e,t){},356:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(34),l=a.n(i),s=(a(202),a(20)),r=a(46),o=a(23),j=a(191),b=a(171),d=a(375),h=a(369),u=a(189),O=a(190),x=a(91),f=a(373),m=a(74),p=a(193),g=a(9),v=function(e){var t=e.label,a=e.color,n=e.onlyBrush,i=void 0!==n&&n,l=Object(c.useState)([]),o=Object(s.a)(l,2),j=o[0],v=o[1],y=Object(c.useState)(!0),C=Object(s.a)(y,2),B=C[0],w=C[1];return Object(c.useEffect)((function(){fetch("datasets/".concat(t,".csv")).then((function(e){return e.text()})).then((function(e){var t=Object(b.a)(e,{delimiter:",",header:!0}).data.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{Close:parseFloat(e.Close)})})).reverse();v(t),w(!1)}))}),[]),i?Object(g.jsx)(d.a,{width:"100%",height:45,children:Object(g.jsxs)(h.a,{width:500,height:400,data:j,syncId:"cryptoCharts",margin:{top:10,right:30,left:0,bottom:0},children:[Object(g.jsx)(u.a,{dataKey:"Date"}),Object(g.jsx)(O.a,{type:"number"}),Object(g.jsx)(x.a,{data:j,dataKey:"Date",fill:"#f29e4c"})]})}):B?Object(g.jsx)("h4",{style:{textAlign:"center",marginTop:"10%"},children:"Loading"}):Object(g.jsxs)("div",{style:{width:"100%"},children:[Object(g.jsx)("h4",{children:t}),Object(g.jsx)(d.a,{width:"100%",height:200,children:Object(g.jsxs)(h.a,{width:500,height:400,data:j,syncId:"cryptoCharts",margin:{top:10,right:30,left:0,bottom:0},children:[Object(g.jsx)(f.a,{strokeDasharray:"3 3"}),Object(g.jsx)(u.a,{dataKey:"Date"}),Object(g.jsx)(O.a,{type:"number",padding:{bottom:10,top:10},label:"USD"}),Object(g.jsx)(m.a,{}),Object(g.jsx)(p.a,{type:"monotone",dataKey:"Close",stroke:a,fill:a,dot:!1})]})})]})},y=(a(356),["#54478c","#2c699a","#048ba8","#0db39e","#16db93","#83e377","#b9e769","#efea5a","#f1c453","#f29e4c"]),C=[{label:"BinanceCoin",value:"BinanceCoin"},{label:"Bitcoin",value:"Bitcoin"},{value:"BitcoinCash",label:"BitcoinCash"},{value:"BitcoinSV",label:"BitcoinSV"},{label:"Cardano",value:"Cardano"},{label:"EOS",value:"EOS"},{label:"Ethereum",value:"Ethereum"},{label:"Litecoin",value:"Litecoin"},{label:"Stellar",value:"Stellar"},{label:"Tether",value:"Tether"},{label:"Tezos",value:"Tezos"},{label:"XRP",value:"XRP"}].map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{color:y[t%y.length]})}));var B=function(){var e=[C[2],C[4]],t=Object(c.useState)([]),a=Object(s.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){i(e)}),[]),Object(g.jsxs)(o.Grid,{fluid:!0,children:[Object(g.jsx)(o.Row,{style:{marginTop:15},children:Object(g.jsx)(o.Col,{xs:12,md:12,children:Object(g.jsx)("h3",{children:"Hist\xf3rico de precios de Criptomonedas"})})}),Object(g.jsx)(o.Row,{style:{marginTop:15},children:Object(g.jsx)(o.Col,{xs:12,md:12,children:Object(g.jsx)(j.a,{defaultValue:e,isMulti:!0,name:"currencies-select",options:C,className:"basic-multi-select",classNamePrefix:"select",onChange:i})})}),Object(g.jsx)(o.Row,{style:{marginTop:15},children:Object(g.jsx)(o.Col,{xs:12,md:12,children:Object(g.jsx)(v,{onlyBrush:!0,label:"Bitcoin"})})}),Object(g.jsx)(o.Row,{children:n.map((function(e,t){return Object(g.jsx)(o.Col,{xs:6,md:4,children:Object(g.jsx)(v,Object(r.a)({},e))},t)}))}),Object(g.jsx)(o.Row,{style:{marginTop:15},children:Object(g.jsx)(o.Col,{xs:12,md:12,children:Object(g.jsx)("p",{children:"* Agregar demasiadas gr\xe1ficas podr\xeda disminuir el desempe\xf1o significativamente."})})})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,376)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),i(e),l(e)}))};l.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root")),w()}},[[367,1,2]]]);
//# sourceMappingURL=main.692bc728.chunk.js.map