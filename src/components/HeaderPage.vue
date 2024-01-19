<template>
  <header>
    <span class="menu-toggle" @click="toggleMenu">+</span>
    <nav class="nav" v-bind:class="{active:menuOpen}">
      <span class="close" @click="toggleMenu">X</span>
      <ul class="nav-ul">
        <li class="nav-li">
          <a class="nav--link" href="#">Home</a>
        </li>
        <li class="nav-li">
          <a class="nav--link" href>About</a>
        </li>
        <li class="nav-li">
          <a class="nav--link" href>Contact</a>
        </li>
        <li class="nav-li">
          <a class="btn btn-main" href>Call now</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderPage",
  data: () => ({
    menuOpen: false
  }),
  methods: {
    toggleMenu() {
      console.log("click");
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style  scoped>
header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.nav-ul {
  flex: 1;
  list-style: none;
  display: flex;
}
.nav-li:not(:last-child) {
  margin-right: 1rem;
}
.nav--link {
  display: block;
  padding: 1rem 2rem;

  text-decoration: none;

  text-transform: uppercase;
  font-weight: 700;
  color: var(--white-color);
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
  position: relative;
}
.nav--link:hover {
  letter-spacing: 1px;
}

.nav--link::before,
.nav--link::after {
  visibility: hidden;
  content: "";
  margin: 0 auto;
  display: block;
  border: 1px solid var(--white-color);
  transition: width 0.5s ease-in-out;
  position: absolute;
  width: 0;
}
.nav--link::before {
  right: 0;
  left: 0;
  top: 0;
}
.nav--link::after {
  right: 0;
  left: 0;
  bottom: 0;
}
.nav--link:hover:before,
.nav--link:hover:after {
  visibility: visible;
  width: 80%;
}

.logo {
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 1.5rem;
  font-family: "Helvetica", Roboto;
  color: var(--white-color);
  cursor: pointer;
}
.logo-svg {
  width: 100%;
  height: 100px;
}
.menu-toggle,
.nav .close {
  display: none;
}
@media (max-width: 800px) {
  .menu-toggle {
    color: var(--white-color);
    background: tomato;
    padding: 0.5rem;
    cursor: pointer;
    display: block;
  }
  .nav {
    position: right;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
    transform: translate3d(-100%, 0, 0);
  }
  .nav.active {
    transform: translateZ(0);
  }
  .nav .close {
    color: var(--white-color);
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 40px;
    height: 40px;
    font-weight: 900;

    background: tomato;

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .nav-ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav--link:not(:first-child),
  .btn {
    margin-top: 2rem;
  }
}
</style>
