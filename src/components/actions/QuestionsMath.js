import QuestionsGenerator from './QuestionsMathModel/QuestionsGenerator';

class QuestionsMath {
  constructor() {
    this.questionsGenerator = new QuestionsGenerator();
    this.questions = [];
  }
  generateQuestions(n) {
    for (let i = 0; i < n; i++) {
      this.questions.push(this.questionsGenerator.createQuestion());
    }
    return this.questions;
  }
}
export default QuestionsMath;
