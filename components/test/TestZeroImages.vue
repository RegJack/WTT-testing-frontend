<script lang="ts" setup>
const questions = computed<Question[]>(() => [
  {
    id: '01',
    text: 'На какой реке стоит Рязань?',
    options: [
      { id: '1', text: 'Волга', correct: false },
      { id: '2', text: 'Ока', correct: true },
      { id: '3', text: 'Дон', correct: false },
      { id: '4', text: 'Енисей', correct: false }
    ]
  },
  {
    id: '02',
    text: 'На каком расстоянии от Москвы находится Рязань?',
    options: [
      { id: '1', text: '100 км', correct: false },
      { id: '2', text: '167 км', correct: false },
      { id: '3', text: '190 км', correct: true },
      { id: '4', text: '230 км', correct: false }
    ]
  },
  {
    id: '03',
    text: 'Когда произошло переименование Переяславля-Рязанского в Рязань?',
    options: [
      { id: '1', text: 'В 1628 году', correct: false },
      { id: '2', text: 'В 1778 году', correct: true },
      { id: '3', text: 'В 1828 году', correct: false },
      { id: '4', text: 'В 1978 году', correct: false }
    ]
  },
  {
    id: '04',
    text: 'Какой музей является главным музейным центром Рязани?',
    options: [
      { id: '1', text: 'Художественный музей', correct: false },
      { id: '2', text: 'Музей путешественников', correct: false },
      { id: '3', text: 'Рязанский кремль', correct: true },
      { id: '4', text: 'Музей военной автомобильной техники', correct: false }
    ]
  },
  {
    id: '05',
    text: 'Какой музей в Рязани носит имя известного русского гравера?',
    options: [
      { id: '1', text: 'Музей Петра I', correct: false },
      { id: '2', text: 'Художественный музей', correct: false },
      { id: '3', text: 'Музей Пожалостина', correct: true },
      { id: '4', text: 'Музей Рязанского кремля', correct: false }
    ]
  },
  {
    id: '06',
    text: 'В каком здании располагается музей, посвящённый Павлову?',
    options: [
      { id: '1', text: 'В старинном замке', correct: false },
      { id: '2', text: 'В современном здании', correct: false },
      { id: '3', text: 'В уютном особняке', correct: true },
      { id: '4', text: 'В административном здании', correct: false }
    ]
  },
  {
    id: '07',
    text: 'Когда работает музей путешественников?',
    options: [
      {
        id: '1',
        text: 'С понедельника по четверг, выходные — с пятницы по воскресенье',
        correct: false
      },
      {
        id: '2',
        text: 'С понедельника по пятницу, выходные — суббота и воскресенье',
        correct: true
      },
      { id: '3', text: 'С понедельника по субботу, выходной — воскресенье', correct: false },
      { id: '4', text: 'Каждый день', correct: false }
    ]
  },
  {
    id: '08',
    text: 'Какая выставка стала визитной карточкой музея путешественников?',
    options: [
      { id: '1', text: '«Русская Америка: От Рязани до Юкона»', correct: true },
      { id: '2', text: '«По следам великих путешествий»', correct: false },
      { id: '3', text: '«Путеводители Рязанской области»', correct: false },
      { id: '4', text: '«Экспедиции XX века»', correct: false }
    ]
  },
  {
    id: '09',
    text: 'Сколько музеев в Рязани, согласно тексту, посвящены военной тематике?',
    options: [
      { id: '1', text: 'Один', correct: false },
      { id: '2', text: 'Два', correct: false },
      { id: '3', text: 'Три', correct: true },
      { id: '4', text: 'Четыре', correct: false }
    ]
  },
  {
    id: '010',
    text: 'Где находится галерея пряников в Рязани?',
    options: [
      { id: '1', text: 'На улице Свободы, 4', correct: true },
      { id: '2', text: 'На улице Павлова, 25', correct: false },
      { id: '3', text: 'На площади Маргелова, 1', correct: false },
      { id: '4', text: 'На улице Ленина, 35', correct: false }
    ]
  }
])

const answers = ref<{ [key: string]: string }>({})

defineExpose({ answers: answers })
</script>

<template>
  <section class="section test">
    <Question
      v-for="question in questions"
      :key="question.id"
      v-model:answer="answers[question.id]"
      :question="question"
    />
  </section>
</template>

<style scoped lang="scss"></style>
