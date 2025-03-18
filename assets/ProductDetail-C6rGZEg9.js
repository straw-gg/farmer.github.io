import{d as G,g as H,r as _,c as P,u as J,p as C,w as K,a as u,h as n,i as s,j as l,b as i,e as f,t as c,k as b,l as m,F as D,f as I,o as r,E as N,_ as O}from"./index-wz8wfBsg.js";const Q={class:"product-detail"},W={key:0,class:"loading"},X={key:1,class:"error"},Y={key:2,class:"product-content"},Z={class:"product-images"},ee=["src","alt"],te={class:"product-info"},oe={class:"title"},ae={class:"price-section"},se={class:"current-price"},le={key:0,class:"original-price"},re={key:0,class:"specs"},ne={class:"actions"},ie={class:"details"},ue={class:"intro"},ce=G({__name:"ProductDetail",setup(de){const y=J(),S=H(),v=_(!0),d=_(""),p=_(1),g=_(""),h=_("intro"),q=_(!1),k=P(()=>{const t=y.query.id;if(!t)throw new Error("缺少商品ID参数");if(Array.isArray(t))throw new Error("参数格式错误：ID不能为数组");const o=Number(t);if(isNaN(o))throw new Error("无效的商品ID格式");if(!/^[1-9]\d*$/.test(t))throw new Error("商品ID必须为正整数");return o}),e=P(()=>{try{return C.find(t=>t.id===k.value)||{id:0,title:"商品不存在",price:0,intro:"请检查商品链接",image:"",category:"",stock:0,parameters:{},specs:[],originalPrice:0,discount:""}}catch(t){return d.value=t.message,{id:0,title:"参数错误",price:0,intro:t.message,image:"",category:"",stock:0,parameters:{},specs:[],originalPrice:0,discount:""}}}),B=()=>{var t;if(e.value.id!==0){if((t=e.value.specs)!=null&&t.length&&!g.value){q.value=!0,N.warning("请选择商品规格");return}S.addItem({id:e.value.id,title:e.value.title,price:e.value.price,quantity:p.value,spec:g.value,image:e.value.image}),N.success(`已添加 ${p.value} 件商品到购物车`),p.value=1}},F=()=>{d.value="",w()},w=()=>{try{v.value=!0,d.value="";const t=k.value;setTimeout(()=>{if(!C.some(o=>o.id===t))throw new Error("找不到该商品");v.value=!1},500)}catch(t){d.value=t.message,v.value=!1}};return K(()=>y.query.id,()=>{w()},{immediate:!0}),(t,o)=>{const T=s("el-skeleton"),V=s("el-button"),U=s("el-result"),A=s("el-tag"),$=s("el-radio"),j=s("el-radio-group"),L=s("el-input-number"),x=s("el-tab-pane"),M=s("el-descriptions-item"),R=s("el-descriptions"),z=s("el-tabs");return r(),u("div",Q,[v.value?(r(),u("div",W,[n(T,{rows:5,animated:""})])):d.value?(r(),u("div",X,[n(U,{icon:"error",title:"商品加载失败","sub-title":d.value},{extra:l(()=>[n(V,{type:"primary",onClick:F},{default:l(()=>o[3]||(o[3]=[m("重试")])),_:1})]),_:1},8,["sub-title"])])):(r(),u("div",Y,[i("div",Z,[i("img",{src:e.value.image,alt:e.value.title},null,8,ee)]),i("div",te,[i("h1",oe,c(e.value.title),1),i("div",ae,[i("span",se,"¥"+c(e.value.price.toFixed(2)),1),e.value.originalPrice?(r(),u("span",le," ¥"+c(e.value.originalPrice.toFixed(2)),1)):f("",!0),e.value.discount?(r(),b(A,{key:1,type:"danger"},{default:l(()=>[m(c(e.value.discount)+"折 ",1)]),_:1})):f("",!0)]),e.value.specs?(r(),u("div",re,[o[4]||(o[4]=i("h3",null,"规格选择",-1)),n(j,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=a=>g.value=a)},{default:l(()=>[(r(!0),u(D,null,I(e.value.specs,a=>(r(),b($,{key:a,value:a,label:a,border:""},{default:l(()=>[m(c(a),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])])):f("",!0),i("div",ne,[n(L,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=a=>p.value=a),min:1,max:e.value.stock},null,8,["modelValue","max"]),n(V,{type:"danger",onClick:B,disabled:e.value.stock<=0},{default:l(()=>[m(c(e.value.stock>0?"加入购物车":"已售罄"),1)]),_:1},8,["disabled"])]),i("div",ie,[n(z,{modelValue:h.value,"onUpdate:modelValue":o[2]||(o[2]=a=>h.value=a)},{default:l(()=>[n(x,{label:"商品介绍",name:"intro"},{default:l(()=>[i("p",ue,c(e.value.intro),1)]),_:1}),n(x,{label:"规格参数",name:"specs"},{default:l(()=>[n(R,{border:""},{default:l(()=>[(r(!0),u(D,null,I(e.value.parameters,(a,E)=>(r(),b(M,{key:E,label:E},{default:l(()=>[m(c(a),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]))])}}}),pe=O(ce,[["__scopeId","data-v-511e2cb5"]]);export{pe as default};
