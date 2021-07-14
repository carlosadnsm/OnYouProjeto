<template>
  <div class="container show">
    <!-- If you want to hide survey, comment the lines below -->
    <div class="container verde"><h1>FORMULÁRIO</h1></div>
    <survey :survey="survey"></survey>

    <div id="surveyResult"></div>

    <a class="btn"  href="/"><h2>Voltar</h2></a>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";

import { init as customWidget } from "../components/customwidget";

// widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);

SurveyVue.Serializer.addProperty("question", "tag:number");

export default {
  components: {
    Survey,
  },
  data() {
    var json = {
      locale: "pt-br",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "questionName",
              title: "Qual seu nome?",
              isRequired: true,
            },
            {
              type: "ranking",
              name: "questionPrettier",
              title:
                "Se pudesse fazer um podium de qual achou mais bonito como ficaria?",
              isRequired: true,
              choices: [
                {
                  value: "airForce1",
                  text: "Tênis Nike Air Force 1 Pine Green",
                },
                {
                  value: "airJordan1",
                  text: "Tênis Nike Air Jordan 1 High Pine Green",
                },
                {
                  value: "dunkLow",
                  text: "Tênis Nike Dunk Low OffWhite Pine Green",
                },
              ],
            },
            {
              type: "radiogroup",
              name: "questionExpensive",
              title: "Qual dos três você acha que é mais caro?",
              isRequired: true,
              choices: [
                {
                  value: "rg_airForce1",
                  text: "Tênis Nike Air Force 1 Pine Green",
                },
                {
                  value: "rg_airJordan1",
                  text: "Tênis Nike Air Jordan 1 High Pine Green",
                },
                {
                  value: "cb_dunkLow",
                  text: "Tênis Nike Dunk Low OffWhite Pine Green",
                },
              ],
            },
          ],
        },
      ],
      navigateToUrl: "/analytics",
      checkErrorsMode: "onComplete",
    };
    var model = new SurveyVue.Model(json);

    function sendDataToServer(model) {
      model.sendResult("b3461958-fdf7-47ef-a3ff-9b7fe864e522");

      //alert("The results are:" + JSON.stringify(model.data));
    }
    model.onComplete.add(function (model) {
      document.querySelector("#surveyResult").textContent =
        "Nome:\n" +
        JSON.stringify(model.data.questionName, null, 3) +
        "; Podium: \n" +
        JSON.stringify(model.data.questionPrettier, null, 3) +
        "; Mais caro: \n" +
        JSON.stringify(model.data.questionExpensive, null, 3);
    });

    model.onComplete.add(sendDataToServer);
    return {
      survey: model,
    };
  },
};
</script>

<style>
.show {
  height: 100vh;
}
.verde {

  color: #0a4e0e;
}
#app {
  font-family: 'Ubuntu Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c2b21;
}
</style>
