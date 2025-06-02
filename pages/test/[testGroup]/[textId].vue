<script lang="ts" setup>
const route = useRoute()
const cookieTest = useCookie<CookieTest>('test')

const textId = ref(route.params.textId || 1)

const answers = ref<{ [key: string]: number }>({})

const { data: text, status } = await useFetch<ApiText>(
  () => `https://api.geyne.ru/texts/${textId.value}/`
)

const questions = computed(() => text.value?.questions)

function processAnswers() {
  const answersArray: RespondentAnswer[] = []

  for (const questionId of Object.keys(answers.value)) {
    answersArray.push({ question: parseInt(questionId), answer: answers.value[questionId] })
  }

  if (cookieTest.value.respondent_results.length === 1) {
    cookieTest.value.respondent_results[0].respondent_answers = answersArray
  } else if (cookieTest.value.respondent_results.length === 2) {
    cookieTest.value.respondent_results[1].respondent_answers = answersArray
  }

  navigateTo(
    cookieTest.value.respondent_results.length === 2
      ? '/results'
      : { name: 'text-testGroup', params: { testGroup: cookieTest.value.test_group } }
  )
}
</script>

<template>
  <main class="main">
    <form action="#" class="form" @submit.prevent="processAnswers">
      <section v-if="status === 'success'" class="section test">
        <Question
          v-for="question in questions"
          :key="question.id"
          v-model:answer="answers[question.id]"
          :question="question"
        />
      </section>
      <button class="link-button">
        {{
          cookieTest.respondent_results.length === 2
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
