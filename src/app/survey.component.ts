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
    let surveyModel = new Survey.Model(this.json);
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    surveyModel.onValueChanged.add((survey, options) => {
      if (options.question.customTypeName === 'nouislider') {
        
        // Use setTimeout because there was a DOM rendering race condition causing 
        // this to fail sometimes.
        setTimeout(function() {
          let slider = options.question.noUiSlider;
          console.log(slider);

          slider.pips({
            mode: 'positions',
            density: 10,
            values: [0, 100],
            format: {
              to: function (a) {
                return a === 0 ? '0 (not at all)' : '(as much as possible) 100'
              }
            }
          })
        }, 100);
      }
    });
  }
}
