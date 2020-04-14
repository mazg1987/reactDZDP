import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '@/components/nav'
import Nav2 from '@/components/nav2'

export default withRouter((props) => {
    let [navType, setNavType] = useState("nav")

    useEffect(() => {
        //除了下面三个路由地址使用nav，其他路由地址都使用nav2
        let rootRouteArr = ["/", "/login", "/user"]
        let currentPath = props.history.location.pathname;
        //根据不同的路由地址切换navType
        if (rootRouteArr.includes(currentPath)) {
            setNavType("nav")
        }
        else {
            setNavType("nav2")
        }
    }, [props.history.location.pathname])

    return (<React.Fragment>
        {navType == 'nav' ? <Nav></Nav> : <Nav2></Nav2>}
    </React.Fragment>)
})