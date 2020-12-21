import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'

const Score = (props) => {
  const score = props.match.params.score

  return <div className="container home">

    <Bounce top appear={true}>
      <h1 className="points-heading">You Scored:</h1>
      <h1 className="total">{score}/10</h1>


    </Bounce>
    <Bounce bottom appear={true}>
      <Link to={'/project-2'}>
        <button className="btn btn-outline-light btn-lg btn-end">
          Play Again!
        </button>
      </Link>
    </Bounce>


  </div>





}

export default Score