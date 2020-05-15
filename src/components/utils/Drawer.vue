<template>
  <div class="backdrop" @click="closeMenu">
    <div class="drawer animation">
      <i class="fas fa-times close" @click="closeMenu"></i>

      <div class="drawer_top">
        <a href="https://facebook.com/taxeshelp" target="_blank" rel="noopener">
          <i class="fab fa-facebook-f facebook"></i>
        </a>
        <p class="language" @click="changeLocale">{{language}}</p>
      </div>
      <nav class="navigation">
        <ul class="menu__list">
          <li v-for="(item, index) in items" :key="index" class="menu__item">
            <a :href="item.link" class="menu__link" @click="closeMenu">{{item.text}}</a>
          </li>
        </ul>
      </nav>
      <div class="drawer_phone">
        <i class="fas fa-phone"></i>
        <span>+38(099)381-11-18</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closeMenu", "items", "language", "changeLocale"]
};
</script>

<style lang="scss" scoped>
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
  width: 320px;
  height: 100%;
  background-color: #222831;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 3;
  opacity: 0.92;
}
.animation {
  animation: appear 0.3s ease-out;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(+100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.close {
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
}

.menu__list {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 30px;
}
.menu__item {
  margin-bottom: 20px;
  padding-left: 30px;
}
.menu__link {
  font-size: 20px;
  color: #ffffff;
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