import { createApp } from 'vue';
import VueGtag from 'vue-gtag';

export default defineNuxtPlugin(function (context: any) {
  const app = createApp(context.app);
  app.use(VueGtag, {
    config: { id: 'G-26XXRF43VN' } // Replace with your Google Analytics Tracking ID
  });
  app.mount('#app');
})
