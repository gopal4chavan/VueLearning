<template>
  <Comp />
</template>

<script>
// import Comp from './components/One.vue'
// import Comp from './components/One-api.vue';
// import Comp from './components/Two.vue';
// import Comp from './components/Two-api.vue';
// import Comp from './components/Three.vue';
// import Comp from './components/Three-api.vue';
// import Comp from './components/Four.vue';
import Comp from './components/Five.vue';
// import Comp from './components/list.vue';
// import Comp from './components/list-api/list-api.vue';

export default {
  name: 'App',
  components: {
    Comp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
