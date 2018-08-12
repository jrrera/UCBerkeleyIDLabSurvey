import { Component, Input } from "@angular/core";
import * as Survey from "survey-angular";

import noUiSlider from "nouislider";
// import "nouislider/distribute/nouislider.min.css";
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
      const inputElem = document.getElementById("test-area");
      const BOOTSTRAP_SLIDER = "bootstrapslider"; 
      inputElem.textContent = '';

      console.log(options);
      
      if (options.question.customTypeName === BOOTSTRAP_SLIDER) {
        let slider = options.question.bootstrapSlider;
        console.log('template', slider);
        
        inputElem.innerText = options.value;

        slider.setAttribute('ticks', [0, 100])
        slider.setAttribute('ticks_positions', [0, 100])
        slider.setAttribute('ticks_labels', ['first', 'last'])
        slider.setAttribute('tooltip', 'show')
        // slider.setAttribute('tooltip_position', 'bottom')
        console.log('refreshing...');
        slider.refresh();
        
      } 

      if (options.question.customTypeName === 'nouislider') {
        
        setTimeout(function() {
          let slider = options.question.noUiSlider;
          console.log(slider);

          slider.pips({
            mode: 'positions',
            density: 10,
            values: [0, 100],
            format: {
              to: function (a) {
                return a === 0 ? '0 (not at all)' : '100 (as much as possible)'
              }
            }
          })
        }, 100);
      }
      // ADD OVERRIDES HERE TO CUSTOMIZE BEHAVIOR OF THE SLIDER OF CHOICE.
      // if(options.name !== "know") return;
      // knownChoices = options.question.choices;
      // var choices = [];
      // for(var i = 0; i < knownChoices.length; i ++) {
      //     var item = knownChoices[i];
      //     //the item is not selected
      //     if(options.value.indexOf(item.value) < 0) {
      //         choices.push(item);
      //     }
      // }
      // var learnQuestion = survey.getQuestionByName("learn");
      // learnQuestion.choices = choices;
      // learnQuestion.visible = choices.length > 0;
    });
  }
}
