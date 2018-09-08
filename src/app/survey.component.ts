import { Component, Input } from "@angular/core";
import * as Survey from "survey-angular";

import noUiSlider from "nouislider";
import * as widgets from "surveyjs-widgets";

@Component({
  selector: "survey",
  template: `
    <div class="survey-container contentcontainer codecontainer">
      <div id="surveyElement">
      </div>
      <p id="test-area"></p>
    </div>
  `
})
export class SurveyComponent {
  @Input() json: any;

  ngOnInit() {
    widgets.nouislider(Survey);
    widgets.bootstrapslider(Survey);
    const surveyModel = new Survey.Model(this.json);
    
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (options.question.customTypeName === 'nouislider') {
      
        const slider = options.question.noUiSlider;

        slider.pips({
          mode: 'positions',
          density: 10,
          values: [0, 100],
          format: {
            to: function (a) {
              return a === 0 ? '0 (not at all)' : '(as much as possible) 100'
            }
          }
        });
      }
    });

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }
}
