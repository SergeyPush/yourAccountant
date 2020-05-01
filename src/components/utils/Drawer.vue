<template>
  <div class="backdrop" @click="closeMenu">
    <div class="drawer animation">
      <i class="fas fa-times close" @click="closeMenu"></i>

      <nav class="navigation">
        <ul class="menu__list">
          <li v-for="(item, index) in items" :key="index" class="menu__item">
            <a :href="item.link" class="menu__link" @click="closeMenu">{{item.text}}</a>
          </li>
        </ul>
      </nav>
      <div class="drawer_phone">
        <i class="fas fa-phone"></i>
        <span>+38(097)777-77-77</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closeMenu", "items"]
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  &:hover {
    color: #eaa76c;
  }
}
.drawer_phone {
  margin: 30px;
  color: #ffffff;
}
</style>