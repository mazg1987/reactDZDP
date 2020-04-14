import React from 'react'
import { connect } from 'react-redux'
import { add, sub, addAsync, changeCity } from '@/actions'

export default (WrapComponent) => {
    //把action和state映射到组件中
    const mapStateToProps = state => {
        return {
            count: state.count,
            city: state.city
        }
    }

    const mapDispatchToProps = {
        add, sub, addAsync, changeCity
    }

    function ReduxComp(props) {
        return (<WrapComponent {...props}></WrapComponent>)
    }
    //返回已经和redux连接的新的组件
    return connect(mapStateToProps,mapDispatchToProps)(ReduxComp);
}