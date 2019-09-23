import * as React from 'react'
import Helmet from 'react-helmet'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Pages from './Navigator.page'

import Banner from "../../components/Banner/Banner.component"
import Navbar from '../../components/Navbar/Navbar.component'

const Navigator = () => (
    <BrowserRouter>
        <div>
            <Helmet
                defaultTitle="Swan Hair Salon"
                titleTemplate="%s | SwanHairSalon"
            />

            <Banner/>
            <Navbar/>

            <Switch>
                <Route exact={true} path={'/'} component={Pages.Home}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default Navigator
