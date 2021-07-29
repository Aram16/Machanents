import React from 'react'
import { Link } from 'react-router-dom'
// import './index.css'

const CourseCard = ({laboratory}) => {
    return(
        <div>
           <Link to={'/lab'}>{laboratory} </Link> 
        </div>
    )
}

export default CourseCard