import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


function Course({title,price,isNew}){
    // const {title,price,isNew} = props;
    // console.log(title);

    const name = "ReactJS basics"
    return(
        <div className='course'>
            <h4>{title ?? 'Untitled Course'}</h4>
            <div className='course-info'>
                <p style={{color:'#ff0'}}>{isNew && 'New'}</p>
                <p style={{color:'#ddd'}}>Price: {price}</p>
            </div>
        </div>
    )
}

function Courses(){
    return (
        <div className='courses'>
            <Course title='ReactJs Basics' price="10" isNew={true}/>
            <Course title='JavaScript Basics' price="10" isNew={true}/>
            <Course title='Vue Basics' price="10" isNew={false}/>
            <Course title='CSS Basics' price="10" isNew={true}/>
            <Course  price="10" isNew={false}/>
        </div>
    )
}


ReactDOM.render(<Courses />,document.getElementById("root"))