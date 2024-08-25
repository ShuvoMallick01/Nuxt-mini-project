<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-full md:col-span-4 lg:col-span-4 2xl:col-span-3"
        v-for="product in products"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
