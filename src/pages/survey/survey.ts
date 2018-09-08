import { Component } from "@angular/core";
import questionsArray from "./survey-questions";
import * as Survey from "survey-angular";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
}

@Component({
  selector: "page-survey",
  templateUrl: "survey.html"
})
export class SurveyPage {
  surveyConfig: Object;
  constructor() {
    this.surveyConfig = {
      title: 'Survey',
      showProgressBar: 'bottom',
      goNextPageAutomatic: false,
      showNavigationButtons: true,
      clearInvisibleValues: 'onHidden',
      pages: shuffleArray(questionsArray)
    };
  }
}
