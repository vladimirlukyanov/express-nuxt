<template>
  <v-navigation-drawer app fixed clipped stateless v-model="$store.state.drawer" disable-route-watcher>
    <v-list>
      <nuxt-link tag="v-list-tile" to="/home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </nuxt-link>
      <v-list-group prepend-icon="account_circle" value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.prevent="$store.commit('toggleUserDialog')">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Create New</v-list-tile-title>
        </v-list-tile>
        <nuxt-link tag="v-list-tile" to="/users">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title nuxt-link="/users">Get All Users</v-list-tile-title>
        </nuxt-link>
      </v-list-group>
    </v-list>
    <v-dialog :value="$store.state.createUser" max-width="60%">
      <new-user></new-user>    
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
import newUser from '../components/newUser'

export default {
  components: {
    newUser
  },
  data () {
    return {
      dialog: this.$store.state.createUser
    }
  }
}
</script>
