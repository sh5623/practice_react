(this["webpackJsonppractice-react"]=this["webpackJsonppractice-react"]||[]).push([[0],{65:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(32),s=c.n(i),j=c(4),a=c(35),o=c(0);var u=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),u=s[0],l=s[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["My To Dos ",u.length>0?"(".concat(u.length,")"):""]}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c&&(r(""),l((function(e){return[c].concat(Object(a.a)(u))})))},children:[Object(o.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Write your to do..."}),Object(o.jsx)("button",{children:"Add To Do"})]}),Object(o.jsx)("hr",{}),u.slice(0).reverse().map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))]})},l=c(11),b=c(12),d=c.n(b);var h=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),a=s[0],u=s[1];return Object(l.useEffect)((function(){d.a.get("https://api.coinpaprika.com/v1/tickers").then((function(e){u(e.data),r(!1)})).catch((function(e){return alert(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["The Coins! ",c?"":"(".concat(a.length,")")]}),c?Object(o.jsx)("strong",{children:"Loading..."}):Object(o.jsx)("ul",{children:a.map((function(e){return Object(o.jsxs)("li",{children:[e.name," (",e.symbol,") : $",e.quotes.USD.price]},e.id)}))})]})},O=c(2);var x=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"selectComponents",children:"Choose your component's"}),Object(o.jsxs)("select",{id:"selectComponents",onChange:function(e){r(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Select components"}),Object(o.jsx)("option",{value:"1",children:"TodoList"}),Object(o.jsx)("option",{value:"2",children:"Coins"}),Object(o.jsx)("option",{value:"3",children:"Movies"})]}),"1"===c?Object(o.jsx)(u,{}):null,"2"===c?Object(o.jsx)(h,{}):null,"3"===c?Object(o.jsx)(O.a,{to:"/movie"}):null]})},v=c(13),m=c.n(v),p=c(19);var f=function(){var e=Object(O.g)().id,t=Object(n.useState)(!0),c=Object(j.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)([]),a=Object(j.a)(s,2),u=a[0],b=a[1],h=function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)).then((function(e){b(e.data.data.movie),i(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){h()}),[]),console.log(u),Object(o.jsx)("div",{children:r?Object(o.jsxs)("h1",{children:["Loading...(",e,")"]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:Object(o.jsxs)("strong",{style:{textDecorationLine:"underline"},children:["Title : ",u.title]})}),Object(o.jsxs)("h3",{children:["Year : ",u.year]}),Object(o.jsxs)("h3",{children:["Genres :"," ",u.genres.map((function(e){return Object(o.jsx)("li",{children:e},e)}))]}),Object(o.jsxs)("h3",{children:["Rating : ",u.rating]}),Object(o.jsx)("h3",{children:Object(o.jsxs)("p",{children:["Summary : ",u.description_full]})}),Object(o.jsx)("img",{src:u.large_cover_image,alt:u.title})]})})},g=c(10);var y=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,i=e.genres;return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:c,alt:n}),Object(o.jsx)("h2",{children:Object(o.jsx)(g.b,{to:"/movie/".concat(t),children:n})}),Object(o.jsx)("p",{children:r}),Object(o.jsx)("ul",{children:i.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})};var S=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),a=s[0],u=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year").then((function(e){u(e.data.data.movies),r(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){b()}),[]),Object(o.jsx)("div",{children:c?Object(o.jsx)("h1",{children:"Loading..."}):Object(o.jsx)("div",{children:a.map((function(e){return Object(o.jsx)(y,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var _=function(){return Object(o.jsx)(g.a,{children:Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{path:"/movie",exact:!0,children:Object(o.jsx)(S,{})}),Object(o.jsx)(O.b,{path:"/movie/:id",children:Object(o.jsx)(f,{})}),Object(o.jsx)(O.b,{path:"/",children:Object(o.jsx)(x,{})})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.dcbfa21d.chunk.js.map