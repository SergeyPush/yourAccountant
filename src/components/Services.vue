<template>
  <section class="services">
    <div class="container">
      <h2 class="section_title">{{$t('services.header')}}</h2>
      <div class="services_items">
        <div class="services_tov">
          <h3 class="tov_title">{{$t('services.header_tov')}}</h3>
          <p class="prices">{{$t('services.price_tov')}}</p>
          <ul class="tov_list">
            <li class="list_item" v-for="(item, index) in getTovs" :key="index">
              <div class="list_item_image">
                <img :src="green_arrow" class="arrow" />
              </div>
              <p class="list_item_text">{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="services_fop">
          <h3 class="fop_title">{{$t('services.header_fop')}}</h3>
          <p class="prices">{{$t('services.price_fop')}}</p>
          <ul class="fop_list">
            <li class="list_item" v-for="(item, index) in getFops" :key="index">
              <div class="list_item_image">
                <img :src="red_arrow" class="arrow" />
              </div>
              <p class="list_item_text">{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import red_arrow from "@/assets/icons/red-arrow.svg";
import green_arrow from "@/assets/icons/green-arrow.svg";
export default {
  data() {
    return {
      red_arrow,
      green_arrow
    };
  },
  computed: {
    getTovs() {
      return this.$t("services.tov");
    },
    getFops() {
      return this.$t("services.fop");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.services {
  background-color: #f2f2f2;
  padding-top: 50px;
  padding-bottom: 40px;
}
.section_title {
  text-align: center;
  font-family: $titleFont;
  font-size: 40px;
  text-align: center;
  color: $mainFontColor;
  margin-bottom: 40px;
}
.services_items {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  & > div {
    max-width: 40%;
  }
}
%titles {
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.tov_title {
  @extend %titles;
  color: #54bd9c;
}
.fop_title {
  @extend %titles;
  color: #ec7063;
}
.prices {
  font-size: 20px;
  line-height: 23px;
  color: $mainFontColor;
  margin-bottom: 38px;
  text-align: center;
}
.list_item {
  background: #ffffff;
  border: 1px solid #e6e7e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.list_item_text {
  padding: 14px 14px 14px 1px;
  color: $mainFontColor;
}
.list_item_image {
  min-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  width: 22px;
  height: 22px;
}
@media screen and (max-width: 768px) {
  .services_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      max-width: 80%;
    }
  }
  .services_tov {
    margin-bottom: 40px;
  }
}
</style>