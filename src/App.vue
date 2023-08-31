<script setup>
import 'animate.css';
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeIn">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
body {
  min-width: 100vh;
}
</style>
