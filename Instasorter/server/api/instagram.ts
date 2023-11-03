export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const username = body.username;
  //環境変数からアクセストークンとアカウントIDを取得
  const config = useRuntimeConfig()
  const baseUrl = config.privateRuntimeConfig.baseUrl
  const facebookAccountId = config.privateRuntimeConfig.accountId
  const facebookAccessToken = config.privateRuntimeConfig.accessToken

  const url = `${baseUrl}${facebookAccountId}?fields=business_discovery.username(${username}){followers_count,media_count,media.limit(50){caption,media_url,permalink,timestamp,username,children{media_url}}}&access_token=${facebookAccessToken};`

  try {
    //InstagramグラフAPIで問い合わせを
    const response = await $fetch(url);
    console.log(response);
    return response;
  
  } catch (error) {
    console.log("エラーです", error);
  }
})