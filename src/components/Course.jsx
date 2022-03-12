import { Link } from "react-router-dom"
export default function Course({title,price,isNew,id}){

    return(
        <div className='course'>
            <Link to={`course/${id}`}>
                <h4>{title ?? 'Untitled Course'}</h4>
                <div className='course-info'>
                    <p style={{color:'#ff0'}}>{isNew && 'New'}</p>
                    <p style={{color:'#ddd'}}>Price: {price > 0 ? `$${price}` : "FREE"}</p>
                </div>
            </Link>
        </div>
    )
}