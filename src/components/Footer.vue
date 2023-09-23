<template>
    <footer class="bg-gray-900">
        <div class="mx-auto w-full container p-4 sm:p-6 max-w-screen-xl">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <router-link to="/" class="flex items-center">
                        <!-- <img src="../assets/logo.png" class="h-20 mr-1 sm:h-20 object-cover" alt="Footer Logo" /> -->
                        <span
                            class="self-center text-3xl font-semibold whitespace-nowrap font-lobster text-white">Omoyetips™</span>
                    </router-link>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul class="text-gray-400">
                            <li class="mb-4">
                                <router-link to="/blog" class="hover:underline">Blog</router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                        <ul class="text-gray-400">
                            <li>
                                <a href="#" class="hover:underline ">Facebook</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Twiter</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibol uppercase text-white">Legal</h2>
                        <ul class="text-gray-400">
                            <li class="mb-4">
                                <router-link to="/privacy" class="hover:underlin">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/terms" class="hover:underline">Terms &amp; Conditions</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm sm:text-center text-gray-400">© {{ new Date().getFullYear() }} <router-link to="/"
                        class="hover:underline">Omoyetips™</router-link>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
</template>