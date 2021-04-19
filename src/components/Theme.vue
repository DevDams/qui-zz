<template>
  <div class="container">
    <h1>Choisissez un thème de qui-zz</h1>
    <div class="cards">
      <div class="cat">
        <h3>Chat</h3>
        <router-link to="/chat">
          <div class="theme theme-1">
            <img src="@/assets/icon/cat2.svg" alt="cat icon">
          </div>
        </router-link>
      </div>
      <div class="sante">
        <h3>Santé</h3>
        <router-link to="/sante">
          <div class="theme theme-2">
            <img src="@/assets/icon/health2.svg" alt="cat icon">
          </div>
        </router-link>
      </div>
      <div class="Mystere">
        <h3>Mystère</h3>
        <router-link to="/mystere">
          <div class="theme theme-3">
            <img src="@/assets/icon/secret.svg" alt="cat icon">
          </div>
        </router-link>
      </div>
      <div class="culture">
        <h3>Culture générale</h3>
        <router-link to="/culture-generale">
          <div class="theme theme-4">
            <img src="@/assets/icon/brain.svg" alt="cat icon">
          </div>
        </router-link>
      </div>
      <div class="corps-humain">
        <h3>Corps hmain</h3>
        <router-link to="/corps-humain">
          <div class="theme theme-5">
            <img src="@/assets/icon/human-body.svg" alt="cat icon">
          </div>
        </router-link>
      </div>
    </div>
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
.container {
  width: 90%;
  margin: 120px auto;
}

h1 {
  letter-spacing: -2px;
  line-height: 1.1em;
  color: #005B48;
}

h3 {
  font-weight: 600;
  color: #3B3828;
  margin-top: 40px;
}

.cards {
  width: 100%;
  margin: 60px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.theme {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 170px;
  margin-top: 10px;
  border-radius: 12px;
  background: #f3eed9;
  box-shadow:  6px 6px 30px #cfcab8,
              -4px -4px 10px #fffffa;
}

.theme img {
  width: 60px;
}

@media (min-width: 500px) {
  .theme {
    margin: 10px 10px 0;
  }
}

@media (min-width: 754px) {
  .cards {
    width: 670px;
  }
}

@media (max-width: 360px) {
  .theme {
    width: 170px;
    height: 180px;
  }
}
</style>
