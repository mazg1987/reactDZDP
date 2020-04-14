import React from 'react'
import './style.scss'

function Ad(props) {
    return (<div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
            {props.adlist.map((item, index)=>{
                return <div key={index} className="ad-item float-left">
                    <a href={item.link} target="_blank">
                        <img src={require("@/"+item.img)} alt={item.title}></img>
                    </a>
                </div>
            })}
        </div>
    </div>)
}

export default Ad;