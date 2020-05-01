<template>
  <div class="menu container">
    <div class="logo">
      <img :src="face" class="logo__image" />
      <p class="logo__text">Твій бухгалтер</p>
    </div>
    <nav class="navigation">
      <ul class="menu__list">
        <li v-for="(item, index) in dafaultData" :key="index" class="menu__item">
          <a :href="item.link" class="menu__link">{{item.text}}</a>
        </li>
      </ul>

      <div class="language">
        <p @click="changeLocale">{{language}}</p>
      </div>
      <div class="socials">
        <div class="phone">
          <i class="fas fa-phone"></i>
        </div>
        <div class="facebook">
          <i class="fab fa-facebook-f"></i>
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
        { text: this.$t("menu.services"), link: "#1" },
        { text: this.$t("menu.quality"), link: "#2" },
        { text: this.$t("menu.advantages"), link: "#3" },
        { text: this.$t("menu.calculator"), link: "#4" },
        { text: this.$t("menu.contacts"), link: "#5" }
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