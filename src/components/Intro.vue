<template>
  <div class="container welcome">
    <div class="content">
      <div class="creativity">
        <img src="@/assets/images/Creativity.svg" alt="">
      </div>
      <h1>Bienvenue sur Qui-zz</h1>
      <div class="home_link">
        <router-link to="/start" class="start">
          Commencer
          <img src="@/assets/icon/up-arrow.svg" alt="">
        </router-link>
      </div>
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
  height: 700px;
  margin: 0 auto 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.creativity {
  width: 90%;
  margin: 50px auto 0;
}

.home_link {
  margin-top: 60px;
}

.start {
  width: 170px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #131313;
  font-weight: 600;
  padding: 17px;
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

@media (min-height: 750px) {
  .container {
    height: 100vh;
  }
}

@media (min-width: 767px) {
  .container {
    height: 100vh;
  }

  .creativity {
    width: 100%;
  }
}
</style>
