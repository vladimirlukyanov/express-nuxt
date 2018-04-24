<template>
  <data-table :table-title="tableTitle" :prop-headers="headers" :prop-items="users"></data-table>
</template>

<script>
import dataTable from '../../components/dataTable'

export default {
  components: {
    dataTable
  },
  async asyncData ({ app }) {
    try {
      await app.store.dispatch('getUsers')
      const data = await app.store.state.currentUsers.data
      return { users: data }
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Middle Name', value: 'middle_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' }
      ],
      tableTitle: 'Current Users'
    }
  }
}
</script>
