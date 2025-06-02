<script lang="ts" setup></script>

<template>
  <div class="container">
    <NuxtLink :to="{ name: 'testGroup', params: { testGroup: 1 } }" class="link"
      >Тестирование восприятия компонента без изображений и с двумя изображениями</NuxtLink
    >
    <NuxtLink :to="{ name: 'testGroup', params: { testGroup: 2 } }" class="link"
      >Тестирование восприятия компонента без изображений и с тремя изображениями</NuxtLink
    >
  </div>
</template>

<style scoped>
.container {
  max-width: 495px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px auto;
}

.link {
  color: black;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  padding: 7.5px 15px;
  border: 1px solid black;
  border-radius: 7.5px;
  line-height: 160%;
}
</style>
