<template>
  <div class="container">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
