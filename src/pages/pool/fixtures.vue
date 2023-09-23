<template>
    <section class="max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2">
        <h1 class="text-3xl font-bold">Pool Fixtures Week {{ week.date || '...' }}</h1>
        <h2 class="text-xl font-medium">UK {{ new Date().getFullYear() }}/{{ new Date().getFullYear() + 1 }}</h2>
        <select class="my-6 border p-3" @change="updateFixtures">
            <template v-for="(date, i) in dates.tips" :key="i">
                <option :selected="i === 0" :value="date">{{ date }}</option>
            </template>
        </select>
        <p v-show="loading" class="text-xl">Please wait...</p>
        <div v-show="!pending.value">
            <table v-show="week?.color?.trim()?.split(' ')[0]" class="w-full border-collapse overflow-x-auto">
                <thead class="whitespace-nowrap">
                    <tr :style="{ 'background-color': week?.color?.trim()?.split(' ')[0] }" class="text-gray-100"
                        :class="{ 'text-gray-100 bg-gray-700': !week?.color?.trim()?.split(' ')[0] }">
                        <th class="text-center py-2" scope="col">#</th>
                        <th class="text-center py-2" scope="col" colspan="3">Fixtures</th>
                        <th class="text-center py-2 hidden sm:block md:block" scope="col">Result</th>
                        <th class="text-center py-2" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody class="whitespace-nowrap">
                    <template v-for="team in fixtures.tips" :key="team">
                        <tr class="border-b border-gray-200" :style="{ 'border-color': week?.color?.trim()?.split(' ')[0] }"
                            :class="{ 'border-b-4': !team?.num }">
                            <td class="text-center py-4 text-gray-950 font-bold" :class="{ 'hidden': !team?.num }">{{
                                team?.num
                            }}</td>
                            <td class="py-4 pl-0 sm:pl-1 md:pl-1 sm:text-start md:text-start text-end font-bold"
                                :class="{ 'hidden': !team?.num }">
                                <p>{{ team?.home }}</p>
                            </td>
                            <td class="py-4 sm:px-1 md:px-1 px-0 text-center text-red-600"
                                :class="{ 'hidden': !team?.num, 'text-green-500 font-bold': parseInt(team?.score?.split(')')[0]?.replace(/[a-zA-Z!@#$%^&*()_+={}[\]:;<>,.?\/\\|~-]/g, '')) === parseInt(team?.score?.split(')')[1]?.replace(/[a-zA-Z!@#$%^&*()_+={}[\]:;<>,.?\/\\|~-]/g, '')) }">
                                {{ team.score ? team.score : "VS" }}
                            </td>
                            <td class="py-4 sm:text-end md:text-end text-start font-bold" :class="{ 'hidden': !team?.num }">
                                {{ team?.away }}
                            </td>
                            <td class="py-4 text-center hidden sm:block md:block"
                                :class="{ 'hidden sm:hidden md:hidden': !team?.num, 'text-green-700 font-bold capitalize': team?.result !== 'Away' && team?.result !== 'Home' }">
                                {{ team?.result }}
                            </td>
                            <td class="py-4 text-center" :class="{ 'hidden': !team?.num }">
                                {{ team?.status }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div v-show="pending.value">
            <div class="h-96 w-full grid place-content-center text-center">
                <div
                    class="h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200">
                    <LazyLoad className="bg-cover w-full h-full" :mainImage='"/soccerball.webp"' alt="loading" />
                </div>
            </div>
        </div>
    </section>
    <section class="max-w-screen-lg md:mx-3 lg:mx-auto sm:mx-auto my-9 overflow-x-hidden mx-2">
        <h2 class="text-2xl my-5 font-bold">Omoyetips Pool Fixtures</h2>
        <p class="leading-loose my-3">
            In the dynamic world of sports betting, finding reliable sources for accurate pool fixtures is like striking
            gold. Whether you're a seasoned bettor or a novice trying to get your feet wet, having access to trustworthy
            information can make all the difference. If you're on the hunt for a website that can provide you with top-notch
            pool fixtures, look no further than Omoyetips. Let's explore how this platform stands out as the ultimate
            destination for all your football betting needs.
        </p>
        <h2 class="text-lg my-3 font-bold">Omoyetips: Unveiling the Power of Precise Predictions</h2>
        <p class="leading-loose my-3">
            Omoyetips isn't just your run-of-the-mill soccer prediction website. It's a dynamic hub that brings together a
            team of experienced football analysts and statisticians who are passionate about the beautiful game. What sets
            Omoyetips apart is its data-driven approach to predicting the outcomes of football matches. Through rigorous
            analysis of historical data, team performance, player statistics, and a myriad of other factors, they craft
            predictions that are as close to accurate as you can get.
        </p>
        <h2 class="text-lg my-3 font-bold">A Treasure Trove of Betting Tips</h2>
        <p class="leading-loose my-3">
            One of the standout features of Omoyetips is its extensive range of betting tips. Whether you're interested in
            Home Draw Away predictions, goal counts (over1.5, over2.5, over3.5), win either half bets, Both Teams to Score
            (BTTS) predictions, handicaps, double chance probabilities, or specific odds (2 and 3 odds), this platform has
            it all. Omoyetips understands that every bettor has their unique strategy, and by offering a diverse array of
            betting tips, they cater to a wide spectrum of preferences.
        </p>
        <h2 class="text-lg my-3 font-bold">Reliable Pool Fixtures for This Week and Beyond</h2>
        <p class="leading-loose my-3">
            When it comes to pool fixtures, Omoyetips shines brightly. Offering up-to-date pool fixtures for the week and
            even advanced pool fixtures, the website keeps you in the loop with the latest match schedules. With Omoyetips,
            you don't have to spend hours scouring the internet for fixture information; it's all conveniently laid out for
            you in one place.
        </p>
        <p class="leading-loose my-3">
            For those who like to plan their bets ahead of time, the availability of advance pool fixtures is a
            game-changer. You can strategize your bets with insight into upcoming matches, giving you an edge over others in
            the betting arena. Omoyetips' commitment to providing accurate and timely fixture information showcases its
            dedication to the success of its users.
        </p>
        <h2 class="text-lg my-3 font-bold">Weekend Pool Draws</h2>
        <p class="leading-loose my-3">
            Weekends are sacred in the world of football, and Omoyetips understands the excitement that comes with the
            anticipation of weekend pool draws. Whether you're making last-minute bets or planning, their weekend pool draw
            predictions can provide valuable insights that inform your betting choices. And when the final whistle blows,
            you can count on Omoyetips to deliver accurate football results and pool outcomes.
        </p>
        <p class="leading-loose my-3">
            The platform's dedication to delivering prompt and precise football results ensures that you're always in the
            know. No more waiting anxiously for match outcomes – Omoyetips brings the results to you, empowering you to
            evaluate your bets and refine your strategies based on real-time information.
        </p>
        <h2 class="text-lg my-3 font-bold">Putting Accuracy First: Why Omoyetips Stands Out</h2>
        <p class="leading-loose my-3">
            Omoyetips isn't just another website in the crowded landscape of soccer prediction platforms. Their commitment
            to accuracy and quality is palpable in every aspect of their service. With a team of dedicated experts, they
            understand the value of reliable information in the world of sports betting. Regardless of your level of
            experience, Omoyetips strives to empower you with the tools you need to make informed decisions and increase
            your chances of winning.
        </p>
        <p class="leading-loose my-3">
            Their thorough analysis takes into account a plethora of factors – from team dynamics and historical performance
            to player injuries and weather conditions. By considering all these elements, Omoyetips' predictions transcend
            mere guesswork and are firmly rooted in data-driven insights.
        </p>
        <h2 class="text-lg my-3 font-bold">Conclusion</h2>
        <p class="leading-loose my-3">
            If you're seeking a one-stop destination for pool fixtures, football results, and a plethora of betting tips,
            Omoyetips emerges as a clear winner. Backed by a team of knowledgeable analysts and powered by data, this
            platform offers a comprehensive range of predictions to suit every bettor's style. With Omoyetips in your
            corner, you can dive into the exciting world of sports betting with confidence, armed with accurate information
            that could turn your bets into wins.
        </p>
        <p class="leading-loose my-3">
            Omoyetips' provision of pool fixtures for this week, advance pool fixtures, weekend pool draws, and football
            results pool results ensures that you're well-equipped to make strategic betting choices. In the ever-evolving
            landscape of sports betting, having a reliable source like Omoyetips by your side can be the difference between
            a successful wager and a missed opportunity. Experience the power of precision and elevate your betting game
            with Omoyetips today.
        </p>
    </section>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Table from '../../components/util/Table.vue';
import api from '../../mixin/axios'
import LazyLoad from '../../components/LazyLoad.vue';
const pending = reactive({ value: true });
const loading = ref(false)

const fixtures: any = reactive({
    tips: []
});

const week: any = reactive({
    date: '',
    color: ''
});

const dates: any = reactive({
    tips: []
});

const path = useRoute().path;

const { data: posts } = await api.get('/pool/games', {
    cache: {
        maxAge: 1000 * 60 * 60 * 24,
    }
})

const { data: date } = await api.get(`/pool/weekly/features`, {
    cache: {
        maxAge: 1000 * 60 * 60 * 24,
    }
})

const updateFixtures = async (e: any) => {
    const date: string = e.target.value;
    loading.value = true;
    const monthNameToNumber: any = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };

    const userInput = date.split('-')[1];
    const mon = monthNameToNumber[userInput]?.trim();

    const { data: posts } = await api.get(`/pool/games/${date.split('-')[2]}-${mon}-${date.split('-')[0]}`)
    watchEffect(() => {
        fixtures.tips = posts?.predictions?.team;
        week.date = posts?.predictions?.weekDay;
        week.color = posts?.predictions?.bgColor;
        if (posts) loading.value = false, pending.value = false;
    })
}


watchEffect(() => {
    fixtures.tips = posts?.predictions?.team;
    week.date = posts?.predictions?.weekDay;
    week.color = posts?.predictions?.bgColor;
    dates.tips = date?.predictions;
    if (posts) pending.value = false;
});

useSchemaOrg([
    defineWebSite({
        name: "Omoyetips Pool Fixtures",
    }),
    defineArticle({
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://betting.omoyetips.com" + path.replace(/\/$/, "")
        },
        image: '/logo.png',
        datePublished: new Date(2022, 6, 12),
        dateModified: new Date(2022, 7, 19),
        author: [{
            "@type": "Website",
            name: "Omoyetips",
            url: "https://betting.omoyetips.com" + path.replace(/\/$/, ""),
        }],
        articleSection: ['Omoyetips Pool Fixtures', 'Omoyetips: Unveiling the Power of Precise Predictions', 'A Treasure Trove of Betting Tips', 'Reliable Pool Fixtures for This Week and Beyond', 'Weekend Pool Draws', "Putting Accuracy First: Why Omoyetips Stands Out", 'Conclusion'],
        articleBody: `If you're seeking a one-stop destination for pool fixtures, football results, and a plethora of betting tips, Omoyetips emerges as a clear winner. Backed by a team of knowledgeable analysts and powered by data, this platform offers a comprehensive range of predictions to suit every bettor's style. With Omoyetips in your corner, you can dive into the exciting world of sports betting with confidence, armed with accurate information that could turn your bets into wins.`,
        url: "https://betting.omoyetips.com" + path.replace(/\/$/, ""),
        publisher: {
            "@type": "Website",
            name: "Omoyetips"
        },
        headline: "Omoyetips Pool Fixtures"
    })
])

const siteData = {
    title: 'Omoyetips Pool Fixtures',
    discription: 'Accurate pool fixtures & football predictions at Omoyetips. Explore tips, draws, results & elevate your football betting with Omoyetips. Totally free of charge',
    keywords: `pool fixtures, pool fixtures for this week, weekend pool draws, advance pool fixtures, football results pool results, pool fixtures week ${week.date}, pool week ${week.date}, pool week ${week.date} fixture, pool week ${week.date}`
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
    //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1657149618410257',
    //         crossorigin: 'anonymous',
    //         defer: true, async: true
    //     }
    // ],
    link: [{
        rel: "canonical", href: 'https://betting.omoyetips.com' + path.replace(/\/$/, "")
    }]
})
</script>