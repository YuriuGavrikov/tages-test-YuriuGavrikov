<script setup>
import { ref } from "vue";

const props = defineProps({
   productsArr: Object,
   productsLocalArr: Object,
});

const favouritesArr = ref([]);
const basketArr = ref([]);
if (JSON.parse(localStorage.getItem("favourites"))) {
   favouritesArr.value = JSON.parse(localStorage.getItem("favourites"));
}
if (JSON.parse(localStorage.getItem("basket"))) {
   basketArr.value = JSON.parse(localStorage.getItem("basket"));
}

const storageFavourites = () => {
   localStorage.setItem("favourites", JSON.stringify(favouritesArr.value));
};
const storageBasket = () => {
   localStorage.setItem("basket", JSON.stringify(basketArr.value));
};

console.log(favouritesArr.value);
console.log(basketArr.value);
</script>

<template>
   <div class="basket_favorites">
      <div class="basket_box">
         <span>Корзина:</span>
         <p v-for="item in basketArr">{{ item.name }}</p>
      </div>

      <div class="favorites_box">
         <span>Избранное:</span>
         <p v-for="item in favouritesArr">{{ item.name }}</p>
      </div>
   </div>

   <div class="cards">
      <div class="d-flex flex-wrap justify-content-evenly">
         <div
            class="cards__card"
            v-for="product in props.productsLocalArr"
            :key="product.id"
         >
            <div class="card__img">
               <img class="img__pic" :src="product.image.url" alt="pic" />
            </div>
            <div class="card__desc">
               <div class="desc__code">{{ product.code }}</div>
               <div class="desc__name">{{ product.name }}</div>
               <div class="desc__price">
                  <span class="price__old" v-if="product.price.old_price">
                     <s>{{ product.price.old_price }}₽</s>&ensp;
                  </span>
                  <span class="price__current">
                     {{ product.price.current_price }}₽
                  </span>

                  <img
                     class="like"
                     src="../pic/1671969280.svg"
                     alt=""
                     @click="
                        (favouritesArr = [...favouritesArr, product]),
                           storageFavourites()
                     "
                     v-if="!favouritesArr.includes(product)"
                  />
                  <img
                     class="like"
                     src="../pic/1455554360_line-08_icon-icons.com_53314.svg"
                     alt=""
                     @click="
                        favouritesArr.splice(favouritesArr.indexOf(product), 1),
                           storageFavourites()
                     "
                     v-else
                  />

                  <img
                     class="basket"
                     src="../pic/icon.svg"
                     alt=""
                     @click="
                        (basketArr = [...basketArr, product]), storageBasket()
                     "
                     v-if="!basketArr.includes(product)"
                  />
                  <img
                     class="basket"
                     src="../pic/icons8-ок.svg"
                     alt=""
                     @click="
                        basketArr.splice(basketArr.indexOf(product), 1),
                           storageBasket()
                     "
                     v-else
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.basket_favorites {
   display: flex;
}
.basket_box {
   width: 50%;
   min-height: 50px;
   border: solid 1px #888888;
   margin: 10px;
   padding: 10px;
}
.favorites_box {
   width: 50%;
   min-height: 50px;
   border: solid 1px #888888;
   margin: 10px;
   padding: 10px;
}
.cards__card {
   width: 300px;
   height: 320px;
   border: 1px solid #eeeeee;
   margin-bottom: 50px;
}
.card__img {
   margin: 9px 49px 23px 49px;
}
.img__pic {
   width: 100%;
   height: 100%;
   object-fit: inherit;
}
.card__desc {
   margin: 10px;
}
.desc__code {
   font-weight: 400;
   font-size: 10px;
   line-height: 140%;
   color: #888888;
}
.desc__name {
   font-weight: 500;
   font-size: 16px;
   line-height: 140%;
   margin: 8px 0;
   color: #000000;
}
.price__old {
   font-weight: 400;
   font-size: 16px;
   line-height: 140%;
   color: #888888;
}
.price__current {
   font-weight: 400;
   font-size: 16px;
   line-height: 140%;
   color: #000000;
}
.like {
   width: 20px;
   height: 20px;
   float: right;
   margin: 0 10px;
}
.like:hover {
   width: 24px;
   height: 24px;
   margin: 0 8px;
   transition: 0.3s;
}
.basket {
   width: 20px;
   height: 20px;
   float: right;
   margin: 0 10px;
}
.basket:hover {
   margin: 0 8px;
   width: 24px;
   height: 24px;
   transition: 0.3s;
}
</style>
