<template>
  <div class="menu container">
    <div class="logo">
      <img :src="face" class="logo__image" />
      <p class="logo__text">Твій бухгалтер</p>
    </div>
    <nav class="navigation">
      <ul class="menu__list">
        <li v-for="(item, index) in dafaultData" :key="index" class="menu__item header-item">
          <a :href="item.link" class="menu__link">{{item.text}}</a>
        </li>
      </ul>
      <div class="language header-item">
        <p @click="changeLocale">{{language}}</p>
      </div>
      <div class="socials">
        <div class="phone header-item">
          <i class="fas fa-phone"></i>
          <ul class="sub_menu">
            <li class="sub_menu-item">
              <i class="fas fa-phone"></i>
              <span>+38(099)381-11-18</span>
            </li>
            <li class="sub_menu-item">
              <i class="fab fa-skype"></i>

              <a class="submenu_link" href="skype:spushkovskiy?chat">maryna_k</a>
            </li>
            <li class="sub_menu-item">
              <i class="far fa-envelope"></i>
              <a class="submenu_link" href="mailto:0993811118@ukr.net">0993811118@ukr.net</a>
            </li>
          </ul>
        </div>
        <div class="facebook header-item">
          <a href="https://facebook.com/taxeshelp" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </nav>

    <div class="hamburger">
      <i class="fas fa-bars" @click="handleOpenMenu"></i>
    </div>
    <Drawer
      v-if="menuIsOpened"
      :closeMenu="handleCloseMenu"
      :items="dafaultData"
      :language="language"
      :changeLocale="changeLocale"
    />
  </div>
</template>

<script>
import face from "@/assets/icons/isolated-monochrome-white.svg";
import Drawer from "./Drawer";

export default {
  components: {
    Drawer
  },

  data() {
    return {
      menuIsOpened: false,
      face,
      language: "ukr"
    };
  },
  computed: {
    dafaultData() {
      return [
        { text: this.$t("menu.services"), link: "#services" },
        { text: this.$t("menu.quality"), link: "#advantages" },
        { text: this.$t("menu.advantages"), link: "#cooperation" },
        { text: this.$t("menu.calculator"), link: "#calculator" },
        { text: this.$t("menu.contacts"), link: "#contacts" }
      ];
    }
  },

  methods: {
    handleOpenMenu() {
      this.menuIsOpened = true;
    },
    handleCloseMenu(event) {
      if (event.target !== event.currentTarget) {
        return;
      }
      this.menuIsOpened = false;
    },
    changeLocale() {
      localStorage.setItem("language", this.language);
      this.$emit("changeLanguage", this.language);
      this.language === "rus"
        ? (this.language = "ukr")
        : (this.language = "rus");
    }
  },
  mounted() {
    const language = localStorage.getItem("language");
    if (language) {
      this.language = language;
      this.changeLocale();
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
%transition {
  transition: color 0.2s ease-in-out;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
}
.logo__image {
  margin-right: 10px;
}
.logo__text {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-transform: uppercase;
}
.navigation {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.menu {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
}
.menu__list {
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
}
.menu__item {
  margin-right: 1rem;
}
.menu__link {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  @extend %transition;
  &:hover {
    color: $accentColor;
  }
}

.language {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-right: 1.5rem;
  cursor: pointer;
  @extend %transition;
  &:hover {
    color: $accentColor;
  }
}
.socials {
  display: flex;
  flex-direction: row;
}
.facebook,
.phone {
  i {
    font-size: 20px;
    color: #ffffff;
    @extend %transition;
    &:hover {
      color: $accentColor;
      cursor: pointer;
    }
  }
}
.phone {
  margin-right: 1rem;
  position: relative;
}
.sub_menu {
  padding: 10px 10px 10px 10px;
  display: none;
  position: absolute;
  min-width: 190px;
  left: -166px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 0.9;
  border-radius: 10px;
  animation: appear 0.5s ease-in-out;

  & > li {
    color: $mainFontColor;
    padding: 5px;
    & > i {
      margin-right: 5px;
    }
  }
}
.submenu_link {
  color: $mainFontColor;
}

.phone:hover .sub_menu {
  display: block;
  animation: appear 0.5s ease-in-out;
}
.header-item {
  padding-top: 10px;
  padding-bottom: 10px;
}
.sub_menu-item {
  display: flex;

  & i {
    color: $mainFontColor;
    font-size: 16px;
  }
}

.hamburger {
  display: none;
  i {
    font-size: 30px;
    color: #ffffff;
    &:hover {
      color: $accentColor;
      cursor: pointer;
    }
  }
}
@keyframes appear {
  0% {
    opacity: 0;
    display: none;
  }
  100% {
    display: block;
    opacity: 0.9;
  }
}

@media screen and (max-width: 768px) {
  .navigation {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>