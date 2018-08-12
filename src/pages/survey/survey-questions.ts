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
        type: "bootstrapslider",
        title: "Right now, I feel down or depressed. (replace with slider)",
        isRequired: true
    },
    {
        name: "feelHappy",
        type: "bootstrapslider",
        title: "Right now, I feel happy.",
        isRequired: true
    },
    {
        name: "craveCigarette",
        type: "bootstrapslider",
        title: "Right now, I am craving a cigarette.",
        isRequired: true
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
]