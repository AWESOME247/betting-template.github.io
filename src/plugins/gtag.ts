import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.deferHydration();
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: 'G-26XXRF43VN' }
  })
})
