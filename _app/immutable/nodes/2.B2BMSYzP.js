import{r as N,s as U,n as $}from"../chunks/scheduler.BvLojk_z.js";import{t as X,S as Y,i as z,e as E,s as G,c as M,d as O,h as H,m as J,g as v,n as x,j as P,k as q,o as I,p as C}from"../chunks/index.ZMqQ5DN9.js";function T(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function K(s,t){s.d(1),t.delete(s.key)}function L(s,t,e,o,c,h,f,g,m,F,d,l){let n=s.length,a=h.length,p=n;const w={};for(;p--;)w[s[p].key]=p;const _=[],b=new Map,k=new Map,A=[];for(p=a;p--;){const i=l(c,h,p),u=e(i);let r=f.get(u);r?A.push(()=>r.p(i,t)):(r=F(u,i),r.c()),b.set(u,_[p]=r),u in w&&k.set(u,Math.abs(p-w[u]))}const B=new Set,S=new Set;function D(i){X(i,1),i.m(g,d),f.set(i.key,i),d=i.first,a--}for(;n&&a;){const i=_[a-1],u=s[n-1],r=i.key,y=u.key;i===u?(d=i.first,n--,a--):b.has(y)?!f.has(r)||B.has(r)?D(i):S.has(y)?n--:k.get(r)>k.get(y)?(S.add(r),D(i)):(B.add(y),n--):(m(u,f),n--)}for(;n--;){const i=s[n];b.has(i.key)||m(i,f)}for(;a;)D(_[a-1]);return N(A),_}function V(s,t,e){const o=s.slice();return o[7]=t[e],o}function j(s,t){let e;return{key:s,first:null,c(){e=E("div"),this.h()},l(o){e=M(o,"DIV",{class:!0,style:!0}),O(e).forEach(v),this.h()},h(){x(e,"class","trail svelte-bcabfa"),C(e,"left",t[7].x+"px"),C(e,"top",t[7].y+"px"),C(e,"background-color",t[7].colour),this.first=e},m(o,c){P(o,e,c)},p(o,c){t=o,c&1&&C(e,"left",t[7].x+"px"),c&1&&C(e,"top",t[7].y+"px"),c&1&&C(e,"background-color",t[7].colour)},d(o){o&&v(e)}}}function Q(s){let t,e=[],o=new Map,c,h,f="Change Colour",g,m,F=T(s[0]);const d=l=>l[7].x+"-"+l[7].y;for(let l=0;l<F.length;l+=1){let n=V(s,F,l),a=d(n);o.set(a,e[l]=j(a,n))}return{c(){t=E("div");for(let l=0;l<e.length;l+=1)e[l].c();c=G(),h=E("button"),h.textContent=f,this.h()},l(l){t=M(l,"DIV",{class:!0});var n=O(t);for(let a=0;a<e.length;a+=1)e[a].l(n);c=H(n),h=M(n,"BUTTON",{class:!0,"data-svelte-h":!0}),J(h)!=="svelte-1uq4aht"&&(h.textContent=f),n.forEach(v),this.h()},h(){x(h,"class","button"),x(t,"class","container svelte-bcabfa")},m(l,n){P(l,t,n);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);q(t,c),q(t,h),g||(m=[I(h,"click",s[2]),I(t,"pointermove",s[1])],g=!0)},p(l,[n]){n&1&&(F=T(l[0]),e=L(e,n,d,1,l,F,o,t,K,j,c,V))},i:$,o:$,d(l){l&&v(t);for(let n=0;n<e.length;n+=1)e[n].d();g=!1,N(m)}}}function R(s,t,e){let o=!1,c=[],h=["#FF5F6D","#FFC371","#FFB75E","#D4D5E0","#A2C2E4","#3A6B8F","#1D4F6F"];const f=["#FF0099","#00FFFF","#00FF00","#FF00FF","#FF9900","#9900FF","#00CCFF","#CC00FF"];function g(d){e(0,c=[{x:d.clientX,y:d.clientY,colour:m()},...c]),c.length>500&&c.pop()}function m(){return h[Math.floor(Math.random()*h.length)]}function F(){o=!o,h=o?["#FF5F6D","#FFC371","#FFB75E","#D4D5E0","#A2C2E4","#3A6B8F","#1D4F6F"]:f,console.log(o?"cyberpunk":"default")}return[c,g,F]}class ee extends Y{constructor(t){super(),z(this,t,R,Q,U,{})}}export{ee as component};
