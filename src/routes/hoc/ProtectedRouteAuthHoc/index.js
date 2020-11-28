import {connect} from 'react-redux'
function ProtectedRouteAuthHoc(Component){
  function ProtectedRouteAuthHocComponent(props){
    return (
      <Component
        {...props}
      />
    )
  }
  const mapStateToProps = store => ({
    user: store.user.data,
  });

  return connect(mapStateToProps, null)(ProtectedRouteAuthHocComponent)
}
export default ProtectedRouteAuthHoc;


