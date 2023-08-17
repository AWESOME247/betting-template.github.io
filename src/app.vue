<template>
  <VitePwaManifest />
  <NuxtLayout>
    <Nav />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>
<script setup>
import Nav from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
</script>