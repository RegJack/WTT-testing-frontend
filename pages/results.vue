<script lang="ts" setup>
const cookieTest = useCookie<CookieTest>('test')
console.log(cookieTest.value)
</script>

<template>
  <div>Результаты</div>
</template>

<style></style>
