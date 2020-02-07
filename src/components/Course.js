import React, { useState } from 'react'

import { course } from '../lib/courseData'

import CourseTab from './CourseTab'
import CourseList from './CourseList'

const Course = () => {
  const [activeTab, setActiveTab] = useState(1)
  
  const handleClickTab = event => {
    setActiveTab(event.target.id)
  }

  return (
    <div className="course-wrapper">
      <CourseTab 
        courseTab={course} 
        clickTab={handleClickTab} 
        active={activeTab} 
      />
      <div className="course-list">
        {course.map((courseItem, index) => (
          <CourseList 
            key={index} 
            list={courseItem} 
            activeList={activeTab} 
          />
        ))}
      </div>
    </div>
  )
}

export default Course
