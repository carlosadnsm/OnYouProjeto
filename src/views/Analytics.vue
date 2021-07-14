<template>
  <div class="container">
    <h2>Resultados</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Podium</th>
          <th scope="col">Tênis mais caro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in results" v-bind:key="user">
          <td>{{ user.questionName }}</td>
          <td>{{ user.questionPrettier }}</td>
          <td>{{ user.questionExpensive }}</td>
        </tr>
      </tbody>
    </table>
    <p> A nível de curiosidade o tênis mais caro desses 3 é o Dunk Low em colaboração com a OffWhite,
      que chega a custar $1500, em segundo lugar está o Jordan 1 High que está na faixa de $650
      e por último o AirForce (que é o mais confortável dentre os 3) que está custando por volta de $120.
    </p>
    <a class="btn"  href="/"><h2>Voltar</h2></a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { results: null };
  },
  mounted() {
    axios
      .get(
        "https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/%7B1430ab26-ea5b-4f51-80df-ce6d26333393%7D"
      )
      .then((resp) => {
        this.results = resp.data;
        this.results = this.results.Data;
        console.log(this.results);
      });

    console.log(this.results);
  },
};
</script>

<style>
.a {
  width: 50px;
}
#app {
  font-family: 'Ubuntu Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c2b21;
}
</style>
