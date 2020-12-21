import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const Question = (props) => {

  const [questions, updateQuestions] = useState([])
  const [questionNo, nextQuestion] = useState(0)
  const [playerPoints, updatePoints] = useState(0)
  const [gamePlay, updateGame] = useState(true)


  const difficultyId = props.match.params.difficultyId
  const categoryId = props.match.params.categoryId
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficultyId}&type=multiple`

  useEffect(() => {

    axios.get(url)
      .then(resp => {
        const data = resp.data
        updateQuestions(data)

      })
  }, [])



  if (!questions.results) {
    return <div className="container text-center">
      <h1>Loading...</h1>
    </div>

  }



  const questionArray = []

  questionArray.push(questions.results[questionNo].incorrect_answers, questions.results[questionNo].correct_answer)
  const questionArrayFlat = questionArray.flat()
  const questionArrayRand = questionArrayFlat.sort()

  return <div className="container home">

    <Zoom spy={questionNo} appear={true}>
      <div className="row text-center">

        <div className="col">
          <h1 className="title">Question: {questionNo + 1}/10</h1>
          <h2 className="questionTitle">{(questions.results[questionNo].question.replace(/&quot;/g, '"').replace(/&#039;/g, '`').replace(/&amp;/g, '&'))}</h2>
          <div id="response">


            {gamePlay ? <div>
              {questionArrayRand.map((question, key) => {
                return <button key={key} className="btn btn-outline-light btn-lg btn-question" onClick={() => {
                  const answer = (questions.results[questionNo].correct_answer)

                  if (answer === question) {
                    updatePoints(playerPoints + 1)
                  }
                  if (questionNo < 9) {
                    nextQuestion(questionNo + 1)
                  } else {
                    updateGame(false)

                  }
                }}>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '`').replace(/&amp;/g, '&')}</button>

              })} </div> : null}


          </div>


          {!gamePlay ?

            <Bounce bottom appear={true}>
              <Link to={`/project-2/question/${playerPoints}`}>
                <button className="btn btn-outline-light btn-lg btn-end">
                  End Quiz
              </button>
              </Link>
            </Bounce>

            : null}

        </div>
      </div>
    </Zoom>

  </div >


}

export default Question