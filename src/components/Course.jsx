export default function Course({title,price,isNew}){
    // const {title,price,isNew} = props;
    // console.log(title);

    const name = "ReactJS basics"
    return(
        <div className='course'>
            <h4>{title ?? 'Untitled Course'}</h4>
            <div className='course-info'>
                <p style={{color:'#ff0'}}>{isNew && 'New'}</p>
                <p style={{color:'#ddd'}}>Price: {price > 0 ? `$${price}` : "FREE"}</p>
            </div>
        </div>
    )
}