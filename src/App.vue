<template>
  <div>
    <vue-scroll-progress-bar
      height="0.25rem"
      :barClass="{ progress_bar: true }"
      :backgroundColor="''"
    />
    <Header
      :language="language"
      @changeLanguage="handleChangeLanguage($event)"
    ></Header>
    <Services></Services>
    <Companies />
    <Advantages></Advantages>
    <Cooperation></Cooperation>
    <Calculator></Calculator>
    <Contacts></Contacts>
    <Footer></Footer>
    <OnTop></OnTop>
    <Socials v-if="getWindowWidth > 768"></Socials>
  </div>
</template>

<script>
import Header from './components/Header';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Cooperation from './components/Cooperation';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Socials from './components/utils/Socials.vue';
import Companies from './components/Companies.vue';

export default {
  components: {
    Header,
    Services,
    Advantages,
    Cooperation,
    Contacts,
    Calculator,
    Footer,
    Companies,
    Socials,
    OnTop: () =>
      import(/* webpackPrefetch: true */ './components/utils/OnTop.vue'),
  },
  data() {
    return {
      language: 'ukr',
    };
  },
  methods: {
    handleChangeLanguage(lang) {
      localStorage.setItem('language', lang);
      this.$i18n.locale = lang;
    },
  },
  computed: {
    getWindowWidth() {
      return window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
@import './scss/App.scss';

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.progress_bar {
  background: #4ebd6f;
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 90%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
