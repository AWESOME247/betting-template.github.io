<template>
    <div class="container mx-auto p-4 max-w-screen-lg md:mx-3 lg:mx-auto text-xl font-mukha text-gray-600 block" style="max-width: 500px;">
        <div
            class=" bg-white border border-gray-200 p-4 rounded-lg shadow hover:bg-gray-100">
            <h1 class="text-4xl my-6 text-gray-800">Contact Omoyetips</h1>
            <h2 class="my-3 leading-loose">
                Email: admin@omoyetips.com
            </h2>
            <div class="my-3 leading-loose">
                <h2 class="my-2 px-2">
                    Send A Message
                </h2>
                <form method="get" :action="`mailto:${email}?subject=${sub}?body=${msg}`"
                    class="grid gap-6 mb-6 md:grid-cols-1">

                    <div>
                        <label for="full-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            name</label>
                        <input type="text" id="full-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your Full Name" required>
                    </div>
                    <div>
                        <label for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Subject" required>
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            message</label>
                        <textarea id="message" rows="4" v-model="msg"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-green-500 text-gray-800 font-bold rounded-md p-2">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';

const siteData = reactive({
    title: 'Contanct Omyetips',
    discription: 'Get practical tips and insights on managing personal finances, investing, and building wealth with Omoyetips. Our personal finance blog is owned and managed by a web developer who is passionate about financial literacy. Join our community and take control of your financial future today.',
    keywords: "omoyetips, conctact, about"
});

const email = ref('admin@omoyetips.com');
const sub = ref('');
const msg = ref('');
useHead({
    title: computed(() => siteData.title),
    meta: [
        {
            name: 'description',
            content: computed(() => siteData.discription)
        },
        {
            name: 'keywords',
            content: computed(() => siteData.keywords)
        }
    ],
    link: [{
        rel: "canonical", href: 'https://finance.omoyetips.com' + useRoute().path.replace(/\/$/, "")
    }]
})
</script>
<script lang="ts">
export default {
    name: "Contact"
}
</script>