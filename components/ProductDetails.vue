<template>
  <div class="grid grid-cols-12 gap-4 xl:gap-6">
    <div class="col-span-full md:col-span-4 xl:col-span-6">
      <img
        :src="product.image"
        :alt="product.title"
        class="h-60 mx-auto overflow-hidden object-center p-2"
      />
    </div>
    <div class="col-span-full md:col-span-8 xl:col-span-6 p-4 space-y-3">
      <h5 class="font-semibold text-[16px] truncate">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </h5>
      <p class="text-gray-500 text-[14px]">
        {{ product.description.slice(0, 80) + "...." }}
      </p>
      <p>Price: {{ product.price }}</p>
      <button class="btn px-4">Add to Cart</button>
    </div>
    <!-- {{ product }} -->
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
