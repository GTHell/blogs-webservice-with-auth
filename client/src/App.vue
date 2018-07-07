<template>
  <div id="app">
    <nav-item>
    <router-view/>
    </nav-item>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    "nav-item": Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
