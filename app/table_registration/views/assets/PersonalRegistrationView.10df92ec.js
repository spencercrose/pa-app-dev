import{u as C,G as B}from"./GuestList.ef8c8565.js";import{R as N}from"./RegistrationList.7c9104f7.js";import{_ as T,a as L,s as q,r as y,l as I,b as v,o as i,c as l,g as o,d as a,j as S,F as G,k as U,t as z,w as k,H as A,I as F,e as w,u as E,B as D,P as O}from"./index.4facfd7c.js";import{u as P,r as R}from"./index.esm.469a7800.js";import"./InputFinancial.32e2c01f.js";const H={props:{registrationID:String},setup(r){const s=C(),d=L(),{guest:e}=q(C()),m={organization:{required:R},firstname:{required:R},lastname:{required:R},attendancetype:{required:R}},h=P(m,e),p=y(I.get("organizations")||[]),u=y(I.get("attendancetypes")||[]),c=y(I.get("accessibilityoptions")||[]),f=y(I.get("dietaryoptions")||[]);return r.registrationID&&d.fill(r.registrationID),{guest:e,guestData:s,v$:h,organizations:p,dietary:f,accessibility:c,attendancetypes:u,rules:m,onSubmit:async function(n){n.preventDefault();const x=await this.v$.$validate();console.log(x),this.guest.registration=d.getId,s.registerGuest(this.guest).then(_=>s.addGuestList(_)).then(()=>{delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[],this.$forceUpdate}).catch(_=>{console.log(_)}).finally(()=>{})},onReset:function(n){n.preventDefault(),delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[]}}}},g=r=>(A("data-v-0bbb9d00"),r=r(),F(),r),j={class:"dropdown"},W=g(()=>o("label",{for:"organization"},"Organization:",-1)),J={key:0},K={class:"text-field"},M=g(()=>o("label",{for:"firstname"},"First Name:",-1)),Q={key:0},X=g(()=>o("small",{id:"firstname-help"},"Enter guest's first name.",-1)),Y={class:"text-field"},Z=g(()=>o("label",{for:"lastname"},"Last Name:",-1)),$={key:0},ee=g(()=>o("small",{id:"lastname-help"},"Enter guest's last name.",-1)),te={class:"dropdown"},se=g(()=>o("label",{for:"attendancetype"},"Attendance Type:",-1)),oe={key:0},ae={class:"checkbox-group"},ne=g(()=>o("label",{for:"accessibility"},"Accessibility Requirements:",-1)),ie=["for"],le={class:"checkbox-group"},re=g(()=>o("label",{for:"dietary"},"Dietary Requirements:",-1)),de=["for"],ue=w("Add Guest"),ce=w("Reset");function ge(r,s,d,e,m,h){const p=v("Dropdown"),u=v("InputText"),c=v("Checkbox"),f=v("Button");return i(),l("div",null,[o("form",{onSubmit:s[6]||(s[6]=(...t)=>e.onSubmit&&e.onSubmit(...t)),onReset:s[7]||(s[7]=(...t)=>e.onReset&&e.onReset(...t))},[o("div",j,[W,a(p,{id:"organization",modelValue:e.guest.organization,"onUpdate:modelValue":s[0]||(s[0]=t=>e.guest.organization=t),options:e.organizations,optionLabel:"text",optionValue:"value",placeholder:"Select a Organization"},null,8,["modelValue","options"]),e.v$.organization.$error?(i(),l("div",J,"Organization field is required.")):S("",!0)]),o("div",K,[M,a(u,{id:"firstname",type:"firstname","aria-describedby":"firstname-help",modelValue:e.guest.firstname,"onUpdate:modelValue":s[1]||(s[1]=t=>e.guest.firstname=t),placeholder:"First Name"},null,8,["modelValue"]),e.v$.firstname.$error?(i(),l("div",Q,"First name of guest is required.")):S("",!0),X]),o("div",Y,[Z,a(u,{id:"lastname",type:"lastname","aria-describedby":"lastname-help",modelValue:e.guest.lastname,"onUpdate:modelValue":s[2]||(s[2]=t=>e.guest.lastname=t),placeholder:"Last Name"},null,8,["modelValue"]),e.v$.lastname.$error?(i(),l("div",$,"Last name of guest is required.")):S("",!0),ee]),o("div",te,[se,a(p,{id:"attendancetype",modelValue:e.guest.attendancetype,"onUpdate:modelValue":s[3]||(s[3]=t=>e.guest.attendancetype=t),options:e.attendancetypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of attendance for this guest"},null,8,["modelValue","options"]),e.v$.attendancetype.$error?(i(),l("div",oe,"Attendance type is required.")):S("",!0)]),o("div",ae,[ne,(i(!0),l(G,null,U(e.accessibility,t=>(i(),l("div",{key:t.key,class:"field-checkbox"},[a(c,{id:t.key,name:"each",value:t.value,modelValue:e.guest.accessibility,"onUpdate:modelValue":s[4]||(s[4]=b=>e.guest.accessibility=b)},null,8,["id","value","modelValue"]),o("label",{for:t.key},z(t.text),9,ie)]))),128))]),o("div",le,[re,(i(!0),l(G,null,U(e.dietary,t=>(i(),l("div",{key:t.key,class:"field-checkbox"},[a(c,{id:t.key,name:"each",value:t.value,modelValue:e.guest.dietary,"onUpdate:modelValue":s[5]||(s[5]=b=>e.guest.dietary=b)},null,8,["id","value","modelValue"]),o("label",{for:t.key},z(t.text),9,de)]))),128))]),a(f,{type:"submit",label:"primary",class:"p-button-raised"},{default:k(()=>[ue]),_:1}),a(f,{type:"reset",label:"danger",class:"p-button-raised p-button-danger"},{default:k(()=>[ce]),_:1})],32)])}var me=T(H,[["render",ge],["__scopeId","data-v-0bbb9d00"]]);const ve={__name:"PersonalRegistrationView",props:{id:String},setup(r){const d=r.id;E().login();const m=L();m.fill(d);const h=()=>String(m.getTableCount),p=()=>m.getRegistrar;p();const u=y(!1),c=y(!1),f=b=>{u.value=!0},t=b=>{c.value=!0};return(b,n)=>{const x=v("Button"),_=v("Dialog");return i(),l("main",null,[a(O,{title:`Registration # ${D(d)} `},{default:k(()=>[w("Submitted by "+z(p()),1)]),_:1},8,["title"]),a(N,{registrationID:D(d),detailsView:!1},null,8,["registrationID"]),a(x,{label:"Add Guests",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:n[0]||(n[0]=V=>f())}),a(x,{type:"button",label:"Tables",icon:"pi pi-ticket",class:"p-button-warning",badge:h(),onClick:n[1]||(n[1]=V=>t()),badgeClass:"p-badge-danger"},null,8,["badge"]),a(_,{visible:c.value,"onUpdate:visible":n[2]||(n[2]=V=>c.value=V),header:"Table Information",modal:!0,class:"p-fluid"},{default:k(()=>[w("Warning regarding table charges. Current table count: "+z(h()),1)]),_:1},8,["visible"]),a(_,{visible:u.value,"onUpdate:visible":n[3]||(n[3]=V=>u.value=V),header:"Add a new Guest",modal:!0,class:"p-fluid"},{default:k(()=>[a(me,{registrationID:D(d)},null,8,["registrationID"])]),_:1},8,["visible"]),a(B,{adminView:!1,registrationID:D(d)},null,8,["registrationID"])])}}};export{ve as default};
