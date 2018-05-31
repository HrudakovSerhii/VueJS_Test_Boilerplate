<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-content">
      <div class="main-content-row hc-c">
        <div class="main-content-container">
          <router-view></router-view>
          <message></message>
          <templateOne></templateOne>
          <templateTwo></templateTwo>
          <templateTwoCopy></templateTwoCopy>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Header from 'Components/Header.vue'
    import Footer from 'Components/Footer.vue'

    import Message from 'Templates/input/Message';
    import AppTemplates from 'Templates/html/index';

    const templateOne = AppTemplates.templateOne;

    Vue.component('app-header', Header);
    Vue.component('app-footer', Footer);
    Vue.component('templateOne', templateOne);
    Vue.component('templateTwo', AppTemplates.templateTwo);
    Vue.component('message', Message);

    Vue.component('templateTwoCopy', {
        name: 'template-2',
        template: '#template-2'
    });


  export default {
  	name: 'app',
    created: {

    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">

  @import "~Styles/base.scss";
  @import "~Styles/variables/custom_variables.scss";

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

  h1 {
    color: red;
  }
</style>
