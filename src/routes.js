import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import BlogContainer from './components/Blog/BlogContainer';
import ContactContainer from './components/Contact/ContactContainer';


export default (
    
    <Switch>
        <Route path='/blog' component={BlogContainer} />
        <Route path='/contact' component={ContactContainer} />
        <Route path='/' component={HomeContainer} />
    </Switch>

)