<script setup>
import { ref } from "vue";
const emit = defineEmits(["onMaterialSelect", "onSortPrice"]);

const priceSelect = ref("");
const priceSelection = () => {
   emit("onSortPrice", priceSelect);
};

const materialSelect = ref("");
const materialSelection = () => {
   emit("onMaterialSelect", materialSelect);
};
</script>

<template>
   <div class="sort">
      <div class="sort__price">
         <p class="labelSort">Сортировать по:</p>
         <select class="select" v-model="priceSelect" @change="priceSelection">
            <option selected disabled value="">Цена по ...</option>
            <option value="lowPrice">Цена по возрастанию</option>
            <option value="highPrice">Цена по убыванию</option>
         </select>
      </div>
      <div class="sort__material">
         <p class="labelSort">Материал:</p>
         <select
            class="select"
            v-model="materialSelect"
            @change="materialSelection"
         >
            <option selected disabled value="">Выберите материал</option>
            <option value="all">Все материалы</option>
            <option value="metal">Металл</option>
            <option value="tree">Дерево</option>
         </select>
      </div>
   </div>
</template>

<style scoped>
.sort {
   display: flex;
}
.labelSort {
   margin: 10px 0 10px 10px;
}
.select {
   width: 288px;
   height: 40px;
   padding: 0 10px;
   margin: 5px 20px 20px 0;
   background: #f2f2f2;
   border: none;
   outline: none;
}
</style>
