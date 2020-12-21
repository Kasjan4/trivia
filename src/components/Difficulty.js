import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'


const Difficulty = (props) => {

  const categoryId = props.match.params.categoryId


  return <div className="container home">


    <Bounce top appear={true}>
      <h1 className="title text-center">Difficulty</h1>
    </Bounce>

    <Bounce bottom appear={true}>
      <div className="row justify-content-center">
        <Link to={`/trivia/${categoryId}/${'easy'}/question`}>
          <button className="btn btn-outline-light btn-lg btn-diff">
            Easy
        </button>
        </Link>

        <Link to={`/trivia/${categoryId}/${'medium'}/question`}>
          <button className="btn btn-outline-light btn-lg btn-diff">
            Medium
        </button>
        </Link>

        <Link to={`/trivia/${categoryId}/${'hard'}/question`}>
          <button className="btn btn-outline-light btn-lg btn-diff">
            Hard
        </button>
        </Link>
      </div>
    </Bounce>

    <div>
      <Bounce bottom appear={true}>
        <Link to={`/trivia`}>
          <button className="btn btn-outline-light btn-lg btn-end">
            Back to categories
        </button>
        </Link>
      </Bounce>

    </div>
  </div >



}
export default Difficulty
