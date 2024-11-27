class QuestionsMathData {
  constructor({ id, question, answer }) {
    this.id = id || 0;
    this.question = question || '';
    this.answer = answer || 0;
    this.options = ['1', '2', '3', '4'];
  }

  static create({ id, question, answer }) {
    // You can implement a static create method if needed, but `dataclass` might handle this internally
    return new QuestionsMathData({ id, question, answer });
  }
}

export default QuestionsMathData;
