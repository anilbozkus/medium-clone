import React, { Fragment } from 'react';
import { BrowserRouter, Route as RRRoute, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

function Route({ component: Component, render, ...rest }) {
    return (
      <RRRoute
        {...rest}
        render={(props) => {
            return (
            <Fragment>
                <Header {...props}/>
                <Component {...props} />
            </Fragment>
            )
        }}
      />
    );
  }

function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="" component={Home} />
          </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;