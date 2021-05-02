import React from 'react';
import { BrowserRouter, Route as RRRoute, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'

function Route({ render, ...rest }) {
    return (
      <RRRoute
        {...rest}
        render={(props) => {
          return render({ ...props });
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