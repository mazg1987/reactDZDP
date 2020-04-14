import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';
import './style.scss'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
    let [selectedTab, setSelectedTab] = useState("home")

    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
        >
            <TabBar.Item
                title="主页"
                key="home"
                icon={<div className="tabicon icon-picture-o" />}
                selectedIcon={<div className="tabicon icon-picture-o" />}
                selected={selectedTab === 'home'}
                onPress={() => {
                    setSelectedTab("home")
                    props.history.push("/")
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title="登陆"
                key="login"
                icon={<div className="tabicon icon-star" />}
                selectedIcon={<div className="tabicon icon-star" />}
                selected={selectedTab === 'login'}
                onPress={() => {
                    setSelectedTab("login")
                    props.history.push("/login")
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title="用户"
                key="user"
                icon={<div className="tabicon icon-user" />}
                selectedIcon={<div className="tabicon icon-user" />}
                selected={selectedTab === 'user'}
                onPress={() => {
                    setSelectedTab("user")
                    props.history.push("/user")
                }}
            >
            </TabBar.Item>
        </TabBar>
    )
})