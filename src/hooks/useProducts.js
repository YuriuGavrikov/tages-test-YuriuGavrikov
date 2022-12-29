import axios from "axios";
import { ref, onMounted } from "vue";

export default function useProducts() {
   const products = ref([]);
   const productsLocal = ref([]);
   const fetching = async () => {
      try {
         const response = await axios.get(
            "http://localhost:5173/src/server/items.json"
         );
         products.value = response.data;
         productsLocal.value = response.data;
      } catch (error) {
         console.error(error);
      }
   };

   onMounted(fetching);

   return {
      products,
      productsLocal,
   };
}
