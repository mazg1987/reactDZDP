import React, { useState, useEffect } from 'react'
import reduxHOC from '@/components/hoc/reduxHOC'
import { fetchGet } from '@/utils/zgfetch'
import ProductList from '@/components/home/productList'


export default reduxHOC((props) => {
    //获取分类和搜索关键词的信息
    const { category, keywords } = props.match.params;
    //获取城市信息
    const city = props.city;
    //页码
    let [pageIndex, setPageIndex] = useState(0);
    //搜索数据的列表
    let [searchList,setSearchList] = useState([])

    //组件挂载完毕
    useEffect(() => {
        getSearchDatas()

        return ()=>{
            setPageIndex = null; 
            setSearchList = null;
        }
    }, [pageIndex])

    //发送请求获取搜索的数据
    const getSearchDatas = async () => {
        ///api/search/:page/:city/:category/:keywords?'
        //发送请求的url
        let keywordsStr = keywords ? keywords : ""
        let url = `/api/search/${pageIndex}/${city}/${category}/${keywordsStr}`;

        let {data:list} = await fetchGet(url)
        setSearchList && setSearchList([...searchList,...list]);
    }

    //每一次上拉刷新给变pageIndex
    const changeIndex = ()=>{
        setPageIndex && setPageIndex(++pageIndex);
    }

    return (<div>
        <ProductList products={searchList} changeIndex={changeIndex}></ProductList>
    </div>)
})