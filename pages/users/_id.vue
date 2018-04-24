<template>
  <pre>{{ user }}</pre>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ params }) {
    try {
      const { data } = await axios.get('api/users/' + params.id)
      return { user: data }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
