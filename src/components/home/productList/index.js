import React, { useState } from 'react'
import './style.scss'
import { List, PullToRefresh } from 'antd-mobile';
import { Link } from 'react-router-dom'
const Item = List.Item;
const Brief = Item.Brief;


function ProductList(props) {
    let [height, setHeight] = useState(document.documentElement.clientHeight)

    return (<div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <PullToRefresh
            //拉动多少触发上拉加载
            damping={60}
            //控制PullToRefresh的样式，主要可以来指定高度
            style={{
                height: height - 100,
                overflow: 'auto',
            }}
            //指定拉动的提示文字
            indicator={{ deactivate: '上拉可以加载更多' }}
            //指定拉动的方向 up表示上拉加载，down表示下拉刷新
            direction={'up'}
            //拉动之后触发回调函数
            onRefresh={async () => {
                //调用父亲的方法让页面+1
                props.changeIndex();
            }}
        >
            <List>
                {props.products.map((item, index) => {
                    return (
                        <Link key={index} to={{pathname:`/detail/${item.id}`,query:{title:"商户详情"}}}>
                            <Item
                                thumb={item.img}
                                extra={<div>{item.distance}<div className="right">已售{item.number}</div></div>}
                                align="top"
                                multipleLine>
                                {item.title}
                                <Brief>{item.subTitle}</Brief>
                                <div className="left">
                                    <span>￥{item.price}</span>
                                </div>
                            </Item>
                        </Link>
                    )
                })}

            </List>
        </PullToRefresh>
    </div>)
}

export default ProductList;