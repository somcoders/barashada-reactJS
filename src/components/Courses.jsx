import Course from './Course'

export default function Courses(){
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