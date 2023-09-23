<template>
    <header>

        <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto max-w-screen-lg">
                <router-link to="/" class="flex items-center">
                    <!-- <img src="../assets/logo.png" class="h-20 mr-1 sm:h-20 object-cover" alt="Logo" /> -->
                    <span
                        class="self-center text-3xl font-semibold whitespace-nowrap font-lobster text-white">Omoyetips™</span>
                </router-link>
                <div class="flex md:order-2">
                    <button @click="toggler()" type="button" aria-controls="navbar-search" aria-expanded="false"
                        class="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                    <div class="relative hidden sm:block">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                            <span class="sr-only">Search icon</span>
                        </div>
                    </div>
                    <button @click="toggler()" type="button"
                        class="inline-flex items-center p-2 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between w-full visible sm:hidden lg:hidden md:w-auto md:order-1"
                    v-show="toggle">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                    </div>
                    <ul
                        class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-600 border-gray-700">
                        <li>
                            <router-link to="/" :class="{ 'text-gray-50 font-bold bg-gray-800': $route.path === '/' }"
                                class="block py-2 pl-3 pr-4 bg-brown-800 rounded md:bg-transparent md:p-0 text-gray-100 md:hover:bg-transparent border-gray-700"
                                aria-current="page">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/blog" :class="{ 'text-gray-50 font-bold bg-gray-800': $route.path === '/blog' }"
                                class="block py-2 pl-3 pr-4 bg-brown-800 rounded md:bg-transparent md:p-0 text-gray-100 md:hover:bg-transparent border-gray-700"
                                aria-current="page">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/about"
                                :class="{ 'text-gray-50 font-bold bg-gray-800': $route.path === '/about' }"
                                class="block py-2 pl-3 pr-4 text-gray-100 rounded md:hover:bg-transparent md:p-0 border-gray-700">About</router-link>
                        </li>
                        <li>
                            <router-link to="/contact"
                                :class="{ 'text-gray-50 font-bold bg-gray-800': $route.path === '/contact' }"
                                class="block py-2 pl-3 pr-4 text-gray-100 rounded md:hover:bg-transparent md:p-0 border-gray-700">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div class="items-center justify-between w-full md:flex md:w-auto hidden sm:visible md:order-1">
                    <ul
                        class="flex flex-col p-4 mt-4 border rounded-lg bg-gray-600 text-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <router-link to="/" :class="{ 'text-gray-50 font-bold border-b-2 border-gray-50': $route.path === '/' }"
                                class="block py-2 pl-3 pr-4 bg-brown-800 rounded md:bg-transparent md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                                aria-current="page">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/blog" :class="{ 'text-gray-50 font-bold bg-gray-800 border-b-2 border-gray-50': $route.path === '/blog' }"
                                class="block py-2 pl-3 pr-4 bg-brown-800 rounded md:bg-transparent md:p-0 text-gray-100 md:hover:bg-transparent border-gray-700"
                                aria-current="page">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/about"
                                :class="{ 'text-gray-50 font-bold border-b-2 border-gray-50': $route.path === '/about' }"
                                class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</router-link>
                        </li>
                        <li>
                            <router-link to="/contact"
                                :class="{ 'text-gray-50 font-bold border-b-2 border-gray-50': $route.path === '/contact' }"
                                class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>
<script setup lang="ts">
const hideSearchItems = ref(false);

onBeforeMount(() => {
    window.onscroll = () => {
        hideSearchItems.value = true
    }
})


const toggle = ref(false);

const toggler = () => {
    toggle.value = !toggle.value
    console.log(toggle.value);
}
</script>
<style scoped>
.post-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 18ch;
}

@media screen and (max-width: 740px) {
    .post-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 33ch;
    }
}
</style>