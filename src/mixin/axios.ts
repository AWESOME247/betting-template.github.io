import { setup } from "axios-cache-adapter";

const api = setup({
  baseURL:
    // "https://effervescent-manatee-1c0863.netlify.app/.netlify/functions/index/betting/",
    // "https://betting-tips-api.vercel.app/api/",
    "https://betting-tips-api-cld.omoye6996.workers.dev/",
  cache: {
    maxAge: 1000 * 60 * 60 * 5,
  },
});
export default api;
