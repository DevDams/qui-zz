<template>
  <div class="container welcome">
    <h1>Bienvenue sur Qui-zz</h1>
    <router-link to="/start" class="start" @click="diseable">Commencer</router-link>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    diseable () {
      let page = document.querySelector('.welcome')
      page.classList.add('desappear')
    } 
  }
}
</script>

<style>
.container {
  width: 90%;
  margin: auto;
}

.start {
  text-decoration: none;
  color: black;
  background: #efefef;
  padding: 10px 25px;
  border-radius: 50px;
  transition: .3s all ease-in-out;
}

.desappear {
  display: none;
}
</style>
