<script lang="ts" setup>
import TextThreeImages03 from '~/components/text/TextThreeImages03.vue'
import TextTwoImages from '~/components/text/TextTwoImages.vue'
import TextZeroImages from '~/components/text/TextZeroImages.vue'
import TextZeroImages03 from '~/components/text/TextZeroImages03.vue'

const route = useRoute()
const cookieTest = useCookie<CookieTest>('test')

const currentText = shallowRef()

const timerStart = performance.now()

const textId = ref(1)

switch (route.params.testGroup) {
  case '1':
    if (
      route.query.test === 'first' ||
      (!route.query.test && cookieTest.value.respondent_results.length === 0)
    ) {
      currentText.value = TextZeroImages
      textId.value = 1
    } else if (route.query.test === 'second' || cookieTest.value.respondent_results.length === 1) {
      currentText.value = TextTwoImages
      textId.value = 2
    }
    break

  case '2':
    if (
      route.query.test === 'first' ||
      (!route.query.test && cookieTest.value.respondent_results.length === 0)
    ) {
      currentText.value = TextZeroImages03
      textId.value = 3
    } else if (route.query.test === 'second' || cookieTest.value.respondent_results.length === 1) {
      currentText.value = TextThreeImages03
      textId.value = 4
    }
    break
}

function stopTimer() {
  const timerEnd = performance.now()

  if (cookieTest.value.respondent_results.length === 0) {
    cookieTest.value.respondent_results.push({ test: 1, time: timerEnd - timerStart })
  } else if (cookieTest.value.respondent_results.length === 1) {
    cookieTest.value.respondent_results.push({ test: 2, time: timerEnd - timerStart })
  }
}
</script>

<template>
  <main class="main">
    <component :is="currentText" />
    <NuxtLink
      :to="{
        name: 'test-testGroup-textId',
        params: { testGroup: cookieTest.test_group, textId: textId }
      }"
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
