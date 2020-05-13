<template>
  <div
    class="header"
    id="#top"
    v-scroll-reveal.reset="{duration:1000}"
    :style="{backgroundImage: `url(${getRandomImage})`}"
  >
    <Menu @changeLanguage="changeLanguage($event)"></Menu>
    <transition name="appear" appear>
      <div class="content container">
        <div class="hero">
          <h1 class="hero__title">{{$t("header.title")}}</h1>
          <p class="hero__desc">{{$t("header.description")}}</p>
        </div>
        <ContactForm :buttonText="$t('contactForm.submitButton')"></ContactForm>
      </div>
    </transition>
  </div>
</template>

<script>
import Menu from "./utils/Menu";
import ContactForm from "./utils/ContactForm";

const img = require("@/assets/img/header-image.jpg");
const img1 = require("@/assets/img/header-image1.jpg");

export default {
  components: {
    Menu,
    ContactForm
  },
  data() {
    return {
      images: [img, img1],
      randomImage: this.getRandomImage
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$emit("changeLanguage", lang);
    }
  },
  computed: {
    getRandomImage() {
      const imageIndex = Math.floor(Math.random() * this.images.length);
      return this.images[imageIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 88%;
  padding-bottom: 40px;
}
.content {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 1;
}

.hero {
  max-width: 450px;
  padding-top: 10%;
  margin-right: 10px;
}

.hero__title {
  font-family: $titleFont;
  font-weight: 500;
  font-size: calc(20px + 1.8vmax);

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