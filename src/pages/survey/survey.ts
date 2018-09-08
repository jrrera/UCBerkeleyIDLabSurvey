import { Component } from "@angular/core";
import questionsArray from "./survey-questions";

import * as Survey from "survey-angular";



// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}
/**
 * Helper function to take an array of questions and add them to one page each 
 * in order to display one question at a time. 
 * @param questions A list of SurveyJS questions
 */
function randomizeQuestionsIntoPages(questions:Object[]) {
  let pagesList = [];
  // Requirement is to randomize the questions if possible
  shuffleArray(questions);

  // Add one question per page of the survey to optimize for screen real estate.
  questions.forEach(q => {
    let newPage = { questions: null };
    newPage.questions = [ q ];
    pagesList.push(newPage);
  });
  return pagesList;
}

console.log('Randomized order', randomizeQuestionsIntoPages(questionsArray));

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
      pages: randomizeQuestionsIntoPages(questionsArray)
    };
  }
}
