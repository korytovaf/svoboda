export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ["@nuxtjs/tailwindcss"],
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
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
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
  }
})