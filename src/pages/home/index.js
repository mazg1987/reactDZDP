import React, { useEffect, useState } from 'react'
import { fetchGet } from '@/utils/zgfetch'
import MCarousel from '@/components/home/mcarousel'
import Ad from '@/components/home/ad'
import ProductList from '@/components/home/productList'
import reduxHOC from '@/components/hoc/reduxHOC'
import { Icon } from 'antd-mobile';


export default reduxHOC((props) => {
    //图片轮播数据
    let [cateList, setCateList] = useState([]);
    let [adList, setAdList] = useState([])
    let [products, setProducts] = useState([])
    //商品列表的页码
    let [pageIndex, setPageIndex] = useState(0)

    //组件挂载完毕发送网络
    useEffect(() => {
        //1.获取图片轮播数据
        getCates();
        //2.获取广告数据
        getAds();

        //返回一个清除函数，这个清除函数会在组件销毁的时候执行
        return () => {
            setCateList = null;
            setAdList = null;
            setProducts = null;
            setPageIndex = null;
        }
    }, [])

    //获取图片轮播数据
    const getCates = async () => {
        let { data: cates } = await fetchGet("/api/catelist")
        setCateList && setCateList(cates)
    }
    //获取广告数据
    const getAds = async () => {
        let { data: ads } = await fetchGet("/api/homead")
        setAdList && setAdList(ads)
    }
    //获取列表数据
    const getGoods = async () => {
        let { data: goods } = await fetchGet(`/api/homelist/${props.city}/${pageIndex}`);
        setProducts && setProducts([...products, ...goods])
    }

    //每触发一下上拉加载，则让页面+1
    const changeIndex = () => {
        setPageIndex && setPageIndex(++pageIndex);
    }

    //监听pageIndex的变化，一旦pageIndex发生变化，我们就去发送网络请求获取新的数据
    useEffect(() => {
        getGoods();
    }, [pageIndex])

    return (<div>
        <MCarousel catelist={cateList}></MCarousel>
        <Ad adlist={adList}></Ad>
        {products.length ? <ProductList products={products} changeIndex={changeIndex}></ProductList> : <Icon type="loading"></Icon>}
    </div>)
})