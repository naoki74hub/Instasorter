export default defineEventHandler(async (event) => {
  const query =  getQuery(event);
  const username = query.username;
  const after = query.after;
  //環境変数からアクセストークンとアカウントIDを取得
  const config = useRuntimeConfig()
  const baseUrl = config.privateRuntimeConfig.baseUrl
  const facebookAccountId = config.privateRuntimeConfig.accountId
  const facebookAccessToken = config.privateRuntimeConfig.accessToken;

  const url = `${baseUrl}${facebookAccountId}?fields=business_discovery.username(${username}){followers_count,media_count,media.limit(100)${after ? `.after(${after})` : ''}{caption,media_type,media_url,permalink,timestamp,username,like_count,children{media_url}}}&access_token=${facebookAccessToken};`
  try {
    //InstagramグラフAPIに問い合わせを行う
    const response = await $fetch(url);
    return response;
  } catch (error) {
    console.log("エラーです", error);
  }
})