import React, { useState } from 'react';

export default function App() {
    const questions = [
        {
            questionText: 'What are the best animals in the world?',
            answerOptions: [
                { answerText: 'Monkeys', isCorrect: false },
                { answerText: 'Scottish Terriers', isCorrect: false },
                { answerText: 'Bears', isCorrect: true },
                { answerText: 'Dolphins', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the best school for computer science in the United States?',
            answerOptions: [
                { answerText: 'Carnegie Mellon University', isCorrect: false },
                { answerText: 'Northwestern University', isCorrect: true },
                { answerText: 'Harvard University', isCorrect: false },
                { answerText: 'ITT Technical Institute', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the best CMU in the United States?',
            answerOptions: [
                { answerText: 'Central Michigan University', isCorrect: true },
                { answerText: 'Carnegie Mellon University', isCorrect: false },
                { answerText: 'Central Methodist University', isCorrect: false },
                { answerText: 'Colorado Mesa University', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is a pretty cool person?',
            answerOptions: [
                { answerText: 'Wrong Answer #1', isCorrect: false },
                { answerText: 'Wrong Answer #2', isCorrect: false },
                { answerText: 'Wrong Answer #3', isCorrect: false },
                { answerText: 'James Kim', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [futureQuestion, setFutureQuestion] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect && !answered) {
            setScore(score + 1);
            setAnswered(true);
        }
        if (!answered) {
            setFutureQuestion(currentQuestion + 1);
            setAnswered(true);
        }
    };
    const handleNextOptionClick = () => {
        if (answered) {
            if (futureQuestion < questions.length) {
                setCurrentQuestion(futureQuestion);
                setAnswered(false);
            } else {
                setShowScore(true);
            }
        }
    };
    return (
        <div className="body">
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="progress-bar-central">
                        <div className="progress-bar-holder">
                            <div className="progress-bar">
                            </div>
                        </div>
                    </div>
                    <div className="question-answer-central">
                        <div className="question-answer-section">
                            <div className="question-section">
                                <div className="question-section-number">
                                    <span>Question {currentQuestion + 1}</span>
                                </div>
                                <div className="question-section-text">
                                    <span>{questions[currentQuestion].questionText}</span>
                                </div>
                                <div className="question-options-section">
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="answer-section">
                        </div>
                    </div>
                    <div className="submission-area">
                        <div className="submit-button">
                            <button className="button-next" onClick={() => handleNextOptionClick()}>Next Question</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}