<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
let { id } = useRoute().params;

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);

definePageMeta({
  layout: "products",
});
</script>
