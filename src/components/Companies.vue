import { Carousel } from 'vue-carousel';
<template>
  <section class="companies" id="companies" v-scroll-reveal="{ duration: 600 }">
    <div class="container">
      <h2 class="section_title">{{ $t('companies.title') }}</h2>
      <div class="section_content">
        <Carousel />
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from './utils/Carousel.vue';
export default { components: { Carousel } };
</script>

<style lang="scss" scoped>
@import '@/scss/mixins.scss';
.section_title {
  font-family: $titleFont;
  font-size: calc(20px + 1.5vmax);
  text-align: center;
  letter-spacing: 0.02em;
  color: $mainFontColor;
  margin-top: 6%;
  margin-bottom: 8%;
}
.section_content {
  margin-bottom: 30px;
  @include desktop {
    margin-bottom: 80px;
  }
}
</style>
