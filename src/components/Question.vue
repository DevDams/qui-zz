<template>
  <div class="container">
    <div class="theme">
      <h2>Thème : <span>{{ theme}}</span></h2>
    </div>
    <div class="question_box">
      <div class="counter">
        <span>Question : {{ index + 1 }}/30</span>
        <span>Réponse correcte : {{ correct }}</span>
      </div>
      <div class="question">
        <p>{{ currentQuestion.question }}</p>
        <hr>
        <p
          v-for="(answer, index) in currentQuestion.propositions"
          :key="index"
          @click="selectAnswer(index)"
          class="isCorrect"
          :class="[
            !submit && select === index ? 'selected' : 
            submit && select === index && currentQuestion.réponse === currentQuestion.propositions[select] ? 'true' : 
            submit && select === index && currentQuestion.réponse !== currentQuestion.propositions[select] ? 'dd' : 
            submit && select !== correctIndex && currentQuestion.réponse === currentQuestion.propositions[correctIndex] ? 'ee': ''
          ]"
        > {{ answer }} </p>
      </div>
      <button @click="nextQuestion">Suivant</button>
      <button @click="submitQuestion" :disabled="select === null">Valider</button>
      <hr>
      <p v-if="submit">{{ currentQuestion.anecdote }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      validate: true,
      submit: false,
      select: null,
      correct: 0,
      correctIndex: null 
    }
  },
  props: ['index', 'currentQuestion', 'theme', 'nextQuestion'],
  watch: {
    currentQuestion () {
      this.select = null
      this.submit = false
      this.validate = true
    }
  },
  methods: {
    selectAnswer (index) {
      if (this.validate) {
        this.select = index
      }
    },
    submitQuestion () {
      // this.select = null
      this.submit = true
      this.validate = false

      let correct_choice = document.querySelector('.selected')
      
      if (this.currentQuestion.réponse === this.currentQuestion.propositions[this.select]) {
        this.correct++
        correct_choice.classList.add('correct_answer')
      } else {
        console.log(this.currentQuestion.réponse)
      }

      if (this.currentQuestion.propositions.includes(this.currentQuestion.réponse)) {
        this.corretIndex = this.currentQuestion.propositions.indexOf(this.currentQuestion.réponse)
      }
      console.log(this.corretIndex)
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
}

.theme {
  margin-top: 70px;
}

.theme h2 {
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 1.1em;
  color: #1B695F;
}

.theme h2 span {
  text-transform: capitalize;
  color: #131313;
}

.question_box {
  margin-top: 50px;
}

.selected {
  color: lightblue;
}

.true {
  color: green;
}

.dd {
  color: red;
}

.ee {
  color: coral;
}
</style>
