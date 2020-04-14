import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './style.scss'
import { withRouter } from "react-router-dom";

export default withRouter((props) => {
    return (
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => props.history.go(-1)}
        >
            {/*注意：这个地方需要使用短路
            否则刷新页面或者返回的时候就会报错，因为页面一刷新query参数就丢失了
        */}
            {props.location.query && props.location.query.title}
        </NavBar>
    )
})