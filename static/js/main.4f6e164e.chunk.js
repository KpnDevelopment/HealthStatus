(this.webpackJsonphealthstatus=this.webpackJsonphealthstatus||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),l=s(8),n=s.n(l),i=(s(22),s(23),s(7)),r=(s(24),s(32)),d=s(34),j=s(35),o=s(2);var b=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)(""),n=Object(i.a)(l,2),b=n[0],u=n[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),h=O[0],g=O[1],A=Object(a.useState)(""),N=Object(i.a)(A,2),p=N[0],S=N[1],x=Object(a.useState)(""),y=Object(i.a)(x,2),T=y[0],k=y[1],E=Object(a.useState)(""),v=Object(i.a)(E,2),B=v[0],C=v[1],R=Object(a.useState)(""),w=Object(i.a)(R,2),P=w[0],I=w[1],f=Object(a.useState)(""),G=Object(i.a)(f,2),M=G[0],H=G[1],Z=Object(a.useState)(""),K=Object(i.a)(Z,2),U=K[0],J=K[1];Object(a.useEffect)((function(){L(),q(),W()}));var L=function(){s<=0?J(""):s<=50?(J("Dangerously low"),C(" Seek medical attention")):s<=70||s<=90?(J("Possibly too low "),C("Consume sugar upon experiencing symptoms of low blood sugar, or seek medical attention")):s<=160||s<240?(J("Too high"),C("Work to bring down blood sugar levels")):s<=240||s<=300?(J("Much too high"),C("This could be a sign of ineffective glucose management, so see a doctor")):s>=300&&(J("Very high"),C("Seek immediate medical attention"))},q=function(){b<=0?S(""):b<120?S("NORMAL"):120===b||b<=129?S("ELEVATED"):130===b||b<=139?(S("HIGH  "),I(" BLOOD PRESSURE(HYPERTENSION) STAGE 1")):140===b||b<=179?(S("HIGH  "),I(" BLOOD PRESSURE(HYPERTENSION) STAGE 2")):b>180&&(S("HYPERTENSIVE"),I("CRISIS(consult your doctor immediately"))},W=function(){h<=0?k(""):h<80?k("NORMAL"):h<80?k("ELEVATED"):80===h||h<=89?(k("HIGH "),H("BLOOD PRESSURE(HYPERTENSION) STAGE 1")):90===h||h<=119?(k("HIGH"),H("BLOOD PRESSURE(HYPERTENSION) STAGE 2")):h>=120&&(k("HYPERTENSIVE"),H("CRISIS(consult your doctor immediately"))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"inputs",style:{display:"flex"},children:[Object(o.jsx)("div",{className:"inputGroup",children:Object(o.jsxs)(r.a,{className:"mb-3 unitgrp sm",children:[Object(o.jsx)(d.a.Control,{className:"input",required:!0,value:s,onChange:function(e){c(e.target.value)},size:"lg",type:"number",placeholder:"Fasting blood sugar"}),Object(o.jsx)(r.a.Prepend,{className:"units",children:Object(o.jsx)(r.a.Text,{className:"unit",id:"basic-addon1",children:"mg/dl"})})]})}),Object(o.jsx)("div",{className:"inputGroup",children:Object(o.jsxs)(r.a,{className:"mb-3 unitgrp",children:[Object(o.jsx)(d.a.Control,{className:"input",required:!0,value:b,onChange:function(e){u(e.target.value)},size:"lg",type:"number",placeholder:"BP(systolic)"}),Object(o.jsx)(r.a.Prepend,{className:"units",children:Object(o.jsx)(r.a.Text,{className:"unit",id:"basic-addon1",children:"mm/Hg"})})]})}),Object(o.jsx)("div",{className:"inputGroup",children:Object(o.jsxs)(r.a,{className:"mb-3 unitgrp",children:[Object(o.jsx)(d.a.Control,{className:"input",required:!0,value:h,onChange:function(e){g(e.target.value)},size:"lg",type:"number",placeholder:"BP(diastotic)"}),Object(o.jsx)(r.a.Prepend,{className:"units",children:Object(o.jsx)(r.a.Text,{className:"unit",id:"basic-addon1",children:"mm/Hg"})})]})})]}),Object(o.jsxs)("div",{className:"cards",style:{display:"flex"},children:[Object(o.jsx)(j.a,{style:{width:"18rem"},className:"card",children:Object(o.jsxs)(j.a.Body,{className:"card-body",children:[Object(o.jsx)(j.a.Title,{className:"cardTitle",children:"SUGAR"}),Object(o.jsx)(j.a.Title,{className:"cardTitle",children:U.toUpperCase()}),Object(o.jsx)(j.a.Text,{children:B.toUpperCase()})]})}),Object(o.jsx)(j.a,{style:{width:"18rem"},children:Object(o.jsxs)(j.a.Body,{className:"card-body",children:[Object(o.jsx)(j.a.Title,{className:"cardTitle",children:"SYSTOLIC BP"}),Object(o.jsx)(j.a.Title,{className:"cardTitle",children:p.toUpperCase()}),Object(o.jsx)(j.a.Text,{children:P.toUpperCase()})]})}),Object(o.jsx)(j.a,{style:{width:"18rem"},children:Object(o.jsxs)(j.a.Body,{className:"card-body",children:[Object(o.jsx)(j.a.Title,{className:"cardTitle",children:"DIASTOLIC BP "}),Object(o.jsx)(j.a.Title,{className:"cardTitle",children:T.toUpperCase()}),Object(o.jsx)(j.a.Text,{children:M.toUpperCase()})]})})]})]})},u=s(33);var m=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{bg:"dark",children:Object(o.jsxs)(u.a.Brand,{href:"#home",style:{color:"white",fontWeight:800},children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",width:"35",height:"35",className:"d-inline-block align-top",alt:"logo",style:{background:"#212529"}}),"Health Monitor"]})})})};var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"componets",children:Object(o.jsx)(b,{})})]})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),l(e),n(e)}))};s(29);n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),h()}},[[30,1,2]]]);
//# sourceMappingURL=main.4f6e164e.chunk.js.map