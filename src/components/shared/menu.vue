<template>
  <div class="menu-container">
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/survey">Formulário</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/analytics">Resultado</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.menu {
  list-style: none;
}

.menu-item {
  padding: 10px 30px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #0a4e0e;
  cursor: pointer;
  display: inline;
}

.menu-item a {
    color: #fff;
    display: inline-block;
}

.menu-item a:hover {
    color: rgba(255, 255, 255, 0.774);
}
</style>
