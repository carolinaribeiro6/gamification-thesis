<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import sidebar from './components/SideBar.vue';
import navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    sidebar,
    navbar
  }
}
</script>

<style>
.wrapper {
  display:flex;
}
#app {
  font-family: Tw Cen MT Condensed, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1C3E70;
  background-color: rgb(233,233,233);
}

.root {
  --dark-blue: #1C3E70;
  --mid-blue: #2D5FA9;
  --lit-blue: #C2D7FB;
  --light-blue: #DFEBFF;
  --white: #FFFFFF;
  --black: #000000;
  --sidebar-width: 300px;
}
</style>
