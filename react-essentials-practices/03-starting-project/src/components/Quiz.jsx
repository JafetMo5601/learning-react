import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz({}) {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
                <img src={quizCompleteImg}></img>
                <h2>Quiz complete!</h2>
            </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div className="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}