import React from 'react'
import "./style.scss"

export default (props) => {
    const clickHandle = (item)=>{
        props.modifyStar(props.data,props.type,item);
    }
    return (<div className="star-container">
        {
            [1, 2, 3, 4, 5].map((item, index) => {
                const lightClass = props.data.star >= item ? " light" : ""
                return <i key={index} className={"icon-star"+lightClass} onClick={()=>{clickHandle(item)}}></i>
            })
        }
    </div>)
}