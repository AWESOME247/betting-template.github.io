<template>
    <h2 class="text-2xl font-semibold mt-5">Ticket of the day</h2>
    <div class="my-4 border border-gray-300">
        <table class="w-full border-collapse m-auto">
            <thead class="border-collapse whitespace-nowrap">
                <tr class="bg-gray-900 text-gray-100">
                    <th class="text-center py-2" scope="col">Date</th>
                    <th class="text-center py-2" scope="col">Lig</th>
                    <th class="text-center py-2" scope="col">Teams</th>
                    <th class="text-center py-2" scope="col">Tips</th>
                </tr>
            </thead>
            <tbody class="border-collapse whitespace-nowrap">
                <template v-for="team in games.value" :key="team">
                    <tr v-show="games.value[1]" class="even:bg-gray-900 even:text-gray-100">
                        <td class="text-center py-4">{{ team.date }}</td>
                        <td class="text-center py-4 font-semibold uppercase">{{ team.league.substring(0, 3)?.trim() }}</td>
                        <td class="text-center py-4">
                            <p>{{ removeVS(team.home).strHome?.trim() }}</p>
                            <p class="my-1">VS</p>
                            <p>{{ team.away?.trim() || removeVS(team.home).strAway?.trim() }}</p>
                        </td>
                        <td class="text-center py-4">{{ team.tips?.replace(/(Over)|(OV)|(Ov)|(OVER)\s*/g,
                            '+').replace(/(ER)|(er)/g, '').replace(/(Home)|(HOME)\s*/g, '1').replace(/(Away)|(AWAY)\s*/g,
                                '2').replace(/(Score)|(SCORE)\s*/g, '+0.5').replace(/(Under)|(UND)|(und)|(Un)|(UNDER)|(UN)\s*/g,
                                    '-').replace(/(Score)|(SCORE)\s*/g, '+0.5').replace(/(45)\s*/g,
                                        '4.5').trim().replace(/(15)\s*/g, '1.5').replace(/(35)\s*/g, '3.5').replace(/(25)\s*/g,
                                            '2.5').trim().trim()
                        }}</td>
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
                    <p class="my-5">{{ progress }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="grid place-content-center">
        <a href="/free-vip-sure-accurate/bet_of_the_day"
            class="bg-green-700 p-4 text-white rounded-md font-bold hover:bg-green-500 cursor-pointer">View More >></a>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import api from '../../mixin/axios'
import LazyLoad from '../LazyLoad.vue';

const progress = ref();
const games: any = reactive({
    value: []
});

onMounted(() => {
    const home = async () => {
        try {
            const { data: today } = await api.get(`today/games/bet_of_the_day`)
            const myGames = filter(today?.predictions);
            games.value = myGames.slice(0, 3)
        } catch (error: any) {
            if (error.message)
                progress.value = error.message;
        }
    }

    home();
})

const removeVS = (txt: String) => {
    const str = txt.split('VS')
    return {
        strHome: str[0],
        strAway: str[1]
    }
}

function filter(teams: any) {
    const uniqueHomes = new Set<string>();
    const filteredTeams: any = [];
    teams.forEach((obj: any) => {
        const home = obj.home && obj.home.trim();
        if (home && !uniqueHomes.has(home)) {
            filteredTeams.push(obj);
            uniqueHomes.add(home);
        }
    });
    return filteredTeams;
};
</script>
