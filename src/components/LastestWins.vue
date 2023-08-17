<template>
    <div class="grid grid-cols-12 gap-2">
        <div class="col-span-12 sm:col-span-6 mb-9">
            <UpcommingTable />
        </div>
        <div class="col-span-12 sm:col-span-6 my-3">
            <WinTable />
        </div>
    </div>
</template>
<script lang="ts" setup>
import WinTable from './util/WinTable.vue';
import UpcommingTable from './util/UpcommingTable.vue';
</script>