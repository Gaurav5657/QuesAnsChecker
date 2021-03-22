const nextBtn = document.getElementById("next-btn");
const mainPageNextBtn = document.getElementById("mainPageNextBtn");
let optionTickedCheckerValue;
const clearValuesCreatorPage = () => {
  questionAsked.value = null;
  AskingOption1.value = null;
  AskingOption2.value = null;
  AskingOption3.value = null;
  AskingOption4.value = null;
};
const nextQuestionAdder = () => {
  QuestionPusher();
  AnswerPusher();
  rightAnswerPusher();
  clearValuesCreatorPage();
};
const changeValuesOnMainPage = () => {
  QuestionAnswerChanger();
  optionTickedCheckerValue = optionTickedChecker();
};
nextBtn.addEventListener("click", nextQuestionAdder);
mainPageNextBtn.addEventListener("click", changeValuesOnMainPage);
