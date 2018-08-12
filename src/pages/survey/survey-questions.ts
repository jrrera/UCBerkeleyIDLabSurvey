const sliderAnchors = [ "0 (not at all)", "100 (as much as possible)" ];

export default [
  {
    name: "numCigarettes",
    type: "text",
    title: "How many cigarettes have you smoked since your last survey?",
    placeHolder: "0",
    isRequired: true,
    inputType: "tel",
    validators: [{ type: "numeric", minValue: 0, maxValue: 200 }]
  },
  {
    name: "feelDepressed",
    type: "nouislider",
    title: "Right now, I feel down or depressed. (replace with slider)",
    isRequired: true,
    anchors: sliderAnchors
  },
  {
    name: "feelHappy",
    type: "nouislider",
    title: "Right now, I feel happy.",
    isRequired: true,
    sliderAnchors,
    anchors: sliderAnchors
    
  },
  {
    name: "craveCigarette",
    type: "nouislider",
    title: "Right now, I am craving a cigarette.",
    isRequired: true,
    anchors: sliderAnchors
  },
  {
    name: "currentLocation",
    type: "text",
    inputType: "text",
    title: "Please describe your current location.",
    isRequired: true
  },
  {
    name: "allowedSmoking",
    type: "radiogroup",
    title: "Are you in a location that allows smoking?",
    isRequired: true,
    choices: ["Yes", "No"]
  }
];