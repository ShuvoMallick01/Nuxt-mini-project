<template>
  <div class="card border space-y-2 rounded-xl shadow-sm">
    <img
      :src="product.image"
      :alt="product.title"
      class="h-52 mx-auto overflow-hidden object-center p-2"
    />
    <div class="bg-slate-50 p-4 space-y-3">
      <h5 class="font-semibold text-sm truncate">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </h5>
      <p class="text-gray-500 text-[12px]">
        {{ product.description.slice(0, 80) + "...." }}
      </p>

      <div class="flex items-center gap-2 justify-between">
        <p>Price: {{ product.price }}</p>
        <NuxtLink :to="`/products/${product.id}`"
          ><button class="btn px-4">View</button></NuxtLink
        >
      </div>
    </div>
    <!-- {{ product }} -->
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
