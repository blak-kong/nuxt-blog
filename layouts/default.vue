<template>
  <div class="app">
    <top-nav></top-nav>
    <div class="layout">
      <div class="container">
        <div class="row" style="width: 100%;">
          <div class="col-xl-9 col-xs-9">
            <nuxt />
          </div>
          <div class="col-xl-3 col-xs-3 hide">
            <right-sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/top-nav.vue'
import RightSidebar from '../components/right-sidebar.vue'
export default {
  head: {
    script: [
      { src: '//at.alicdn.com/t/font_1458809_h1eqbtf1jqm.js' }
    ],
  },
  components: {
    RightSidebar,
    TopNav
  }
}
</script>

<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,body{
	width:100%;
  height:100%;
  overflow-y: auto;
}
body {
  background-image: url("../assets/img/bg_madoka.jpg");
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.app {
  width: 100%;
}
.layout {
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .hide {
    display: none;
  }
}
@media (min-width: 1200px) {
  .hide {
    display: flex;
  }
}
</style>
