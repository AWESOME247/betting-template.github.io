<template>
  <div>
    <LoadSpinner v-if="spinner" />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from "vue"
import LoadSpinner from "../components/LoadSpinner.vue"
const spinner = ref(true);

onBeforeMount(() => {
  spinner.value = true;
  {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("defer", "true")
    script.src = "https://lascivioushelpfulstool.com/58/f4/f7/58f4f777eb5d2b59e7112034f9853a90.js"
    document.body.appendChild(script);
  }
  // {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = "https://lascivioushelpfulstool.com/dd/4a/d8/dd4ad8f8ed372a65f0271f5788b5528f.js"
  //     document.body.appendChild(script);
  // }
  {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("data-cfasync", "false")
    script.setAttribute("async", "async")
    script.setAttribute("async", "true")
    script.src = "https://lascivioushelpfulstool.com/58604ab3a34b2dc7d803f0dbda8d1d2d/invoke.js"
    document.body.appendChild(script);
  }
  {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("defer", "true")
    script.src = "https://lascivioushelpfulstool.com/66/d3/59/66d3596b0bf956bc4613af18d047dfeb.js"
    document.body.appendChild(script);
  }
  // {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = "https://lascivioushelpfulstool.com/05/be/ee/05beee8721267817a62e15a099fdc158.js"
  //     document.body.appendChild(script);
  // }
  {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("defer", "true")
    script.src = "https://lascivioushelpfulstool.com/05/be/ee/05beee8721267817a62e15a099fdc158.js"
    document.body.appendChild(script);
  }
});

onMounted(() => {
  spinner.value = false
});
import AppHeader from "../components/Navigation.vue";
import AppFooter from "../components/Footer.vue";
</script>
  