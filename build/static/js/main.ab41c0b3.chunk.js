(this.webpackJsonppeanutswebsite=this.webpackJsonppeanutswebsite||[]).push([[0],{18:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(2);var a=n(12),c=n.n(a),s=(n(18),n(13)),u=n.n(s),o=n(0);var l=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"half",children:[Object(o.jsx)("textarea",{id:"formvalue",rows:"20",cols:"136",name:"value"}),Object(o.jsx)("input",{id:"formsubmit",type:"submit",value:"Encode",onClick:function(){var e=document.getElementById("formvalue").value;u.a.get("https://peanutsrestapi.herokuapp.com/encode?value="+e).then((function(e){document.getElementById("encodedvalue").value=e.data})).catch(console.error)}})]}),Object(o.jsxs)("div",{className:"half",children:[Object(o.jsx)("textarea",{id:"encodedvalue",rows:"20",cols:"136",name:"value"}),Object(o.jsx)("input",{id:"formsubmit",type:"submit",value:"Clear",onClick:function(){var e=document.getElementById("formvalue");document.getElementById("encodedvalue").value="",e.value=""}})]})]})};var i=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(l,{})})};c.a.render(Object(o.jsx)(i,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ab41c0b3.chunk.js.map