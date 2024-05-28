// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      api: process.env.API || '',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  experimental: {
    viewTransition: true,
  },
  tailwindcss: {
    config: {
      corePlugins: {
        fontSize: false,
      },
      plugins: [require('tailwindcss-fluid-type')],
    },
  },
})
