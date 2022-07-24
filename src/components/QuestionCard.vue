<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  question: {
    type: Object || Boolean,
    default: {},
  },
});
const emit = defineEmits(["answer"]);
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Question:</div>
      <p class="text-gray-700 text-base">
        {{ question.question }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <div v-if="question.options">
        <!--bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-2 -->
        <button
          :disabled="gameOver"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          v-for="(option, index) in question.options"
          :key="index"
          @click="emit('answer', option)"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>
