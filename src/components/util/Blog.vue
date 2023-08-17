<template>
    <main class="my-0" :class="{ 'hidden': $route.path.match('/blog') }">
    <h2 class="text-2xl text-center font-bold my-5">Latest Blog Posts</h2>
        <div class="max-w-screen-lg mx-auto">
            <div class="container mx-auto pb-5">
                <div class="grid grid-cols-12 sm:grid-cols-6 gap-4 place-content-center sm:my-9 mx-4 sm:mx-auto">
                    <template v-for="(post) in Posts">
                        <router-link :to="post.link" class="sm:col-span-2 col-span-12 m-auto bg-gray-50">
                            <div class="shadow-md h-96 rounded-md">
                                <div class="h-64">
                                    <LazyLoad :main-image="post.image" :className="post.class"
                                        :alt="post.title" />
                                </div>
                                <div class="mx-2">
                                    <h2 class="font-bold border-b font-mukha text-2xl py-2">{{ limitText(post.title, 20) }}</h2>
                                    <p class="text-gray-600 text-sm py-4">{{ limitText(post.desc, 125) }}</p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
                <div class="grid place-content-center my-3">
                    <router-link to="/blog" class="bg-green-700 hover:bg-green-500 text-white p-4 font-bold rounded-md">View More >></router-link>
                </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import posts from '../../mixin/posts';
import LazyLoad from '../../components/LazyLoad.vue';
import { ref } from 'vue';
const Posts = ref()
const blog = posts.reverse()
Posts.value = posts.slice(0, Math.min(6, blog.length));
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