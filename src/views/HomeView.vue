<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Monte o seu burger</h1>
      <BurgerForm />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import BurgerForm from '../components/BurgerForm'

export default {
  name: 'Home',
  components: {
    Banner,
    BurgerForm
  }
}
</script>

<style stoped>
.main-container {
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
}
.main-container h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
</style>