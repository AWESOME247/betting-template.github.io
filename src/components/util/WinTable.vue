<template>
    <h2 class="text-2xl font-semibold">Win Accuracy: <span class="text-green-600">{{ length * 10 >= 100 ? 100 : length * 10
    }}%</span></h2>
    <div class="w-full bg-green-200 rounded-full h-2.5 my-4">
        <div class="bg-green-700 h-2.5 rounded-full" :style="{ 'width': length * 10 + '%' }"></div>
    </div>
    <h2 class="text-2xl font-semibold mt-5">Latest Wins</h2>
    <div class="my-4 border border-gray-300">
        <table class="w-full border-collapse m-auto">
            <thead class="border-collapse whitespace-nowrap">
                <tr class="bg-gray-900 text-gray-100">
                    <th class="text-center py-2" scope="col">Date</th>
                    <th class="text-center py-2" scope="col">Lig</th>
                    <th class="text-center py-2" scope="col">Teams</th>
                    <th class="text-center py-2" scope="col">Tips</th>
                    <th class="text-center py-2" scope="col">Rsl</th>
                    <th class="text-center py-2" scope="col">Sta</th>
                </tr>
            </thead>
            <tbody class="border-collapse whitespace-nowrap">
                <template v-for="team in games.value" :key="team">
                    <tr v-show="games.value[1]" class="even:bg-gray-900 even:text-gray-100">
                        <td class="text-center py-4">{{ team?.date }}</td>
                        <td class="text-center py-4 font-semibold">{{ team?.league?.substring(0, 3)?.trim() }}</td>
                        <td class="text-center py-4">
                            <p>{{ team && team.home ? removeVS(team.home).strHome?.trim() : 'N/A' }}</p>
                            <p class="my-1">VS</p>
                            <p>{{ team && team.away ? team.away?.trim() || removeVS(team.home).strAway?.trim() : 'N/A' }}
                            </p>
                        </td>
                        <td class="text-center py-4">{{ team?.tips?.replace(/(Over)|(OV)|(Ov)|(OVER)\s*/g,
                            '+').replace(/(ER)|(er)/g, '').replace(/(Home)|(HOME)\s*/g, '1').replace(/(Away)|(AWAY)\s*/g,
                                '2').replace(/(Score)|(SCORE)\s*/g,
                                    '+0.5').replace(/(Under)|(UND)|(und)|(UN)|(Un)|(UNDER)|(D)|(d)\s*/g, '-').replace(/(45)\s*/g,
                                        '4.5').trim().replace(/(15)\s*/g, '1.5').replace(/(35)\s*/g, '3.5').replace(/(25)\s*/g,
                                            '2.5').trim().trim().trim()
                        }}</td>
                        <td class="text-center py-4">{{ team?.score?.trim() }}</td>
                        <td class="text-center py-4">
                            <div class="h-5 w-5 m-auto">
                                <svg class="h-full w-full" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837"
                                    xml:space="preserve" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path style="fill:#29a829;"
                                                d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
        <div v-show="games.value.length < 1">
            <div class="h-96 w-full grid place-content-center">
                <div :class="{ 'hidden': progress }"
                    class="h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200">
                    <LazyLoad className="bg-cover w-full h-full" :mainImage='"/soccerball.webp"' alt="loading" />
                </div>
                <div :class="{ 'hidden': !progress }" class="grid place-items-center">
                    <div class="h-20 w-20">
                        <LazyLoad className="bg-cover w-full h-full" :mainImage='"/error.png"' alt="error-logo" />
                    </div>
                    <p class="my-5">{{ 'An Error Occured' }}</p>
                </div>
            </div>
        </div>
    </div>
    <div :class="{ 'hidden': path === '/free-vip-sure-accurate/lastest-wins' }" class="grid place-content-center">
        <a href="/free-vip-sure-accurate/lastest-wins"
            class="bg-green-700 p-4 text-white rounded-md font-bold hover:bg-green-500 cursor-pointer">View More >></a>
    </div>
</template>
<script lang="ts" setup>
import api from '../../mixin/axios'
import { useRoute } from 'vue-router'
import LazyLoad from '../LazyLoad.vue';
const progress = ref();

const path = useRoute().path;

const games: any = reactive({
    value: []
});
const length = ref(0);

onMounted(async () => {
    const { data: postsOv1 } = await api.get(`yesterday/games/over1.5`)
    const over1 = postsOv1?.predictions
    const ov1 = over1?.filter((match: any) => {
        const scr = match.score.split(':');
        const home = parseInt(scr[0]);
        const away = parseInt(scr[1]);
        return home + away >= 2;
    });

    const { data: postsOv2 } = await api.get(`yesterday/games/over2.5`)
    const over2 = postsOv2?.predictions
    const ov2 = over2?.filter((match: any) => {
        const scr = match.score.split(':');
        const home = parseInt(scr[0]);
        const away = parseInt(scr[1]);

        return home + away >= 3;
    });

    const { data: postsOv3 } = await api.get(`yesterday/games/over3.5`)
    const over3 = postsOv3?.predictions
    const ov3 = over3?.filter((match: any) => {
        const scr = match.score.split(':');
        const home = parseInt(scr[0]);
        const away = parseInt(scr[1]);

        return home + away >= 4;
    });

    const { data: postsUn3 } = await api.get(`yesterday/games/under3.5`)
    const under3 = postsUn3?.predictions
    const un3 = under3?.filter((match: any) => {
        const scr = match.score.split(':');
        const home = parseInt(scr[0]);
        const away = parseInt(scr[1]);

        return home + away <= 3;
    });

    const getGames = async () => {
        try {
            const arr: any = [];
            const myGames = arr.concat(ov1, ov2, ov3, un3);
            length.value = myGames.length;
            games.value = myGames;
            if (path !== '/free-vip-sure-accurate/lastest-wins')
                games.value = myGames.slice(0, 6);
        } catch (error) {
            console.log(error);
            if (error) progress.value = 'Network Error \n Please Reload The Page!';
        }
    }

    getGames();
})

const removeVS = (txt: String) => {
    const str = txt.split('VS')
    return {
        strHome: str[0],
        strAway: str[1]
    }
}
</script>
