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
              <span>&nbsp; +38(097)777-77-77</span>
            </li>
            <li class="sub_menu-item">
              <i class="fab fa-skype"></i>
              <span>maryna_k</span>
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
    <Drawer v-if="menuIsOpened" :closeMenu="handleCloseMenu" :items="dafaultData" />
  </div>
</template>

<script>
import face from "@/assets/icons/isolated-monochrome-white.svg";
import Drawer from "./Drawer";

export default {
  components: {
    Drawer
  },
  props: ["lanuage"],
  data() {
    return {
      menuIsOpened: false,
      face,
      language: "rus"
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
    changeLocale(e) {
      this.language === "rus"
        ? (this.language = "ukr")
        : (this.language = "rus");

      this.$emit("changeLanguage", e.target.innerText);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
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
  &:hover {
    color: $accentColor;
  }
}
.language {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-right: 1.5rem;
  &:hover {
    cursor: pointer;
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
  padding: 10px 20px 10px 20px;
  display: none;
  position: absolute;
  left: -200px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0.9;
  border-radius: 10px;
  & > li {
    color: $mainFontColor;
    padding: 5px;
    & > i {
      margin-right: 5px;
    }
  }
}

.phone:hover .sub_menu {
  display: block;
}
.header-item {
  padding-top: 10px;
  padding-bottom: 10px;
}
.sub_menu-item {
  display: flex;
  min-width: 200px;
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

@media screen and (max-width: 768px) {
  .navigation {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>