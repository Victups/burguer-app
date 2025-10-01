<template>
  <header id="nav">
    <router-link to="/" id="logo-link">
      <img :src="logoPath" alt="Logo" id="logo-img"/>
    </router-link>
    <nav id="menu">
      <router-link to="/">Fazer Pedido</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
  </header>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'NavBar',
  data() {
    return { logoPath: logo }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  min-height: 100px;
  background-color: #222;
  border-bottom: 4px solid #111;
}
#logo-img { width: 60px; height: auto; }
#menu { display: flex; gap: 25px; }
#menu a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s;
}
#menu a:hover {
  background-color: #000;
  color: #f0a500;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}

#nav a:hover {
  color: #FFF;
}
</style>
