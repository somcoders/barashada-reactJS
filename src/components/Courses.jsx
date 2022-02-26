import { useState } from 'react'
import Course from './Course'
import courseData from '../courseData'

export default function Courses(){
    const [allCourses,setAllCourses] = useState(courseData);
    const [filteredCourses,setFilteredCourses] = useState([]);

    const filterData = ["All","Free","Paid"];

    function getCourses(){
        if(filteredCourses.length > 0){
            return filteredCourses;
        }else{
            return allCourses
        }
    }

    const courses = getCourses().map(course => ( 
        <Course key={course.id} title={course.title} price={course.price} isNew={course.isNew}/>
   ))
   
   function filetrByPrice(filterValue){
        if(filterValue === "Free"){
            return allCourses.filter(courses => courses.price == 0)
        }else if(filterValue === "Paid"){
            return allCourses.filter(courses => courses.price > 0)
        }else{
            return [];
        }
    }

   function filterCourses(e){
       const filterValue = e.target.innerHTML;
       if(filterValue !== "All"){
        setFilteredCourses(filetrByPrice(filterValue))
       }else{
        setFilteredCourses(allCourses);
       }
   }

    return (
        <>  
            <div className="filters">
                {filterData.map(filter => <button key={filter} onClick={filterCourses}>{filter}</button>)}
            </div>
            <div className='courses'>
                {courses.length > 0 ? courses : "No Courses Found"}
            </div>
        </>
       
    )
}