<template>
  <section class="companies" id="companies" v-scroll-reveal="{ duration: 600 }">
    <div class="container">
      <h2 class="section_title">{{ $t('companies.title') }}</h2>
      <div class="section_content">
        <SwiperVue />
      </div>
    </div>
  </section>
</template>

<script>
import SwiperVue from './utils/SwiperVue.vue';
export default { components: { SwiperVue } };
</script>

<style lang="scss" scoped>
.section_title {
  font-family: $titleFont;
  font-size: calc(20px + 1.5vmax);
  text-align: center;
  letter-spacing: 0.02em;
  color: $mainFontColor;
  margin-top: 6%;
  margin-bottom: 8%;
}
</style>
