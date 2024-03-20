<template class="template">
  <div class="position">
    <div class="search">
      <font-awesome-icon class="icon fa-fw" :icon="['fas', 'magnifying-glass']"/>
      <input class="input" type="text" placeholder="Search" />
    </div>
    <div class="buttons">
      <button class="button fa-fw">
          <font-awesome-icon :icon="['fas', 'envelope']" />
      </button>
      <button class="button fa-fw">
          <font-awesome-icon :icon="['fas', 'circle-half-stroke']" />
      </button>
      <button class="button fa-fw">
          <font-awesome-icon :icon="['fas', 'user']" />
      </button>
    </div>
  </div>
</template>

<style scoped>

.position {
  display: flex;
  padding: 0rem 1.5625rem 0rem 1.5625rem;
  justify-content: space-between;
}

.search {
  display: flex;
}

.buttons {
  display: flex;
  margin-right: 0.9375rem;
}

.icon {
    margin-right: 1.25rem;
    height: 1.5625rem;
    width: 1.5625rem;
    /* color: rgb(217,217,217); */
    color: black;
    
}

.button {
    position:relative;
    border-radius: 1.25rem;
    border-color: transparent;
    width: 3.125rem;
    height: 3.125rem;
    background-color: transparent;
    color: rgb(217,217,217);
}

.input {
  display: float;
  width: 40.625rem;
  margin: 1.25rem auto;
  padding: 0.625rem 2.8125rem;
  background-color: rgba(217,217,217);
  background-size: 0.9375rem 0.9375rem;
  font-size: 1em;
  border: none;
  border-radius: 0.3125rem;
  margin-right: 6.25rem;
  box-shadow: rgb(270, 270, 270) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>
