<template>
  <div class="header">
    <Menu @changeLanguage="changeLanguage($event)"></Menu>
    <div class="content container">
      <div class="hero">
        <h1 class="hero__title">{{$t("header.title")}}</h1>
        <p class="hero__desc">{{$t("header.description")}}</p>
      </div>
      <ContactForm></ContactForm>
    </div>
  </div>
</template>

<script>
import Menu from "./utils/Menu";
import ContactForm from "./utils/ContactForm";
export default {
  components: {
    Menu,
    ContactForm
  },
  methods: {
    changeLanguage(lang) {
      this.$emit("changeLanguage", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-image: url("../assets/img/header-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 40px;
}
.content {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.hero {
  max-width: 460px;
  padding-top: 100px;
}

.hero__title {
  font-weight: 900;
  font-size: 48px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 20px;
}
.hero__desc {
  font-size: 22px;
  line-height: 140%;
  color: #ffffff;
}
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
  .hero {
    margin-bottom: 20px;
  }
}
</style>