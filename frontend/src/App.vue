<template>
  <div id="app">
    <div id="nav" class="className">
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: A°venir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  justify-content: center;
display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
