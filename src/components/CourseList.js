import React from 'react'

const CourseList = ({ list, activeList }) => {
  const showUpcomingCourse = time => {
    let currentTime = new Date()
    
    currentTime = currentTime.getHours() + ':' + currentTime.getMinutes()

    if (time > currentTime) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="course-list-wrapper">
      {list.courseId === parseInt(activeList) ? (
        list.courseList.map((listItem, index) => (
          showUpcomingCourse(listItem.courseStartTime) ? (
            <div key={index} className="course-list-item" style={{ borderLeft: `10px solid ${listItem.courseColor}` }}>
              <a href="/">
                <div className="course-list-item-details">
                  <span className="course-list-item-time">{listItem.courseStartTime} - {listItem.courseEndTime}</span>
                  <span>{listItem.courseRoom}</span>
                </div>
                <div className="course-list-item-title">{listItem.courseTitle}</div>
              </a>
            </div>
          ) : null ))
      ) : null}
    </div>
  )
}

export default CourseList
