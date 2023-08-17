<template>
    <div class="left-0 fixed mt-20 z-50" v-show="showMedias">
        <div class="bg-blue-900">
            <a :href="facebookShareUrl" :url="message.url" target="_blank" :title="message.title" :description="message.description" :quote="message.quote"
                :hashtags="message.hashTags">
                <div class="h-10 w-10 p-1">
                    <img src="/assets/icons8-facebook.svg" alt="facebook" class="h-full w-full" />
                </div>
            </a>
        </div>
        <div class="bg-blue-600">
            <a :href="twitterShareUrl" :url="message.url" target="_blank" :title="message.title" :description="message.description" :quote="message.quote"
                :hashtags="message.hashTags">
                <div class="h-10 w-10 p-1">
                    <img src="/assets/icons8-twitter.svg" alt="facebook" class="h-full w-full" />
                </div>
            </a>
        </div>
        <div class="bg-orange-600">
            <a :href="redditShareUrl" :url="message.url" target="_blank" :title="message.title" :description="message.description" :quote="message.quote"
                :hashtags="message.hashTags">
                <div class="h-10 w-10 p-1">
                    <img src="/assets/icons8-reddit.svg" alt="facebook" class="h-full w-full" />
                </div>
            </a>
        </div>
        <div class="bg-red-600">
            <a :href="quoraShareUrl" :url="message.url" target="_blank" :title="message.title" :description="message.description" :quote="message.quote"
                :hashtags="message.hashTags">
                <div class="h-10 w-10 p-1">
                    <img src="/assets/icons8-quora.svg" alt="facebook" class="h-full w-full" />
                </div>
            </a>
        </div>
    </div>
    <div class="left-0 fixed bottom-0 mb-3 mx-3 z-50">
        <button @click="toggle" class="rounded-full bg-lime-400 p-2" :class="{ 'border-7 border-sky-200': !showMedias }">
            <div class="h-10 w-10 p-1">
                <img class="h-full w-full" src="/assets/send-svgrepo-com.svg" alt="facebook" />
            </div>
        </button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';

export default {
    props: ['message'],
    name: "social",
    setup() {
        const showMedias = ref(true);
        const toggle = () => {
            showMedias.value = !showMedias.value
        }
        return { showMedias, toggle }
    },
    computed: {
        twitterShareUrl() {
            const twitterUrl = 'https://twitter.com/intent/tweet';
            const text = encodeURIComponent(this.message.title);
            const url = encodeURIComponent(this.message.url);
            const hashtags = encodeURIComponent(this.message.hashTags);
            const shareUrl = `${twitterUrl}?text=${text}&url=${url}&hashtags=${hashtags}`;
            return shareUrl;
        },
        facebookShareUrl() {
            const facebookUrl = 'https://www.facebook.com/sharer.php';
            const url = encodeURIComponent(this.message.url);
            const quote = encodeURIComponent(this.message.quote);
            const shareUrl = `${facebookUrl}?u=${url}&quote=${quote}`;
            return shareUrl;
        },
        redditShareUrl() {
            const redditUrl = 'https://www.reddit.com/submit';
            const title = encodeURIComponent(this.message.title);
            const url = encodeURIComponent(this.message.url);
            const shareUrl = `${redditUrl}?title=${title}&url=${url}`;
            return shareUrl;
        },
        quoraShareUrl() {
            const quoraUrl = 'https://www.quora.com/share';
            const title = encodeURIComponent(this.message.title);
            const url = encodeURIComponent(this.message.url);
            const shareUrl = `${quoraUrl}?title=${title}&url=${url}`;
            return shareUrl;
        },
        instagramShareUrl() {
            const instagramUrl = 'https://www.instagram.com/share';
            const url = encodeURIComponent(this.message.url);
            const shareUrl = `${instagramUrl}?url=${url}`;
            return shareUrl;
        }
    }
};
</script>
