(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(9),r=c.n(s),i=(c(20),c(12)),l=c(4),j=(c(21),c(22),c(1));var u=function(e){return Object(j.jsxs)("div",{className:"form__input",children:[Object(j.jsx)("input",{className:String(e.value).length>0?"entered":"",type:e.type,value:e.value,onChange:function(t){e.isNumber&&(t.target.value=t.target.value.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")),e.setValue(t.target.value)}}),Object(j.jsx)("label",{children:e.label})]})};c(24);var b=function(e){return Object(j.jsxs)("div",{className:"child__block",children:[Object(j.jsx)(u,{label:"\u0418\u043c\u044f",type:"text",value:e.child.name,setValue:e.setName}),Object(j.jsx)(u,{label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",type:"number",value:e.child.age,isNumber:!0,setValue:e.setAge}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),e.remove()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},o=c(2),d=c(5),h=c(8),O=c(11),f=Object(O.b)({name:"user",initialState:{value:{name:"",age:0,children:[]}},reducers:{set:function(e,t){e.value=Object(h.a)({},t.payload)}}}),m=f.actions.set,x=f.reducer,v=function(e,t,c){var n=t(e);return n&&alert(c),n};var g=function(){var e=Object(d.c)((function(e){return e.user.value})),t=Object(d.b)(),c=Object(o.f)(),a=Object(n.useState)(e.name),s=Object(l.a)(a,2),r=s[0],h=s[1],O=Object(n.useState)(e.age),f=Object(l.a)(O,2),x=f[0],g=f[1],p=Object(n.useState)(e.children),_=Object(l.a)(p,2),N=_[0],w=_[1],k=function(e,t,c){var n=Object(i.a)(N);n[e][c]=t,w(n)};return Object(j.jsxs)("main",{className:"main__page",children:[Object(j.jsxs)("form",{className:"user__form",children:[Object(j.jsx)("div",{className:"form__header",children:Object(j.jsx)("h2",{children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 "})}),Object(j.jsx)(u,{label:"\u0418\u043c\u044f",type:"text",value:r,setValue:h}),Object(j.jsx)(u,{label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",type:"text",isNumber:!0,value:x,setValue:g})]}),Object(j.jsxs)("form",{className:"children__form",children:[Object(j.jsxs)("div",{className:"form__header",children:[Object(j.jsx)("h2",{children:"\u0414\u0435\u0442\u0438 (\u043c\u0430\u043a\u0441. 5)"}),Object(j.jsx)("button",{disabled:5===N.length?"disabled":"",className:"add-btn",onClick:function(e){e.preventDefault();var t=Object(i.a)(N);t.push({name:"",age:0}),w(t)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430"})]}),N.map((function(e,t){return Object(j.jsx)(b,{child:N[t],setName:function(e){return k(t,e,"name")},setAge:function(e){return k(t,e,"age")},remove:function(){return function(e){var t=Object(i.a)(N);t.splice(e,1),w(t)}(t)}},t)})),Object(j.jsx)("button",{className:"save-btn",onClick:function(e){e.preventDefault();var n=v(r,(function(e){return 0===e.length}),"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e."),a=v(x,(function(e){return e<=0}),"\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0443\u043a\u0430\u0437\u0430\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u043e."),s=v(N,(function(e){return e.some((function(e){return 0===e.name.length||e.age<=0}))}),"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u0435\u0442\u044f\u0445 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0435\u0432\u0435\u0440\u043d\u043e");n||a||s||(t(m({name:r,age:x,children:N})),alert("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430!"),c("/show",{replace:!0}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})};c(31);var p=function(){var e=function(e,t){var c=Math.abs(e)%100,n=c%10;return c>10&&c<20?t[2]:n>1&&n<5?t[1]:1===n?t[0]:t[2]},t=Object(d.c)((function(e){return e.user.value})),c=t.children.length>0?Object(j.jsxs)("div",{className:"info__block",children:[Object(j.jsx)("h2",{children:"\u0414\u0435\u0442\u0438"}),Object(j.jsx)("div",{className:"child__list",children:t.children.map((function(t){return Object(j.jsxs)("div",{className:"child__list__item",children:[Object(j.jsx)("span",{children:t.name}),t.age?Object(j.jsxs)("span",{children:[", ",t.age," ",e(t.age,["\u0433\u043e\u0434","\u0433\u043e\u0434\u0430","\u043b\u0435\u0442"])]}):Object(j.jsx)("span",{})]})}))})]}):Object(j.jsx)("div",{});return Object(j.jsxs)("main",{className:"info__page",children:[Object(j.jsxs)("div",{className:"info__block",children:[Object(j.jsx)("h2",{children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),t.name?Object(j.jsxs)("div",{className:"user__info",children:[Object(j.jsx)("span",{children:t.name}),t.age?Object(j.jsxs)("span",{children:[", ",t.age," ",e(t.age,["\u0433\u043e\u0434","\u0433\u043e\u0434\u0430","\u043b\u0435\u0442"])]}):Object(j.jsx)("span",{})]}):Object(j.jsx)("div",{className:"user__info",children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),c]})},_=(c(32),c.p+"static/media/logo.bba01bd9.svg");var N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],u=r[1];Object(n.useEffect)((function(){a("/"===window.location.pathname),u("/show"===window.location.pathname)}));var b=Object(o.f)(),d=function(e,t){e.preventDefault(),b(t,{replace:!0})};return Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:_,alt:"Alef"})}),Object(j.jsxs)("nav",{children:[Object(j.jsx)("a",{href:"/",onClick:function(e){return d(e,"/")},className:c?"active":"",children:"\u0424\u043e\u0440\u043c\u0430"}),Object(j.jsx)("a",{href:"/show",onClick:function(e){return d(e,"/show")},className:i?"active":"",children:"\u041f\u0440\u0435\u0432\u044c\u044e"})]})]})};c(33);var w=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"all rights reserved"})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},C=c(10),S=Object(O.a)({reducer:{user:x}});r.a.render(Object(j.jsx)(d.a,{store:S,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsxs)(C.a,{children:[Object(j.jsx)(N,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,element:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/show",exact:!0,element:Object(j.jsx)(p,{})})]}),Object(j.jsx)(w,{})]})})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.fe1402b0.chunk.js.map