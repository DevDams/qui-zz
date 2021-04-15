<template>
  <div class="container">
    <Navbar />
    <Theme />
  </div>
</template>

<script>
import Theme from '@/components/Theme.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Start',
  data () {
    return {
    }
  },
  components: {
    Theme,
    Navbar
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
