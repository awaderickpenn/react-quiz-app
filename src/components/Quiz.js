import React, { useState } from "react";
import { resultInitialState } from "../questions";


const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const { question, options, answer: correctAnswer } = questions[currentQuestion] || {};

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) => 
      answer ? {
        ...prev,
        score: prev.score + 10,
        correctAnswers: prev.correctAnswers +1 
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }
    )

    if(currentQuestion !== questions.length -1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setCurrentQuestion(0)
      setShowResult(true)
    }
  }

  const onTryAgain = () => {
    setResult(resultInitialState)
    setShowResult(false)
  }

  return (
    <div className="quiz-container">
      {!showResult ? ( <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {options && options.map((answer, index) => (
            <li
              onClick={() => onAnswerClick(answer, index)}
              key={answer}
              className={answerIdx === index ? 'selected-answer' : null}
            >
              {answer}
            </li>
          ))}
        </ul>

        <div className="btn">
          <button onClick={onClickNext}>
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </>) : <div className="result">
        <h3>Result</h3>
        <p>
          Total Questions: <span>{questions.length}</span>
        </p>
        <p>
          Total Score: <span>{result.score}</span>
        </p>
        <p>
          correctAnswers: <span>{result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers: <span>{result.correctAnswers}</span>
        </p>
        <button onClick={onTryAgain}>Try Again</button>
        </div>}
     
    </div>
  );
};

export default Quiz;