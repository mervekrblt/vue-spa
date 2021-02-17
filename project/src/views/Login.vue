<script>
import {mapState, mapActions} from 'vuex'



export default {
  name: 'Login',
  data(){
    return {
      name: "",
      email: "",
      //password:"", for security
    }
  },
  computed: {
    ...mapState(['user', 'logedIn']),
  },
  methods: {
    ...mapActions(['setUser', 'userLogIn']),

    login(){
      const params={
          name: this.name,
          email: this.email,
        }
        this.setUser(params)
        //console.log(this.user)

        //hide login form with v-if="!this.logedIn"
        this.userLogIn(true)
        //console.log(this.logedIn)

    },

    
  },
}
</script>

<template>
    <div class="login">

    <form v-if="!this.logedIn">
      <label >Name</label>
      <input v-model="name" type="text"  placeholder="name">

      <label >Email</label>
      <input v-model="email" type="email"  placeholder="email">

      <label >Password</label>
      <input type="password" placeholder="password">

      <button type="submit" @click.prevent="login()" >Login</button>
    </form>

    <div v-else id="info">
      <h1>Name: {{ user.name }} </h1>
      <h1>Email: {{ user.email }} </h1>
    </div>
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
  margin-bottom: 2vh;
}

button{
  height: 4vh;
  width: 10vh;
  border-radius: 1vh;
  font-size: 3vh;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
}

#info{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30vh;
  font-family: 'Dancing Script', cursive;
  background-color: rgb(229, 240, 229, 0.3);
  border-radius: 2vh;
}

label{
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  font-size: 3vh;
  text-align: left;
  background-color: rgb(226, 202, 170, 0.3);
  width: 30vh;
  border-radius: 1vh;
}

</style>