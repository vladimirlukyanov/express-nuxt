<template>
  <v-stepper v-model="formStep" dark>
    <v-stepper-header>
      <v-stepper-step step="1" :complete="formStep > 1">Enter New User Info</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="formStep > 2">Verify and Create</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Created User Data</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-text-field label="First Name" v-model="formData.name.first_name"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="Middle Name" v-model="formData.name.middle_name"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="Last Name" v-model="formData.name.last_name"></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-text-field label="Email" hint="Enter your email: user@user.com" v-model="formData.email"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-select :items="roles" v-model="formData.role" label="Role" single-line></v-select>
        </v-flex>
        <v-btn color="red" @click.prevent="formStep = 2">Continue</v-btn>
        <v-btn flat @click.prevent="$store.commit('toggleUserDialog')">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <pre>{{ formData }}</pre>
        <v-btn color="red" @click.prevent="submit">Submit</v-btn>
        <v-btn flat @click.prevent="$store.commit('toggleUserDialog')">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <pre>{{ newUser }}</pre>
        <v-btn color="red" @click.prevent="$store.commit('toggleUserDialog')">Done</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: {
          first_name: '',
          middle_name: '',
          last_name: ''
        },
        email: '',
        role: null
      },
      roles: [
        {
          text: 'User',
          value: 'USER'
        },
        {
          text: 'Admin',
          value: 'ADMIN'
        }
      ],
      newUser: null,
      formStep: 0
    }
  },
  methods: {
    async submit () {
      console.log(this)
      try {
        await this.$store.dispatch('newUser', this.formData)
        const data = await this.$store.state.newUser.data
        this.newUser = data
        this.formStep = 3
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    this.$store.commit('clearNewUser')
  }
}
</script>
