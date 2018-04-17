import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import BlogContainer from './components/Blog/BlogContainer'


export default (
    
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/blog' component={BlogContainer}/>
    </Switch>

)