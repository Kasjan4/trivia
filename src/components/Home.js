/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Zoom from 'react-reveal/Zoom'

const url = window.location.href
const images = ['/img/0.jpg', '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg', '/img/5.jpg', '/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg', '/img/10.jpg', '/img/11.jpg', '/img/12.jpg', '/img/13.jpg', '/img/14.jpg', '/img/15.jpg', '/img/16.jpg', '/img/17.jpg', '/img/18.jpg', '/img/19.jpg', '/img/20.jpg', '/img/21.jpg', '/img/22.jpg', '/img/23.jpg']
console.log(process.env.NODE_ENV)

const Home = () => {


  const [categories, updateCategories] = useState([])


  useEffect(() => {

    axios.get('https://opentdb.com/api_category.php')
      .then(resp => {
        const data = resp.data
        updateCategories(data.trivia_categories)

      })
  }, [])


  return <div className="container home">


    <h1 className="title">Trivia</h1>

    <Zoom appear={true}>

      <div className="row">

        {categories.map((category, index) => {

          const number = index
         
          return <div className="col text-center" key={index}>

            <Link to={`/trivia/difficulty/${category.id}`} key={index}>
              <img className="img" key2={index} src={url + images[number]} />

              <button className="btn btn-outline-light btn-lg btn-home" key={index}>
                <p className="text-center">{category.name}</p>
              </button>

            </Link>

          </div>
        })}



      </div>
    </Zoom>


  </div >


}

export default Home





