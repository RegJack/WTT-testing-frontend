<script lang="ts" setup>
const props = defineProps({
  question: {
    type: Object as PropType<Question>,
    required: true
  }
})

const answer = defineModel<string>('answer', { required: true, default: '' })
</script>

<template>
  <div class="question">
    <p class="question__text">{{ props.question.text }}</p>
    <div v-for="option in question.options" :key="option.text" class="question__option">
      <input
        :id="'question' + props.question.id + option.id"
        v-model="answer"
        type="radio"
        :name="'question' + props.question.id"
        :value="option.id"
        class="question__input"
        required
      />
      <label :for="'question' + props.question.id + option.id" class="question__label">{{
        option.text
      }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  margin-bottom: 24px;
  font-size: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__text {
    margin-bottom: 12px;
  }

  &__option {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__input,
  &__label {
    cursor: pointer;
  }

  &__input {
    width: 15px;
    height: 15px;
  }
}
</style>
