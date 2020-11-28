import styles from'./index.module.scss';
import { appRoutes } from "../../utils/routes/appRoutes"
import  ProtectedRoute from "../../routes/ProtectedRoute"
const ChatApp = () => {
    const renderRoutes = () => {
        return appRoutes.map(route => {
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

export default ChatApp