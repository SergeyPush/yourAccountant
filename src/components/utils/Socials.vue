<template>
  <transition appear name="slide">
    <ul class="socials_list">
      <li
        class="socials_item"
        v-for="(social, index) in socials"
        :key="index"
        :class="social.name"
      >
        <a
          :href="social.link"
          class="socials_link"
          target="_blank"
          rel="noopener"
        >
          <i :class="social.fa"></i>
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: 'facebook',
          fa: 'fab fa-facebook-f',
          link: 'https://facebook.com/wisexpert',
        },
        {
          name: 'instagram',
          fa: 'fab fa-instagram',
          link: 'https://www.instagram.com/wisexpert_buh/',
        },
        { name: 'phone', fa: 'fas fa-phone', link: 'tel:+380997778810' },
        {
          name: 'telegram',
          fa: 'fab fa-telegram-plane',
          link: 'tg://resolve?domain=@WisExpert',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.socials_list {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 5;
  left: 50px;
  bottom: 2%;
}
.socials_item {
  margin-bottom: 40px;
  font-size: 30px;
  a {
    color: #404040;
  }
}
.slide-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 0.8s;
}
</style>
