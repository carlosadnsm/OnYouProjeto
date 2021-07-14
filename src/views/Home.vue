<template>
  <div class="home">
    <Menu />

    <div class="container">
      <h1>{{ title }}</h1>
      <p>
        Mesmo que não goste tanto quanto eu todos têm o seu favorito não é
        mesmo?
      </p>
    </div>

    <div class="container-images">
      <img
        class="images"
        alt="Tênis Nike Air Force 1 Low Pine Green"
        src="../imagens/airforce1.jpg"
      />
      <img
        class="images"
        alt="Tênis Nike Air Jordan 1 High Pine Green"
        src="../imagens/airjordan1.jpg"
      />
      <img
        class="images"
        alt="Tênis Nike Dunk Low OffWhite Pine Green"
        src="../imagens/dunkLow.jpg"
      />
    </div>
    <h3>
      Prazer meu nome é Carlos e além de programador sou um apaixonado por
      tênis, <br />
      por isto este será o tema do meu formulário para saber se vocês têm bom
      gosto
    </h3>
    <div className="container d-grid gap-2">
      <a class="btn" href="/survey"
        ><h2>Clique aqui para realizar o formulário</h2></a
      >
    </div>
  </div>
</template>

<script>
import Menu from "../components/shared/menu.vue";

export default {
  name: "Home",
  components: { Menu },
  data() {
    return {
      title: "Você gosta de Tênis?",
    };
  },
};
</script>
<style>
.btn {
  background: #0a4e0e;
  border-radius: 6px;
  font-size: 20px;
  color: #fff;
  padding-bottom: 10px;
  cursor: pointer;
}

.btn:hover {
  color: rgb(131, 128, 128);
}

#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c2b21;
  margin-top: 10px;
}

.container-images {
  display: flex;
  justify-content: center;
}

.home {
  height: 100%;
  width: 100%;
}

.images {
  width: 400px;
  background-repeat: no-repeat;
  background: cover;
  padding: 10px;
}
</style>
