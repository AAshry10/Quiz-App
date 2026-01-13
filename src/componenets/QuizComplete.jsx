import summaryImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function QuizComplete({userAnswers}) {

  let skippedAnswers = userAnswers.filter(answer => answer === null);
  let correctAnswers = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0]);

  let skippedAnswersShare = Math.round(skippedAnswers.length / userAnswers.length * 100);
  let correctAnswersShare = Math.round(correctAnswers.length / userAnswers.length * 100);
  let incorrectAnswersShare = Math.round(100 - skippedAnswersShare - correctAnswersShare);

  return (
    <div id="summary">
      <img src={summaryImg} alt="Quiz Complete" />
      <h2>Quiz Is Completed !</h2>
      <div id="summary-stats">
        <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">Skipped</span>
        </p>
        <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">Answered Correctly</span>
        </p>
        <p>
            <span className="number">{incorrectAnswersShare}%</span>
            <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {

        let cssClass = 'user-answer'; 
        
        if(answer === null) {
          cssClass += ' skipped';
        }
        else if(answer === QUESTIONS[index].answers[0]) {
          cssClass += ' correct';
        }
        else {
          cssClass += ' wrong';
        }

        return (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p className="qeustion">{QUESTIONS[index].text}</p>
            <p className={cssClass}>{answer ? answer : "Skipped"}</p>
          </li>
        )
        })}
      </ol>
    </div>
  );
}
