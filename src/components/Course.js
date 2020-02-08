import React, { useState, useEffect } from 'react'

import { course } from '../lib/courseData'

import CourseTab from './CourseTab'
import CourseList from './CourseList'

const Course = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [todayCourse, setTodayCourse] = useState([])
  
  const handleClickTab = event => {
    setActiveTab(event.target.id)
  }

  useEffect(() => {

    let filteredTodayCourse = course

    //Get the local time
    let currentTime = new Date()
    currentTime = currentTime.getHours() + ':' + currentTime.getMinutes()

    //Sort function for courses
    const sortCourses = (course, otherCourse) => {
      let courseTime = course.courseStartTime
      let otherCourseTime = otherCourse.courseStartTime

      if (courseTime < otherCourseTime) return -1
      if (courseTime > otherCourseTime) return 1

      return 0
    }

    //Filter and sort courses based on start time
    filteredTodayCourse.forEach((courseCategory, index) => {
      let filteredCourse = courseCategory.courseList.filter(courseItem => courseItem.courseStartTime > currentTime)
      filteredCourse.sort(sortCourses)

      filteredTodayCourse[index].courseList = filteredCourse
    })

    setTodayCourse(filteredTodayCourse)
    
  })

  return (
    <div className="course-wrapper">
      <CourseTab 
        courseTab={todayCourse} 
        clickTab={handleClickTab} 
        active={activeTab} 
      />
      <div className="course-list">
        {todayCourse.map((courseItem, index) => (
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
