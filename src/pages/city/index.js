import React from 'react'
import reduxHOC from "@/components/hoc/reduxHOC"
import './style.scss'

export default reduxHOC((props) => {

    const clickHandle = (newCity)=>{
        props.changeCity(newCity)
        props.history.go(-1)
    }

    return (<div>
        <div className="current-city">
            <h2>{props.city}</h2>
        </div>
        <div className="city-list-container">
            <h3>热门城市</h3>
            <ul className="clear-fix">
                <li>
                    <span onClick={() => { clickHandle("北京") }}>北京</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("上海") }}>上海</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("杭州") }}>杭州</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("广州") }}>广州</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("无锡") }}>无锡</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("深圳") }}>深圳</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("南京") }}>南京</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("天津") }}>天津</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("重庆") }}>重庆</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("厦门") }}>厦门</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("武汉") }}>武汉</span>
                </li>
                <li>
                    <span onClick={() => { clickHandle("西安") }}>西安</span>
                </li>
            </ul>
        </div>
    </div>)
})