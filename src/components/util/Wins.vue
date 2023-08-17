<template>
    <section class="max-w-screen-lg md:mx-3 sm:mx-auto my-9 overflow-x-hidden mx-2">
        <WinTable />
    </section>
    <section class="max-w-screen-lg md:mx-3 sm:mx-auto my-9 overflow-x-hidden mx-2">
        <Tipstore />
    </section>
</template>
<script setup lang="ts">
import Tipstore from '../util/Tipstore.vue';
import WinTable from '../util/WinTable.vue';
</script>