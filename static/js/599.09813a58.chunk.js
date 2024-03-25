"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[599],{5599:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(824),r=t(9439),s=t(2791),o=t(3402),c=t(422),i=t(3117),d=t(9323),u=t(5350),l=t(7438),m=t(7236),h=t(9055),p=t(5985),x=t(184);var j=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],j=(0,s.useState)(""),b=(0,r.Z)(j,2),f=b[0],C=b[1],v=(0,i.Jx)(),y=v.data,g=v.isLoading,w=(0,i.Lr)(),k=(0,r.Z)(w,1)[0],A=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":C(r);break;default:return}},Z=function(){a(""),C("")};return(0,x.jsxs)(u.NI,{onSubmit:function(e){e.preventDefault();var n,a={id:(0,c.x0)(),name:t,number:f};n=a,y.map((function(e){return e.name.toLowerCase()})).includes(n.name.toLowerCase())?p.Am.error("\ud83d\ude0f".concat(n.name," is already in contacts.")):(k(n),Z(),p.Am.success("\ud83d\ude03 Contact, ".concat(t," successfully added")))},autoComplete:"on",children:[(0,x.jsxs)(l.l,{htmlFor:"addContact",children:["Name",(0,x.jsx)(m.I,{type:"text",id:"addContact",name:"name",value:t,onChange:A,placeholder:"Enter your name...",autoComplete:"name",pattern:"^[a-zA-Z]+(([' \\-][a-zA-Z])?[a-zA-Z]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(l.l,{htmlFor:"number_input",children:["Number",(0,x.jsx)(m.I,{type:"tel",id:"number_input",name:"number",value:f,onChange:A,placeholder:"Enter your number...",autoComplete:"tel",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(h.z,{type:"submit",children:"Add contact"}),(0,x.jsx)(o.x7,{}),g&&(0,x.jsx)(d.Z,{})]})},b=t(4420),f=function(e){return e.contacts.filter},C=t(6661),v=t(3004),y=t(2810);var g=function(e){var n=e.id,t=e.name,a=e.number,s=(0,i.Nt)(),o=(0,r.Z)(s,2),c=o[0],d=o[1].isLoading;return(0,x.jsxs)(C.HC,{borderWidth:"1px",borderRadius:"md",p:"4",mb:"2",display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,x.jsxs)("p",{children:[t,": ",a," "]}),(0,x.jsx)(h.z,{colorScheme:"red",onClick:function(){return c(n)},disabled:d,children:d?(0,x.jsx)(y.$,{size:"sm",color:"white"}):"Delete"})]},n)},w=function(){var e=(0,i.Jx)(),n=e.data,t=e.error,a=e.isLoading,r=(0,b.v9)(f),s=n&&n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})),o=n&&s.length>0;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(C.aV,{children:[o&&s.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,x.jsx)(g,{id:n,name:t,number:a},n)})),a&&(0,x.jsx)(d.Z,{}),t&&(0,x.jsx)(v.J1,{children:"Try adding phone details or contact your administrator"})]})})},k=t(3866),A=function(){var e=(0,b.I0)(),n=(0,b.v9)(f);return(0,x.jsxs)(l.l,{htmlFor:"searchName",value:n,children:[(0,x.jsx)("span",{style:{fontWeight:"bold",marginBottom:"0.5rem",display:"block"},children:"Find contacts by name"}),(0,x.jsx)(m.I,{id:"searchName",type:"text",autoComplete:"name",value:n,onChange:function(n){e((0,k.hX)(n.currentTarget.value.trim()))},placeholder:"Enter search name"})]})};var Z=function(){return(0,x.jsxs)(a.xu,{children:[(0,x.jsx)("h1",{children:"PHONEBOOK APP"}),(0,x.jsx)("h2",{children:"Add new contact"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(A,{}),(0,x.jsx)(w,{})]})}}}]);
//# sourceMappingURL=599.09813a58.chunk.js.map