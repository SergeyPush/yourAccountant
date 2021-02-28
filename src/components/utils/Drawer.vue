<template>
  <div class="backdrop" @click="closeMenu">
    <div class="drawer">
      <div class="drawer_top">
        <a href="https://facebook.com/wisexpert" target="_blank" rel="noopener">
          <i class="fab fa-facebook-f facebook"></i>
        </a>
        <p class="language" @click="changeLocale">{{ language }}</p>
      </div>
      <nav class="navigation">
        <ul class="menu__list">
          <transition-group
            name="slide"
            appear
            @beforeEnter="beforeEnter"
            @enter="enter"
          >
            <li
              v-for="(item, index) in items"
              :key="item.text"
              class="menu__item"
              :data-index="index"
            >
              <a :href="item.link" class="menu__link" @click="closeMenu">{{
                item.text
              }}</a>
            </li>
          </transition-group>
        </ul>
      </nav>
      <Socials />
    </div>
  </div>
</template>

<script>
import Socials from "./Socials";
import gsap from "gsap";
export default {
  props: ["closeMenu", "items", "language", "changeLocale"],
  components: { Socials },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateX(50px)";
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        onComplete: done,
        delay: el.dataset.index * 0.09,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 2;
}

.drawer {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 3;
  opacity: 1;
}

.close {
  color: #404040;
  font-size: 40px;
  cursor: pointer;
  display: block;
  margin-left: auto;
}

.menu__list {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: 30px;
  padding-left: 140px;
}
.menu__item {
  margin-bottom: 40px;
}
.menu__link {
  font-size: 30px;
  color: #404040;
  font-weight: 600;
  font-family: $montserratFont;

  &:hover {
    color: #eaa76c;
  }
}
.drawer_phone {
  font-size: 18px;
  margin: 30px;
  color: #ffffff;
  & > i {
    margin-right: 5px;
  }
}
.drawer_top {
  margin-left: 30px;
  display: flex;
  margin-top: 20px;
}
.facebook {
  font-size: 22px;
  color: #ffffff;
  margin-right: 50px;
}
.language {
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
}
</style>