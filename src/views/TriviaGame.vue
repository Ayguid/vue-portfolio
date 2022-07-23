<script setup>
//import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

//const questions = computed(() => store.state.trivia.questions);
const categories = store.state.trivia.categories;
const questions = store.state.trivia.questions;
</script>
<template>
  <div class="trivia">
    <div class="container mx-auto">
      <!-- ... -->
      <h1>This is a Trivia Game</h1>
      {{ categories }}
      <br />
      {{ questions }}
    </div>
  </div>
</template>
