<template>
  <div :class="['top_button', displayButton?'active':'']">
    <a href="#top" class="link">
      <i class="fas fa-angle-up arrow"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      displayButton: false
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 600) {
        this.displayButton = true;
      } else {
        this.displayButton = false;
      }
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.top_button {
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: $accentColor;
  bottom: 100px;
  right: 5%;
  border-radius: 5px;
  display: none;
  &:hover {
    transition: background-color 0.2s linear;
    background-color: $darkColor;
  }
}
.link {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  font-size: 34px;
  color: #ffffff;
  text-align: center;
}
.active {
  display: block;
  animation: appear 0.3s ease-in;
}

@keyframes appear {
  0% {
    opacity: 0;
    right: -100px;
  }
  100% {
    opacity: 1;
    right: 6%;
  }
}
</style>