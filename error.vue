<template>
  <div class="h-screen w-full grid place-items-center">
    <div
      class="max-w-sm mx-auto text-center shadow-sm my-8 space-y-5 p-10 px-20 rounded-xl border"
    >
      <p class="text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="text-6xl">Ooops.</p>
      <p>{{ error.message }}</p>

      <button class="btn" @click="handleClearError">Go Home...</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
