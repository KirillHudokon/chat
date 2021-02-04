import { Route, Redirect, withRouter } from "react-router-dom"
import ProtectedRouteAuthHoc from '../hoc/ProtectedRouteAuthHoc'
import {appRoutes} from '../../utils/routes/appRoutes'
import {authRoutes} from '../../utils/routes/authRoutes'
function ProtectedRoute ({component: Component, name:name, match:match, user:user, ...rest}){
  console.log(name, user)
    return (
      <Route
        {...rest}
        render={(props)=>{
          if(name === 'app' && authRoutes.find(route => props.match.url === route.path)?.path && user ){
              return <Redirect to='/' />
          }
          if(name === 'auth' && appRoutes.find(route => props.match.url === route.path)?.path && !user ){
            return <Redirect to='/signin' />
          }
          if(name === 'auth' && user){
              return <Redirect to='/' />
          }
          if(name === 'auth' && !user){
            return <Component/>
          }
          if(name === 'app' && user && user.authStep < 3 && user.authStep === Number(props.match.params.id)){
            return <Component/>
          }
          if(name === 'app' && user && user.authStep < 3){
            return <Redirect to={`/user-info/${user.authStep}`} />
          }
          if(name === 'app' && user && user.authStep >= 3 && props.match.params.app === 'user-info'){
            return <Redirect to='/'/>
          }
          if(name === 'app' && user && user.authStep >= 3){
            return <Component/>
          }
          return <Component/>
        }}
      />           
    );
}

export default ProtectedRouteAuthHoc(withRouter(ProtectedRoute))
