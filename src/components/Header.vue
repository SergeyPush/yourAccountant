<template>
  <div class="header" id="#top">
    <Menu @changeLanguage="changeLanguage($event)"></Menu>
    <transition name="appear" appear>
      <div class="content container">
        <div class="hero">
          <h1 class="hero__title">
            {{ $t('header.title') }}
            <br />
            <span class="colored">WisExpert</span>
          </h1>
          <p class="hero__desc" v-html="$t('header.description')"></p>
        </div>
        <ContactForm
          :buttonText="$t('contactForm.submitButton')"
          :shadow="true"
        ></ContactForm>
      </div>
    </transition>
  </div>
</template>

<script>
import Menu from './utils/Menu';
import ContactForm from './utils/ContactForm';

export default {
  components: {
    Menu,
    ContactForm,
  },
  methods: {
    changeLanguage(lang) {
      this.$emit('changeLanguage', lang);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  /* background-image: url('../assets/img/header-image1.jpg'); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center 88%; */
  /* background: rgb(240, 244, 244); */
  background: linear-gradient(
    180deg,
    rgba(180, 212, 250, 0.1) 6%,
    rgba(255, 255, 255, 1) 100%
  );
  padding-bottom: 40px;
  min-height: 85vh;
}
.content {
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 1;
}

.hero {
  max-width: 600px;
  padding-top: 9%;
  margin-right: 10px;
}

.hero__title {
  font-family: $logoFont;
  font-weight: 600;
  /* font-size: calc(20px + 1.3vmax); */
  font-size: calc(46px);
  line-height: 140%;
  margin-bottom: 22px;
  color: $darkColor;
  text-shadow: 1px 1px 2px rgba(180, 212, 250, 0.3);
}

.hero__desc {
  font-size: 20px;
  line-height: 158%;
  font-weight: 500;
  /* font-family: $arsenalFont; */
}
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
  .hero {
    margin-top: 60px;
    margin-bottom: 20px;
    margin-right: 0;
    max-width: 350px;
  }
}

.appear-enter-active {
  animation: animate 1s ease-in;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY();
  }
}
</style>
