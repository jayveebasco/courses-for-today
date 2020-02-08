import React, { useState } from 'react'

const CourseList = ({ list, activeList }) => {

  const [isHovered, setHovered] = useState({
    active: false,
    course: '',
    color: ''
  })

  const handleMouseEnter = (courseTitle, hoverColor) => {
    setHovered({
      ...isHovered,
      active: true,
      course: courseTitle,
      color: hoverColor
    })
  }

  const handleMouseLeave = () => {
    setHovered({
      ...isHovered,
      active: false,
      course: '',
      color: ''
    })
  }
  
  return (
    <div className="course-list-wrapper">
      {list.courseId === parseInt(activeList) &&
        list.courseList.map((listItem, index) => (
          <div 
            key={index} 
            className="course-list-item" 
            style={{ 
              borderLeft: `10px solid ${listItem.courseColor}`,
              backgroundColor: isHovered.course === listItem.courseTitle && isHovered.active ? isHovered.color : '#1c1c1c'
            }}
            onMouseEnter={() => handleMouseEnter(listItem.courseTitle, listItem.courseColor)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/">
              <div className="course-list-item-details">
                <span className="course-list-item-time">{listItem.courseStartTime} - {listItem.courseEndTime}</span>
                <span>{listItem.courseRoom}</span>
              </div>
              <div className="course-list-item-title">{listItem.courseTitle}</div>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default CourseList
