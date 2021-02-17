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
      country: "",
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
    ...mapState(['user']),
  },

  methods: {
    submit(){
      //console.log(this.$refs.select.$el.innerText)
      console.log(this.name)
      console.log(this.phone)
      console.log(this.text)
      console.log(this.country.name)
    }
  }

}
</script>

<template>
<section class="contact">
  <form>

    <input v-model="name" type="text" placeholder="Name">

    <input v-model="email" type="email" placeholder="Email">

    <input v-model="phone" type="text" placeholder="Phone">

    <textarea v-model="text" name="" id="" cols="20" rows="10"></textarea>

    <v-select v-model="country" placeholder="Select Country" label="name" :options="countryList"></v-select>

    <button type="submit" @click.prevent="submit">Submit</button>
  </form>
  
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

</style>