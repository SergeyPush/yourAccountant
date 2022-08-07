<template>
  <Carousel
    class="carousel-content"
    :autoplay="true"
    :autoplayTimeout="3000"
    :autoplayHoverPause="true"
    :perPage="isDesktop ? 3 : 2"
    :loop="true"
    :navigationEnabled="isDesktop"
    :paginationSize="8"
    :scrollPerPage="false"
    :paginationEnabled="false"
    paginationActiveColor="#4b4b4b"
    navigationNextLabel="<i class='fas fa-angle-right fa-lg'/>"
    navigationPrevLabel="<i class='fas fa-angle-left fa-lg'/>"
  >
    <Slide class="slide" v-for="(image, idx) in images" :key="idx">
      <img :src="image" alt="" class="slide-image" />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import josy from '../../assets/logos/josy.jpg';
import lider from '../../assets/logos/lider.png';
import nerd from '../../assets/logos/nerd.svg';
import pita from '../../assets/logos/pita.jpg';
import codex from '../../assets/logos/codex.svg';
import timber from '../../assets/logos/timber.jpg';
import adeum from '../../assets/logos/adeum.png';
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        josy,
        lider,
        nerd,
        pita,
        codex,
        timber,
        adeum,
        josy,
        lider,
        nerd,
        pita,
        codex,
        timber,
        adeum,
        josy,
        lider,
        nerd,
        pita,
        codex,
        timber,
        adeum,
        josy,
        lider,
        nerd,
        pita,
        codex,
        timber,
        adeum,
      ],
    };
  },
  computed: {
    isDesktop() {
      return window.innerWidth >= '768';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
.slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-image {
  max-height: 100px;
  min-height: 50px;
}
</style>
