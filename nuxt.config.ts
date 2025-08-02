export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // 不使用开发工具
  devtools: { enabled: false },

  // 导入第三方模块
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    cssPath: ['@/tailwind.scss', { injectPosition: "first" }],
    configPath: '@/tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  
  css:['@/main.scss'],
})
