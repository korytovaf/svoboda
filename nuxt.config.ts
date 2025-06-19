export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      script: [{ src: "/js/three.min.js" }, { src: "/js/vanta.waves.min.js" }],
      title: "SVOBODA",
      link: [
        {
          href: "/fonts/Montserrat-Bold.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Montserrat-Regular.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Cousine-Bold.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Cousine-Regular.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Roboto-Regular.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Roboto-SemiBold.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          href: "/fonts/Anton-Regular.woff2",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  ssr: true,
  devtools: { enabled: false },
});
