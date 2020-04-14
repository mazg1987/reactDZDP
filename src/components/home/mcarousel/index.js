import React from 'react'
import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './style.scss'

function MCarousel(props) {
    const list = props.catelist;

    return (<Carousel
        autoplay={false}
        infinite
    >
        {list.map((item, idx) => (
            <div key={idx} className="home-category">
                <ul className="clear-fix">
                    {
                        item.map((dataItem) => {
                            return <li key={dataItem.name}>
                                <img src={require("" + dataItem.img)}></img>
                                <Link to={dataItem.to}>{dataItem.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        ))}
    </Carousel>)
}

export default MCarousel;