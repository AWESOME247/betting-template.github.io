import{L as V}from"./LazyLoad.e867ca30.js";import{o as E,r as x,_ as T,f as w,k as m,l as y,m as e,v,t as c,H as l,F as b,D as U,J as $,S as k,q as _}from"./entry.638b4199.js";function G(r){const o=new Set,s=[];return r==null||r.forEach(t=>{var a;const n=t.home&&t.home.trim(),u=(a=t.tips.split("(")[1])==null?void 0:a.replace(")",""),d=parseFloat(u);n&&!o.has(n)&&d>=1.4&&d<1.75&&(s.push(t),o.add(n))}),s}const j=x("Refresh"),X={props:["games","progress","refresh"],components:{LazyLoad:V},setup:({refresh:r})=>(E(()=>{r()}),{filterObjectsWithUniqueMatches:G,msg:j,load:()=>{r(),j.value="Refreshing...",setTimeout(()=>{j.value="Refreshed!"},5e3)},matchChecker:(o,s,t)=>{const n=t==null?void 0:t.match(o),u=t==null?void 0:t.match(s);if(n&&n[0]===o)return"1";if(u&&u[0]===s)return"2"},correctScore:(o,s,t)=>{var n,u,d,a,g,p,h;if(s){const i=parseFloat(s);return i<=1.15?((n=t==null?void 0:t.match(o))==null?void 0:n[0])===o?"5-1":"1-5":i>=1.15&&i<1.25?((u=t==null?void 0:t.match(o))==null?void 0:u[0])===o?"4-1":"1-4":i>=1.25&&i<1.4?((d=t==null?void 0:t.match(o))==null?void 0:d[0])===o?"3-1":"1-3":i>=1.4&&i<1.55?((a=t==null?void 0:t.match(o))==null?void 0:a[0])===o?"3-2":"2-3":i>=1.55&&i<1.7?((g=t==null?void 0:t.match(o))==null?void 0:g[0])===o?"2-1":"2-2":i>=1.7&&i<1.85?((p=t==null?void 0:t.match(o))==null?void 0:p[0])===o?"1-0":"1-2":i>=1.85&&i<2?((h=t==null?void 0:t.match(o))==null?void 0:h[0])===o?"0-0":"1-1":""}},multiGoals:o=>{if(o){const s=parseFloat(o);return s>=1.4&&s<1.55||s>=1.55&&s<1.7||s>=1.7&&s<1.85?"2-5":""}},multiGoals2_3:o=>{if(o){const s=parseFloat(o);return s>=1.5&&s<1.95?"1-3":""}}})},M=""+globalThis.__publicAssetsURL("refresh-reload-svgrepo-com.svg"),Z={class:"flex gap-2 px-2 place-items-center justify-between"},ee=e("p",{class:"sm:col-span-6"},"If it's not today's prediction",-1),te={class:"w-full border-collapse m-auto"},se={class:"border-collapse whitespace-nowrap"},re={class:"bg-gray-900 text-gray-100"},ae=e("th",{class:"text-center py-2",scope:"col"},"Date",-1),oe=e("th",{class:"text-center py-2",scope:"col"},"Lig",-1),ne=e("th",{class:"text-center py-2",scope:"col"},"Teams",-1),ce=e("th",{class:"text-center py-2",scope:"col"},"Tips",-1),le={class:"border-collapse whitespace-nowrap"},ie={class:"text-center py-4"},de={class:"text-center py-4 font-semibold uppercase"},ue={class:"text-center py-4"},he=e("p",{class:"my-1"},"VS",-1),ge={class:"h-96 w-full grid place-content-center text-center"},pe={class:"h-20 w-20"},fe={class:"my-5"};function me(r,o,s,t,n,u){const d=w("LazyLoad");return m(),y(b,null,[e("div",Z,[ee,v(),e("button",{class:"bg-green-400 w-fit p-2 rounded-md my-3 outline outline-green-200 hover:bg-green-600 inline-flex items-center gap-1 justify-center",onClick:o[0]||(o[0]=a=>r.load())},[v(c(r.msg)+" ",1),e("img",{class:l({hidden:r.msg==="Refreshed!"}),src:M,height:"17",width:"17",alt:"Click to refresh tips for latest predictions"},null,2)])]),e("table",te,[e("thead",se,[e("tr",re,[ae,oe,ne,ce,e("th",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/sure-wins-only"},"text-center py-2"]),scope:"col"},"Odds",2)])]),e("tbody",le,[(m(!0),y(b,null,U(s.games.slice(0,10),a=>{var g,p,h,i,f,R,L,C,O,I,S,N,D,F,H,W,B,Y,J,K,P,Q;return $((m(),y("tr",{key:a,class:l([{hidden:(p=(g=a.tips)==null?void 0:g.match("Draw"))==null?void 0:p[0],"even:bg-white even:text-gray-900 border-t-gray-900 border-2":r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"||r.$route.path==="/free-vip-sure-accurate/multi-goal-1-3-predictions-today"||r.$route.path==="/free-vip-sure-accurate/king-of-correct-score"},"even:bg-gray-900 even:text-gray-100"])},[e("td",ie,c(a.date),1),e("td",de,c((i=(h=a.league)==null?void 0:h.substring(0,3))==null?void 0:i.trim()),1),e("td",ue,[e("p",null,c((f=a.home)==null?void 0:f.trim()),1),he,e("p",null,c((R=a.away)==null?void 0:R.trim()),1)]),e("td",{class:l([{hidden:r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"||r.$route.path==="/free-vip-sure-accurate/multi-goal-1-3-predictions-today"},"text-center py-4"])},c(r.$route.path==="/free-vip-sure-accurate/king-of-correct-score"?r.correctScore(a.home,(C=(L=a.tips)==null?void 0:L.split("(")[1])==null?void 0:C.replace(")",""),a.tips):r.$route.path==="/free-vip-sure-accurate/sure-wins-only"?r.matchChecker(a.home,a.away,a.tips):(H=(F=(D=(N=(S=(I=(O=a==null?void 0:a.tips)==null?void 0:O.replace(/(Over)|(OVER)|(Ov)\s*/g,"+"))==null?void 0:I.replace(/(ER)|(er)/g,""))==null?void 0:S.replace(/(Home)|(HOME)\s*/g,"1").replace(/(Score)|(SCORE)\s*/g,"+0.5"))==null?void 0:N.replace(/(Away)|(AWAY)\s*/g,"2"))==null?void 0:D.replace(/(Under)|(UNDER)|(UND)|(Un)\s*/g,"-"))==null?void 0:F.replace("-d","-"))==null?void 0:H.trim()),3),e("td",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/2-5-multi-goals-prediction"&&r.$route.path!=="/free-vip-sure-accurate/multi-goal-1-3-predictions-today"},"text-center py-4"])},c(r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"?r.multiGoals((W=a.tips)==null?void 0:W.split("(")[1].replace(")","")):r.$route.path==="/free-vip-sure-accurate/multi-goal-1-3-predictions-today"?r.multiGoals2_3((B=a.tips)==null?void 0:B.split("(")[1].replace(")","")):""),3),e("td",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/sure-wins-only"},"text-center py-4 font-bold"])},"("+c(r.$route.path==="/free-vip-sure-accurate/sure-wins-only"?(Y=a.tips)==null?void 0:Y.split("(")[1].replace(")",""):"")+")",3)],2)),[[k,r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"?r.multiGoals((K=(J=a.tips)==null?void 0:J.split("(")[1])==null?void 0:K.replace(")","")):r.$route.path==="/free-vip-sure-accurate/multi-goal-1-3-predictions-today"?r.multiGoals2_3((Q=(P=a.tips)==null?void 0:P.split("(")[1])==null?void 0:Q.replace(")","")):!0]])}),128))])]),$(e("div",null,[e("div",ge,[e("div",{class:l([{hidden:s.progress},"h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200"])},[_(d,{className:"bg-cover w-full h-full",mainImage:"/soccerball.webp",alt:"loading"},null,8,["mainImage"])],2),e("div",{class:l([{hidden:!s.progress},"grid place-items-center"])},[e("div",pe,[_(d,{className:"bg-cover w-full h-full",mainImage:"/error.png",alt:"error-logo"},null,8,["mainImage"])]),e("p",fe,c(s.progress),1)],2)])],512),[[k,s.games.length<1]])],64)}const ye=T(X,[["render",me]]),q=x("Refresh"),_e={props:["games","progress","refresh"],components:{LazyLoad:V},setup:({refresh:r})=>(E(()=>{r(o=>{console.log("dd")})}),{filterObjectsWithUniqueMatches:G,msg:q,load:()=>{r(),q.value="Refreshing...",setTimeout(()=>{q.value="Refreshed!"},5e3)},matchChecker:(o,s,t)=>{const n=t==null?void 0:t.match(o),u=t==null?void 0:t.match(s);if(n&&n[0]===o)return"1";if(u&&u[0]===s)return"2"}})},ve={class:"flex gap-2 px-2 place-items-center justify-between"},be=e("p",{class:"sm:col-span-6"},"If it's not today's prediction",-1),we={class:"w-full border-collapse m-auto"},$e=e("thead",{class:"border-collapse whitespace-nowrap"},[e("tr",{class:"bg-gray-900 text-gray-100"},[e("th",{class:"text-center py-2",scope:"col"},"Date"),e("th",{class:"text-center py-2",scope:"col"},"Lig"),e("th",{class:"text-center py-2",scope:"col"},"Teams"),e("th",{class:"text-center py-2",scope:"col"},"Tips")])],-1),ke={class:"border-collapse whitespace-nowrap"},xe={class:"text-center py-4"},Te={class:"text-center py-4 font-semibold uppercase"},Re={class:"text-center py-4"},Le=e("p",{class:"my-1"},"VS",-1),Ce={class:"text-center py-4"},Oe={class:"h-96 w-full grid place-content-center text-center"},Ie={class:"h-20 w-20"},Se={class:"my-5"};function Ne(r,o,s,t,n,u){const d=w("LazyLoad");return m(),y(b,null,[e("div",ve,[be,v(),e("button",{class:"bg-green-400 w-fit p-2 rounded-md my-3 outline outline-green-200 hover:bg-green-600 inline-flex items-center gap-1 justify-center",onClick:o[0]||(o[0]=a=>r.load())},[v(c(r.msg)+" ",1),e("img",{class:l({hidden:r.msg==="Refreshed!"}),src:M,height:"17",width:"17",alt:"Click to refresh tips for latest predictions"},null,2)])]),e("table",we,[$e,e("tbody",ke,[(m(!0),y(b,null,U(r.filterObjectsWithUniqueMatches(s.games),a=>{var g,p,h,i;return m(),y("tr",{key:a,class:"even:bg-gray-900 even:text-gray-100"},[e("td",xe,c(a.date),1),e("td",Te,c((p=(g=a.league)==null?void 0:g.substring(0,3))==null?void 0:p.trim()),1),e("td",Re,[e("p",null,c((h=a.home)==null?void 0:h.trim()),1),Le,e("p",null,c((i=a.away)==null?void 0:i.trim()),1)]),e("td",Ce,c(r.matchChecker(a.home,a.away,a.tips)),1)])}),128))])]),$(e("div",null,[e("div",Oe,[e("div",{class:l([{hidden:s.progress},"h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200"])},[_(d,{className:"bg-cover w-full h-full",mainImage:"/soccerball.webp",alt:"loading"},null,8,["mainImage"])],2),e("div",{class:l([{hidden:!s.progress},"grid place-items-center"])},[e("div",Ie,[_(d,{className:"bg-cover w-full h-full",mainImage:"/error.png",alt:"error-logo"},null,8,["mainImage"])]),e("p",Se,c(s.progress),1)],2)])],512),[[k,s.games.length<1]])],64)}const De=T(_e,[["render",Ne]]),z=x("Refresh"),Ve={props:["games","progress","refresh"],components:{LazyLoad:V},setup:({refresh:r})=>(E(()=>{r(o=>{console.log("dd")})}),{filterObjectsWithUniqueMatches:G,msg:z,load:()=>{r(),z.value="Refreshing...",setTimeout(()=>{z.value="Refreshed!"},5e3)},matchChecker:(o,s,t)=>{const n=t==null?void 0:t.match(o),u=t==null?void 0:t.match(s);if(n&&n[0]===o)return"1";if(u&&u[0]===s)return"2"}})},Ee={class:"flex gap-2 px-2 place-items-center justify-between"},Ue=e("p",{class:"sm:col-span-6"},"If it's not today's prediction",-1),Ge={class:"w-full border-collapse m-auto"},Me=e("thead",{class:"border-collapse whitespace-nowrap"},[e("tr",{class:"bg-gray-900 text-gray-100"},[e("th",{class:"text-center py-2",scope:"col"},"Date"),e("th",{class:"text-center py-2",scope:"col"},"Lig"),e("th",{class:"text-center py-2",scope:"col"},"Teams"),e("th",{class:"text-center py-2",scope:"col"},"Tips")])],-1),je={class:"border-collapse whitespace-nowrap"},qe={class:"text-center py-4"},ze={class:"text-center py-4 font-semibold uppercase"},Ae={class:"text-center py-4"},Fe=e("p",{class:"my-1"},"VS",-1),He={class:"text-center py-4"},We={class:"h-96 w-full grid place-content-center text-center"},Be={class:"h-20 w-20"},Ye={class:"my-5"};function Je(r,o,s,t,n,u){const d=w("LazyLoad");return m(),y(b,null,[e("div",Ee,[Ue,v(),e("button",{class:"bg-green-400 w-fit p-2 rounded-md my-3 outline outline-green-200 hover:bg-green-600 inline-flex items-center gap-1 justify-center",onClick:o[0]||(o[0]=a=>r.load())},[v(c(r.msg)+" ",1),e("img",{class:l({hidden:r.msg==="Refreshed!"}),src:M,height:"17",width:"17",alt:"Click to refresh tips for latest predictions"},null,2)])]),e("table",Ge,[Me,e("tbody",je,[(m(!0),y(b,null,U(r.filterObjectsWithUniqueMatches(s.games),a=>{var g,p,h,i;return m(),y("tr",{key:a,class:"even:bg-gray-900 even:text-gray-100"},[e("td",qe,c(a.date),1),e("td",ze,c((p=(g=a.league)==null?void 0:g.substring(0,3))==null?void 0:p.trim()),1),e("td",Ae,[e("p",null,c((h=a.home)==null?void 0:h.trim()),1),Fe,e("p",null,c((i=a.away)==null?void 0:i.trim()),1)]),e("td",He,c(r.matchChecker(a.home,a.away,a.tips)),1)])}),128))])]),$(e("div",null,[e("div",We,[e("div",{class:l([{hidden:s.progress},"h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200"])},[_(d,{className:"bg-cover w-full h-full",mainImage:"/soccerball.webp",alt:"loading"},null,8,["mainImage"])],2),e("div",{class:l([{hidden:!s.progress},"grid place-items-center"])},[e("div",Be,[_(d,{className:"bg-cover w-full h-full",mainImage:"/error.png",alt:"error-logo"},null,8,["mainImage"])]),e("p",Ye,c(s.progress),1)],2)])],512),[[k,s.games.length<1]])],64)}const Ke=T(Ve,[["render",Je]]),A=x("Refresh"),Pe={props:["games","progress","yrefresh"],components:{LazyLoad:V},setup({yrefresh:r}){return{filterObjectsWithUniqueMatches:G,msg:A,load:()=>{r(),A.value="Refreshing...",setTimeout(()=>{A.value="Refreshed!"},5e3)},removeVS:s=>{const t=s==null?void 0:s.split("VS");return{strHome:t[0],strAway:t[1]}},matchChecker:(s,t,n)=>{var u,d;return((u=n==null?void 0:n.match(s))==null?void 0:u[0])===s?"1":((d=n==null?void 0:n.match(t))==null?void 0:d[0])===t?"2":n},correctScore:(s,t,n)=>{var u,d,a,g,p,h,i;if(t){const f=parseFloat(t);return f<=1.15?((u=n==null?void 0:n.match(s))==null?void 0:u[0])===s?"5-1":"1-5":f>=1.15&&f<1.25?((d=n==null?void 0:n.match(s))==null?void 0:d[0])===s?"4-1":"1-4":f>=1.25&&f<1.4?((a=n==null?void 0:n.match(s))==null?void 0:a[0])===s?"3-1":"1-3":f>=1.4&&f<1.55?((g=n==null?void 0:n.match(s))==null?void 0:g[0])===s?"3-2":"2-3":f>=1.55&&f<1.7?((p=n==null?void 0:n.match(s))==null?void 0:p[0])===s?"2-1":"2-2":f>=1.7&&f<1.85?((h=n==null?void 0:n.match(s))==null?void 0:h[0])===s?"1-0":"1-2":f>=1.85&&f<2?((i=n==null?void 0:n.match(s))==null?void 0:i[0])===s?"0-0":"1-1":""}},multiGoals:s=>{if(s){const t=parseFloat(s);return t>=1.4&&t<1.55||t>=1.55&&t<1.7||t>=1.7&&t<1.85?"2-5 Gls":""}}}}},Qe={class:"flex gap-2 px-2 place-items-center justify-between"},Xe=e("p",{class:"sm:col-span-6"},"If it's not yesterday's prediction",-1),Ze={class:"w-full border-collapse m-auto"},et={class:"border-collapse whitespace-nowrap"},tt={class:"bg-gray-900 text-gray-100"},st=e("th",{class:"text-center py-2",scope:"col"},"Date",-1),rt=e("th",{class:"text-center py-2",scope:"col"},"Lig",-1),at=e("th",{class:"text-center py-2",scope:"col"},"Teams",-1),ot=e("th",{class:"text-center py-2",scope:"col"},"Tips",-1),nt=e("th",{class:"text-center py-2",scope:"col"},"Rsl",-1),ct={class:"border-collapse whitespace-nowrap"},lt={class:"text-center py-4"},it={class:"text-center py-4 font-semibold uppercase"},dt={class:"text-center py-4"},ut=e("p",{class:"my-1"},"VS",-1),ht={class:"text-center py-4"},gt={class:"h-96 w-full grid place-content-center"},pt={class:"h-20 w-20"},ft={class:"my-5"};function mt(r,o,s,t,n,u){const d=w("LazyLoad");return m(),y(b,null,[e("div",Qe,[Xe,v(),e("button",{class:"bg-green-400 w-fit p-2 rounded-md my-3 outline outline-green-200 hover:bg-green-600 inline-flex items-center gap-1 justify-center",onClick:o[0]||(o[0]=a=>t.load())},[v(c(t.msg)+" ",1),e("img",{class:l({hidden:t.msg==="Refreshed!"}),src:M,height:"17",width:"17",alt:"Click to refresh tips for latest predictions"},null,2)])]),e("table",Ze,[e("thead",et,[e("tr",tt,[st,rt,at,ot,nt,e("th",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/sure-wins-only"},"text-center py-2"]),scope:"col"},"Odds",2)])]),e("tbody",ct,[(m(!0),y(b,null,U(s.games,a=>{var g,p,h,i,f,R,L,C,O,I,S,N,D;return $((m(),y("tr",{key:a,class:l([{hidden:(p=(g=a.tips)==null?void 0:g.match("Draw"))==null?void 0:p[0]},"even:bg-gray-900 even:text-gray-100"])},[e("td",lt,c(a.date),1),e("td",it,c((i=(h=a.league)==null?void 0:h.substring(0,3))==null?void 0:i.trim()),1),e("td",dt,[e("p",null,c((f=t.removeVS(a.home).strHome)==null?void 0:f.trim()),1),ut,e("p",null,c(((R=a.away)==null?void 0:R.trim())||((L=t.removeVS(a.home).strAway)==null?void 0:L.trim())),1)]),e("td",{class:l([{hidden:r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"},"text-center py-4"])},c(r.$route.path==="/free-vip-sure-accurate/king-of-correct-score"?t.correctScore(a.home,(C=a.tips)==null?void 0:C.split("(")[1].replace(")",""),a.tips):t.matchChecker(a.home,a.away,r.$route.path==="/free-vip-sure-accurate/sure-wins-only"?a.tips:(O=a.tips)==null?void 0:O.replace(/(Over)|(OV)|(Ov)|(OVER)\s*/g,"+").replace(/(ER)|(er)/g,"").replace(/(Home)|(HOME)\s*/g,"1").replace(/(Away)|(AWAY)\s*/g,"2").replace(/(Score)|(SCORE)\s*/g,"+0.5").replace(/(Under)|(UND)|(und)|(UN)|(Un)|(UNDER)\s*/g,"-").replace(/(45)\s*/g,"4.5").trim().replace(/(15)\s*/g,"1.5").replace(/(35)\s*/g,"3.5").replace(/(25)\s*/g,"2.5").replace("-d","-").trim().trim().trim())),3),e("td",ht,c(r.$route.path==="/free-vip-sure-accurate/sure-wins-only"?":":(I=a.score)==null?void 0:I.trim()),1),e("td",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/2-5-multi-goals-prediction"},"text-center py-4"])},c(r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"?t.multiGoals((S=a.tips)==null?void 0:S.split("(")[1].replace(")","")):""),3),e("td",{class:l([{hidden:r.$route.path!=="/free-vip-sure-accurate/sure-wins-only"},"text-center py-4 font-bold"])},"("+c(r.$route.path==="/free-vip-sure-accurate/sure-wins-only"?(N=a.tips)==null?void 0:N.split("(")[1].replace(")",""):"")+")",3)],2)),[[k,r.$route.path==="/free-vip-sure-accurate/2-5-multi-goals-prediction"?t.multiGoals((D=a.tips)==null?void 0:D.split("(")[1].replace(")","")):!0]])}),128))])]),$(e("div",null,[e("div",gt,[e("div",{class:l([{hidden:s.progress},"h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200"])},[_(d,{className:"bg-cover w-full h-full",mainImage:"/soccerball.webp",alt:"loading"},null,8,["mainImage"])],2),e("div",{class:l([{hidden:!s.progress},"grid place-items-center"])},[e("div",pt,[_(d,{className:"bg-cover w-full h-full",mainImage:"/error.png",alt:"error-logo"},null,8,["mainImage"])]),e("p",ft,c(s.progress),1)],2)])],512),[[k,s.games.length<1]])],64)}const yt=T(Pe,[["render",mt]]),_t={props:["today","yesterday","progress","refresh","yrefresh"],components:{todayTips:ye,yesterdayTips:yt,todayOddTips:Ke,yesterdayOddTips:De},setup(){const r=x(!1),o=x(!0),s=x(!1);return E(()=>{var n;const t=document.createElement("script");t.type="text/javascript",t.src="https://lascivioushelpfulstool.com/017706e64fca1fe77a550e2d1647ca31/invoke.js",t.append(`
                atOptions = {
                    'key': '017706e64fca1fe77a550e2d1647ca31',
                    'format': 'iframe',
                    'height': 90,
                    'width': 728,
                    'params': {}
                }
            `),(n=document.getElementById("table-ad"))==null||n.appendChild(t)}),{active_1:r,active_2:o,active_3:s}}},vt=e("div",{id:"table-ad"},null,-1),bt={class:"flex flex-wrap sm:mx-0 text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400 border-b border-gray-900"},wt=e("div",{class:"bg-orange-200"},[e("h3",{class:"text-lg p-10 text-gray-700"},"We're currently working it.")],-1),$t=[wt];function kt(r,o,s,t,n,u){const d=w("yesterdayTips"),a=w("yesterdayOddTips"),g=w("todayTips"),p=w("todayOddTips");return m(),y(b,null,[vt,e("ul",bt,[e("li",null,[e("button",{class:l([{"bg-gray-900 text-gray-100 shadow-md":t.active_1},"inline-block px-4 py-3 rounded-t-lg"]),onClick:o[0]||(o[0]=h=>(t.active_1=!0,t.active_2=!1,t.active_3=!1))},"Yesterday",2)]),e("li",null,[e("button",{class:l([{"bg-gray-900 text-gray-100 shadow-md":t.active_2},"inline-block px-4 py-3 rounded-t-lg"]),onClick:o[1]||(o[1]=h=>(t.active_1=!1,t.active_2=!0,t.active_3=!1))},"Today",2)]),e("li",null,[e("button",{class:l([{"bg-gray-900 text-gray-100 shadow-md":t.active_3},"inline-block px-4 py-3 rounded-t-lg"]),onClick:o[2]||(o[2]=h=>(t.active_1=!1,t.active_2=!1,t.active_3=!0))},"Tomorrow",2)])]),e("div",{class:l([{hidden:!t.active_1},"my-4 border border-gray-300"])},[e("div",{class:l({hidden:r.$route.path==="/free-vip-sure-accurate/sure-10-odds-daily-free"||r.$route.path==="/free-vip-sure-accurate/free-5-odds-tips"})},[_(d,{games:s.yesterday,yrefresh:s.yrefresh,progress:s.progress},null,8,["games","yrefresh","progress"])],2),$(e("div",null,[_(a,{games:s.yesterday,refresh:s.refresh,progress:s.progress},null,8,["games","refresh","progress"])],512),[[k,r.$route.path==="/free-vip-sure-accurate/sure-10-odds-daily-free"||r.$route.path==="/free-vip-sure-accurate/free-5-odds-tips"]])],2),e("div",{class:l([{hidden:!t.active_2},"my-4 border border-gray-300"])},[e("div",{class:l({hidden:r.$route.path==="/free-vip-sure-accurate/sure-10-odds-daily-free"||r.$route.path==="/free-vip-sure-accurate/free-5-odds-tips"})},[_(g,{games:s.today,refresh:s.refresh,progress:s.progress},null,8,["games","refresh","progress"])],2),$(e("div",null,[_(p,{games:s.today,refresh:s.refresh,progress:s.progress},null,8,["games","refresh","progress"])],512),[[k,r.$route.path==="/free-vip-sure-accurate/sure-10-odds-daily-free"||r.$route.path==="/free-vip-sure-accurate/free-5-odds-tips"]])],2),e("div",{class:l([{hidden:!t.active_3},"my-4"])},$t,2)],64)}const St=T(_t,[["render",kt]]),xt={},Tt={class:"bg-orange-200 mx-auto p-3"},Rt=e("i",{class:"text-gray-700 text-center text-sm"},[e("span",{class:"font-semibold"},"Warning:"),v(" Omoyetips provides this betting tips for informational purposes only, and we do not guarantee its accuracy. We do not promote gambling and strongly advise users to bet responsibly. Any decision to bet is at your own risk, and we are not responsible for any financial losses incurred. By using our website, you agree to not hold us accountable for any claims or losses that may occur.")],-1),Lt=[Rt];function Ct(r,o){return m(),y("blockquote",Tt,Lt)}const Nt=T(xt,[["render",Ct]]);export{Nt as D,St as T};
