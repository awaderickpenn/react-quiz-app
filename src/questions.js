
const questions = [
  {
    question: 'Who painted the Mona Lisa?',
    type: 'radio',
    options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which of these countries is a permanent member of the United Nations Security Council? (Select all that apply)',
    type: 'checkbox',
    options: ['Germany', 'United Kingdom', 'India', 'China'],
    answer: ['United Kingdom', 'China'],
  },
  {
    question: 'What is the largest mammal in the world?',
    type: 'radio',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Blue Whale',
  },
  {
    question: 'Which element has the chemical symbol O?',
    type: 'radio',
    options: ['Hydrogen', 'Oxygen', 'Carbon', 'Nitrogen'],
    answer: 'Oxygen',
  },
  {
    question: 'What year did the Titanic sink in the Atlantic Ocean?',
    type: 'radio',
    options: ['1905', '1912', '1918', '1923'],
    answer: '1912',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    type: 'radio',
    options: ['China', 'Japan', 'South Korea', 'Thailand'],
    answer: 'Japan',
  },
  {
    question: 'How many continents are there on Earth?',
    type: 'radio',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    type: 'radio',
    options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Ernest Hemingway'],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    type: 'radio',
    options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
    answer: 'Diamond',
  },
  {
    question: 'Which country is the largest by land area?',
    type: 'radio',
    options: ['United States', 'China', 'Russia', 'Canada'],
    answer: 'Russia',
  }
];

export default questions;

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}