<script lang="ts" setup>
import TextTwoImages from '~/components/text/TextTwoImages.vue'
import TextZeroImages from '~/components/text/TextZeroImages.vue'

const route = useRoute()
const cookieTest = useCookie<CookieTest>('test')

const currentText = shallowRef()

const timerStart = performance.now()

switch (route.params.name as TestName) {
  case 'zero-or-two-images':
    if (route.query.test) {
      if (route.query.test === 'first') {
        currentText.value = TextZeroImages
      } else if (route.query.test === 'second') {
        currentText.value = TextTwoImages
      }
    } else {
      if (!cookieTest.value.firstTestResult.completed) {
        currentText.value = TextZeroImages
      } else if (!cookieTest.value.secondTestResult.completed) {
        currentText.value = TextTwoImages
      }
    }
    break
}

function stopTimer() {
  const timerEnd = performance.now()

  if (!cookieTest.value.firstTestResult.completed) {
    cookieTest.value.firstTestResult.time = timerEnd - timerStart
  } else if (!cookieTest.value.secondTestResult.completed) {
    cookieTest.value.secondTestResult.time = timerEnd - timerStart
  }
}
</script>

<template>
  <main class="main">
    <component :is="currentText" />
    <NuxtLink
      :to="{ name: 'test-name', params: { name: cookieTest.test } }"
      class="link-button"
      @click.prevent="stopTimer"
    >
      Перейти к вопросам
    </NuxtLink>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 16px;
}

.link-button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 15px;
}
</style>
