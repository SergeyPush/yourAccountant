<template>
  <div>
    <Header :language="language" @changeLanguage="handleChangeLanguage($event)"></Header>
    <Services></Services>
    <Advantages></Advantages>
  </div>
</template>

<script>
import Header from "./components/Header";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
export default {
  components: {
    Header,
    Services,
    Advantages
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
