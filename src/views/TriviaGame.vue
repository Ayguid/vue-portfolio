<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useStore } from "vuex";
import QuestionCard from "@/components/QuestionCard.vue";

const store = useStore();
//refs
const categories = store.state.trivia.categories;
const questions = store.state.trivia.questions;
const currentQuestion = ref(false);
const correctAnswers = ref([]);
const wrongAnswers = ref([]);
//computed
const gameOver = computed(() => {
  return correctAnswers.value.length >= questions.length;
});
const currentCategory = computed(() => {
  return categories.find(({ id }) => id == currentQuestion.value.category_id);
});
const totalTries = computed(() => {
  return correctAnswers.value.length + wrongAnswers.value.length;
});

//methods
const setQuestion = () => {
  //preguntas que no esten en correctAnswers
  const unansweredQuestions = questions.filter(
    (item) => correctAnswers.value.indexOf(item.id) === -1
  );
  //pregunta random en unansweredQuestions
  const randomQuestion =
    unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];
  //randomizamos/shuffle las opciones, para que los botones no aparezcan en orden
  randomQuestion.options.sort(() => 0.5 - Math.random());
  currentQuestion.value = randomQuestion;
};

const answer = (answer) => {
  if (gameOver.value) {
    return;
  }
  if (currentQuestion.value.answer == answer) {
    correctAnswers.value.push(currentQuestion.value.id);
  } else {
    wrongAnswers.value.push(currentQuestion.value.id);
  }
  if (correctAnswers.value.length < questions.length) {
    //setQuestion(); truco para trigger la transition animation
    nextTick(() => {
      currentQuestion.value = false;
    }).then(() => {
      //get next question
      setQuestion();
    });
  }
};
const restartGame = () => {
  correctAnswers.value = [];
  wrongAnswers.value = [];
  setQuestion();
};
//mounted
onMounted(() => {
  //set the first current question to a random one
  setQuestion();
});
</script>
<template>
  <div class="trivia">
    <div class="container mx-auto flex flex-col items-center justify-center">
      <!-- ... -->
      <h1 class="my-2 text-2xl">This is a Trivia Game</h1>
      <h4 class="my-2 text-xl">
        Score:
        <span class="text-white"
          >{{ correctAnswers.length }}/{{ totalTries }}</span
        >
      </h4>
      <h4 class="my-2 text-md">
        Category:
        <span class="text-white">
          {{ currentCategory?.name }}
        </span>
      </h4>
      <Transition name="fade" appear>
        <div v-if="currentQuestion">
          <QuestionCard :question="currentQuestion" @answer="answer" />
        </div>
      </Transition>
      <div v-show="gameOver" class="text-center">
        GAME OVER
        <button
          class="bg-orange text-white font-bold py-2 px-14 rounded-lg focus:outline-none focus:shadow-outline"
          @click="restartGame"
        >
          Restart
        </button>
      </div>
    </div>
  </div>
</template>
