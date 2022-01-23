import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


function Course(){
    const name = "ReactJS basics"
    return(
        <div className='course'>
            <h4>{name}</h4>
        </div>
    )
}

function Courses(){
    return (
        <div className='courses'>
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
        </div>
    )
}


ReactDOM.render(<Courses />,document.getElementById("root"))