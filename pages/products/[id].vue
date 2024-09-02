<template>
  <div>
    <Head>
      <Title>Nuxt Skyber | {{ product.title }}</Title>
      <Meta name="description" , :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
let { id } = useRoute().params;

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Prduct Not Found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>
