import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { mainPages } from "../../utils/routes/mainRoutes"
import  ProtectedRoute from "../ProtectedRoute/"
function MainPages() {
  const renderRoutes = (path) => {
    return mainPages[path].map(route => {
       return <ProtectedRoute
            key={route.name}
            name={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
        />
      }) 
  }
  return (
      <BrowserRouter>
        <Switch>
          {renderRoutes('auth')}
          {renderRoutes('app')}
        </Switch>
      </BrowserRouter>         
  );
}

export default MainPages
