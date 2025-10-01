<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: { NavBar, Footer }
}
</script>

<style>
* {
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
