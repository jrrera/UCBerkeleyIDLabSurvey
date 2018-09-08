import { Component, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: "survey",
  template: `
    <div class="survey-container contentcontainer codecontainer">
      <div id="surveyElement"></div>
      <pre [hidden]="!results" id="resultsArea">Geo Coordinates: {{coordinates}}</pre>
      <pre [hidden]="!results" id="resultsArea">Results: {{results}}</pre>
    </div>
  `
})
export class SurveyComponent {
  @Input()
  json: any;

  results: String;
  coordinates: Number[];

  constructor(private geolocation: Geolocation) {
    geolocation
      .getCurrentPosition()
      .then(
        resp =>
          (this.coordinates = [resp.coords.latitude, resp.coords.longitude])
      )
      .catch(error => console.log("Error getting location", error));
  }

  ngOnInit() {
    widgets.nouislider(Survey);
    widgets.bootstrapslider(Survey);
    const surveyModel = new Survey.Model(this.json);

    // TODO: Remove when prototyping phase is complete
    surveyModel.onComplete.add(result => {
      this.results = JSON.stringify(result.data, null, 4);
    });

    // Add slider labels onto nouislider questions after it renders to DOM.
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      const sliderZeroLabel = "0 (not at all)";
      const sliderHundredLabel = "(as much as possible) 100";

      if (options.question.customTypeName === "nouislider") {
        const slider = options.question.noUiSlider;

        slider.pips({
          mode: "positions",
          density: 10,
          values: [0, 100],
          format: {
            to: function(a) {
              return a === 0 ? sliderZeroLabel : sliderHundredLabel;
            }
          }
        });
      }
    });

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }
}
