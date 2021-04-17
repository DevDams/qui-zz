<template>
  <div>
    <Navbar />
      <Question
        :theme="questions.thème"
        :currentQuestion="questions.quizz.fr.débutant[index]"
        :nextQuestion="next"
        :index="index" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Question from '@/components/Question.vue'
export default {
  name: 'Chat',
  data () {
    return {
      questions: this.$store.state.cultureTheme,
      index: 0
    }
  },
  components: {
    Navbar,
    Question
  },
  methods: {
    next () {
      if (this.index <= 30) {
        this.index++
      }
    }
  }
}
</script>

<style scoped>

</style>
