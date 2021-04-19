<template>
  <div class="container">
    <div class="content">
      <router-link to="/">
        <h1>Qui-zz.</h1>
      </router-link>
      <router-link to="/start">
        <h1>thème</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  background-color: #131313;
  height: 70px;
}

.content {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  text-align: left;
}

a {
  text-decoration: none;
  color: white;
  letter-spacing: -1px;
  font-size: 12px;
}

a h1 {
  font-weight: 400;
}

@media (min-width: 986px) {
  .content {
    justify-content: space-around;
  }
}
</style>
