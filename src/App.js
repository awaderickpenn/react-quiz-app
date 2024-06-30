import React from "react";
import Quiz from "./components/Quiz"
import questions from "./questions";
import './App.css';


const App = () => {
    return <Quiz questions={questions} />;
  };

export default App;