export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      script: [
        { src: '/js/three.min.js' },
        { src: '/js/vanta.waves.min.js' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap',
          // href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;600&family=Montserrat:wght@300&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    }
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: false },
})