<template>
    <section class="max-w-screen-lg lg:mx-auto sm:mx-auto md:mx-3 my-9 overflow-x-hidden mx-2">
        <h2 class="text-3xl my-3 mt-9 font-bold text-gray-600 text-center">More Blog Posts</h2>
        <div class="max-w-screen-lg mx-auto">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 sm:gap-4 place-content-center sm:my-9 sm:mx-auto">
                    <template v-for="(post) in posts">
                        <router-link :to="post.link" class="bg-gray-50 my-4 sm:my-0 rounded-md">
                            <div class="shadow-md flex h-24 w-full items-center px-2 justify-center">
                                <div class="h-16 w-20">
                                    <LazyLoad :main-image="post.image" :className="post.class" :alt="post.title" />
                                </div>
                                <div class="ml-3">
                                    <h2 class="font-bold border-b text-sm pb-2 font-mukha">{{ limitText(post.title, 19) }}</h2>
                                    <p class="text-gray-600 text-sm pt-2">{{ limitText(post.desc, 35) }}</p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import posts from '../../mixin/posts';
import LazyLoad from '../../components/LazyLoad.vue';
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