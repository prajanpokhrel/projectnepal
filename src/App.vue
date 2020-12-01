<template>
  <div id="app">
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'


export default {
  name: 'App',
  components: {
    AppFooter
  
  }
}
</script>

<style>
/* #app {
  font-family;
  
} */
</style>
