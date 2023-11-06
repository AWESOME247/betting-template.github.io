// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },

    // html: {
    //   minify: {
    //     ignoreCustomComments: [/^Bidvertiser2085950$/]
    //   }
    // }
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: [
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "@vite-pwa/nuxt",
    "nuxt-schema-org",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
  ],
  googleFonts: {
    families: {
      Lobster: true,
    },
    display: "swap",
    preload: true,
    useStylesheet: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    },
  },
  router: {
    options: {
      linkExactActiveClass: "green",
      strict: false,
    },
  },
  css: ["~/style.css"],
  postcss: {
    plugins: {
      tailwindcss: require("tailwindcss"),
      autoprefixer: require("autoprefixer"),
    },
  },
  srcDir: "src",
  sitemap: {
    inferStaticPagesAsRoutes: true,
    xsl: false,
    discoverImages: false,
    xslTips: false,
    credits: false,
    strictNuxtContentPaths: true,
    exclude: ["/404"],
    trailingSlash: false,
  },
  site: {
    url: "https://betting.omoyetips.com",
  },
  routeRules: {
    "/": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/about": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/terms": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/contact": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/privacy": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/free-vip-sure-accurate/**": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/free-vip-sure-accurate/4-odds": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-07-20T09:10:47+00:00",
      },
    },
    "/blog/**": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-14T12:27:21+00:00",
      },
    },
    "/blog/free-big-odds-sure-win-today-football": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T08:19:19+00:00",
      },
    },
    "/blog/reliable-football-prediction-sites": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T04:39:19+00:00",
      },
    },
    "/blog/winning-prediction-site": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T10:48:20+00:00",
      },
    },
    "/blog/soccer-predictions-today-sure-wins": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T12:01:33+00:00",
      },
    },
    "/blog/sure-win-predictions-today": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-25T12:04:33+01:00",
      },
    },
    "/blog/safe-2-odds-daily": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-08T12:01:33+01:00",
      },
    },
    "/blog/sure-3-odds-daily-free": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-16T12:02:35+01:00",
      },
    },
    "/blog/3-odds-banker": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-16T10:01:35+01:00",
      },
    },
    "/blog/sure-4-odds": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-17T11:01:35+01:00",
      },
    },
    "/blog/football-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-30T09:01:35+01:00",
      },
    },
    "/blog/free-1-5-odds-daily": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-31T09:01:35+01:00",
      },
    },
    "/blog/good-prediction-site": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-31T02:01:35+01:00",
      },
    },
    "/blog/r2bet-vs-omoyetips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-08T02:02:35+01:00",
      },
    },
    "/blog/betensured": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-09T11:06:35+01:00",
      },
    },
    "/blog/eaglepredict": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-09T05:16:35+01:00",
      },
    },
    "/blog/sure-tips-360": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-09T05:02:38+01:00",
      },
    },
    "/blog/sure-tips-777": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-23T05:02:38+01:00",
      },
    },
    "/blog/black-magic-soccer-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-23T05:03:38+01:00",
      },
    },
    "/blog/bet-master-tips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-23T05:04:38+01:00",
      },
    },
    "/blog/666-soccer-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-23T05:05:38+01:00",
      },
    },
    "/blog/kingprediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-09-23T05:06:38+01:00",
      },
    },
    "/blog/prediction-football-today": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-12T09:06:38+01:00",
      },
    },
    "/blog/soccer-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-13T08:06:38+01:00",
      },
    },
    "/blog/win-only-tips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-13T09:06:38+01:00",
      },
    },
    "/blog/sure-combo-tips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-15T09:06:38+01:00",
      },
    },
    "/blog/daily-98-winning-tips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-13T07:08:38+01:00",
      },
    },
    "/blog/254-sure-tips": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-14T07:08:38+01:00",
      },
    },
    "/blog/1800-tips-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-10-13T06:09:38+01:00",
      },
    },
    "/blog/soccer-picks-today": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-04T02:04:38+01:00",
      },
    },
    "/blog/expert-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-04T02:47:38+01:00",
      },
    },
    "/blog/today-soccer-prediction": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-05T01:47:38+01:00",
      },
    },
    "/blog/successful-soccer-predictions": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-06T01:08:38+01:00",
      },
    },
    "/blog/100-draw-predictions": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-06T01:55:38+01:00",
      },
    },
    "/blog/site-that-predict-football-matches-correctly": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-11-06T02:57:38+01:00",
      },
    },
    "/pool/fixtures": {
      sitemap: {
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2023-08-19T11:03:35+01:00",
      },
    },
    "/free-vip-sure-accurate/multi-goal-1-3-predictions-today": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-08-28T11:03:35+01:00",
      },
    },
    "/free-vip-sure-accurate/free-5-odds-tips": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-08-29T10:03:35+01:00",
      },
    },
    "/free-vip-sure-accurate/sure-10-odds-daily-free": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-08-29T11:03:35+01:00",
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  plugins: [{ src: "~/plugins/gtag.ts", mode: "client" }],
  schemaOrg: {
    meta: {
      host: "https://betting.omoyetips.com",
    },
  },
  pwa: {
    registerType: "autoUpdate",
    injectRegister: "auto",
    workbox: {
      globPatterns: ["**/*.{js,css,ico,png,svg,jpng,webp,ttf,woff,woff2}"],
      navigateFallback: null,
    },
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
    manifest: {
      name: "Omoye Football Betting Tips",
      short_name: "Omoyetips",
      description:
        "Get practical tips and insights on football betting, omoyetips offers tips like over 1.5 goals, over 2.5 goals, over 3.5 goals etc.",
      theme_color: "#ffffff",
      icons: [
        {
          src: "android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
});
