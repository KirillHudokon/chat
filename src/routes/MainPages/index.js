import React from "react"
import {connect} from 'react-redux'
import { BrowserRouter, Switch } from "react-router-dom"
import { mainPages } from "../../utils/routes/mainRoutes"
import  ProtectedRoute from "../ProtectedRoute/"
function MainPages({user}) {
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
  const selectRoutes = () => {
    return user ? renderRoutes('app') : renderRoutes('auth')
  }
  return (
      <BrowserRouter>
        <Switch>
          {selectRoutes()}
        </Switch>
      </BrowserRouter>         
  );
}
const mapStateToProps = store => ({
  user: store.user.cred
})
export default connect(mapStateToProps, null)(MainPages)
