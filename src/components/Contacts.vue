<template>
  <section class="contact" id="contacts" v-scroll-reveal.reset="{duration:1000}">
    <div class="container">
      <h2 class="section_title">{{$t('contacts.title')}}</h2>
      <div class="section_content">
        <div class="items">
          <div class="image_container">
            <img :src="images[0]" class="item_image" alt="image" />
          </div>
          <div class="item_text">
            <p class="subtitle">{{$t('contacts.items.subscribe')}}</p>
            <p class="description">
              <a
                href="https://facebook.com/wisexpert"
                class="submenu_link"
                target="_blank"
                rel="noopener"
              >@WisExpert</a>
            </p>
          </div>
        </div>
        <div class="items">
          <div class="image_container">
            <img :src="images[1]" class="item_image" alt="image" />
          </div>
          <div class="item_text">
            <p class="subtitle">{{$t('contacts.items.phone')}}</p>
            <p class="description">+38(099)381-11-18</p>
          </div>
        </div>
        <div class="items">
          <div class="image_container">
            <img :src="images[2]" class="item_image" alt="image" />
          </div>
          <div class="item_text">
            <p class="subtitle">{{$t('contacts.items.mail')}}</p>
            <p class="description">
              <a
                class="submenu_link"
                href="mailto:w.expert.company@gmail.com"
              >w.expert.company@gmail.com</a>
            </p>
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
      subtitle: ["Your accountant", "+38(099)381-11-18‬", "0993811118@ukr.net"]
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
  padding-bottom: 70px;
  background-color: #fafbfc;
}
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
.image_container {
  min-width: 60px;
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
.submenu_link {
  color: $mainFontColor;
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