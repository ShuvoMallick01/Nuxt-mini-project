<template>
  <div class="space-y-5">
    <h2 class="font-semibold text-xl">About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, itaque
      commodi est provident cumque totam aliquid ea cupiditate eius, consectetur
      blanditiis. Nesciunt minus obcaecati voluptates libero quos ea dolore
      recusandae.
    </p>
    {{ data }}
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
