<script>
import {mapState, mapActions} from 'vuex'


export default {
  name: 'Login',
  data(){
    return {
      name: "",
      email: "",
      password: ""
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
          password: this.password
        }

        //chechking email, name and password are fullfilled then setUser and turn logIn into true
        if(this.$refs.password.value === "" || this.name === ""){
          alert("All information is required")
        }else if(this.validateEmail() && this.$refs.password.value !== "" && this.name){
          this.setUser(params)
        //hide login form with v-if="!this.logedIn"          
          this.userLogIn(true)
        }
    },

    validateEmail() {
    if (/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      //console.log(this.email)
      return true
    } else {
      alert(`${this.email} email is not valid`)
      return false
    }
}
  },
}
</script>

<template>
    <div class="login">

      <!--login -->
    <form v-if="!this.logedIn">
      <label >Name</label>
      <input v-model="name" type="text" required placeholder="name">

      <label >Email</label>
      <input v-model="email" type="email"  placeholder="email" @change="validateEmail">

      <label >Password</label>
      <input type="password" ref="password" placeholder="password" required>

      <button type="submit" @click.prevent="login()" >Login</button>
    </form>

    <!--info-->
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