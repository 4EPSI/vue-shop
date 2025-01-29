<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div v-if="product" class="container">
        <!-- <h1>Product: {{ id }}</h1> -->
        <div class="product__wrapper">
          <div class="product-slider">
            <swiper :images="product.gallery" />
          </div>
          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Product not found. Please check the URL or return to the shop.</p>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue';
export default {
  components: { Swiper },
  data() {
    return {
      // id: this.$route.params.id
      product: null
    }
  },
  created() {
    let id = Number(this.$route.params.id);

    console.log('Route ID:', id);
    console.log('Shop List:', this.$store.state.shopList);

    this.product = this.$store.getters.getProduct(id);

    if (!this.product) {
      console.error(`Product with ID ${id} not found`);
    } else {
      console.log('Product:', this.product);
    }
  }
}
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // flex-wrap: wrap;
}
.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}
</style>