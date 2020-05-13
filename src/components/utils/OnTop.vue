<template>
  <transition name="animate">
    <div :class="['top_button', displayButton?'active':'inactive']">
      <a href="#top" class="link">
        <i class="fas fa-angle-up arrow"></i>
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      displayButton: false
    };
  },

  beforeMount() {
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
  animation: appear 0.3s ease-in;
}
.inactive {
  opacity: 0;
  right: -100px;
  animation: leave 0.4s ease-out;
}

@keyframes leave {
  from {
    right: 5%;
    opacity: 1;
  }
  to {
    right: -100px;
    opacity: 0;
  }
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

@media screen and (min-width: 768px) {
  .top_button:hover {
    transition: background-color 0.2s linear;
    background-color: $darkColor;
  }
}
</style>