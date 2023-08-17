<template>
    <section class="max-w-screen-lg sm:mx-3 md:mx-auto lg:mx-auto my-9 overflow-x-hidden mx-2">
        <WinTable />
    </section>
    <section class="max-w-screen-lg sm:mx-3 md:mx-auto lg:mx-auto my-9 overflow-x-hidden mx-2">
        <Tipstore />
    </section>
</template>
<script setup lang="ts">
import Tipstore from '../../components/util/Tipstore.vue';
import WinTable from '../../components/util/WinTable.vue';
</script>