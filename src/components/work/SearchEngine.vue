<template>
  <div id="app">
    <h1>Vue Select - Countries</h1>
    <v-select :options="countries" label="country"></v-select>
</div>
</template>

<script>
export default {
  components: {
    vSelect: window["vue-select"]
  },
  data() {
    return {
      countries: [
        { country: "Spain" },
        { country: "France" },
        { country: "Ghana" },
        { country: "Nigeria" },
        { country: "Brazil" },
        { country: "Ecuador" }
      ]
    };
  }
}

</script>

<style scoped>
span {
  display: flex;

  img {
    width: 50px;
    margin-right: 20px;
  }
}
</style>