export default [
  { 
    questions: [
      {
        name: "numCigarettes",
        type: "text",
        title: "How many cigarettes have you smoked since your last survey?",
        placeHolder: "0",
        isRequired: true,
        inputType: "tel",
        validators: [{ type: "numeric", minValue: 0, maxValue: 200 }]
      }
    ]
  },
  { 
    questions: [
      {
        name: "feelDepressed",
        type: "nouislider",
        title: "Right now, I feel down or depressed.",
        isRequired: true,
      }
    ]
  },
  { 
    questions: [
      {
        name: "feelHappy",
        type: "nouislider",
        title: "Right now, I feel happy.",
        isRequired: true,
      }
    ]
  },
  { 
    questions: [
      {
        name: "craveCigarette",
        type: "nouislider",
        title: "Right now, I am craving a cigarette.",
        isRequired: true,
      }
    ]
  },
  { 
    questions: [
      {
        name: "currentLocation",
        type: "text",
        inputType: "text",
        title: "Please describe your current location.",
        isRequired: true
      }
    ]
  },
  { 
    questions: [
      {
        name: "allowedSmoking",
        type: "radiogroup",
        title: "Are you in a location that allows smoking?",
        isRequired: true,
        choices: ["Yes", "No"]
      }
    ]
  },
  { 
    questions: [
      {
        name: "aloneOrWithPeople",
        type: "radiogroup",
        title: "Are you alone or around other people?",
        isRequired: true,
        choices: ["Alone", "Around other people"]
      },
      {
        name: "whoAreYouWith",
        type: "checkbox",
        title: "Who are you with?",
        isRequired: true,
        hasOther: true,
        visibleIf: "{aloneOrWithPeople}='Around other people'",
        otherText: "Other (describe)",
        choices: ["Friends", "Family", "Romantic Partner", "Coworkers", "Strangers"]
      }
    ]
  },
];