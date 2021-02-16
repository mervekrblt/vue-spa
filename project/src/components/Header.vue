<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Header',
    data() {
      return {
        linkedIn: "https://tr.linkedin.com/public-profile/in/merve-karabulut-687027149",
        github: "https://github.com/mervekrblt",
        path: "",
      }
    },

    computed: {
      ...mapState(['user', 'logedIn']),
    },

    methods: {
      changePath() {
        const newPath = this.$route.name
        //console.log(newPath)
        this.path = newPath
      },
      //
      showUserName(){
        if(this.logedIn){
          return this.user.name.toUpperCase()
        }else return "Login"
      }
    },
  }
</script>

<template>
  <section id="header">
    <div id="left">
      <i class="fas fa-chess-queen"></i>
      <div></div>
      <h3> {{ path }} </h3>
    </div>
    <div>
      <div @click="changePath()" id="right">
        <router-link to="/">Home</router-link>|
        <router-link to="/login"> {{ showUserName() }} </router-link>|
        <router-link to="/contact-us">Contact Us</router-link>
      </div>
    </div>


  </section>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    background-color: #30343f;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 15%;
    font-weight: bold;
    color: #b6cadd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20vh;
  }

  #right {
    display: flex;
    align-items: center;
    color: chartreuse;
    justify-content: space-around;
    width: 40vh;
  }
</style>