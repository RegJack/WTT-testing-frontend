<script lang="ts" setup>
import TestTwoImages from '~/components/test/TestTwoImages.vue'
import TestZeroImages from '~/components/test/TestZeroImages.vue'

const route = useRoute()
const cookieTest = useCookie<CookieTest>('test')

const currentTest = shallowRef()
const currentTestRef = useTemplateRef('currentTestRef')

switch (route.params.name as TestName) {
  case 'zero-or-two-images':
    if (route.query.test) {
      if (route.query.test === 'first') {
        currentTest.value = TestZeroImages
      } else if (route.query.test === 'second') {
        currentTest.value = TestTwoImages
      }
    } else {
      if (!cookieTest.value.firstTestResult.completed) {
        currentTest.value = TestZeroImages
      } else if (!cookieTest.value.secondTestResult.completed) {
        currentTest.value = TestTwoImages
      }
    }
    break
}

function processAnswers() {
  const answers = (currentTestRef.value as { answers: { [key: string]: string } }).answers
  const answersArray: Answer[] = []

  for (const questionId in answers) {
    answersArray.push({ questionId: questionId, answerId: answers[questionId] })
  }

  if (!cookieTest.value.firstTestResult.completed) {
    cookieTest.value.firstTestResult.answers = answersArray
    cookieTest.value.firstTestResult.completed = true
  } else if (!cookieTest.value.secondTestResult.completed) {
    cookieTest.value.secondTestResult.answers = answersArray
    cookieTest.value.secondTestResult.completed = true
  }

  navigateTo(
    cookieTest.value.secondTestResult.completed
      ? '/results'
      : { name: 'text-name', params: { name: cookieTest.value.test } }
  )
}
</script>

<template>
  <main class="main">
    <form action="#" class="form" @submit.prevent="processAnswers">
      <component :is="currentTest" ref="currentTestRef" />
      <button class="link-button">
        {{
          cookieTest.firstTestResult.completed
            ? 'Перейти к результатам'
            : 'Перейти ко второму тексту'
        }}
      </button>
    </form>
  </main>
</template>

<style scoped lang="scss">
.form {
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
