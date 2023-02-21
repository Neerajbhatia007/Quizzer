import React, {useState} from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { QuestionState, Difficulty } from './API';
import { fetchQuizQuestions } from './API';
import { GlobalStyle, LoadingWrapper, Wrapper } from './App.styles';

export type AnswerObject = {
  question : string;
  answer : string;
  correct : boolean;
  correctAnswer : string;
}

const TOTAL_Questions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_Questions, Difficulty.EASY))
  console.log(questions)
  const startQuiz = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_Questions,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([])
      setNumber(0)
      setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value;
      //checking answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //if correct
      if(correct) setScore(prev => prev + 1)
      //save answer in array
      const answerObject ={
        question : questions[number].question,
        answer,
        correct,
        correctAnswer : questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
const nextQuestion = number + 1;
if(nextQuestion === TOTAL_Questions) {
  setGameOver(true)
} else {
  setNumber(nextQuestion)
}
  };

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quizzes</h1>
      {gameOver || userAnswers.length === TOTAL_Questions ? (
      <button className="start" onClick={startQuiz}>Start</button>
      ) : null}
      {!gameOver ? <p className="score">Score : {score}</p> : null}
      {loading &&  <LoadingWrapper className="spin-container">
        <div className="spin" id="loader"></div>
        <div className="spin" id="loader2"></div>
        <div className="spin" id="loader3"></div>
        <div className="spin" id="loader4"></div>
      </LoadingWrapper>}
      {!loading && !gameOver && (
      <QuestionCard question={questions[number].question} answers={questions[number].answers} callback={checkAnswer} userAnswer={userAnswers ? userAnswers[number] : undefined} questionNr={number + 1} totalQuestions={TOTAL_Questions} />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number  !== TOTAL_Questions - 1 ? (
        <button className='next' onClick={nextQuestion}>Next Question</button>
      ): null}
    </Wrapper>
    </>
  );
} 

export default App;
