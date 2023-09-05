import{d as ee,r as H,z as T,C as te,L as M,M as oe,j as se,k as y,l as f,m as t,t as s,E as n,F as A,D as V,J as B,N as D,U as Y,H as r,q as Z,B as ie}from"./entry.61b62f64.js";import{u as S}from"./fetch.abf4b7e7.js";import{u as ne,d as ae,a as re}from"./index.a92e46b9.js";import{a as $}from"./axios.6eade11a.js";import{L as K}from"./LazyLoad.2a3ee763.js";const le={class:"max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2"},ce={class:"text-3xl font-bold"},de={class:"text-xl font-medium"},pe=["selected","value"],ue={class:"text-xl"},he={class:"w-full border-collapse overflow-x-auto"},ye={class:"whitespace-nowrap"},fe=t("th",{class:"text-center py-2",scope:"col"},"#",-1),me=t("th",{class:"text-center py-2",scope:"col",colspan:"3"},"Fixtures",-1),ge=t("th",{class:"text-center py-2 hidden sm:block md:block",scope:"col"},"Result",-1),be=t("th",{class:"text-center py-2",scope:"col"},"Status",-1),we=[fe,me,ge,be],xe={class:"whitespace-nowrap"},ve={class:"h-96 w-full grid place-content-center text-center"},ke={class:"h-20 w-20"},_e={class:"my-5"},Oe=ie('<section class="max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2"><h2 class="text-2xl my-5 font-bold">Omoyetips Pool Fixtures</h2><p class="leading-loose my-3"> In the dynamic world of sports betting, finding reliable sources for accurate pool fixtures is like striking gold. Whether you&#39;re a seasoned bettor or a novice trying to get your feet wet, having access to trustworthy information can make all the difference. If you&#39;re on the hunt for a website that can provide you with top-notch pool fixtures, look no further than Omoyetips. Let&#39;s explore how this platform stands out as the ultimate destination for all your football betting needs. </p><h2 class="text-lg my-3 font-bold">Omoyetips: Unveiling the Power of Precise Predictions</h2><p class="leading-loose my-3"> Omoyetips isn&#39;t just your run-of-the-mill soccer prediction website. It&#39;s a dynamic hub that brings together a team of experienced football analysts and statisticians who are passionate about the beautiful game. What sets Omoyetips apart is its data-driven approach to predicting the outcomes of football matches. Through rigorous analysis of historical data, team performance, player statistics, and a myriad of other factors, they craft predictions that are as close to accurate as you can get. </p><h2 class="text-lg my-3 font-bold">A Treasure Trove of Betting Tips</h2><p class="leading-loose my-3"> One of the standout features of Omoyetips is its extensive range of betting tips. Whether you&#39;re interested in Home Draw Away predictions, goal counts (over1.5, over2.5, over3.5), win either half bets, Both Teams to Score (BTTS) predictions, handicaps, double chance probabilities, or specific odds (2 and 3 odds), this platform has it all. Omoyetips understands that every bettor has their unique strategy, and by offering a diverse array of betting tips, they cater to a wide spectrum of preferences. </p><h2 class="text-lg my-3 font-bold">Reliable Pool Fixtures for This Week and Beyond</h2><p class="leading-loose my-3"> When it comes to pool fixtures, Omoyetips shines brightly. Offering up-to-date pool fixtures for the week and even advanced pool fixtures, the website keeps you in the loop with the latest match schedules. With Omoyetips, you don&#39;t have to spend hours scouring the internet for fixture information; it&#39;s all conveniently laid out for you in one place. </p><p class="leading-loose my-3"> For those who like to plan their bets ahead of time, the availability of advance pool fixtures is a game-changer. You can strategize your bets with insight into upcoming matches, giving you an edge over others in the betting arena. Omoyetips&#39; commitment to providing accurate and timely fixture information showcases its dedication to the success of its users. </p><h2 class="text-lg my-3 font-bold">Weekend Pool Draws</h2><p class="leading-loose my-3"> Weekends are sacred in the world of football, and Omoyetips understands the excitement that comes with the anticipation of weekend pool draws. Whether you&#39;re making last-minute bets or planning, their weekend pool draw predictions can provide valuable insights that inform your betting choices. And when the final whistle blows, you can count on Omoyetips to deliver accurate football results and pool outcomes. </p><p class="leading-loose my-3"> The platform&#39;s dedication to delivering prompt and precise football results ensures that you&#39;re always in the know. No more waiting anxiously for match outcomes – Omoyetips brings the results to you, empowering you to evaluate your bets and refine your strategies based on real-time information. </p><h2 class="text-lg my-3 font-bold">Putting Accuracy First: Why Omoyetips Stands Out</h2><p class="leading-loose my-3"> Omoyetips isn&#39;t just another website in the crowded landscape of soccer prediction platforms. Their commitment to accuracy and quality is palpable in every aspect of their service. With a team of dedicated experts, they understand the value of reliable information in the world of sports betting. Regardless of your level of experience, Omoyetips strives to empower you with the tools you need to make informed decisions and increase your chances of winning. </p><p class="leading-loose my-3"> Their thorough analysis takes into account a plethora of factors – from team dynamics and historical performance to player injuries and weather conditions. By considering all these elements, Omoyetips&#39; predictions transcend mere guesswork and are firmly rooted in data-driven insights. </p><h2 class="text-lg my-3 font-bold">Conclusion</h2><p class="leading-loose my-3"> If you&#39;re seeking a one-stop destination for pool fixtures, football results, and a plethora of betting tips, Omoyetips emerges as a clear winner. Backed by a team of knowledgeable analysts and powered by data, this platform offers a comprehensive range of predictions to suit every bettor&#39;s style. With Omoyetips in your corner, you can dive into the exciting world of sports betting with confidence, armed with accurate information that could turn your bets into wins. </p><p class="leading-loose my-3"> Omoyetips&#39; provision of pool fixtures for this week, advance pool fixtures, weekend pool draws, and football results pool results ensures that you&#39;re well-equipped to make strategic betting choices. In the ever-evolving landscape of sports betting, having a reliable source like Omoyetips by your side can be the difference between a successful wager and a missed opportunity. Experience the power of precision and elevate your betting game with Omoyetips today. </p></section>',1),De=ee({__name:"fixtures",async setup(Pe){var I,C,N,E,z,U,L,q;let l,m;const Q=H(),O=H(!1),g=T({tips:Array}),i=T({date:"",color:""}),b=T({tips:[]}),w=te().path,{data:a,pending:x,refresh:G}=([l,m]=M(()=>S(`${$}pool/games`,"$xFEUhU1E5u")),l=await l,m(),l),{data:P}=([l,m]=M(()=>S(`${$}pool/weekly/features`,"$Dn9oP1KpQC")),l=await l,m(),l);x||(Q.value=`Something went wrong 
 Please reload the page!`),g.tips=(C=(I=a==null?void 0:a.value)==null?void 0:I.predictions)==null?void 0:C.team,i.date=(E=(N=a==null?void 0:a.value)==null?void 0:N.predictions)==null?void 0:E.weekDay,i.color=(U=(z=a==null?void 0:a.value)==null?void 0:z.predictions)==null?void 0:U.bgColor,G();const X=async c=>{var d,p,u,h,J,R,j;const v=c.target.value;O.value=!0;const k={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},_=v.split("-")[1],e=(d=k[_])==null?void 0:d.trim(),{data:o,pending:F}=await S(`${$}pool/games/${v.split("-")[2]}-${e}-${v.split("-")[0]}`,"$ZoJUl7ahEB");g.tips=(u=(p=o==null?void 0:o.value)==null?void 0:p.predictions)==null?void 0:u.team,i.date=(J=(h=o==null?void 0:o.value)==null?void 0:h.predictions)==null?void 0:J.weekDay,i.color=(j=(R=o==null?void 0:o.value)==null?void 0:R.predictions)==null?void 0:j.bgColor,o&&(O.value=!1)};oe(()=>{var c;g.tips,i.date,i.color,b.tips=(c=P==null?void 0:P.value)==null?void 0:c.predictions}),console.log((q=(L=i.color)==null?void 0:L.trim())==null?void 0:q.split(" ")[0]),ne([ae({name:"Omoyetips Pool Fixtures"}),re({"@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://betting.omoyetips.com"+w.replace(/\/$/,"")},image:"/logo.png",datePublished:new Date(2022,6,12),dateModified:new Date(2022,7,19),author:[{"@type":"Website",name:"Omoyetips",url:"https://betting.omoyetips.com"+w.replace(/\/$/,"")}],articleSection:["Omoyetips Pool Fixtures","Omoyetips: Unveiling the Power of Precise Predictions","A Treasure Trove of Betting Tips","Reliable Pool Fixtures for This Week and Beyond","Weekend Pool Draws","Putting Accuracy First: Why Omoyetips Stands Out","Conclusion"],articleBody:"If you're seeking a one-stop destination for pool fixtures, football results, and a plethora of betting tips, Omoyetips emerges as a clear winner. Backed by a team of knowledgeable analysts and powered by data, this platform offers a comprehensive range of predictions to suit every bettor's style. With Omoyetips in your corner, you can dive into the exciting world of sports betting with confidence, armed with accurate information that could turn your bets into wins.",url:"https://betting.omoyetips.com"+w.replace(/\/$/,""),publisher:{"@type":"Website",name:"Omoyetips"},headline:"Omoyetips Pool Fixtures"})]);const W={title:"Omoyetips Pool Fixtures",discription:"Accurate pool fixtures & football predictions at Omoyetips. Explore tips, draws, results & elevate your football betting with Omoyetips. Totally free of charge",keywords:"pool fixtures, pool fixtures for this week, weekend pool draws, advance pool fixtures, football results pool results"};return se({title:W.title,meta:[{name:"description",content:W.discription},{name:"keywords",content:W.keywords}],link:[{rel:"canonical",href:"https://betting.omoyetips.com"+w.replace(/\/$/,"")}]}),(c,v)=>{var k,_;return y(),f(A,null,[t("section",le,[t("h1",ce,"Pool Fixtures Week "+s(n(i).date),1),t("h2",de,"UK "+s(new Date().getFullYear())+"/"+s(new Date().getFullYear()+1),1),t("select",{class:"my-6 border p-3",onChange:X},[(y(!0),f(A,null,V(n(b).tips,(e,o)=>(y(),f("option",{key:o,selected:o===0,value:e},s(e),9,pe))),128))],32),B(t("p",ue,"Please wait...",512),[[D,O.value]]),t("table",he,[t("thead",ye,[t("tr",{style:Y({"background-color":(_=(k=n(i).color)==null?void 0:k.trim())==null?void 0:_.split(" ")[0]}),class:"text-gray-100"},we,4)]),B(t("tbody",xe,[(y(!0),f(A,null,V(n(g).tips,e=>{var o,F,d,p,u,h;return y(),f("tr",{key:e,class:r(["border-b border-gray-200",{"border-b-4":!(e!=null&&e.num)}]),style:Y({"border-color":(F=(o=n(i).color)==null?void 0:o.trim())==null?void 0:F.split(" ")[0]})},[t("td",{class:r(["text-center py-4 text-gray-950 font-bold",{hidden:!(e!=null&&e.num)}])},s(e==null?void 0:e.num),3),t("td",{class:r(["py-4 pl-0 sm:pl-1 md:pl-1 sm:text-start md:text-start text-end font-bold",{hidden:!(e!=null&&e.num)}])},[t("p",null,s(e==null?void 0:e.home),1)],2),t("td",{class:r(["py-4 sm:px-1 md:px-1 px-0 text-center text-red-600",{hidden:!(e!=null&&e.num),"text-green-500 font-bold":parseInt((p=(d=e==null?void 0:e.score)==null?void 0:d.split(")")[0])==null?void 0:p.replace(/[a-zA-Z!@#$%^&*()_+={}[\]:;<>,.?\/\\|~-]/g,""))===parseInt((h=(u=e==null?void 0:e.score)==null?void 0:u.split(")")[1])==null?void 0:h.replace(/[a-zA-Z!@#$%^&*()_+={}[\]:;<>,.?\/\\|~-]/g,""))}])},s(e.score?e.score:"VS"),3),t("td",{class:r(["py-4 sm:text-end md:text-end text-start font-bold",{hidden:!(e!=null&&e.num)}])},s(e==null?void 0:e.away),3),t("td",{class:r(["py-4 text-center hidden sm:block md:block",{"hidden sm:hidden md:hidden":!(e!=null&&e.num),"text-green-700 font-bold capitalize":(e==null?void 0:e.result)!=="Away"&&(e==null?void 0:e.result)!=="Home"}])},s(e==null?void 0:e.result),3),t("td",{class:r(["py-4 text-center",{hidden:!(e!=null&&e.num)}])},s(e==null?void 0:e.status),3)],6)}),128))],512),[[D,n(b).tips]])]),B(t("div",null,[t("div",ve,[t("div",{class:r([{hidden:n(x)},"h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200"])},[Z(K,{className:"bg-cover w-full h-full",mainImage:"/soccerball.webp",alt:"loading"},null,8,["mainImage"])],2),t("div",{class:r([{hidden:!n(x)},"grid place-items-center"])},[t("div",ke,[Z(K,{className:"bg-cover w-full h-full",mainImage:"/error.png",alt:"error-logo"},null,8,["mainImage"])]),t("p",_e,s(n(x)),1)],2)])],512),[[D,!n(b).tips]])]),Oe],64)}}});export{De as default};