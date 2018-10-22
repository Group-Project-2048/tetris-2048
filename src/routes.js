import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Leader from './Components/Leader/Leader';


export default (
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Leader} path='/leader' exact/>
    </Switch>
)