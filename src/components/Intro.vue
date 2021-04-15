<template>
  <div class="container welcome">
    <div class="creativity">
      <img src="@/assets/images/Creativity.svg" alt="">
    </div>
    <h1>Bienvenue sur Qui-zz</h1>
    <img class="scribble in" src="@/assets/icon/scribble.svg" alt="">
    <div class="home_link">
      <router-link to="/start" class="start">
        Commencer
        <img src="@/assets/icon/up-arrow.svg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {}
}
</script>

<style scoped>
.container {
  position: relative;
  width: 90%;
  margin: auto;
}

.creativity {
  width: 400px;
  margin: 30px auto 0;
}

.scribble {
  position: absolute;
  width: 60px;
}

.in {
  transform: rotate(20deg);
  left: 410px;
}

.home_link {
  margin-top: 60px;
}

.start {
  width: 200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #131313;
  font-weight: 600;
  padding: 20px 40px;
  border-radius: 22px;
  background: linear-gradient(145deg, #dbd6c3, #ffffe8);
  box-shadow:  6px 6px 11px #ddd9c5,
             -6px -6px 11px #ffffed;
  transition: .3s all ease-in-out;
}

.start img {
  width: 30px;
  margin: 0 0 0 10px;
  transform: rotate(90deg);
}

h1 {
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: -2px;
}
</style>
