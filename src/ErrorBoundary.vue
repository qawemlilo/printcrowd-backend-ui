<template>
  <div v-if="hasError">
    <h2>An error occurred</h2>
    <p>{{ errorMessage }}</p>
  </div>
  <slot></slot>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { slots }) {
    const hasError = ref(false);
    const errorMessage = ref('');

    const errorCaptured = (error, vm, info) => {
      hasError.value = true;
      errorMessage.value = error.message || 'An error occurred.';
      // You can also log the error or perform other actions here
      console.error('Error captured:', error, vm, info);
      return false; // Prevent the error from propagating further
    };

    return {
      hasError,
      errorMessage,
      errorCaptured,
    };
  },
};
</script>
