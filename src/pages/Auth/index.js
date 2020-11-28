import styles from'./index.module.scss';
import { authRoutes } from "../../utils/routes/authRoutes"
import  ProtectedRoute from "../../routes/ProtectedRoute"
const Auth = () => {
  const renderRoutes = () => {
    return authRoutes.map(route => {
      return <ProtectedRoute
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
        />
      }) 
  } 
  return (
    <div className={styles.authWrapper}>
        {renderRoutes()}
    </div>
  );
}
export default Auth;


