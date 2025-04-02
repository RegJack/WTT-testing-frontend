<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  script: [
    {
      src: config.public.typoTextSrc,
      tagPosition: 'bodyClose'
    }
  ]
})

const cookieTest = useCookie<CookieTest>('test', {
  maxAge: 60 * 60 * 24 * 365,
  default: () => ({}) as CookieTest
})

cookieTest.value.test = 'images-0|2'

function goToTest(e: Event) {
  cookieTest.value.respondentInfo = {
    gender: ((e.target as HTMLFormElement).elements.namedItem('gender') as HTMLSelectElement).value,
    age: ((e.target as HTMLFormElement).elements.namedItem('age') as HTMLInputElement).value
  }

  cookieTest.value.firstTestResult.completed = false
  cookieTest.value.secondTestResult.completed = false
}
</script>

<template>
  <main class="main">
    <section class="section info">
      <typo-text font-size="16px" text-align="justify" column-count="1" chars-per-line="60">
        <h1 class="heading" heading-size="lg" heading-align="center">
          Тестирование удобочитаемости
        </h1>
        <p class="text">
          Благодарю за готовность принять участие в исследовании! В ходе тестирования вам предстоит
          прочитать два текста. Пожалуйста, прочитайте их, не отвелекаясь, в комфортном для вас
          темпе.
        </p>
        <p class="text">
          После прочтения каждого текста вам будет предложено по 10 вопросов, на которые нужно будет
          ответить. Вопросы касаются только того, что было изложено в тексте. Пожалуйста,
          учитывайте, что вернуться к отвеченным вопросам невозможно, поэтому будьте внимательны,
          подтверждая свой ответ. Система фиксирует ответы при нажатии кнопки «Далее».
        </p>
        <p class="text">
          Тестирование следует выполнять с персонального компьютера или ноутбука. Браузер должен
          быть развернут на полный экран. Убедитесь, что в настройках браузера включены cookie,
          javascript и показ изображений. Переходя к тестированию, Вы соглашаетесь с тем, что
          ознакомлены с инструкцией.
        </p>
        <p class="text">
          Перед прохождением опроса, пожалуйста, укажите Ваш пол и возраст. Данные буду использованы
          при анализе результатов тестирования.
        </p>
        <form action="#" class="form" @submit.prevent="goToTest">
          <div class="form__item">
            <label for="genderSelect" class="form__label">Пол</label>
            <select
              id="genderSelect"
              ref="genderSelect"
              class="form__select"
              name="gender"
              required
            >
              <option value="" selected disabled>Выбрать пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
          <div class="form__item">
            <label for="ageInput" class="form__label">Возраст</label>
            <input
              id="ageInput"
              type="number"
              name="age"
              min="0"
              max="123"
              class="form__input form__input"
              required
            />
          </div>
          <button type="submit" class="form__button">Перейти к тестированию</button>
        </form>
      </typo-text>
    </section>
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 888px;
  width: auto;
  margin: 0 auto;
  font-family: Verdana;
}

.section {
  width: calc(100% - 32px);
  margin: 16px;
}

.form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  &__item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 256px;
    max-width: calc((100% - 16px) / 2);
    gap: 8px;
  }

  &__select,
  &__input {
    font-family: Verdana;
    height: calc(16px * 1.2 * 2);
    font-size: 16px;
    border-radius: 4px;
    padding: 4px 8px;
    box-sizing: border-box;
  }

  &__input[type='number']::-webkit-outer-spin-button,
  &__input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; // Yeah, yeah everybody write about it
  }

  &__input[type='number'],
  &__input[type='number']:hover,
  &__input[type='number']:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  &__button {
    background-color: transparent;
    height: calc(16px * 1.2 * 2);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-family: Verdana;
    font-size: 16px;
  }
}
</style>
