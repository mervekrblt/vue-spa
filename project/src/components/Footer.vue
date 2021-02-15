
<script>
export default {
  name: 'Footer',
  data() {
    return {
      linkedIn: "https://tr.linkedin.com/public-profile/in/merve-karabulut-687027149",
      github: "https://github.com/mervekrblt",
    }
  },
}
</script>

<template>
<section id="footer">
      <p>Made by Merve Karabulut</p>
      <p><i class="fab fa-linkedin-in"></i> <a :href="linkedIn">LinkedIn</a></p>
      <p><i class="fab fa-github"></i> <a :href="github"> GitHub </a> </p>
      <p>© 2021</p>
      
      
    
</section>   

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  margin: 1%
}

#footer{
  background-color:  #30343f;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

a{
  color: tomato;
}

</style>
