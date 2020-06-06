
<template>
  <v-form @submit.prevent="submit">
    <v-container>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.password"
            :rules="nameRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>
        <v-btn class="btn btn-success" type="submit" color="green" >submit</v-btn>

    </v-container>
  </v-form>
</template>

<script>
export default {
    data(){
        return{
            form:{
                email:null,
                password: null
            }
        }
    },
    methods: {
        submit(){
            axios.post('/api/auth/login', this.form) 
            .then(res=> console.log(res.data))
        }
    }
}
</script>


