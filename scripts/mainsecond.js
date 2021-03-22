// Main DOM for toggleModal
const questionAsked = document.querySelector(".question-ask input");
const questionCreatorMainDiv = document.querySelector(".question-creator");
const createYourOwnQuestionButton = document.querySelector(
  ".create-your-question button"
);
// Modal Question and answer creator INPUT
const AskingDiv = document.querySelector(".answer-give");
const AskingOption1 = AskingDiv.children[1];
const AskingOption2 = AskingDiv.children[3];
const AskingOption3 = AskingDiv.children[5];
const AskingOption4 = AskingDiv.children[7];
let index = 0;
let indexTwo = 0;

// Correct Answer Input Radio Button
const optionOneRadioSelector = AskingDiv.children[2];
const optionTwoRadioSelector = AskingDiv.children[4];
const optionThreeRadioSelector = AskingDiv.children[6];
const optionFourRadioSelector = AskingDiv.children[8];

const submitButtonQues = document.querySelector(".question-submit-btn button");

// Array of question and answer
let arrayOfQuestion = [];
let arrayOfAnswers = [];
let arrayOfCorrectAnswer = [];
// Variable for questions and answer to dynamic push values
let QuestionGenerated;
let optionOneGenerated;
let optionTwoGenerated;
let optionThreeGenerated;
let optionFourGenerated;
// question pusher function
const QuestionPusher = () => {
  QuestionGenerated = questionAsked.value;
  arrayOfQuestion.push(QuestionGenerated);
  console.log(arrayOfQuestion);
};
// question pusher function
const AnswerPusher = () => {
  optionOneGenerated = AskingOption1.value;
  optionTwoGenerated = AskingOption2.value;
  optionThreeGenerated = AskingOption3.value;
  optionFourGenerated = AskingOption4.value;

  arrayOfAnswers.push({
    optionOneKey: optionOneGenerated,
    optionTwoKey: optionTwoGenerated,
    optionThreeKey: optionThreeGenerated,
    optionFourKey: optionFourGenerated,
  });
  console.log(arrayOfAnswers);
};

const rightAnswerPusher = () => {
  optionOneGenerated = optionOneRadioSelector.checked;
  optionTwoGenerated = optionTwoRadioSelector.checked;
  optionThreeGenerated = optionThreeRadioSelector.checked;
  optionFourGenerated = optionFourRadioSelector.checked;
  arrayOfCorrectAnswer.push({
    optionOneKey: optionOneGenerated,
    optionTwoKey: optionTwoGenerated,
    optionThreeKey: optionThreeGenerated,
    optionFourKey: optionFourGenerated,
  });
  trueOrFalseOne = arrayOfCorrectAnswer[index].optionOneKey;
  trueOrFalseTwo = arrayOfCorrectAnswer[index].optionTwoKey;
  trueOrFalseThree = arrayOfCorrectAnswer[index].optionThreeKey;
  trueOrFalseFour = arrayOfCorrectAnswer[index].optionFourKey;
  index++;
  console.log(arrayOfCorrectAnswer);
};

// Executes questionPusher and answerPusher and changes value of on page questions
const QuestionAnswerChanger = () => {
  newQuestionHeading.textContent = arrayOfQuestion[indexTwo];
  optionOneHeading.innerHTML = arrayOfAnswers[indexTwo].optionOneKey;
  optionTwoHeading.innerHTML = arrayOfAnswers[indexTwo].optionTwoKey;
  optionThreeHeading.innerHTML = arrayOfAnswers[indexTwo].optionThreeKey;
  optionFourHeading.innerHTML = arrayOfAnswers[indexTwo].optionFourKey;
  indexTwo++;
};
let indexThree = 0;
const optionTickedChecker = () => {
  // This function will create answers at creator page
  let value = arrayOfCorrectAnswer[indexThree++];
  if (value.optionOneKey === true) {
    console.log("optionOneKey");
    return "optionOneKey";
  } else if (value.optionTwoKey === true) {
    console.log("optionTwoKey");
    return "optionTwoKey";
  } else if (value.optionThreeKey === true) {
    console.log("optionThreeKey");
    return "optionThreeKey";
  } else if (value.optionFourKey === true) {
    console.log("optionFourKey");
    return "optionFourKey";
  }
};

// toggle modal
const toggleModal = () => {
  questionCreatorMainDiv.classList.toggle("question-creator-new");
  questionCard.classList.toggle("new-question-new");
};

submitButtonQues.addEventListener("click", toggleModal); // executes question answer changer
createYourOwnQuestionButton.addEventListener("click", toggleModal); // modal toggle
console.log(submitButton);
