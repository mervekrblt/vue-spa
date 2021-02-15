<script>
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Footer,
      Header,
    },
  }
</script>

<template>
  <div id="app">

    <div id="nav">
      <Header></Header>
    </div>

    <div>
      <router-view />
    </div>
    <Footer></Footer>
  </div>


</template>

<style>
  body {
    background-image: radial-gradient(circle, #62d584, #35b582, #09957a, #00766c, #0c5757);
    background-repeat: no-repeat;
    background-size: cover;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  #nav {
    padding: 10vh;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>