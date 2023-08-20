<template>
    <main class="max-w-screen-lg md:mx-3 lg:mx-auto sm:m-auto overflow-x-hidden mx-1">
        <div class="max-w-md m-auto mt-9">
            <h1 class="text-2xl my-5 font-bold">Odd 4 Sure Wins</h1>
            <Table :today="todayGames.tips" :yesterday="yesterdayGames.tips" :refresh="refresh" :yrefresh="yrefresh" :progress="progress" />
            <Disclaimer />
        </div>
    </main>
    <section class="max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2">
        <Tipstore />
    </section>
    <section class="max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2">
        <h2 class="text-lg my-3 font-bold">Omoyetips Odd 4 Sure Wins</h2>
        <p class="leading-loose my-3">
            Omoyetips is a free soccer prediction site that offers users a wide range of betting tips. We provide free sure accurate football betting tips to help users make informed decisions when placing bets on their favorite teams. Omoyetips offers a variety of betting tips like Home Draw Away, over1.5 goals, over2.5 goals, over3.5 goals, win either halves, Goal Goal or Both teams to score GG/BTTS, Handicaps, Double chance, sure 2 odds, sure 4 odds, sure 3 odds, and lots.
        </p>
        <p class="leading-loose my-3">
            One of the most popular betting tips offered by Omoyetips is the Sure 4 odds. These are bets that have a very high chance of winning, and Omoyetips has a proven track record of providing accurate sure 4 odds. Many users have reported winning big money by following Omoyetips' sure 4 odds.
        </p>
        <p class="leading-loose my-3">
            There are a few reasons why Omoyetips is so successful at providing sure 4 odds. First, the site has a team of experienced football analysts and statisticians who use a data-driven approach to predict the outcomes of football matches. Second, Omoyetips is committed to providing high-quality, accurate betting tips to its users. Finally, Omoyetips is free to use, so there is no risk of trying it out.
        </p>
        <p class="leading-loose my-3">
            If you are looking for a reliable source of sure 4 odds, then Omoyetips is the site for you. The site is free to use and has a proven track record of providing accurate betting tips. So what are you waiting for? Start using Omoyetips today and start winning big money!
        </p>
        <h2 class="text-lg my-3 font-bold">What are 3 Odds and Why are They Hard to Achieve?</h2>
        <p class="leading-loose my-3">
            To put it simply, 3 odds mean that for every 1K bet, you stand to win 3K. Achieving 3 odds in betting is a difficult task as it requires a high degree of accuracy and reliability in the betting tips. Even the most experienced bettors often struggle to achieve this target, as it requires in-depth knowledge of the sport, teams, and players involved. Many bettors rely on guesswork, hunches, or hearsay, which can lead to inconsistent results.
        </p>
        <h2 class="text-lg my-3 font-bold">Omoyetips: The Best Website to Get Odd 4 Sure Wins</h2>
        <p class="leading-loose my-3">
            If you are looking for a site that can provide you with sure 4 odds, then Omoyetips is the best site for you. We have a team of experienced football analysts and statisticians who use a data-driven approach to predict the outcomes of football matches. This means that the odds that we provide are very accurate, and you can be confident that you will have a good chance of winning if you follow our tips.
        </p>
        <p class="leading-loose my-3">
            In addition to providing accurate odds, Omoyetips is also free to use. This means you can try out our tips without risking any money. If you are new to betting, then this is a great way to get started. You can use Omoyetips' tips to learn how to bet and to see how well you can do.
        </p>
        <p class="leading-loose my-3">
            If you are already a seasoned bettor, then Omoyetips can still help you to improve your betting skills. The site offers a variety of betting tips, including Sure 4 odds, so you can find tips that are tailored to your specific needs.
        </p>
        <p class="leading-loose my-3">
            Overall, Omoyetips is the best site to get sure 4 odds. The site is free to use, it has a team of experienced analysts, and it provides accurate odds. If you are looking for a way to improve your betting skills, then Omoyetips is the site for you.
        </p>
        <h2 class="text-lg my-3 font-bold">Omoyetips Odd 4 Sure Wins: It's Free!</h2>
        <p class="leading-loose my-3">
            One of the best things about Omoyetips is that it is completely free to use. This means that you can access all of our site's betting tips without having to pay a penny. This is a great way to save money, and it also means that you can try out our website's tips without any risk.
        </p>
        <p class="leading-loose my-3">
            If you are new to betting, then Omoyetips is a great way to get started. Our website's Sure 4 odds are a great way to learn how to bet and to see how well you can do. And because our site is free, you can try out their tips without having to risk any money.
        </p>
        <h2 class="text-lg my-3 font-bold">Conclusion</h2>
        <p class="leading-loose my-3">
            At Omoyetips, we are dedicated to providing our users with the best possible betting tips and advice. We have a team of experts who are committed to delivering accurate and reliable information, using the latest data and insights to stay ahead of the competition. Our free VIP 3 odds are just the beginning - we offer a range of additional services for those who want to take their betting to the next level. Whether you're a seasoned bettor or just starting out, Omoyetips is the sure bet for accurate VIP 3 odds.
        </p>
    </section>
</template>
<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue';
import Table from '../../components/util/Table.vue';
import api from '../../mixin/axios'
import Disclaimer from '../../components/Disclaimer.vue'
import Tipstore from '../../components/util/Tipstore.vue'
import { useRoute } from 'vue-router';
import { todayInterface, yesterdayInterface } from '../../mixin/interface'
const progress = ref();
const todayGames = reactive({
    tips: Array<todayInterface>
});
const yesterdayGames = reactive({
    tips: Array<yesterdayInterface>
});
const filter = (teams: any) => {
  const uniqueHomes = new Set<string>();
  const filteredTeams: any = [];
  teams?.forEach((obj: any) => {
    const home = obj.home && obj.home.trim();
    if (home && !uniqueHomes.has(home)) {
      filteredTeams.push(obj);
      uniqueHomes.add(home);
    }
  });
  return filteredTeams;
};

const path = useRoute().path;

const { data: posts, pending, refresh }: any = await useFetch(`${ api }today/games/4odds`)
if(!pending) progress.value = 'Network Error \n Please Reload The Page!';
const { data: yposts, refresh: yrefresh }: any = await useFetch(`${ api }yesterday/games/4odds`)
watchEffect(() => {
    todayGames.tips = filter(posts?.value?.predictions);
    yesterdayGames.tips = filter(yposts?.value?.predictions)
})

useSchemaOrg([
    defineWebSite({
        name: "Odd 4 Sure Wins",
    }),
    defineArticle({
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://betting.omoyetips.com" + path.replace(/\/$/, "")
        },
        image: '/logo.png',
        datePublished: new Date(2022, 6, 12),
        dateModified: new Date(2022, 7, 20),
        author: [{
            "@type": "Website",
            name: "Omoyetips",
            url: "https://betting.omoyetips.com" + path.replace(/\/$/, ""),
        }],
        articleSection: ['Odd 4 Sure Wins', 'Today football 4 odds prediction', 'Yesterday football 4 odds prediction', 'Tomorrow football 4 odds prediction', 'Omoyetips Odd 4 Sure Wins', "Omoyetips: The Best Website to Get Odd 4 Sure Wins", 'What are 3 Odds and Why are They Hard to Achieve?', 'Conclusion'],
        articleBody: 'In this blog post, we will explore what 2-5 multi goals in football betting are all about and why Omoyetips stands out as the best website to obtain reliable predictions in this category. With a commitment to providing free, accurate, and sure 2-5 multi goals predictions, Omoyetips has become a trusted resource for avid football bettors.',
        url: "https://betting.omoyetips.com" + path.replace(/\/$/, ""),
        publisher: {
            "@type": "Website",
            name: "Omoyetips"
        },
        headline: "Odd 4 Sure Wins"
    })
])

const siteData = {
    title: 'Odd 4 Sure Wins',
    discription: 'Omoyetips is the best site to get Odd 4 Sure Wins. Our site is free to use and we have a team of expert analysts to predict the outcomes of football matches.',
    keywords: "Odd 4 Sure Wins, sure 4 odds sure, 4 odds daily sure, 4 odds today, 4 sure odds, 4 odds daily tips, 4 sure odds daily, odd 4 sure wins today, odd 4 sure wins tomorrow, 4 sure odds today, sure 4 odd, sure 4 odds prediction today, sure 4 odd prediction, sure 4 odds for today, today sure 4 odds, omoyetips"
};

useHead({
    title: siteData.title,
    meta: [
        {
            name: 'description',
            content: siteData.discription
        },
        {
            name: 'keywords',
            content: siteData.keywords
        },
    ],
    // script: [
    //     {
    //         defer: true, async: true,
    //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1657149618410257',
    //         crossorigin: 'anonymous'
    //     }
    // ],
    link: [{
        rel: "canonical", href: 'https://betting.omoyetips.com' + path.replace(/\/$/, "")
    }]
})
</script>