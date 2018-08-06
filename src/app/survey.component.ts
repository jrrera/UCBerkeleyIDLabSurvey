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
      console.log(options.name, options.question);
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
