import { useState, useCallback} from "react";
import questions from "../questions.js";
import Question from './Question.jsx';
import QuizComplete from './QuizComplete.jsx';

export default function Quiz() {
  const [useAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = useAnswers.length;
  const quizIsCompleted = useAnswers.length === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <QuizComplete userAnswers={useAnswers} />;
  } 

  return (
    <div id="quiz">
      <Question
      key={activeQuestionIndex}
      keyIndex={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
