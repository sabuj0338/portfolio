var Z=(t,s,r)=>{if(!s.has(t))throw TypeError("Cannot "+r)};var a=(t,s,r)=>(Z(t,s,"read from private field"),r?r.call(t):s.get(t)),c=(t,s,r)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,r)},o=(t,s,r,i)=>(Z(t,s,"write to private field"),i?i.call(t,r):s.set(t,r),r);var u=(t,s,r)=>(Z(t,s,"access private method"),r);import{S as Se,s as G,n as Ie,i as de,a as ue,t as ze,f as Qe,c as ke,r as xe,b as ge,d as w,u as Be,j as e}from"./index-DVhiDIxz.js";var f,n,E,p,C,I,b,_,z,Q,R,L,N,k,M,O,F,X,P,$,D,ee,U,te,H,se,V,re,A,ae,T,je,fe,Oe=(fe=class extends Se{constructor(s,r){super();c(this,M);c(this,F);c(this,P);c(this,D);c(this,U);c(this,H);c(this,V);c(this,A);c(this,T);c(this,f,void 0);c(this,n,void 0);c(this,E,void 0);c(this,p,void 0);c(this,C,void 0);c(this,I,void 0);c(this,b,void 0);c(this,_,void 0);c(this,z,void 0);c(this,Q,void 0);c(this,R,void 0);c(this,L,void 0);c(this,N,void 0);c(this,k,new Set);this.options=r,o(this,f,s),o(this,b,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,n).addObserver(this),me(a(this,n),this.options)?u(this,M,O).call(this):this.updateResult(),u(this,U,te).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ie(a(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ie(a(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,u(this,H,se).call(this),u(this,V,re).call(this),a(this,n).removeObserver(this)}setOptions(s,r){const i=this.options,m=a(this,n);if(this.options=a(this,f).defaultQueryOptions(s),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");u(this,A,ae).call(this),G(this.options,i)||a(this,f).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,n),observer:this});const h=this.hasListeners();h&&pe(a(this,n),m,this.options,i)&&u(this,M,O).call(this),this.updateResult(r),h&&(a(this,n)!==m||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&u(this,F,X).call(this);const l=u(this,P,$).call(this);h&&(a(this,n)!==m||this.options.enabled!==i.enabled||l!==a(this,N))&&u(this,D,ee).call(this,l)}getOptimisticResult(s){const r=a(this,f).getQueryCache().build(a(this,f),s),i=this.createResult(r,s);return _e(this,i)&&(o(this,p,i),o(this,I,this.options),o(this,C,a(this,n).state)),i}getCurrentResult(){return a(this,p)}trackResult(s){const r={};return Object.keys(s).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(a(this,k).add(i),s[i])})}),r}getCurrentQuery(){return a(this,n)}refetch({...s}={}){return this.fetch({...s})}fetchOptimistic(s){const r=a(this,f).defaultQueryOptions(s),i=a(this,f).getQueryCache().build(a(this,f),r);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,r))}fetch(s){return u(this,M,O).call(this,{...s,cancelRefetch:s.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,p)))}createResult(s,r){var he;const i=a(this,n),m=this.options,h=a(this,p),l=a(this,C),x=a(this,I),S=s!==i?s.state:a(this,E),{state:d}=s;let{error:W,errorUpdatedAt:ce,fetchStatus:B,status:y}=d,le=!1,j;if(r._optimisticResults){const g=this.hasListeners(),Y=!g&&me(s,r),Me=g&&pe(s,i,r,m);(Y||Me)&&(B=ke(s.options.networkMode)?"fetching":"paused",d.dataUpdatedAt||(y="pending")),r._optimisticResults==="isRestoring"&&(B="idle")}if(r.select&&typeof d.data<"u")if(h&&d.data===(l==null?void 0:l.data)&&r.select===a(this,_))j=a(this,z);else try{o(this,_,r.select),j=r.select(d.data),j=xe(h==null?void 0:h.data,j,r),o(this,z,j),o(this,b,null)}catch(g){o(this,b,g)}else j=d.data;if(typeof r.placeholderData<"u"&&typeof j>"u"&&y==="pending"){let g;if(h!=null&&h.isPlaceholderData&&r.placeholderData===(x==null?void 0:x.placeholderData))g=h.data;else if(g=typeof r.placeholderData=="function"?r.placeholderData((he=a(this,Q))==null?void 0:he.state.data,a(this,Q)):r.placeholderData,r.select&&typeof g<"u")try{g=r.select(g),o(this,b,null)}catch(Y){o(this,b,Y)}typeof g<"u"&&(y="success",j=xe(h==null?void 0:h.data,g,r),le=!0)}a(this,b)&&(W=a(this,b),j=a(this,z),ce=Date.now(),y="error");const q=B==="fetching",J=y==="pending",K=y==="error",oe=J&&q;return{status:y,fetchStatus:B,isPending:J,isSuccess:y==="success",isError:K,isInitialLoading:oe,isLoading:oe,data:j,dataUpdatedAt:d.dataUpdatedAt,error:W,errorUpdatedAt:ce,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>S.dataUpdateCount||d.errorUpdateCount>S.errorUpdateCount,isFetching:q,isRefetching:q&&!J,isLoadingError:K&&d.dataUpdatedAt===0,isPaused:B==="paused",isPlaceholderData:le,isRefetchError:K&&d.dataUpdatedAt!==0,isStale:ne(s,r),refetch:this.refetch}}updateResult(s){const r=a(this,p),i=this.createResult(a(this,n),this.options);if(o(this,C,a(this,n).state),o(this,I,this.options),a(this,C).data!==void 0&&o(this,Q,a(this,n)),G(i,r))return;o(this,p,i);const m={},h=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options,x=typeof l=="function"?l():l;if(x==="all"||!x&&!a(this,k).size)return!0;const v=new Set(x??a(this,k));return this.options.throwOnError&&v.add("error"),Object.keys(a(this,p)).some(S=>{const d=S;return a(this,p)[d]!==r[d]&&v.has(d)})};(s==null?void 0:s.listeners)!==!1&&h()&&(m.listeners=!0),u(this,T,je).call(this,{...m,...s})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&u(this,U,te).call(this)}},f=new WeakMap,n=new WeakMap,E=new WeakMap,p=new WeakMap,C=new WeakMap,I=new WeakMap,b=new WeakMap,_=new WeakMap,z=new WeakMap,Q=new WeakMap,R=new WeakMap,L=new WeakMap,N=new WeakMap,k=new WeakMap,M=new WeakSet,O=function(s){u(this,A,ae).call(this);let r=a(this,n).fetch(this.options,s);return s!=null&&s.throwOnError||(r=r.catch(Ie)),r},F=new WeakSet,X=function(){if(u(this,H,se).call(this),de||a(this,p).isStale||!ue(this.options.staleTime))return;const r=ze(a(this,p).dataUpdatedAt,this.options.staleTime)+1;o(this,R,setTimeout(()=>{a(this,p).isStale||this.updateResult()},r))},P=new WeakSet,$=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,n)):this.options.refetchInterval)??!1},D=new WeakSet,ee=function(s){u(this,V,re).call(this),o(this,N,s),!(de||this.options.enabled===!1||!ue(a(this,N))||a(this,N)===0)&&o(this,L,setInterval(()=>{(this.options.refetchIntervalInBackground||Qe.isFocused())&&u(this,M,O).call(this)},a(this,N)))},U=new WeakSet,te=function(){u(this,F,X).call(this),u(this,D,ee).call(this,u(this,P,$).call(this))},H=new WeakSet,se=function(){a(this,R)&&(clearTimeout(a(this,R)),o(this,R,void 0))},V=new WeakSet,re=function(){a(this,L)&&(clearInterval(a(this,L)),o(this,L,void 0))},A=new WeakSet,ae=function(){const s=a(this,f).getQueryCache().build(a(this,f),this.options);if(s===a(this,n))return;const r=a(this,n);o(this,n,s),o(this,E,s.state),this.hasListeners()&&(r==null||r.removeObserver(this),s.addObserver(this))},T=new WeakSet,je=function(s){ge.batch(()=>{s.listeners&&this.listeners.forEach(r=>{r(a(this,p))}),a(this,f).getQueryCache().notify({query:a(this,n),type:"observerResultsUpdated"})})},fe);function Ee(t,s){return s.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&s.retryOnMount===!1)}function me(t,s){return Ee(t,s)||t.state.dataUpdatedAt>0&&ie(t,s,s.refetchOnMount)}function ie(t,s,r){if(s.enabled!==!1){const i=typeof r=="function"?r(t):r;return i==="always"||i!==!1&&ne(t,s)}return!1}function pe(t,s,r,i){return r.enabled!==!1&&(t!==s||i.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&ne(t,r)}function ne(t,s){return t.isStaleByTime(s.staleTime)}function _e(t,s){return!G(t.getCurrentResult(),s)}var be=w.createContext(!1),Fe=()=>w.useContext(be);be.Provider;function Pe(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var De=w.createContext(Pe()),Ue=()=>w.useContext(De);function He(t,s){return typeof t=="function"?t(...s):!!t}var Ve=(t,s)=>{(t.suspense||t.throwOnError)&&(s.isReset()||(t.retryOnMount=!1))},Ae=t=>{w.useEffect(()=>{t.clearReset()},[t])},Te=({result:t,errorResetBoundary:s,throwOnError:r,query:i})=>t.isError&&!s.isReset()&&!t.isFetching&&i&&He(r,[t.error,i]),We=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},qe=(t,s)=>(t==null?void 0:t.suspense)&&s.isPending,Je=(t,s,r)=>s.fetchOptimistic(t).catch(()=>{r.clearReset()});function Ke(t,s,r){const i=Be(r),m=Fe(),h=Ue(),l=i.defaultQueryOptions(t);l._optimisticResults=m?"isRestoring":"optimistic",We(l),Ve(l,h),Ae(h);const[x]=w.useState(()=>new s(i,l)),v=x.getOptimisticResult(l);if(w.useSyncExternalStore(w.useCallback(S=>{const d=m?()=>{}:x.subscribe(ge.batchCalls(S));return x.updateResult(),d},[x,m]),()=>x.getCurrentResult(),()=>x.getCurrentResult()),w.useEffect(()=>{x.setOptions(l,{listeners:!1})},[l,x]),qe(l,v))throw Je(l,x,h);if(Te({result:v,errorResetBoundary:h,throwOnError:l.throwOnError,query:i.getQueryCache().get(l.queryHash)}))throw v.error;return l.notifyOnChangeProps?v:x.trackResult(v)}function ve(t,s){return Ke(t,Oe,s)}function Ye({className:t}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[e.jsx("path",{d:"M18 8L22 12L18 16"}),e.jsx("path",{d:"M2 12H22"})]})}function we({className:t}){return e.jsx("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",children:e.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})}function ye({className:t}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t??"w-6 h-6",children:e.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}function Ne({className:t}){return e.jsx("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",fill:"currentColor",children:e.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}function Ce({className:t}){return e.jsx("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",children:e.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})}function Ze({className:t}){return e.jsxs("svg",{className:t??"w-10 h-10 text-primary",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[e.jsx("rect",{fill:"none",height:"24",width:"24"}),e.jsx("path",{d:"M23,17c0,3.31-2.69,6-6,6v-1.5c2.48,0,4.5-2.02,4.5-4.5H23z M1,7c0-3.31,2.69-6,6-6v1.5C4.52,2.5,2.5,4.52,2.5,7H1z M8.01,4.32l-4.6,4.6c-3.22,3.22-3.22,8.45,0,11.67s8.45,3.22,11.67,0l7.07-7.07c0.49-0.49,0.49-1.28,0-1.77 c-0.49-0.49-1.28-0.49-1.77,0l-4.42,4.42l-0.71-0.71l6.54-6.54c0.49-0.49,0.49-1.28,0-1.77s-1.28-0.49-1.77,0l-5.83,5.83l-0.71-0.71 l6.89-6.89c0.49-0.49,0.49-1.28,0-1.77s-1.28-0.49-1.77,0l-6.89,6.89L11.02,9.8l5.48-5.48c0.49-0.49,0.49-1.28,0-1.77 s-1.28-0.49-1.77,0l-7.62,7.62c1.22,1.57,1.11,3.84-0.33,5.28l-0.71-0.71c1.17-1.17,1.17-3.07,0-4.24l-0.35-0.35l4.07-4.07 c0.49-0.49,0.49-1.28,0-1.77C9.29,3.83,8.5,3.83,8.01,4.32z"})]})}function Ge(){return e.jsxs("section",{id:"about",className:"py-0 sm:py-10 mt-0 sm:mt-4",children:[e.jsx("br",{}),e.jsxs("div",{className:"w-full flex flex-wrap",children:[e.jsxs("div",{className:"w-full md:w-1/2",children:[e.jsxs("div",{className:"mt-5 flex items-center gap-2 ",children:[e.jsx("h3",{className:"text-white text-3xl font-bold",children:"Hi, I'm Sabuj"}),e.jsx(Ze,{})]}),e.jsx("div",{className:"mt-2",children:e.jsx("h4",{className:"text-3xl text-gray-400",children:"Full-Stack Software Developer"})}),e.jsxs("p",{className:"mt-7 text-gray-500",children:["From my childhood, I dreamed about being a software engineer. I dreamed about doing something amazing and I am continuing my hard work to fulfill my dream ",":)"]}),e.jsxs("div",{className:"mt-12",children:[e.jsx("p",{className:"uppercase text-gray-300",children:"Find Me On"}),e.jsxs("div",{className:"mt-5 flex gap-4",children:[e.jsx("a",{href:"https://github.com/sabuj0338",className:"w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(Ne,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"https://www.linkedin.com/in/sabuj0338/",className:"w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(Ce,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"https://www.facebook.com/sabuj0338",className:"w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(ye,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"mailto: sabuj0338@gmail.com",className:"w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(we,{className:"w-6 h-6 text-primary"})}),e.jsxs("a",{href:"resume.pdf",className:"px-4 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm border border-gray-800 hover:border-primary hover:text-primary group",children:[e.jsx("span",{children:"Resume"}),e.jsx(Ye,{})]})]})]}),e.jsxs("div",{className:"mt-20 flex flex-wrap gap-10",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-4xl text-gray-300",children:"5+"}),e.jsx("p",{className:"mt-2 uppercase text-gray-500 text-sm",children:"Years of experience"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-4xl text-gray-300",children:"4+"}),e.jsx("p",{className:"mt-2 uppercase text-gray-500 text-sm",children:"Working Company"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-4xl text-gray-300",children:"65+"}),e.jsx("p",{className:"mt-2 uppercase text-gray-500 text-sm",children:"Projects"})]})]})]}),e.jsx("div",{className:"w-full md:w-1/2 hidden md:block",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx("img",{className:"w-52 h-full object-cover bg-white rounded-full border-b-4 border-t-8 border-double border-green-500",src:"sabuj0338_2.webp",alt:"sabuj islam"})})})]})]})}function Re({className:t}){return e.jsx("svg",{className:t??"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1500",height:"1512",viewBox:"0 0 1500 1512",children:e.jsx("g",{transform:"matrix(1,0,0,1,-1.073975494338356,0.6132761494470742)",children:e.jsx("svg",{viewBox:"0 0 245 247","data-background-color":"#000000",preserveAspectRatio:"xMidYMid meet",height:"1512",width:"1500",children:e.jsxs("g",{id:"tight-bounds",transform:"matrix(1,0,0,1,0.17541599740860647,-0.09997365579206985)",children:[e.jsxs("svg",{viewBox:"0 0 244.6491463291139 247.2",height:"247.2",width:"244.6491463291139",children:[e.jsx("g",{children:e.jsxs("svg",{viewBox:"0 0 244.6491463291139 247.2",height:"247.2",width:"244.6491463291139",children:[e.jsx("g",{children:e.jsx("svg",{viewBox:"0 0 244.6491463291139 247.2",height:"247.2",width:"244.6491463291139",children:e.jsx("g",{id:"textblocktransform",children:e.jsx("svg",{viewBox:"0 0 244.6491463291139 247.2",height:"247.2",width:"244.6491463291139",id:"textblock",children:e.jsx("g",{children:e.jsxs("svg",{viewBox:"0 0 244.6491463291139 247.2",height:"247.2",width:"244.6491463291139",children:[e.jsx("path",{d:"M244.076 53.02C242.926 27.36 239.648 20.227 239.648 20.227 229.585-6.202 217.025-0.506 205.742 3.292 185.821 3.446 165.981 9.091 146.107 12.119 104.391 12.581 62.318 4.986 20.81 23.717 16.911 29.464-4.045 24.846 0.694 56.304 1.936 69.39 6.467 83.913 6.329 95.922 6.95 98.026 7.813 93.202 8.181 96.23 9.469 104.39 11.574 100.541 13.299 105.365 10.895 118.246 12.621 128.971 14.265 140.21 11.367 143.135 7.652 141.749 5.984 151.449 5.812 158.479 4.88 157.145 3.856 156.837 3.109 156.632 1.602 157.402 1.855 159.608 2.718 167.152-0.986 171.514 1.338 178.904-0.261 186.91 2.442 193.838 2.074 202.511 2.028 204.255 2.281 205.744 2.683 206.154 4.466 208.361 1.867 212.672 2.143 217.342 20.43 249.262 40.27 227.195 59.006 241.872 63.871 231.608 60.214 245.516 62.157 243.36 63.676 240.846 64.78 251.263 66.494 245.362 66.758 243.668 66.355 239.665 67.299 240.435 67.793 240.846 68.23 240.743 68.299 238.382 68.403 234.841 67.494 237.048 67.253 235.201 69.863 225.861 69.219 248.081 71.669 247.158 71.554 244.438 70.841 240.538 72.302 241.051 73.751 237.151 73.797 233.918 75.085 242.693 75.131 244.592 75.361 245.926 75.729 246.85 79.755 237.305 83.757 250.237 87.978 245.926 90.566 241.205 93.05 248.492 95.673 246.696 96.593 245.259 97.525 242.693 98.41 247.004 109.256 247.928 120.815 244.079 131.097 247.158 158.574 241.41 187.938 249.518 216.91 241.923 223.742 238.998 230.838 234.841 237.498 231.506 237.498 231.506 242.892 222.371 242.892 181.316S244.042 145.393 244.214 112.703C244.387 80.013 245.192 78.679 244.042 53.02Z",opacity:"1",fill:"#0dcb8a","data-fill-palette-color":"tertiary"}),e.jsx("g",{transform:"matrix(1,0,0,1,55.76832,26.230666666666668)",children:e.jsx("svg",{width:"133.1125063291139",viewBox:"0.5 -22.65 16.2 23.7",height:"194.73866666666666","data-palette-color":"#000000",children:e.jsx("path",{d:"M16.7-6.85L16.7-6.85Q16.7-4.7 15.88-3.1 15.05-1.5 14-0.75 12.95 0 11.5 0.45L11.5 0.45Q9.6 1.05 8.05 1.05L8.05 1.05Q4.8 1.05 2.65-0.23 0.5-1.5 0.5-4.3L0.5-4.3Q0.5-5.95 1.4-7L1.4-7Q2.8-8.55 4.75-8.55L4.75-8.55Q5.35-8.55 5.35-8L5.35-8Q5.35-7.95 5.13-7.23 4.9-6.5 4.9-5.4 4.9-4.3 5.78-3.45 6.65-2.6 7.9-2.6 9.15-2.6 9.9-3.03 10.65-3.45 10.95-4.1L10.95-4.1Q11.4-5 11.4-5.8L11.4-5.8Q11.4-7.25 9.95-8.3 8.5-9.35 6.75-9.95 5-10.55 3.55-11.95 2.1-13.35 2.1-15.45L2.1-15.45Q2.1-19.05 4.38-20.85 6.65-22.65 10.55-22.65L10.55-22.65Q12.25-22.65 14.13-22.18 16-21.7 16-20.58 16-19.45 15.63-18.5 15.25-17.55 14.7-17.55L14.7-17.55Q14.4-17.55 14.3-17.78 14.2-18 13.95-18.3 13.7-18.6 12.75-19.07 11.8-19.55 11.13-19.55 10.45-19.55 10.23-19.53 10-19.5 9.45-19.38 8.9-19.25 8.45-19L8.45-19Q7.3-18.35 7.3-17.1L7.3-17.1Q7.3-16.3 7.65-15.93 8-15.55 8.2-15.35 8.4-15.15 8.9-14.88 9.4-14.6 9.6-14.5 9.8-14.4 10.5-14.08 11.2-13.75 11.4-13.65L11.4-13.65Q16.7-11.15 16.7-6.85Z",opacity:"1",transform:"matrix(1,0,0,1,0,0)",fill:"#000000",className:"wordmark-text-0","data-fill-palette-color":"quaternary",id:"text-0"})})})]})})})})})}),e.jsx("g",{})]})}),e.jsx("defs",{})]}),e.jsx("rect",{width:"244.6491463291139",height:"247.2",fill:"none",stroke:"none",visibility:"hidden"})]})})})})}function Xe({className:t}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t??"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"})})}function $e(){return e.jsx("nav",{className:"sticky top-0 bg-[#0e0e0e]",children:e.jsx("div",{className:"container mx-auto px-5",children:e.jsxs("div",{className:"flex items-center justify-between py-5",children:[e.jsx("div",{className:"",children:e.jsx(Re,{})}),e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsx("a",{href:"#about",className:"text-gray-400 uppercase text-base font-medium hidden md:block",children:"About"}),e.jsx("a",{href:"#services",className:"text-gray-400 uppercase text-base font-medium hidden md:block",children:"What I Do"}),e.jsx("a",{href:"#projects",className:"text-gray-400 uppercase text-base font-medium hidden md:block",children:"Projects"}),e.jsx("a",{href:"#skills",className:"text-gray-400 uppercase text-base font-medium hidden md:block",children:"Skills"}),e.jsx("a",{href:"#contact",className:"text-gray-400 uppercase text-base font-medium hidden md:block",children:"Contact"}),e.jsx("a",{href:"whatsapp://send?phone=+8801775559622",className:"text-primary uppercase text-base font-medium border border-primary rounded-full px-1.5 py-1.5 shadow-[0_0_1px,inset_0_0_0px,0_0_1px,0_0_1px,0_0_10px] hover:shadow-[0_0_1px,inset_0_0_0px,0_0_1px,0_0_1px,0_0_15px] shadow-primary",children:e.jsx(Xe,{className:"text-primary w-4 h-4"})})]})]})})})}function et(){return e.jsxs("footer",{id:"contact",className:"container mx-auto py-10",children:[e.jsxs("div",{className:"flex gap-3 justify-center",children:[e.jsx(Re,{}),e.jsx("span",{className:"uppercase text-white text-2xl font-bold",children:"SABUJ ISLAM"})]}),e.jsx("br",{}),e.jsxs("div",{className:"my-3  flex justify-center gap-5",children:[e.jsx("a",{href:"https://github.com/sabuj0338",className:"w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(Ne,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"https://www.linkedin.com/in/sabuj0338/",className:"w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(Ce,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"https://www.facebook.com/sabuj0338",className:"w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(ye,{className:"w-6 h-6 text-primary"})}),e.jsx("a",{href:"mailto: sabuj0338@gmail.com",className:"w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm",children:e.jsx(we,{className:"w-6 h-6 text-primary"})})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsxs("p",{className:"text-gray-400 text-sm",children:["Developed By 🧑🏻‍💻"," ",e.jsx("strong",{className:"text-primary",children:e.jsx("code",{children:"Sabuj Islam"})})]})})]})}async function Le(){try{const t=await fetch("https://sabuj0338.github.io/portfolio/data.json");if(!t.ok)throw new Error;return await t.json()}catch{return}}function tt(){var s,r;const t=ve({queryKey:["data"],queryFn:Le});return e.jsxs("section",{id:"projects",className:"py-10",children:[e.jsxs("div",{className:"",children:[e.jsx("p",{className:"uppercase text-primary text-sm",children:"Projects"}),e.jsx("h2",{className:"text-gray-200 italic text-xs",children:"Every great project begin with an even better story."})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:t.data&&((r=(s=t.data)==null?void 0:s.projects)==null?void 0:r.map((i,m)=>e.jsx(st,{project:i},m)))})]})}function st({project:t}){var s;return e.jsxs("div",{className:"bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 cursor-pointer hover:shadow rounded",children:[e.jsx("img",{className:"aspect-[16/9] rounded-t",src:t==null?void 0:t.image,alt:""}),e.jsxs("div",{className:"p-5",children:[e.jsx("h2",{className:"uppercase text-sm",children:t==null?void 0:t.title}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-2",children:t==null?void 0:t.short_description}),e.jsxs("div",{className:"mt-5 w-full flex items-center gap-3",children:[e.jsx("div",{className:"w-full flex flex-wrap items-center gap-x-2 gap-y-1",children:(s=t==null?void 0:t.technologies)==null?void 0:s.map(r=>{var i;return e.jsx("div",{className:"rounded-sm px-1 py-0.5 bg-slate-500 bg-opacity-30 text-[8px]",children:r},(i=r==null?void 0:r.toString())==null?void 0:i.replace(" ","_"))})}),e.jsx("div",{className:"",children:e.jsx("a",{href:(t==null?void 0:t.live_url)??"#",className:"w-8 h-8 flex items-center justify-center rounded-full bg-slate-500 bg-opacity-30 hover:bg-opacity-20 hover:shadow-md",children:e.jsxs("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})]})})})]})]})]})}function rt({className:t}){return e.jsx("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:e.jsxs("g",{children:[e.jsx("rect",{fill:"none",height:"24",width:"24"}),e.jsx("path",{d:"M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"})]})})}function at({className:t}){return e.jsxs("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"})]})}function it({className:t}){return e.jsxs("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"})]})}function nt({className:t}){return e.jsxs("svg",{className:t??"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"})]})}function ct(){return e.jsxs("section",{id:"services",className:"py-10",children:[e.jsxs("div",{className:"",children:[e.jsx("p",{className:"uppercase text-primary text-sm",children:"Services"}),e.jsx("h2",{className:"font-extrabold text-5xl",children:"What I Do"})]}),e.jsx("br",{}),e.jsxs("div",{className:"mt-10 grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded",children:[e.jsx(nt,{className:"w-8 h-8 text-primary"}),e.jsx("h2",{className:"mt-3 uppercase text-sm",children:"Web Development"}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-4",children:"45+ industry standart project completed using modern technologies like Vue, React, Next JS, Tailwind, MUI, Ant Design and more."})]}),e.jsxs("div",{className:"bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded",children:[e.jsx(rt,{className:"w-8 h-8 text-primary"}),e.jsx("h2",{className:"mt-3 uppercase text-sm",children:"Backend Development"}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-4",children:"35+ existing projects and build from scratch. Managed high traffic. Mostly used PHP, Laravel, Express JS, Nest JS."})]}),e.jsxs("div",{className:"bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded",children:[e.jsx(it,{className:"w-8 h-8 text-primary"}),e.jsx("h2",{className:"mt-3 uppercase text-sm",children:"App Development"}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-4",children:"15+ android and ios app development using flutter. Build from scratch design and development."})]}),e.jsxs("div",{className:"bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded",children:[e.jsx(at,{className:"w-8 h-8 text-primary"}),e.jsxs("h2",{className:"mt-3 uppercase text-sm",children:["CI ",e.jsx("span",{className:"text-gray-500",children:"/"})," CD"]}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-4",children:"Project deployment in live server using docker, custom deployment, and Published Android and IOS applications."})]})]})]})}function lt(){var s,r;const t=ve({queryKey:["data"],queryFn:Le});return e.jsxs("section",{id:"skills",className:"py-10",children:[e.jsx("div",{className:"",children:e.jsx("p",{className:"uppercase text-primary text-sm",children:"Skills"})}),e.jsx("br",{}),e.jsx("div",{className:"mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4",children:t.data&&((r=(s=t.data)==null?void 0:s.skills)==null?void 0:r.map((i,m)=>e.jsx(ot,{skill:i},m)))})]})}function ot({skill:t}){return e.jsxs("div",{className:"w-40 h-40 flex flex-col items-center justify-center bg-[#171819] hover:bg-primary hover:bg-opacity-20 hover:shadow-lg p-5 rounded",children:[e.jsx("img",{className:"w-auto h-16",src:t==null?void 0:t.icon_url,alt:t==null?void 0:t.name}),e.jsx("p",{className:"mt-2 text-sm",children:t==null?void 0:t.name})]})}function xt(){return e.jsxs(e.Fragment,{children:[e.jsx($e,{}),e.jsxs("main",{className:"container mx-auto px-5",children:[e.jsx(Ge,{}),e.jsx("hr",{className:"border-1 border-gray-900 my-12"}),e.jsx(ct,{}),e.jsx("hr",{className:"border-1 border-gray-900 my-12"}),e.jsx(tt,{}),e.jsx("hr",{className:"border-1 border-gray-900 my-12"}),e.jsx(lt,{})]}),e.jsx("hr",{className:"border-1 border-gray-900 my-12"}),e.jsx(et,{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})}export{xt as default};
