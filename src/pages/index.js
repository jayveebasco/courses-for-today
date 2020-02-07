import React from "react"
import { Helmet } from 'react-helmet'

import Course from '../components/Course'

const Home = () => (
  <div className="home">
    <Helmet title="Course for Today" />
    <div className="main-wrapper">
      <Course />
    </div>
  </div>
)

export default Home
