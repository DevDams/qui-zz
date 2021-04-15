<template>
  <div class="container">
    <div class="theme">
      <h2>Thème : <span>{{ theme}}</span></h2>
    </div>
    <div class="question_box">
      <div class="question">
        <p>{{ currentQuestion.question }}</p>
        <hr>
        <p
          v-for="(answer, index) in currentQuestion.propositions"
          :key="index"
          @click="selectAnswer(index)"
          :class="[select === index ? 'selected' : '']"
        > {{ answer }} </p>
      </div>
      <button @click="nextQuestion">Suivant</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: null
    }
  },
  props: ['currentQuestion', 'theme', 'nextQuestion'],
  watch: {
    currentQuestion () {
      this.select = null
    }
  },
  methods: {
    selectAnswer (index) {
      this.select = index
      console.log(this.select)
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
  color: red;
}
</style>
