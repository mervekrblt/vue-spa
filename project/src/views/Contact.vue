<script>
import {mapState} from 'vuex'
import "vue-select/dist/vue-select.css";

export default {
  name: 'Contact',
  component: {
  },
  data(){
    return {
      name: "",
      email: "",
      phone: "",
      text: "",
      country_code: "",
      submited: false,

      countryList: [
	      { id: "TR", name: "Turkey" },
	      { id: "US", name: "United States of America" },
	      { id: "GB", name: "United Kingdom" },
	      { id: "DE", name: "Germany" },
	      { id: "SE", name: "Sweden" },
	      { id: "KE", name: "Kenya" },
	      { id: "BR", name: "Brazil" },
	      { id: "ZW", name: "Zimbabwe" }
      ]
    }
  },

  computed: {
    ...mapState(['user', 'logedIn']),
  },

  methods: {
    submit(){
      //console.log(this.$refs.select.$el.innerText)
      if(this.name == '' || this.text == '' || this.country_code == ''){

        alert("Please enter all required information")

      }else if(this.validateEmail() && this.validatePhone() && this.phone && this.text && this.country_code){

        const params={
          name: this.name,
          email: this.email,
          phone: this.phone,
          text: this.text,
          country_code: this.country_code.id,
        }

        this.submited = true
        console.log(params)
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
  },

  validatePhone(){
    const number = /^([0-9]{3}) [0-9]{3} [0-9]{2} [0-9]{2}$/
    if(this.phone.match(number)){
      return true
    }else {
      alert('Invalid phone number')
      return false
    } 
  }
  }
}
</script>

<template>
<section class="contact">
  <form v-if="!submited">

    <input v-model="name" type="text" placeholder="Name" v-if="this.logedIn ? this.name= this.user.name :' ' "> 

    <input v-model="email" type="email" placeholder="Email" v-if="this.logedIn ? this.email= this.user.email : ' ' ">

    <input v-model="phone" type="text" placeholder="555 555 55 55">

    <textarea placeholder="Type your request" v-model="text" name="" id="" cols="20" rows="10"></textarea>

    <v-select v-model="country_code" placeholder="Select Country" label="name" :options="countryList"></v-select>

    <button type="submit" @click.prevent="submit">Submit</button>
  </form>

  <div v-else>
    <h1>Your request is submitted</h1>
  </div>
 
  
</section>



</template>


<style scoped>

.contact{
  height: 90vh;
}

form{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50vh;
  height: 70vh;
}

input{
  font-family: 'Dancing Script', cursive;
  width: 50vh;
  border-radius: 1vh;
  height: 5vh;
  font-size: 3vh;
  font-weight: 600;
  margin-bottom: 2vh;
}

textarea{
  margin-bottom: 2vh;
  max-width: 60vh;
  max-height: 30vh;
  border-radius: 1vh;
  font-family: 'Dancing Script', cursive;
  scroll-behavior: inherit;
  font-size: 3vh;
  font-weight: 600;
}

button{
  margin: 0 auto;
  height: 4vh;
  border-radius: 1vh;
  font-size: 3vh;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  margin-top: 2vh;
}
</style>