import React from "react"
import { Helmet } from 'react-helmet'

import Course from '../components/Course'

const Home = () => {

  return (
    <main className="home">
      <Helmet title="Courses | Today" />
      <div className="main-wrapper">
        <Course />
      </div>
    </main>
  )
}

export default Home
