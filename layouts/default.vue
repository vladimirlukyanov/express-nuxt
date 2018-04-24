<template>
  <v-app dark>
    <sidebar></sidebar>
    <v-toolbar color="red" fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="$store.commit('toggleDrawer')"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Nuxt Admin</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <nuxt/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from '../components/sidebar'

export default {
  components: {
    sidebar
  }
}
</script>

<style>

</style>
