<script lang="ts" setup>
interface RespondentStats {
  id: number
  gender: string
  age: number
  user_agent: string
  respondent_results: RespondentStatsResult[]
}

interface RespondentStatsResult {
  id: number
  test_id: number
  test_name: string
  text_length: number
  time: number
  reading_speed: number
  correct_answers: number
  total_answers: number
  correct_percentage: number
  reading_speed_with_coef: number
}

interface Respondent {
  id: number
  gender: string
  age: number
  user_agent: string
  test_group: number
  respondent_results: RespondentResult[]
}

interface RespondentResult {
  id: number
  test: number
  time: number
  respondent_answers: RespondentAnswer[]
}

interface RespondentAnswer {
  id: number
  question: number
  answer: number
}

const cookieTest = useCookie<CookieTest>('test')

cookieTest.value.created_at = new Date()

const { data: postData, status: postStatus } = await useFetch<Respondent>(
  'https://api.geyne.ru/respondents/',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cookieTest.value)
  }
)

const resultsId = computed(() => postData.value?.id)

const {
  data: resultsData,
  status: resultsStatus,
  execute: getResults
} = await useFetch<RespondentStats>(
  () => `https://api.geyne.ru/respondent-stats/${resultsId.value}/`,
  {
    watch: false,
    immediate: false
  }
)

if (resultsId.value) {
  await getResults()
}

const results = computed(() => resultsData.value)
</script>

<template>
  <div>
    <div v-if="postStatus === 'success' && resultsStatus === 'success' && results" class="results">
      <h1 class="heading">Благодарю за прохождение тестирования!</h1>
      <div v-for="result in results.respondent_results" :key="result.id">
        <p class="sub-heading">{{ result.test_name }}</p>
        <p class="text">Время прочтения: {{ (result.time / 1000).toFixed(2) }} секунд</p>
        <p class="text">Скорость чтения: {{ result.reading_speed.toFixed(0) }} слов в минуту</p>
        <p class="text">Процент правильных ответов: {{ result.correct_percentage }}%</p>
        <p class="text">
          Скорость чтения с учётом понимания:
          {{ ((result.reading_speed * result.correct_percentage) / 100).toFixed(0) }} слов в минуту
        </p>
      </div>
      <NuxtLink to="/" class="link"> На главную </NuxtLink>
    </div>
    <h1 v-else-if="postStatus === 'error' || resultsStatus === 'error'" class="heading">
      Произошла ошибка(
    </h1>
  </div>
</template>

<style scoped lang="scss">
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  max-width: 495px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 16px auto;
}

.sub-heading {
  max-width: 495px;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  margin: 16px auto;
}

.text {
  max-width: 495px;
  font-size: 15px;
  text-align: left;
  margin: 16px auto;
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
