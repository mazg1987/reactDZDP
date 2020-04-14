import React, { Suspense, lazy } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

const City = React.lazy(() => import('@/pages/city'));
const Home = React.lazy(() => import('@/pages/home'));
const Login = React.lazy(() => import('@/pages/login'));
const User = React.lazy(() => import('@/pages/user'));
const Search = React.lazy(() => import('@/pages/search'));
const Detail = React.lazy(() => import('@/pages/detail'));

export default () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/city" component={City}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/search/:category/:keywords?" component={Search}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Suspense>
    )
}
