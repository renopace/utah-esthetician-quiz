import React, { useState, useEffect } from 'react';
import { fullQuizQuestions } from './quizQuestions';

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizMode, setQuizMode] = useState(null);
  const [showIncorrectAnswers, setShowIncorrectAnswers] = useState(false);

  useEffect(() => {
    if (quizMode === 'full') {
      setQuizQuestions(fullQuizQuestions);
      setUserAnswers(new Array(fullQuizQuestions.length).fill(null));
    } else if (quizMode === 'random') {
      const shuffled = [...fullQuizQuestions].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, 100);
      setQuizQuestions(selectedQuestions);
      setUserAnswers(new Array(selectedQuestions.length).fill(null));
    }
  }, [quizMode]);

  const handleAnswerChange = (selectedAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startQuiz = (mode) => {
    setQuizMode(mode);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowIncorrectAnswers(false);
  };

  const restartQuiz = () => {
    setQuizMode(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowIncorrectAnswers(false);
  };

  const toggleIncorrectAnswers = () => {
    setShowIncorrectAnswers(!showIncorrectAnswers);
  };

  const finishQuiz = () => {
    const newScore = userAnswers.reduce((total, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? total + 1 : total;
    }, 0);
    setScore(newScore);
    setShowScore(true);
  };

  const renderContent = () => {
    if (!quizMode) {
      return (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">Utah Master Esthetician Quiz</h1>
          <div className="flex flex-col items-center">
            <button
              onClick={() => startQuiz('full')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-64"
            >
              Take Full Quiz (444 Questions)
            </button>
            <button
              onClick={() => startQuiz('random')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-64"
            >
              Take Random Quiz (100 Questions)
            </button>
          </div>
        </>
      );
    }

    if (showScore) {
      const passPercentage = (score / quizQuestions.length) * 100;
      const passed = passPercentage >= 70;

      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className={`text-lg font-bold ${passed ? 'text-green-500' : 'text-red-500'}`}>
            You scored {score} out of {quizQuestions.length} ({passPercentage.toFixed(2)}%)
          </p>
          <p className={`text-lg font-bold ${passed ? 'text-green-500' : 'text-red-500'}`}>
            {passed ? 'Passed!' : 'Failed'}
          </p>
          <button
            onClick={toggleIncorrectAnswers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {showIncorrectAnswers ? 'Hide' : 'Show'} Incorrect Answers
          </button>
          {showIncorrectAnswers && (
            <div className="mt-4 text-left max-w-md mx-auto">
              <h3 className="font-bold mb-2">Incorrect Answers:</h3>
              {quizQuestions.map((q, index) => {
                if (userAnswers[index] !== q.correctAnswer) {
                  return (
                    <div key={index} className="mb-4">
                      <p><strong>Question:</strong> {q.question}</p>
                      <p><strong>Your Answer:</strong> {q.options[userAnswers[index]]}</p>
                      <p><strong>Correct Answer:</strong> {q.options[q.correctAnswer]}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
          <button
            onClick={restartQuiz}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Start New Quiz
          </button>
        </div>
      );
    }

    return (
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Question {currentQuestion + 1}/{quizQuestions.length}
        </h2>
        <p className="mb-4 text-lg text-center">{quizQuestions[currentQuestion]?.question}</p>
        <div className="space-y-2">
          {quizQuestions[currentQuestion]?.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-option"
                value={index}
                checked={userAnswers[currentQuestion] === index}
                onChange={() => handleAnswerChange(index)}
                className="mr-2"
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={userAnswers[currentQuestion] === null}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl px-4 pt-[150px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Quiz;