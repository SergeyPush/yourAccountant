<template>
  <section class="contact">
    <div class="container">
      <h2 class="section_title">{{$t('contacts.title')}}</h2>
      <div class="section_content">
        <div class="items" v-for="(item, index,id) in getContacts" :key="index">
          <div class="image_container">
            <img :src="images[id]" class="item_image" />
          </div>
          <div class="item_text">
            <p class="subtitle">{{item}}</p>
            <p class="description">{{subtitle[id]}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import facebook from "@/assets/icons/cont-facebook.svg";
import phone from "@/assets/icons/cont-phone.svg";
import mail from "@/assets/icons/cont-mail.svg";

export default {
  data() {
    return {
      images: [facebook, phone, mail],
      subtitle: [
        "Your accountant",
        "+38(097)777 77 77",
        "youraccountant@gmail.com"
      ]
    };
  },
  computed: {
    getContacts() {
      return this.$t("contacts.items");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.contact {
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #fafbfc;
}
.section_title {
  font-family: $titleFont;
  font-size: 40px;
  text-align: center;
  letter-spacing: 0.02em;
  color: $mainFontColor;
  margin-top: 8%;
  margin-bottom: 10%;
}
.section_content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.items {
  max-width: 250px;
  display: flex;
  flex-direction: row;
}
.item_image {
  width: 60px;
}
.item_text {
  padding-left: 20px;
}
.subtitle {
  font-weight: 500;
  font-size: 20px;
  color: $mainFontColor;
  margin-bottom: 14px;
}
.description {
  color: $mainFontColor;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .section_content {
    flex-direction: column;
  }
  .items {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 300px;
  }
}
</style>