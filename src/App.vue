<script setup>
import { ref, computed } from "vue";
import Sort from "./components/Sort.vue";
import Cards from "./components/Cards.vue";
import useProducts from "./hooks/useProducts.js";

const { products } = useProducts();
const { productsLocal } = useProducts();

const sortPrice = (value) => {
   if (value.value === "lowPrice") {
      productsLocal.value.sort((a, b) =>
         a.price.current_price > b.price.current_price ? 1 : -1
      );
   }
   if (value.value === "highPrice") {
      productsLocal.value.sort((a, b) =>
         a.price.current_price < b.price.current_price ? 1 : -1
      );
   }
};

const materialSelect = (value) => {
   if (value.value === "metal")
      productsLocal.value = products.value.filter(
         (product) => product.material === 2
      );
   if (value.value === "tree")
      productsLocal.value = products.value.filter(
         (product) => product.material === 1
      );
   if (value.value === "all") productsLocal.value = products.value;
};
</script>

<template>
   <main class="container">
      <h5>Главная / Системы хранения / Комплекты стеллажных систем</h5>
      <h2>Комплекты стеллажных систем</h2>
      <Sort @onMaterialSelect="materialSelect" @onSortPrice="sortPrice" />
      <Cards :productsArr="products" :productsLocalArr="productsLocal" />
   </main>
</template>

<style scoped></style>
