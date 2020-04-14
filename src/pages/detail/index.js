import React, { useEffect, useState } from 'react'
import { fetchGet } from '@/utils/zgfetch'
import Star from '@/components/star'
import { Card, WhiteSpace } from 'antd-mobile';
import './style.scss'
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default (props) => {
    //商户基本信息和商户评论数据
    let [content, setContent] = useState({});
    let [comments, setComments] = useState([]);

    //获取商户的id
    const id = props.match.params.id;
    //发送请求:获取商户的基本信息和商户的评论信息
    useEffect(() => {
        getContent();
        getComments();

        return () => {
            setContent = null;
            setComments = null;
        }
    }, [])

    //获取商户基本信息的方法
    const getContent = async () => {
        let { data } = await fetchGet("/api/detail/info/" + id);
        setContent && setContent(data)
    }

    //获取商户评论信息的方法
    const getComments = async () => {
        let { data } = await fetchGet("/api/detail/comment/" + id);
        setComments && setComments(data);
    }


    //修改星星的方法
    const modifyStar = (data, type, count) => {
        if (type == "content") {
            data.star = count;
            setContent({ ...data })
        }
        else if (type == "comments") {
            var newComments = comments.map((item) => {
                if (item == data) {
                    item.star = count;
                }
                return item;
            })
            setComments(newComments)
        }
    }

    return (<div>
        {JSON.stringify(content) == "{}" ? <div></div> :
            <Card>
                <Card.Header
                    title={<div>
                        <h3>{content.title}</h3>
                        <Star type="content" data={content} modifyStar={modifyStar}></Star>
                        <div>{content.subTitle}</div>
                    </div>}
                    thumb={content.img}
                />
                <Card.Body>
                    <p dangerouslySetInnerHTML={{ __html: content.desc }} className="info-desc"></p>
                </Card.Body>
            </Card>}

        <WhiteSpace size="lg" />

        {
            comments.length == 0 ? <div></div> :
                <Card>
                    <Card.Header
                        title={<div>
                            <h3>用户点评</h3>
                        </div>}
                    />
                    <Card.Body>
                        <List className="my-list">
                            {
                                comments.map((item, index) => {
                                    return (<Item key={index} multipleLine>
                                        <div>
                                            <span className="icon-user"></span>
                                  &nbsp;&nbsp;
                                  <span>{item.username}</span>
                                            <div>
                                                <Star type="comments" data={item} modifyStar={modifyStar}></Star>
                                            </div>
                                            <Brief>{item.comment}</Brief>
                                        </div>
                                    </Item>)
                                })
                            }
                        </List>
                    </Card.Body>
                </Card>
        }
    </div>)
}