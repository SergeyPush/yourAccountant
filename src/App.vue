<template>
  <div>
    <Header :language="language" @changeLanguage="handleChangeLanguage($event)"></Header>
    <Services></Services>
    <Advantages></Advantages>
    <Cooperation></Cooperation>
    <Calculator></Calculator>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Cooperation from "./components/Cooperation";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
export default {
  components: {
    Header,
    Services,
    Advantages,
    Cooperation,
    Contacts,
    Calculator,
    Footer
  },
  data() {
    return {
      language: "ukr"
    };
  },
  methods: {
    handleChangeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/App.scss";
@import "./scss/_variables.scss";

.container {
  max-width: 1100px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
}
body {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 90%;
  }
}
</style>
