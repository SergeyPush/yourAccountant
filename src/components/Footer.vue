<template>
  <footer
    class="footer"
    v-scroll-reveal.reset="{ duration: 1000, mobile: false }"
  >
    <div class="section_content container">
      <p class="sign">Made with</p>
      <img :src="heart" class="heart" alt="image" />
      <p class="by">
        by
        <span class="company">SP Development</span>
      </p>
    </div>
  </footer>
</template>

<script>
import heart from "@/assets/icons/footer-heart.svg";
export default {
  data() {
    return {
      heart,
    };
  },
};
</script>


<style lang="scss" scoped>
.footer {
  background-color: #222831;
  padding-top: 14px;
  padding-bottom: 14px;
}
.sign,
.by {
  font-size: 18px;
  color: #ffffff;
}
.section_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 0 10px; */
}
.heart {
  margin-right: 10px;
  margin-left: 10px;
}
.company {
  font-family: $playFont;
  font-weight: 500;
  font-size: 20px;
  color: #3ab882;
}
.container {
  padding: 0 40px;
}
@media screen and (max-width: 768px) {
  .section_content {
    flex-direction: column;
  }
  .sign {
    margin-bottom: 10px;
  }
  .by {
    margin-top: 6px;
  }
}
</style>