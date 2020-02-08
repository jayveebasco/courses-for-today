import React from 'react'

const CourseTab = ({ courseTab, clickTab, active }) => {

  return (
    <div className="course-tab-holder">
      {courseTab.map((courseItem, index) => (
        <button 
        key={index} 
        id={courseItem.courseId} 
        className={`course-tab-title ${parseInt(active) === courseItem.courseId ? 'active-tab' : ''}`} 
        onClick={clickTab}
        >
          {courseItem.courseCategory}
        </button>
      ))}
    </div>
  )
}

export default CourseTab
