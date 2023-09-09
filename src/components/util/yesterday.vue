<template>
    <div class="flex gap-2 px-2 place-items-center justify-between">
        <p class="sm:col-span-6">If it's not yesterday's prediction</p> <button
            class="bg-green-400 w-fit p-2 rounded-md my-3 outline outline-green-200 hover:bg-green-600 inline-flex items-center gap-1 justify-center"
            @click="load()">{{ msg }} <img :class="{ 'hidden': msg === 'Refreshed!' }" src="/refresh-reload-svgrepo-com.svg"
                height="17" width="17" alt="Click to refresh tips for latest predictions"></button>
    </div>
    <table class="w-full border-collapse m-auto">
        <thead class="border-collapse whitespace-nowrap">
            <tr class="bg-gray-900 text-gray-100">
                <th class="text-center py-2" scope="col">Date</th>
                <th class="text-center py-2" scope="col">Lig</th>
                <th class="text-center py-2" scope="col">Teams</th>
                <th class="text-center py-2" scope="col">Tips</th>
                <th class="text-center py-2" scope="col">Rsl</th>
                <th :class="{ 'hidden': $route.path !== '/free-vip-sure-accurate/sure-wins-only' }" class="text-center py-2"
                    scope="col">Odds</th>
            </tr>
        </thead>
        <tbody class="border-collapse whitespace-nowrap">
            <template v-for="team in games.slice(0, 10)" :key="team">
                <tr v-show="$route.path === '/free-vip-sure-accurate/2-5-multi-goals-prediction' ? multiGoals(team.tips?.split('(')[1].replace(')', '')) : true"
                    :class="{ 'hidden': team.tips?.match('Draw')?.[0] }" class="even:bg-gray-900 even:text-gray-100">
                    <td class="text-center py-4">{{ team.date }}</td>
                    <td class="text-center py-4 font-semibold uppercase">{{ team.league?.substring(0, 3)?.trim() }}</td>
                    <td class="text-center py-4">
                        <p>{{ removeVS(team.home).strHome?.trim() }}</p>
                        <p class="my-1">VS</p>
                        <p>{{ team.away?.trim() || removeVS(team.home).strAway?.trim() }}</p>
                    </td>
                    <td :class="{ 'hidden': $route.path === '/free-vip-sure-accurate/2-5-multi-goals-prediction' }"
                        class="text-center py-4">{{ $route.path === '/free-vip-sure-accurate/king-of-correct-score' ?
                            correctScore(team.home, team.tips?.split('(')[1].replace(')', ''), team.tips) :
                            matchChecker(team.home, team.away, $route.path ===
                                '/free-vip-sure-accurate/sure-wins-only' ? team.tips :
                                team.tips?.replace(/(Over)|(OV)|(Ov)|(OVER)\s*/g,
                                    '+').replace(/(ER)|(er)/g, '').replace(/(Home)|(HOME)\s*/g, '1').replace(/(Away)|(AWAY)\s*/g,
                                        '2').replace(/(Score)|(SCORE)\s*/g, '+0.5').replace(/(Under)|(UND)|(und)|(UN)|(Un)|(UNDER)\s*/g,
                                            '-').replace(/(45)\s*/g, '4.5').trim().replace(/(15)\s*/g, '1.5').replace(/(35)\s*/g,
                                                '3.5').replace(/(25)\s*/g, '2.5').replace('-d', '-').trim().trim().trim()) }}</td>
                    <td class="text-center py-4">{{ $route.path === '/free-vip-sure-accurate/sure-wins-only' ? ':' :
                        team.score?.trim() }}</td>
                    <td :class="{ 'hidden': $route.path !== '/free-vip-sure-accurate/2-5-multi-goals-prediction' }"
                        class="text-center py-4">{{ $route.path === '/free-vip-sure-accurate/2-5-multi-goals-prediction' ?
                            multiGoals(team.tips?.split('(')[1].replace(')', '')) : '' }}
                    </td>
                    <td :class="{ 'hidden': $route.path !== '/free-vip-sure-accurate/sure-wins-only' }"
                        class="text-center py-4 font-bold">({{ $route.path === '/free-vip-sure-accurate/sure-wins-only' ?
                            team.tips?.split('(')[1].replace(')', '') : '' }})</td>
                </tr>
            </template>
        </tbody>
    </table>
    <div v-show="games.length < 1">
        <div class="h-96 w-full grid place-content-center">
            <div class="h-20 w-20 rounded-full animate-bounce timing-ease-in-out-quint animation-delay-200 animation-duration-200">
                <LazyLoad className="bg-cover w-full h-full" :mainImage='"/soccerball.webp"' alt="loading" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import LazyLoad from '../LazyLoad.vue';
import { ref } from 'vue';
const msg = ref('Refresh');
import { filterObjectsWithUniqueMatches } from '../../mixin/interface'
export default {
    props: ['games', 'progress', 'yrefresh'],
    components: {
        LazyLoad
    },
    setup({ yrefresh }) {
        // watchEffect(() => {
        //     yrefresh();
        // });
        const removeVS = (txt: String) => {
            const str = txt?.split('VS')
            return {
                strHome: str[0],
                strAway: str[1]
            }
        }
        return {
            filterObjectsWithUniqueMatches,
            msg,
            load: () => {
                const links = [
                    'https://lascivioushelpfulstool.com/q4bfjugt?key=4de36af74e7341b4a844933f5c6ae0a9',
                    'https://lascivioushelpfulstool.com/z8a9tw6ty?key=f63f605bc96a4f2868c19af1e9e3e9c7',
                ]
                window.open(links[Math.floor(Math.random() * links.length)], '_blank');
                clearNuxtData(yrefresh)
                msg.value = 'Refreshing...'
                setTimeout(() => {
                    msg.value = 'Refreshed!'
                }, 5000);
            },
            removeVS,
            matchChecker: (home: string, away: string, tips: string) => {
                if (tips?.match(home)?.[0] === home) return '1';
                if (tips?.match(away)?.[0] === away) return '2';
                else return tips;
            },
            correctScore: (home: string, odds: string, tips: string) => {
                if (odds) {
                    const odd = parseFloat(odds);
                    if (odd <= 1.15) return tips?.match(home)?.[0] === home ? '5-1' : '1-5'
                    if (odd >= 1.15 && odd < 1.25) return tips?.match(home)?.[0] === home ? '4-1' : '1-4'
                    if (odd >= 1.25 && odd < 1.40) return tips?.match(home)?.[0] === home ? '3-1' : '1-3'
                    if (odd >= 1.40 && odd < 1.55) return tips?.match(home)?.[0] === home ? '3-2' : '2-3'
                    if (odd >= 1.55 && odd < 1.70) return tips?.match(home)?.[0] === home ? '2-1' : '2-2'
                    if (odd >= 1.70 && odd < 1.85) return tips?.match(home)?.[0] === home ? '1-0' : '1-2'
                    if (odd >= 1.85 && odd < 2.00) return tips?.match(home)?.[0] === home ? '0-0' : '1-1'
                    else return '';
                }
            },
            multiGoals: (odds: string) => {
                if (odds) {
                    const odd = parseFloat(odds);
                    if (odd >= 1.40 && odd < 1.55) return '2-5 Gls'
                    if (odd >= 1.55 && odd < 1.70) return '2-5 Gls'
                    if (odd >= 1.70 && odd < 1.85) return '2-5 Gls'
                    else return '';
                }
            }
        }
    }
}
</script>