<template>
  <div class="main-banner" :style="{ backgroundImage: `url(${bannerImg})` }">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
import bannerImg from '@/assets/burger.jpg'

export default {
  name: 'Banner',
  data() {
    return { bannerImg }
  }
}
</script>

<style scoped>
.main-banner {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: 0 -250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.main-banner h1 {
  color: #fff;
  font-size: 60px;
  margin-left: 50px;
  text-align: center;
  background: #222;
  padding: 20px 40px;
}
</style>
