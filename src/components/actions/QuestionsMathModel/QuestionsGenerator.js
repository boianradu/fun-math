import QuestionsMathData from './QuestionsMathData';

class QuestionsGenerator {
  constructor() {
    this.questions = [];
    this.operators = Array.from('+-/*');
    this.questionsNumber = 0;
  }
  createQuestion() {
    const numbers = Math.random(5) + 1;
    let operation = '';
    for (let i = 0; i < numbers; i++) {
      let number = Math.random(9);
      operation += number + this.operators[Math.random(3)];
    }
    operation += Math.random(9);
    let q = QuestionsMathData.create({
      id: this.questionsNumber++,
      question: operation,
      answer: 0,
    });
    this.questions.push(q);
    return q;
  }
}
export default QuestionsGenerator;
