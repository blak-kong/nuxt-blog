<template>
  <div class="slider">
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-lianjie"></use>
      </svg>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {

  components: {
    Logo
  }
}
</script>

<style >
.slider {
  position: fixed;
  top: 12%;
  width: 17%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: .9;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
