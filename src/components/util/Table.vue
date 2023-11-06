<template>
    <div id="table-ad"></div>
    <ul
        class="flex flex-wrap sm:mx-0 text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400 border-b border-gray-900">
        <li><button :class="{ 'bg-gray-900 text-gray-100 shadow-md': active_1 }"
                @click="active_1 = true, active_2 = false, active_3 = false"
                class="inline-block px-4 py-3 rounded-t-lg">Yesterday</button></li>
        <li><button :class="{ 'bg-gray-900 text-gray-100 shadow-md': active_2 }"
                @click="active_1 = false, active_2 = true, active_3 = false"
                class="inline-block px-4 py-3 rounded-t-lg">Today</button></li>
        <li><button :class="{ 'bg-gray-900 text-gray-100 shadow-md': active_3 }"
                @click="active_1 = false, active_2 = false, active_3 = true"
                class="inline-block px-4 py-3 rounded-t-lg">Tomorrow</button></li>
    </ul>
    <div :class="{ 'hidden': !active_1 }" class="my-4 border border-gray-300">
        <div
            :class="{ 'hidden': $route.path === '/free-vip-sure-accurate/sure-10-odds-daily-free' || $route.path === '/free-vip-sure-accurate/free-5-odds-tips' }">
            <yesterdayTips :games="yesterday" :yrefresh="yrefresh" :progress="progress" :isLoading="isLoading" />
        </div>
        <div
            v-show="$route.path === '/free-vip-sure-accurate/sure-10-odds-daily-free' || $route.path === '/free-vip-sure-accurate/free-5-odds-tips'">
            <yesterdayOddTips :games="yesterday" :refresh="refresh" :progress="progress" :isLoading="isLoading" />
        </div>
    </div>
    <div :class="{ 'hidden': !active_2 }" class="my-4 border border-gray-300">
        <div
            :class="{ 'hidden': $route.path === '/free-vip-sure-accurate/sure-10-odds-daily-free' || $route.path === '/free-vip-sure-accurate/free-5-odds-tips' }">
            <todayTips :games="today" :refresh="refresh" :progress="progress" :isLoading="isLoading" />
        </div>
        <div
            v-show="$route.path === '/free-vip-sure-accurate/sure-10-odds-daily-free' || $route.path === '/free-vip-sure-accurate/free-5-odds-tips'">
            <todayOddTips :games="today" :refresh="refresh" :progress="progress" :isLoading="isLoading" />
        </div>
    </div>
    <div :class="{ 'hidden': !active_3 }" class="my-4">
        <div class="bg-orange-200">
            <h3 class="text-lg p-10 text-gray-700">We're currently working it.</h3>
        </div>
    </div>
</template>
<script lang="ts">
import todayTips from './today.vue'
import yesterdayOddTips from './OddTableYesterday.vue'
import todayOddTips from './OddTable.vue'
import yesterdayTips from './yesterday.vue'
export default {
    props: ['today', 'yesterday', 'progress', 'refresh', 'yrefresh', 'isLoading'],
    components: {
        todayTips, yesterdayTips, todayOddTips, yesterdayOddTips
    },
    setup() {
        const active_1 = ref(false);
        const active_2 = ref(true);
        const active_3 = ref(false);
        onBeforeMount(() => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.append(`
                    atOptions = {
                    'key' : '017706e64fca1fe77a550e2d1647ca31',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                `);
            script.append('<scr' + 'ipt type="text/javascript" src="//lascivioushelpfulstool.com/017706e64fca1fe77a550e2d1647ca31/invoke.js"></scr' + 'ipt>');
            document.getElementById("table-ad")?.appendChild(script);
        })
    return {
        active_1,
        active_2,
        active_3,
    }
}
}
</script>
