<template>
  <div class="success-window animation">
    <i class="far fa-check-circle icon"></i>
    <p class="message_text">{{$t('contactForm.success')}}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.success-window {
  min-width: 200px;
  min-height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 8px 8px 5px -2px rgba(0, 0, 0, 0.49);
}
.icon {
  color: #4ebd6f;
  font-size: 50px;
  margin-bottom: 16px;
}
.message_text {
  color: $mainFontColor;
}

.animation {
  animation: appear 2s ease-out;
}
@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>