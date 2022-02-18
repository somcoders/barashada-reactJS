import Course from './Course'
import courseData from '../courseData'

export default function Courses(){

    const courses = courseData.map(course => ( 
        <Course key={course.id} title={course.title} price={course.price} isNew={course.isNew}/>
   ))

    return (
        <div className='courses'>
            {courses}
        </div>
    )
}