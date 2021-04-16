<template>
  <div class="container">
    <div class="theme">
      <h2>Thème : <span>{{ theme}}</span></h2>
    </div>
    <div class="question_box">
      <div class="counter">
        <p class="question_number"><span>Question :</span> {{ index + 1 }}/30</p>
        <p class="correct_question"><span>Réponse correcte :</span> {{ correct }}</p>
      </div>
      <div class="question">
        <p>{{ currentQuestion.question }}</p>
      </div>
      <div class="answer_box">
        <p
          v-for="(answer, index) in currentQuestion.propositions"
          :key="index"
          @click="selectAnswer(index)"
          class="answer"
          :class="[
            !submit && select === index ? 'selected' : 
            submit && select === index && currentQuestion.réponse === currentQuestion.propositions[select] ? 'true' : 
            submit && select === index && currentQuestion.réponse !== currentQuestion.propositions[select] ? 'dd' : ''
          ]"
        >{{ answer }}</p>
      </div>
      <div class="button">
        <button v-show="index === 29 && submit" @click="score">score</button>
        <button v-show="index < 29" @click="nextQuestion" :disabled="index === 29">Suivant</button>
        <button @click="submitQuestion" :disabled="select === null || submit">Valider</button>
      </div>
      <div class="anecdote" v-if="submit">
        <h2>Anecdote :</h2>
        <p>{{ currentQuestion.anecdote }}</p>
      </div>
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
    },
    score () {
      console.log("nombre de bonne réponse", this.correct)
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
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

.question_box .counter {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
}

.question_box .counter .question_number, .correct_question {
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -1px;
}

.question_box .counter .question_number span {
  font-weight: 600;
  color: #005B48;
}

.question_box .counter .correct_question {
  color: #F97D7D;
}

.question_box .counter .correct_question span {
  font-weight: 600;
  color: #005B48;
}

.question_box .question p {
  font-weight: 500;
  font-size: 18px;
}

.question_box .answer_box {
  margin-top: 30px;
}

.question_box .answer {
  border: 1px solid rgba(255, 255, 255, 0.445);
  margin: 25px 0;
  padding: 16px 0;
  border-radius: 6px;
  background: linear-gradient(145deg, #ffffe8, #dbd6c3);
  box-shadow:  11px 11px 24px #d8d4c1,
              -11px -11px 24px #fffff14f;
  font-weight: 600;
}

.question_box .button {
  margin-top: 30px;
}

.question_box .button button {
  width: 110px;
  height: 40px;
  outline: none;
  color: black;
  border: 1px solid #2f485891;
  border-radius: 12px;
  margin: 0 10px;
  font-weight: 700;
  text-transform: uppercase;
  background: #F3EED9;
box-shadow: inset 11px 11px 24px #d8d4c1,
            inset -11px -11px 24px #fffff1;
}

.question_box .anecdote {
  margin-top: 50px;
  text-align: left;
}

.question_box .anecdote h2 {
  text-transform: uppercase;
  letter-spacing: -2px;
}

.selected {
  background: lightblue !important;
}

.true {
  background: #007560 !important;
  color: white;
}

.dd {
  background: #F97D7D !important;
  color: white;
}

.ee {
  color: coral;
}

@media (max-width: 350px) {
  .question_box .counter {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }

  .question_box .counter .question_number, .correct_question {
    margin-top: 5px;
  }
}
</style>
