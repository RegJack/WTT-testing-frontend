<script lang="ts" setup>
const questions = computed<Question[]>(() => [
  {
    id: '21',
    text: 'Какое расстояние от Москвы до Хабаровска по воздуху?',
    options: [
      { id: '1', text: '4500 км', correct: false },
      { id: '2', text: '5100 км', correct: false },
      { id: '3', text: '6100 км', correct: true },
      { id: '4', text: '7500 км', correct: false }
    ]
  },
  {
    id: '22',
    text: 'Когда был основан Хабаровский дендрарий?',
    options: [
      { id: '1', text: '1886 год', correct: false },
      { id: '2', text: '1896 год', correct: true },
      { id: '3', text: '1906 год', correct: false },
      { id: '4', text: '1916 год', correct: false }
    ]
  },
  {
    id: '23',
    text: 'Какое количество осадков выпадает в Хабаровске за год?',
    options: [
      { id: '1', text: '500 мм', correct: false },
      { id: '2', text: '584 мм', correct: false },
      { id: '3', text: '684 мм', correct: true },
      { id: '4', text: '734 мм', correct: false }
    ]
  },
  {
    id: '24',
    text: 'Какое расстояние до ближайшего китайского поселка Фуюань от Хабаровска?',
    options: [
      { id: '1', text: '50 км', correct: false },
      { id: '2', text: '65 км', correct: true },
      { id: '3', text: '70 км', correct: false },
      { id: '4', text: '85 км', correct: false }
    ]
  },
  {
    id: '25',
    text: 'Какая температура была зафиксирована в Хабаровске в зимний период 2011 года?',
    options: [
      { id: '1', text: '-45,4 °С', correct: false },
      { id: '2', text: '-36,7 °С', correct: false },
      { id: '3', text: '-41,1 °С', correct: true },
      { id: '4', text: '-30,6 °С', correct: false }
    ]
  },
  {
    id: '26',
    text: 'Какая зона климата характерна для Хабаровска?',
    options: [
      { id: '1', text: 'Умеренный климат', correct: false },
      { id: '2', text: 'Субтропический климат', correct: false },
      { id: '3', text: 'Умеренный муссонный климат', correct: true },
      { id: '4', text: 'Арктический климат', correct: false }
    ]
  },
  {
    id: '27',
    text: 'Какие трамваи можно использовать для посещения Хабаровского дендрария?',
    options: [
      { id: '1', text: '№1, 3 и 5', correct: false },
      { id: '2', text: '№2, 4 и 6', correct: false },
      { id: '3', text: '№1, 2 и 6', correct: true },
      { id: '4', text: '№3, 5 и 7', correct: false }
    ]
  },
  {
    id: '28',
    text: 'Сколько видов растений произрастает в Хабаровском дендрарии?',
    options: [
      { id: '1', text: '286 видов', correct: false },
      { id: '2', text: '386 видов', correct: true },
      { id: '3', text: '486 видов', correct: false },
      { id: '4', text: '586 видов', correct: false }
    ]
  },
  {
    id: '29',
    text: 'Как называется популярный зимний фестиваль, проходящий в Хабаровске?',
    options: [
      { id: '1', text: 'Ледяной мир', correct: false },
      { id: '2', text: 'Ледовая Фантазия', correct: true },
      { id: '3', text: 'Фестиваль льда', correct: false },
      { id: '4', text: 'Снежная сказка', correct: false }
    ]
  },
  {
    id: '210',
    text: 'Близость каких стран, согласно тексту, придает хабаровскому общепиту особый колори?',
    options: [
      { id: '1', text: 'Китая и Японии', correct: false },
      { id: '2', text: 'Китая и Кореи', correct: true },
      { id: '3', text: 'Японии и Кореи', correct: false },
      { id: '4', text: 'Китая и Вьетнама', correct: false }
    ]
  }
])

const answers = ref(new Array(questions.value.length).fill(0))

defineExpose({ answers: answers })
</script>

<template>
  <section class="section test">
    <Question
      v-for="(question, idx) in questions"
      ref="questions"
      :key="question.id"
      v-model:answer="answers[idx]"
      :question="question"
    />
  </section>
</template>

<style scoped lang="scss"></style>
