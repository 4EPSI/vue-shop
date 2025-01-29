<template>
  <swiper
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper">
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image.img" :alt="image.name" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  images: {
    type: Array,
    required: true,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
