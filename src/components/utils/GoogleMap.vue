<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%84%D0%B2%D0%B3%D0%B5%D0%BD%D0%B0%20%D0%A1%D0%B2%D0%B5%D1%80%D1%81%D1%82%D1%8E%D0%BA%D0%B0%2C%2011%D0%90%2C%20%D0%9A%D0%B8%D0%B5%D0%B2&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>