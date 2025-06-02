<script lang="ts" setup>
const jsonData = ref([])
const flattenedData = ref([])

onMounted(() => {
  fetch('https://api.geyne.ru/respondent-stats/?page=2')
    .then((response) => response.json())
    .then((data) => {
      jsonData.value = data.results
      flattenedData.value = data.results.flatMap((respondent: ApiRespondentStats) => {
        return respondent.respondent_results.map((result: ApiRespondentStatsResult) => ({
          respondentId: respondent.id,
          gender: respondent.gender,
          age: respondent.age,
          testName: result.test_name,
          readingTime: result.time,
          readingSpeed: result.reading_speed,
          correctPercentage: result.correct_percentage,
          readingSpeedWithCoef: result.reading_speed_with_coef
        }))
      })
    })
})
</script>

<template>
  <div>
    <h2>Статистика респондентов</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>ID респондента</th>
          <th>Пол</th>
          <th>Возраст</th>
          <th>Название теста</th>
          <th>Время чтения</th>
          <th>Скорость чтения</th>
          <th>% правильных ответов</th>
          <th>Скорость с коэф.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in flattenedData" :key="index">
          <template v-if="index % 2 === 0">
            <td rowspan="2">{{ row.respondentId }}</td>
            <td rowspan="2">{{ row.gender }}</td>
            <td rowspan="2">{{ row.age }}</td>
          </template>
          <td>{{ row.testName }}</td>
          <td>{{ row.readingTime }}</td>
          <td>{{ row.readingSpeed }}</td>
          <td>{{ row.correctPercentage }}%</td>
          <td>{{ row.readingSpeedWithCoef }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background-color: #f0f0f0;
}
td,
th {
  text-align: left;
}
</style>
