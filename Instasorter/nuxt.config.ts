// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig : {
    privateRuntimeConfig: {
      baseUrl: process.env.BASE_URL,
      //環境変数を登録
      accountId: process.env.FACEBOOK_ACCOUNT_ID,
      accessToken: process.env.FACEBOOK_ACCESS_TOKEN  
    }
  }
})
