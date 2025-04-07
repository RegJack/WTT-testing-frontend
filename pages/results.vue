<script lang="ts" setup>
const config = useRuntimeConfig()
const cookieTest = useCookie<CookieTest>('test')

const { status: postStatus } = await useFetch('https://api.jsonbin.io/v3/b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Key': config.public.jsonBinApiKey
  },
  body: JSON.stringify(cookieTest.value)
})
</script>

<template>
  <div>
    <h1 v-if="postStatus === 'success'" class="heading">Благодарю за прохождение тестирования!</h1>
    <h1 v-else-if="postStatus === 'error'" class="heading">Произошла ошибка(</h1>
  </div>
</template>

<style scoped lang="scss">
.heading {
  max-width: 495px;
  font-size: 45px;
  text-align: center;
  margin: 16px auto;
}
</style>
