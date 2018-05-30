<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-content">
      <div class="main-content-row hc-c">
        <div class="main-content-container">
              <!--<router-view></router-view>-->
        </div>
       </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import base from 'Styles/base.scss';

  import Vue from 'vue'
  import Header from 'Components/Header.vue'
  import Footer from 'Components/Footer.vue'

  Vue.component('app-header', Header)
  Vue.component('app-footer', Footer)

  export default {
  	name: 'app',
    created: {

    }
  }

</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '~Styles/variables/custom_variables.scss';

  #app {
    width: 100%;
    height: auto;
    min-width: 320px;
    text-align: center;
    color: #2c3e50;

    .main-content {
      min-height: $main-content-block-height;
      width: 100%;
      height: 100%;
      margin-top: 50px;

      .main-content-row {
        width: 90%;
        height: 100%;

        .main-content-container {
          position: relative;
          width: 100%;
        }
      }
  }
}
</style>
