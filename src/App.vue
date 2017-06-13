<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-content">
      <div class="main-content-row hc-c">
        <div class="main-content-container vc-c">
          <router-view></router-view>
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
    name: 'app'
  }

</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 480px;
    text-align: center;
    color: #2c3e50;

    .main-content {
      background-image: url('~Images/hz/background.png');
      background-repeat: repeat-x;
      background-size: contain;
      height: 100%;
      width: 100%;

      .main-content-row {
        width: 90%;
        height: 100%;

        .main-content-container {
          position: relative;
          width: 100%;
          // height: 80%;
        }
      }
    }
  }
</style>
