// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
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
  ],
  nitro: {
    prerender: {
      crawlLinks: true
    },
  },
  router: {
    options: {
      linkExactActiveClass: "green",
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
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/about": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/terms": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/contact": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/privacy": {
      sitemap: {
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/free-vip-sure-accurate/**": {
      sitemap: {
        changefreq: "daily",
        priority: 1,
        lastmod: "2023-07-14T12:27:57+00:00",
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
        lastmod: "2023-07-14T12:27:57+00:00",
      },
    },
    "/blog/free-big-odds-sure-win-today-football": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T08:19:57+00:00",
      },
    },
    "/blog/reliable-football-prediction-sites": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T04:39:57+00:00",
      },
    },
    "/blog/winning-prediction-site": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T10:48:55+00:00",
      },
    },
    "/blog/soccer-predictions-today-sure-wins": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-24T12:01:60+00:00",
      },
    },
    "/blog/sure-win-predictions-today": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-07-25T12:04:33+01:57",
      },
    },
    "/blog/safe-2-odds-daily": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-08T12:01:33+01:57",
      },
    },
    "/blog/sure-3-odds-daily-free": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-16T12:02:35+01:57",
      },
    },
    "/blog/3-odds-banker": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-16T10:01:35+01:57",
      },
    },
    "/blog/sure-4-odds": {
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2023-08-17T11:01:35+01:44",
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
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,ico,png,svg,jpng,webp,ttf,woff,woff2}'],
      navigateFallback: null
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
