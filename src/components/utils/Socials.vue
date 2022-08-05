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
          <i :class="social.fa" class="image"></i>
          <span class="caption">{{ social.text }}</span>
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
import contacts from '../../assets/contacts';
export default {
  data() {
    return {
      socials: [
        {
          name: 'facebook',
          fa: 'fab fa-facebook-f',
          link: 'https://facebook.com/wisexpert',
          text: 'Wisexpert',
        },
        {
          name: 'instagram',
          fa: 'fab fa-instagram',
          link: 'https://www.instagram.com/wisexpert_buh/',
          text: '@wisexpert_buh',
        },
        {
          name: 'phone',
          fa: 'fas fa-phone',
          link: 'tel:+380997778810',
          text: '+38(099)777-88-10',
        },
        {
          name: 'telegram',
          fa: 'fab fa-telegram-plane',
          link: 'tg://resolve?domain=@WisExpert',
          text: '@WisExpert',
        },
        {
          name: 'mail',
          fa: 'fas fa-envelope',
          link: `mailto:${contacts.email.content}`,
          text: 'info@wisexpert.com.ua',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/mixins.scss';
@import '../../scss/variables';
.socials_list {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 5;
  left: 50px;
  bottom: 2%;
  @include desktop {
    bottom: 14%;
  }
}
.socials_link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.image {
  margin-right: 8px;
}
.caption {
  font-size: 14px;
  left: 40px;
  top: 7px;
  position: absolute;
  width: 200px;
  display: none;
  opacity: 0;
  transition: all linear 0.3s;
}

.socials_link:hover .caption {
  @include desktop {
    display: inline;
    opacity: 1;
  }
}
.socials_item {
  margin-bottom: 40px;
  font-size: 30px;
  a {
    color: #4b4b4b;
  }
  @include desktop {
    margin-bottom: 26px;
  }
}
.socials_item:hover {
  a {
    transition: all linear 0.2s;
    color: #646464;
    color: $accentColor;
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
