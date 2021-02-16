<script>
import {mapState, mapActions} from 'vuex'



export default {
  name: 'Login',
  data(){
    return {
      name: "",
      email: "",
      password:"",
      logedIn: false
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['setUser']),

    login(){
      const params={
          name:this.name,
          email:this.email,
          password:this.password
        }
        this.setUser(params)
        console.log(this.user)
    }
  },
}
</script>

<template>
    <div class="login">
    <form>
      <input v-model="name" type="text"  placeholder="name">
      <input v-model="email" type="email"  required placeholder="email"> 
      <input v-model="password" type="password"  required placeholder="password">
      <button type="submit" @click.prevent="login()">Login</button>
    </form>
  </div>
  
</template>


<style scoped>
.login{
  height: 70vh;
  display: flex;
}


form{
  display: flex;
  width: 30vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  padding: 10vh;
  border-radius: 2vh;
  background-color: rgb(229, 240, 229, 0.3);

}

input{
  font-family: 'Dancing Script', cursive;
  width: 30vh;
  border-radius: 1vh;
  height: 3vh;
  font-size: 3vh;
  font-weight: 600;
}

button{
  height: 4vh;
  width: 10vh;
  border-radius: 1vh;
  font-size: 3vh;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
}

</style>