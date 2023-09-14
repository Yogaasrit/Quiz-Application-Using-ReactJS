import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import SelectedAnswers from "../../reducer/SelectedAnswers/SelectedAnswers.js";
import Result from "../Result.js";

const QuizApp = () => {
  const quizQuestion = [
    {
      id: 1,
      question:
        "Which of the following command is used to create react-js-app ?",
      options: {
        option1: "npx create-react-app appname",
        option2: "npm install create-react-app",
        option3: "npx install create-react-app -g",
        option4: "install - l create-react-app",
      },
      answer: "npx create-react-app appname",
      selected: "",
    },
    {
      id: 2,
      question:
        "In React.js which one of the following is used to create a class for Inheritance ?",
      options: {
        option1: "Create",
        option2: "Extends",
        option3: "Inherits",
        option4: "Delete",
      },
      answer: "Extends",
      selected: "",
    },
    {
      id: 3,
      question:
        "What is the default port number in which the application run ?",
      options: {
        option1: "3000",
        option2: "8080",
        option3: "5000",
        option4: "3030",
      },
      answer: "3000",
      selected: "",
    },
    {
      id: 4,
      question:
        "What command is used to start the React local development server??",
      options: {
        option1: "npm start",
        option2: "npm build",
        option3: "npm run",
        option4: "npm serve",
      },
      answer: "npm start",
      selected: "",
    },
  ];
  // let choosenAnswer = '';
  const [isCorrect, setIsCorrect] = useState(false);
  const [quesnumber, setQuesnumber] = useState(0);
  const [mark, setMark] = useState(0);
  const [printResult, setPrintResult] = useState(false);
  const [choosenAnswer, setChoosenAnswer] = useState("");

  const [answer, answerDispacther] = useReducer(SelectedAnswers);

  const handleQuizAnswer = (choice, id) => {
    // choosenAnswer = choice;
    setChoosenAnswer(choice);
    // console.log(ch);
    console.log(choosenAnswer);
    setIsCorrect(false);
    // console.log(choice);
    // console.log(id);
    // console.log(quizQuestion[quesnumber].answer);
    // quizQuestion[quesnumber].selected  "choice";
    // console.log("!"+quizQuestion[quesnumber].selected)

    if (quizQuestion[quesnumber].answer === choice) {
      // console.log("!");
      setIsCorrect(!isCorrect);
      setMark(mark + 1);
    }
  };
  // console.log(answer);
  const handleNextQuestion = () => {
    console.log(choosenAnswer);
    answerDispacther({
      type: "ADD_ANSWER",
      payload: {
        answer: choosenAnswer,
        id: quesnumber,
      },
    });
    if (answer?.length < 4 && quesnumber === 3) {
      alert("You have not answered all the questions..");
    }
    setIsCorrect(false);
    console.log(quesnumber + 1);
    setQuesnumber(quesnumber + 1);
  };

  const handlePreviousQuestion = () => {
    setIsCorrect(false);
    setQuesnumber(quesnumber - 1);
    answerDispacther({
      type: "EDIT_ANSWER",
      payload: {
        answer: choosenAnswer,
        id: quesnumber,
      },
    });
  };

  const handleChoosenOptions = () => {
    setPrintResult(true);
  };

  return (
    <center>
      <div
        style={{
          color: "#222831",
          backgroundColor: "#9ba6a5",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <h1>QUIZ APPLICATION</h1>
      </div>
      {/* <hr></hr> */}
      {quesnumber === 4 ? (
        <Result answers={answer} array={quizQuestion} score={mark} />
      ) : (
        <div className="card text-center text-white bg-secondary mb-3 w-50">
          <div style={{ backgroundColor: "#222831", padding: "20px" }}>
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
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option1,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {quizQuestion[quesnumber].options.option1}
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option2,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {quizQuestion[quesnumber].options.option2}
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option3,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {quizQuestion[quesnumber].options.option3}
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button
                      className="btn btn-dark"
                      onClick={handleQuizAnswer.bind(
                        this,
                        quizQuestion[quesnumber].options.option4,
                        quizQuestion[quesnumber].id
                      )}
                    >
                      {quizQuestion[quesnumber].options.option4}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <p className="card-text">
              {/* {isCorrect ? "Correct Answer" : "Wrong Answer"} */}
            </p>
            {/* <p className="card-text">Your total marks : {mark}</p> */}

            <div className="card-footer text-muted">
              {quesnumber >= 1 ? (
                <Button
                  type="button"
                  className="btn btn-success"
                  onClick={handlePreviousQuestion}
                >
                  ⬅️Previous
                </Button>
              ) : (
                ""
              )}
              {/* <Button
                type="button"
                className="btn btn-primary"
                onClick={handleNextQuestion}
              >
                {quesnumber<3 ? ()'Next' : 'Sumbit'}
              </Button> */}
              {quesnumber < 4 ? (
                quesnumber < 3 ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                  >
                    Next➡️
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={handleNextQuestion}
                  >
                    Submit
                  </button>
                )
              ) : (
                ""
              )}

              {/* {quesnumber === 4 ? (
                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleChoosenOptions}
                >
                  Submit
                </Button>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      )}
    </center>
  );
};

export default QuizApp;
