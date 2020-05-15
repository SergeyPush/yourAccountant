<template>
  <section class="container advantages" id="advantages" v-scroll-reveal.reset="{duration:1000}">
    <h2 class="section_title">{{$t('advantages.title')}}</h2>

    <div class="section_content">
      <div class="item" v-for="(item,index, id) in getAdvantages" :key="index">
        <div class="image_container">
          <img :src="images[id]" class="image" alt="image" />
        </div>
        <p class="item_text">{{item}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import knowledge from "@/assets/icons/adv-student.svg";
import improvement from "@/assets/icons/adv-improvement.svg";
import think from "@/assets/icons/adv-think.svg";
import clock from "@/assets/icons/adv-clock.svg";
import solution from "@/assets/icons/adv-solution.svg";
import secret from "@/assets/icons/adv-secret.svg";
export default {
  data() {
    return {
      images: [knowledge, improvement, think, clock, solution, secret]
    };
  },
  computed: {
    getAdvantages() {
      return this.$t("advantages.items");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.advantages {
  padding-top: 30px;
  padding-bottom: 40px;
}
.section_title {
  font-family: $titleFont;
  text-align: center;
  font-size: calc(20px + 1.5vmax);
  color: $mainFontColor;
  margin-bottom: 12%;
  margin-top: 8%;
}
.section_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
  flex-basis: 1;
}
.item {
  width: 230px;
  margin-bottom: 50px;
}

.image {
  margin: auto;
}
.item_text {
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: $mainFontColor;
  padding-top: 15px;
}
</style>