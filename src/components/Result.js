import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  console.log(props.array);
  let Count = 0;
  // let temp = 0;

  // State used for calculating the scores.
  const [scoreCount, setScoreCount] = useState(0);

  // State used to display the score.
  const [showScore, setShowScore] = useState(false);

  // State used to show the score button.
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Handler that calculates the score.
  const handleCalculateScore = () => {
    setShowScore(true);
    setIsButtonVisible(false);
    // Calculating score
    props.array?.map((ans) => {
      if (ans.answer === ans.selected) {
        Count = Count + 1;
        setScoreCount(Count);
      }
      return '';
    });
  };

  return (
    <div>
      <section className="py-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <header className="text-center pb-1">
                <h1 className="h2">Check your Answers </h1>
                <h2>Congratulations on your attempt</h2>
              </header>
            </div>
          </div>
          <div style={{ backgroundColor: '#222831', padding: '20px' }}>
            <div className="row">
              <div className="col-lg-20 mx-auto">
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                  <div className="blockquote-custom-icon bg-info shadow-sm">
                    <i className="fa fa-quote-left text-white"></i>
                  </div>

                  {/* View score button  */}
                  {isButtonVisible
                    ? (
                      <button
                        className="btn btn-primary"
                        onClick={handleCalculateScore}
                      >
                      Calculate Score
                      </button>
                    )
                    : (
                      ''
                    )}

                  {/* Header */}
                  <div>
                    {/* Displaying the score */}
                    {showScore === true
                      ? (
                        <h5>Your Score : {scoreCount}/4</h5>
                      )
                      : (
                        ''
                      )}
                    <h5 className="mb-0 mt-2 font-italic">
                      The correct answer with the explanation is displayed.
                      Please read it and understand clearly.
                    </h5>
                    <hr></hr>
                  </div>

                  {/* Displaying the correct answer, selected answer. */}
                  {props.array?.map((ques) => {
                    return (
                      <div key={ques.id}>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">{ques.question}</h5>

                              <h5 className="card-title">Correct Answer : </h5>
                              <p className="card-text">{ques.answer}</p>
                              <h5 className="card-title">Your Answer : </h5>
                              <p className="card-text">
                                {ques.selected}
                              </p>
                              {ques.answer === ques.selected
                                ? (
                                  <button className="btn btn-success">
                                  Correct Answer
                                  </button>
                                )
                                : (
                                  <button className="btn btn-danger">
                                  Wrong Answer
                                  </button>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Footer  */}
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    Developed By
                    <cite title="Source Title"> Yogaasri</cite>
                  </footer>

                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Result.propTypes = {
  array: PropTypes.array,
  answers: PropTypes.array,
  score: PropTypes.number
};
export default Result;
