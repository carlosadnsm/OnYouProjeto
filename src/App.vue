<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import { routes } from "./routes";

export default {
  components: {},
  data() {
    return { routes };
  },
};
</script>

<style>
#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c2b21;
}
.pagina-enter,
.pagina-leave {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>
