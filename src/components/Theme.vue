<template>
  <div class="container">
    <h1>Start</h1>
    <router-link to="/about" class="start" @click="diseable">Chat</router-link>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  data () {
    return {
      cat: ''
    }
  },
  methods: {
    debutant () {
      this.cat = this.$store.state.catTheme.quizz.fr.débutant
      console.log(this.cat)
    },
    confirme () {
      this.cat = this.$store.state.catTheme.quizz.fr.confirmé
      console.log(this.cat)
    },
    expert () {
      this.cat = this.$store.state.catTheme.quizz.fr.expert
      console.log(this.cat)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
