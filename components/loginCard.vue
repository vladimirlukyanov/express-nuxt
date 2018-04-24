<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="red">
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="login" label="Login" type="text" color="red"></v-text-field>
        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" color="red"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red" @click.prevent="login" :loading="isLoading">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    login () {
      this.isLoading = true
    }
  }
}
</script>
