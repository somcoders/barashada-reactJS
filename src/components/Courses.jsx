import { useState,useEffect } from 'react'
import Course from './Course'
import ReactLoading from 'react-loading';

export default function Courses(){
    const [allCourses,setAllCourses] = useState([]);
    const [filteredCourses,setFilteredCourses] = useState([]);
    const [loading,setLoading] = useState(false);

    const url = "https://raw.githubusercontent.com/somcoders/barashada-reactJS/main/data.json"
    useEffect(() => {
    setTimeout(() => { 
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setAllCourses(data);
            setLoading(true);
        });
    },2000)
    },[])
   
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

   const Spinner = ({ type, color }) => (
       <div className="spinner">
            <ReactLoading type={type} color={color} height={667} width={375} />
        </div>
    );

    return (
        <>  
            <div className="filters">
                {filterData.map(filter => <button key={filter} onClick={filterCourses}>{filter}</button>)}
            </div>
            {!loading 
            ? 
           <Spinner color={"orange"} type={"balls"}/>
            :
                <div className='courses'>
                {courses.length > 0 ? courses : "No Courses Found"}
                </div>
            }
          
        </>
       
    )
}