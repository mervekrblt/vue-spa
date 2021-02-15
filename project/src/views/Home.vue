<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div class="home">
    <div>
      <h1>Merve</h1>
    </div>
  </div>
</template>


<style scoped>
.home{
  height: 80vh;
}
</style>