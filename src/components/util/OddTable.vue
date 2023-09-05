<template>
    <div class="flex gap-2 px-2 place-items-center justify-between">
        <p class="sm:col-span-6">If it's not today's prediction</p> <button
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
            </tr>
        </thead>
        <tbody class="border-collapse whitespace-nowrap">
            <template v-for="team in filterObjectsWithUniqueMatches(games)" :key="team">
                <tr class="even:bg-gray-900 even:text-gray-100">
                    <td class="text-center py-4">{{ team.date }}</td>
                    <td class="text-center py-4 font-semibold uppercase">{{ team.league?.substring(0, 3)?.trim() }}</td>
                    <td class="text-center py-4">
                        <p>{{ team.home?.trim() }}</p>
                        <p class="my-1">VS</p>
                        <p>{{ team.away?.trim() }}</p>
                    </td>
                    <td class="text-center py-4">{{ matchChecker(team.home, team.away, team.tips) }}
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    <div v-show="games.length < 1">
        <div class="h-96 w-full grid place-content-center text-center">
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
</template>
<script lang="ts">
import LazyLoad from '../LazyLoad.vue';
import { ref, onMounted } from 'vue';
import { filterObjectsWithUniqueMatches } from '../../mixin/interface'
const msg = ref('Refresh');
export default {
    props: ['games', 'progress', 'refresh'],
    components: {
        LazyLoad
    },
    setup: ({ refresh }) => (
        onMounted(() => {
            refresh((dd: any) => {
                console.log('dd');
            });
        }),
        {
            filterObjectsWithUniqueMatches,
            msg,
            load: () => {
                refresh();
                msg.value = 'Refreshing...'
                setTimeout(() => {
                    msg.value = 'Refreshed!'
                }, 5000);
            },
            matchChecker: (home: string, away: string, tips: string) => {
                const homeMatch = tips?.match(home);
                const awayMatch = tips?.match(away);
                if (homeMatch && homeMatch[0] === home) {
                    return '1';
                }
                if (awayMatch && awayMatch[0] === away) {
                    return '2';
                }
            }
        })
}
</script>