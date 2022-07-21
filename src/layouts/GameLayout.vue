<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("GameLayout mounted");
});
</script>
<template>
  <div id="game">
    <nav>
      <router-link class="text-2xl" to="/">Home !!!</router-link>
      <router-link class="text-2xl" to="/admin">Admin Panel !!!</router-link> |
      <router-link class="text-2xl" to="/trivia">Trivia Game !!!</router-link> |
      <router-link class="text-2xl" to="/todos">Todo App !!!</router-link>
    </nav>
    <router-view />
  </div>
</template>
