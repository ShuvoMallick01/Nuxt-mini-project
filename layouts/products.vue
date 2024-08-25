<template>
  <div class="space-y-8">
    <header class="border-b shadow-sm">
      <nav
        class="container mx-auto px-6 lg:px-8 flex justify-between items-center text-[17px] font-semibold hover:text-blue-500 py-4"
      >
        <NuxtLink to="/" class="font-bold text-green-700 text-xl"
          >NUXT SKYBER</NuxtLink
        >
        <ul class="flex gap-6">
          <li>
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-500"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="text-gray-700 hover:text-blue-500"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products" class="text-gray-700 hover:text-blue-500"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- Output the page contents -->
    <div class="container mx-auto px-6 lg:px-10">
      <slot />
    </div>

    <footer class="border-t bg-gray-100">
      <nav
        class="container mx-auto px-6 lg:px-10 flex justify-between items-center text-[17px] font-semibold hover:text-blue-500 py-4"
      >
        <NuxtLink to="/products" class="font-bold text-green-700 text-xl"
          >BACK TO PRDUCTS</NuxtLink
        >
        <ul class="flex gap-6">
          <li>
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-500"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="text-gray-700 hover:text-blue-500"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products" class="text-gray-700 hover:text-blue-500"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
