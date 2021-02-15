<script>
export default {
  name: 'Header',
  data() {
    return {
      linkedIn: "https://tr.linkedin.com/public-profile/in/merve-karabulut-687027149",
      github: "https://github.com/mervekrblt",
    }
  },
}
</script>

<template>
<section id="header">
    <div>
        
    </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
</section>   

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  background-color:  #30343f;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 15%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
