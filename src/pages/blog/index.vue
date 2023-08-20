<template>
    <main class="dark:bg-gray-200 mt-3 sm:my-0">
        <div class="max-w-screen-lg md:mx-3 lg:mx-auto mx-auto">
            <div class="container mx-auto pb-5">
                <div class="grid grid-cols-12 sm:grid-cols-6 gap-4 place-content-center sm:my-9 mx-4 sm:mx-auto">
                    <template v-for="(post) in posts">
                        <router-link :to="post.link" class="sm:col-span-2 col-span-12 m-auto bg-gray-50">
                            <div class="shadow-md h-96 rounded-md">
                                <div class="h-64">
                                    <LazyLoad :main-image="post.image" :className="post.class"
                                        :alt="post.title" />
                                </div>
                                <div class="mx-2">
                                    <h2 class="font-bold border-b font-mukha text-2xl py-2">{{ limitText(post.title, 23) }}</h2>
                                    <p class="text-gray-600 text-sm py-4">{{ limitText(post.desc, 125) }}</p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import posts from '../../mixin/posts';
import LazyLoad from '../../components/LazyLoad.vue';
import { useRoute } from 'vue-router';
const siteData = {
    title: 'Omoyetips betting blog',
    discription: 'Get practical tips and insights on sports betting, winning, and building wealth with Omoyetips.',
    keywords: "omoyetips,omoyetips,finance,omoyetips blog,sports beeting,bettingtips,financialfreedom,personalfinance,omoyetipsbetting"
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
    link: [{
        rel: "canonical", href: 'https://betting.omoyetips.com' + useRoute().path.replace(/\/$/, "")
    }]
})

function limitText(text: string, limit: number) {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  } else {
    return text;
  }
}
</script>
<style scoped>
@media screen and (max-width: 740px) {
    .post-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 23ch;
    }
}
</style>