<template>
  <div class="container">
    <div class="content">
      <router-link to="/">
        <h1>Qui-zz.</h1>
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
  margin: auto;
  text-align: left;
}

a {
  text-decoration: none;
  color: #F97D7D;
  letter-spacing: -1px;
}
</style>
