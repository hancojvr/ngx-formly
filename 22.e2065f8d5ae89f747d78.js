(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4gfH":function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"7yHg":function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"left",type:"input",templateOptions:{placeholder:"Formly is terrific!",addonLeft:{class:"fa fa-euro"},label:"One add-on on the left (icon)"}},{key:"both",type:"input",templateOptions:{placeholder:"How great is this?",addonLeft:{class:"fa fa-home"},addonRight:{text:"$"},label:"One add-on on both side (left: icon, right: text)"}},{key:"right",type:"input",templateOptions:{placeholder:"Nice, isn't it??",addonRight:{class:"fa fa-heart"},label:"One add-on on the right (icon)"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Input add-ons",description:"This example demonstrates how to use input add-ons to decorate your input fields.",component:o,files:[{file:"app.component.html",content:s("INAK"),filecontent:s("iiAQ")},{file:"app.component.ts",content:s("swXk"),filecontent:s("Fwwf")},{file:"app.module.ts",content:s("4gfH"),filecontent:s("ULu6")}]}]},l=function(){},c=s("NcP4"),u=s("goW2"),i=s("MT1c"),r=s("1Q/V"),m=s("9+aI"),k=s("haId"),d=s("LJsP"),f=s("yR2A"),g=s("Bbog"),y=s("fFVA"),b=s("Nntq"),h=s("L0Z1"),F=s("grA4"),w=s("4o01"),v=s("Dl9q"),C=s("9Glx"),O=s("UcnZ"),M=s("wdLZ"),x=s("DAbo"),_=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,v.b,v.a)),t["\u0275did"](6,966656,null,0,C.a,[O.a,M.a,x.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,C.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){var s=a.component;n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending),n(a,7,0,!s.form.valid)})}var R=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,N,_)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),L=s("Ip0R"),A=s("eDkP"),S=s("Fzqc"),G=s("v9Dh"),I=s("M2Lx"),D=s("6LlJ"),U=s("F6kA"),B=s("4c35"),J=s("dWZg"),H=s("qAlS"),Q=s("Wf4p"),P=s("La40"),Z=s("SMsm"),q=s("UodH"),z=s("5QwG"),T=s("Nsh5"),W=s("8mMr"),E=s("LC5p"),K=s("0/Q6"),V=s("mqvi"),X=s("XR12"),Y=s("1ey0"),$=function(){},j=s("ZYCi"),nn=s("AMrk"),an=s("me7w"),sn=s("N3PW"),tn=s("l4pn"),pn=s("Fv2i"),on=s("wBYW"),en=s("IE48"),ln=s("Ltwa"),cn=s("4Mh+"),un=s("b7gF"),rn=s("DJQk"),mn=s("zn1Q"),kn=s("CgTb"),dn=s("+oK5"),fn=s("zdmU"),gn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return yn});var yn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,y.a,b.a,h.a,F.a,w.a,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[t.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,t.ComponentFactoryResolver,A.h,A.f,t.Injector,t.NgZone,L.DOCUMENT,S.b]),t["\u0275mpd"](5120,A.j,A.k,[A.c]),t["\u0275mpd"](5120,G.b,G.c,[A.c]),t["\u0275mpd"](4608,I.c,I.c,[]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,x.b,x.b,[x.a]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](4608,O.a,O.a,[x.b,M.a]),t["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,B.g,B.g,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,Q.l,Q.l,[[2,Q.d]]),t["\u0275mpd"](1073742336,G.e,G.e,[]),t["\u0275mpd"](1073742336,Q.w,Q.w,[]),t["\u0275mpd"](1073742336,I.d,I.d,[]),t["\u0275mpd"](1073742336,P.i,P.i,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,q.c,q.c,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,T.h,T.h,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,Q.m,Q.m,[]),t["\u0275mpd"](1073742336,Q.u,Q.u,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,K.c,K.c,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,$,$,[]),t["\u0275mpd"](1073742336,j.r,j.r,[[2,j.w],[2,j.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,x.a,function(){return[{types:[{name:"formly-group",component:nn.a}]},{types:[{name:"input",component:an.a,wrappers:["fieldset","label"]},{name:"checkbox",component:sn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:tn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:pn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:on.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:en.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:ln.a},{name:"description",component:cn.a},{name:"validation-message",component:un.a},{name:"fieldset",component:rn.a},{name:"addons",component:mn.a}],manipulators:[{class:kn.a,method:"run"},{class:dn.a,method:"run"},{class:fn.a,method:"run"}]},{types:[{name:"formly-group",component:nn.a}]},{}]},[]),t["\u0275mpd"](1024,j.m,function(){return[[{path:"",component:gn.a,data:e}]]},[])])})},Fwwf:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'left',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Formly is terrific!',\n        addonLeft: {\n          class: 'fa fa-euro',\n        },\n        label: 'One add-on on the left (icon)',\n      },\n    },\n    {\n      key: 'both',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'How great is this?',\n        addonLeft: {\n          class: 'fa fa-home',\n        },\n        addonRight: {\n          text: '$',\n        },\n        label: 'One add-on on both side (left: icon, right: text)',\n      },\n    },\n    {\n      key: 'right',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Nice, isn\\'t it??',\n\n        addonRight: {\n          class: 'fa fa-heart',\n        },\n        label: 'One add-on on the right (icon)',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},INAK:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>'},ULu6:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},iiAQ:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>'},swXk:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Formly is terrific!\'</span><span class="token punctuation" >,</span>\n        addonLeft<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-euro\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'One add-on on the left (icon)\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'both\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'How great is this?\'</span><span class="token punctuation" >,</span>\n        addonLeft<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-home\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        addonRight<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          text<span class="token punctuation" >:</span> <span class="token string" >\'$\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'One add-on on both side (left: icon, right: text)\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Nice, isn\\\'t it??\'</span><span class="token punctuation" >,</span>\n\n        addonRight<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-heart\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'One add-on on the right (icon)\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}}]);