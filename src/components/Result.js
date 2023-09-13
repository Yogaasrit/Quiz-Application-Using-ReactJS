import React, { useState } from "react";

const Result = (props) => {
  console.log(props);
  console.log(props.answers);

 let score = 0;
 const [showScore, setShowScore] = useState(false);
 const handleDisplayScore = () =>{
    setShowScore(true);
 }
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
          <div style={{ backgroundColor: "#222831", padding: "20px" }}>
            <div className="row">
              <div className="col-lg-20 mx-auto">
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                  <div className="blockquote-custom-icon bg-info shadow-sm">
                    <i className="fa fa-quote-left text-white"></i>
                  </div>
                  <div>
                    {showScore=== true ? (<h5>Your Score : {score}</h5>):''}
                  <button className = 'btn btn-primary' onClick = {handleDisplayScore}>Your Score</button>
                    <h5 className="mb-0 mt-2 font-italic">
                      The correct answer with the explanation is displayed.
                      Please read it and understand clearly.
                    </h5>
                    <hr></hr>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              {props.array[0].question}
                            </h5>

                            <h5 className="card-title">Correct Answer : </h5>
                            <p className="card-text">{props.array[0].answer}</p>
                            <h5 className="card-title">Your Answer : </h5>
                            <p className="card-text">{props.answers[0].answer}</p>
                            {props.array[0].answer ===
                            props.answers[0].answer ? (
                              <button className="btn btn-success">
                                Correct Answer
                                
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                Wrong Answer
                              </button>
                            )}
                            
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              {props.array[1].question}
                            </h5>

                            <h5 className="card-title">Correct Answer : </h5>
                            <p className="card-text">{props.array[1].answer}</p>
                            <h5 className="card-title">Your Answer : </h5>
                            <p className="card-text">{props.answers[1].answer}</p>
                            {props.array[1].answer ===
                            props.answers[1].answer ? (
                              <button className="btn btn-success">
                                Correct Answer
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                Wrong Answer
                              </button>
                            )}
                           
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              {props.array[2].question}
                            </h5>

                            <h5 className="card-title">Correct Answer : </h5>
                            <p className="card-text">{props.array[2].answer}</p>
                            <h5 className="card-title">Your Answer : </h5>
                            <p className="card-text">{props.answers[2].answer}</p>
                            {props.array[2].answer ===
                            props.answers[2].answer ? (
                              <button className="btn btn-success">
                                Correct Answer
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                Wrong Answer
                              </button>
                            )}
                            
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              {props.array[3].question}
                            </h5>

                            <h5 className="card-title">Correct Answer : </h5>
                            <p className="card-text">{props.array[3].answer}</p>
                            <h5 className="card-title">Your Answer : </h5>
                            <p className="card-text">{props.answers[3].answer}</p>
                            {props.array[3].answer ===
                            props.answers[3].answer ? (
                              <button className="btn btn-success">
                                Correct Answer
                              </button>
                            ) : (
                              <button className="btn btn-danger">
                                Wrong Answer
                              </button>
                            )}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Result;

//Card
//confirm
//score
//result - duplicates
//kela crt ans wrng ans fix
