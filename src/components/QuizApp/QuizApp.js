import React, { useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useImmer } from 'use-immer';
import SelectedAnswers from '../../reducer/SelectedAnswers/SelectedAnswers.js';
import Result from '../Result.js';

const QuizApp = () => {
  // Array containing all the questions with options and correct answer.
  const quizQuestion = [
    {
      id: 1,
      question:
        'Which of the following command is used to create react-js-app ?',
      options: {
        option1: 'npx create-react-app appname',
        option2: 'npm install create-react-app',
        option3: 'npx install create-react-app -g',
        option4: 'install - l create-react-app'
      },
      answer: 'npx create-react-app appname',
      selected: ''
    },
    {
      id: 2,
      question:
        'In React.js which one of the following is used to create a class for Inheritance ?',
      options: {
        option1: 'Create',
        option2: 'Extends',
        option3: 'Inherits',
        option4: 'Delete'
      },
      answer: 'Extends',
      selected: ''
    },
    {
      id: 3,
      question:
        'What is the default port number in which the application run ?',
      options: {
        option1: '3000',
        option2: '8080',
        option3: '5000',
        option4: '3030'
      },
      answer: '3000',
      selected: ''
    },
    {
      id: 4,
      question:
        'What command is used to start the React local development server??',
      options: {
        option1: 'npm start',
        option2: 'npm build',
        option3: 'npm run',
        option4: 'npm serve'
      },
      answer: 'npm start',
      selected: ''
    }
  ];

  const [select, setSelected] = useImmer(quizQuestion);
  // State to change question number when next or previous button is clicked.
  const [quesnumber, setQuesnumber] = useState(0);

  // State updates when every time the button is clicked.
  const [choosenAnswer, setChoosenAnswer] = useState('');

  // State used to check the selected answer is correct or not.
  const [isCorrect, setIsCorrect] = useState(false);

  // State used to handle marks.
  const [mark, setMark] = useState(0);

  // State used to display the result page.
  // const [printResult, setPrintResult] = useState(false);

  // Reducer that stores the prev selected answer when next button is clicked.
  const [answer, answerDispacther] = useReducer(SelectedAnswers);

  // Handler which handles the button while every time is clicked.
  const handleQuizAnswer = (choice, id) => {
    setChoosenAnswer(choice);

    setSelected((draft) => {
      draft.find((i) => i.id === quesnumber + 1).selected = choice
    })

    // console.log(choosenAnswer)
    setIsCorrect(false); // Before checking for the correct answer update the state as false.
    // Checking for correct answer
    if (quizQuestion[quesnumber].answer === choice) {
      setIsCorrect(!isCorrect);
      // changing to true.
      setMark(mark + 1);
      // Incrementing mark.
    }
  };

  // Handler that handles the next question when next button is clicked.
  const handleNextQuestion = () => {
    // console.log(choosenAnswer);
    // When next is clicked the previous ques option which is stored in choosenAnswer is upated to answer state in reducer
    // throughh dispatcher.

    answerDispacther({
      type: 'ADD_ANSWER',
      payload: {
        answer: choosenAnswer,
        id: quesnumber
      }
    });
    // Alert for not answering all the questions.
    if (answer?.length <= 3 && quesnumber === 3) {
      alert('You have not answered all the questions..');
    }
    setIsCorrect(false);
    // The quesnumber is incremented in state after the above functionalities done for prev ques.
    setQuesnumber(quesnumber + 1);
  };
  // console.log(select);
  // Handler that handles the previous question.
  const handlePreviousQuestion = () => {
    setIsCorrect(false);
    // updating the state with previous question number.
    setQuesnumber(quesnumber - 1);
    answerDispacther({
      type: 'EDIT_ANSWER',
      payload: {
        answer: choosenAnswer,
        id: quesnumber
      }
    });
  };

  // Handler that handles the result page when submit button is clicked.
  // const handleResultPage = () => {
  //   // updating the state to true for displaying the result.
  //   setPrintResult(true);
  // };

  return (
    <center>
      <div
        style={{
          color: '#222831',
          backgroundColor: '#9ba6a5',
          padding: '5px',
          marginBottom: '10px'
        }}
      >
        <h1>QUIZ APPLICATION</h1>
      </div>

      {/* when it reaches the last question result page is displayed */}
      {quesnumber === 4 ? (
        <Result answers={answer} array={select} score={mark} />
      ) : (
        // otherwise the quiz page.
        <div className="card text-center text-white bg-secondary mb-3 w-50">
          <div style={{ backgroundColor: '#222831', padding: '20px' }}>
            <div className="card-header">
              <h3>TEST YOUR KNOWLEDGE💡</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Choose the best answer:</h5>
              <p className="card-text">
                {quizQuestion[quesnumber].id}
                ).
                {quizQuestion[quesnumber].question}
              </p>
              <div className="card">
                <ul className="list-group list-group-flush">
                  {/* Option1 */}
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option1,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {/* Displaying option1 in button */}
                      {quizQuestion[quesnumber].options.option1}
                    </Button>
                  </li>
                  {/* Option2 */}
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option2,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {/* Displaying option2 in button */}
                      {quizQuestion[quesnumber].options.option2}
                    </Button>
                  </li>
                  {/* Option3 */}
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option3,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {/* Displaying option3 in button */}
                      {quizQuestion[quesnumber].options.option3}
                    </Button>
                  </li>
                  {/* Option4 */}
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option4,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {/* Displaying option4 in button */}
                      {quizQuestion[quesnumber].options.option4}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <p className="card-text"></p>
            <div className="card-footer text-muted">
              {/* If quesnumber is not 1 then previous button is displayed */}
              {quesnumber >= 1
                ? (
                  <Button
                    type="button"
                    className="btn btn-success"
                    onClick={handlePreviousQuestion}
                  >
                  ⬅️Previous
                  </Button>
                )
                : (
                  ''
                )}
              {/* If quesnumber is not 4 then next button is displayed */}
              {quesnumber < 4
                ? (
                  quesnumber < 3
                    ? (
                      <button
                        className="btn btn-primary"
                        onClick={handleNextQuestion}
                      >
                    Next➡️
                      </button>
                    )
                    : (
                      <button
                        className="btn btn-danger"
                        onClick={handleNextQuestion}
                      >
                    Submit
                      </button>
                    )
                )
                : (
                  ''
                )}
            </div>
          </div>
        </div>
      )}
    </center>
  );
};

export default QuizApp;
