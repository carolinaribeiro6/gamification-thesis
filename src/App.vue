<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Tw Cen MT Condensed, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1C3E70;
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
