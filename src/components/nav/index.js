import React from 'react'
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import './style.scss'
import reduxHOC from '@/components/hoc/reduxHOC'
import {withRouter} from 'react-router-dom'

export default withRouter(reduxHOC((props) => {
    return (<NavBar
        mode="light"
        leftContent={<div>{props.city}<Icon type="down" /></div>}
        onLeftClick={() => props.history.push({ pathname: "/city", query: { title: "城市选择" } })}
        rightContent={
            <span className="icon-user"></span>            
        }
    ><SearchBar placeholder="Search" maxLength={8} onSubmit={(val)=>{props.history.push({pathname:`/search/all/${val}`,query:{title:"搜索"}})}}/>
    </NavBar>)
}))