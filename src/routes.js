import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Leader from './Components/Leader/Leader';
import StartScreen from './Components/StartScreen/StartScreen';
import About from './Components/About/About';


export default function Routes( props ){
    return <Switch>
        <Route component={StartScreen} path='/' exact/>
        <Route render={routerProps => <Home {...routerProps} reset={props.reset} pause={props.pause}/>} path='/home' exact/>
        <Route component={Leader} path='/leader' exact/>
        <Route component={About} path='/about' exact/>
    </Switch>
}