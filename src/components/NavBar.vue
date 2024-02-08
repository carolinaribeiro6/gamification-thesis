<template class="template">
  <div>
    <font-awesome-icon class="icon fa-fw" :icon="['fas', 'magnifying-glass']"/>
    <input class="input" type="text" placeholder="Search" />
    <button class="button fa-fw">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
    </button>
    <button class="button fa-fw">
        <font-awesome-icon :icon="['fas', 'circle-half-stroke']"/>
    </button>
    <button class="button fa-fw">
        <font-awesome-icon :icon="['fas', 'user']"/>
    </button>
  </div>
</template>

<style scoped>

.icon {
    margin-right: 20px;
    height: 25px;
    width: 25px;
    /* color: rgb(217,217,217); */
    color: black;
    
}

.button {
    position:relative;
    border-radius: 20px;
    border-color: transparent;
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: rgb(217,217,217);
}

/* body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
} */

.input {
  display: float;
  width: 650px;
  margin: 20px auto;
  padding: 10px 45px;
  background-color: rgba(217,217,217);
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-right: 100px;
  box-shadow: rgb(270, 270, 270) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>
