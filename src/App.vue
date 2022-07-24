<template>
  <component :is="layout" />
</template>
<script>
import MainLayout from "@/layouts/MainLayout";
import GameLayout from "@/layouts/GameLayout";
import AdminLayout from "@/layouts/AdminLayout";
export default {
  components: {
    MainLayout,
    GameLayout,
    AdminLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "MainLayout"; // this is default layout if route meta is not set
      }
    },
  },
};
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "@/assets/css/style.css";
</style>
