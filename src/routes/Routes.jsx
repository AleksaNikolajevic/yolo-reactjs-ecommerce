import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cataloga from '../pages/Cataloga'
import Catalogy from '../pages/Catalogy'


import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Policy from '../pages/Policy'
import Test from '../pages/Test'
import Carousel from '../pages/Carousel'
import Akcije from '../pages/Akcije'





const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/proizvodi/:slug' component={Product}/>
            <Route path='/proizvodi' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/policy' component={Policy}/>
            <Route path='/test' component={Test}/>
            <Route path='/carousel' component={Carousel}/>
            <Route path='/akcije' component={Akcije}/>
            <Route path='/proizvodia' component={Cataloga}/>
            <Route path='/proizvodiy' component={Catalogy}/>







        </Switch>
    )
}

export default Routes
