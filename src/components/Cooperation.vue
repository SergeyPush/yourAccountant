<template>
  <section class="cooperation" id="cooperation" v-scroll-reveal.reset="{duration:1000}">
    <div class="container">
      <h2 class="section_title">{{$t('cooperation.title')}}</h2>
      <div class="section_content">
        <div class="items" v-for="(item, index, id) in getItems" :key="index">
          <div class="image_container">
            <img :src="images[id]" class="item_image" alt="image" />
          </div>
          <p class="items_text">{{item}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import demand from "@/assets/icons/coop-demand.svg";
import sign from "@/assets/icons/coop-sign.svg";
import pass from "@/assets/icons/coop-pass.svg";
import buh from "@/assets/icons/coop-buh.svg";
import vector from "@/assets/icons/coop-vector.svg";
export default {
  data() {
    return {
      images: [demand, sign, pass, buh],
      vector
    };
  },
  computed: {
    getItems() {
      return this.$t("cooperation.items");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.cooperation {
  background-color: #222831;
  padding-top: 30px;
  padding-bottom: 40px;
}
.section_title {
  font-family: $titleFont;
  font-size: calc(20px + 1.5vmax);
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-top: 8%;
  margin-bottom: 10%;
  opacity: 0.8;
}
.section_content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.items {
  width: 200px;
  margin-bottom: 40px;
  position: relative;
  &:not(:last-child):after {
    content: url("../assets/icons/coop-vector.svg");
    position: absolute;
    width: 32px;
    height: 16px;
    bottom: 70%;
    right: -10%;
  }
}

.item_image {
  margin-right: auto;
  margin-left: auto;
}
.items_text {
  margin-top: 10px;
  font-size: 22px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
}

@media screen and (max-width: 768px) {
  .section_content {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 538px) {
  .items {
    &:not(:last-child):after {
      position: absolute;
      width: 32px;
      height: 16px;
      bottom: -11%;
      right: 42%;
      transform: rotate(90deg);
    }
  }
}
</style>