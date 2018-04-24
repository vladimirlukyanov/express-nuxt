<script>
export default {
  props: [ 'tableTitle', 'propHeaders', 'propItems' ],
  data () {
    return {
      tableHeaders: this.propHeaders,
      tableItems: this.propItems,
      search: ''
    }
  }
}
</script>

<template>
  <v-card width="100%">
    <v-card-title>
      <h2>{{ tableTitle }}</h2>
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table :headers="tableHeaders" :items="propItems" :search="search" class="elevation-1" :rows-per-page-items="[10,15,20,25]">
      <template slot="items" slot-scope="props">
        <td v-for="header in tableHeaders" :key="header[props.item]">
          <nuxt-link class="text-link" :to="{ path: 'users/' + props.item.id }">{{ props.item[header.value] }}</nuxt-link>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<style lang="scss" scoped>
.text-link {
  color: white;
  text-decoration: none;
}
</style>
