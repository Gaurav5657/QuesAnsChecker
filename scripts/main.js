const questionCard = document.querySelector(".question-card");
let optionOne = document.querySelector("#option-1");
let optionTwo = document.querySelector("#option-2");
let optionThree = document.querySelector("#option-3");
let optionFour = document.querySelector("#option-4");

let newQuestionHeading = document.querySelector(".question-asked");
let optionOneHeading = document.querySelector(".option-one-given");
let optionTwoHeading = document.querySelector(".option-two-given");
let optionThreeHeading = document.querySelector(".option-three-given");
let optionFourHeading = document.querySelector(".option-four-given");

const submitButton = document.querySelector(".submit-btn");

const mainPageAnswerChecker = () => {
  // This function will check answers at main page

  if (optionTickedCheckerValue === mainPageInputChecker()) {
    console.log("You are Right");
  } else {
    console.log("You are wrong");
  }
};
const mainPageInputChecker = () => {
  // This function will create answers at main page

  if (optionOne.checked) {
    return "optionOneKey";
  } else if (optionTwo.checked) {
    return "optionTwoKey";
  } else if (optionThree.checked) {
    return "optionThreeKey";
  } else if (optionFour.checked) {
    return "optionFourKey";
  }
};
submitButton.addEventListener("click", mainPageAnswerChecker); // answer submit button of answer page
