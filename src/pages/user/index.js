import React from 'react'
import reduxHOC from '@/components/hoc/reduxHOC'

export default reduxHOC((props) => {
    let { count, city, add, sub, addAsync, changeCity } = props;
    return (<div>
        <p>当前count是:{count}</p>
        <p>当前city是:{city}</p>

        <button onClick={() => { console.log("2222");add() }}>加1</button>
        <button onClick={() => { sub() }}>减1</button>
        <button onClick={() => { addAsync() }}>异步加1</button>
        <button onClick={() => { changeCity("苏州") }}>改变城市</button>
    </div>)
})