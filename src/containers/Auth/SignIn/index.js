import React, { useEffect } from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../../../components/Auth/hoc/AuthFormController"
import AuthFormWithSupportLinks from "../../../components/Auth/hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../../../components/Auth/FormAccountSupportLink"
import FormWithTitle from "../../../components/Auth/FormTitleWrapper/"
import { signInInitialState } from '../../../utils/initialStates';
import { signIn as action, resetStoreWithoutCred } from "../../../actions/index"
import FormUI from "../../../components/Auth/FormUI/"
function SignIn({authStatus, handleAction, userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign In Form">
        <FormUI
          loading={authStatus.loading} 
          handleAction={handleAction} 
          userData={userData} 
          changeUserData={changeUserData} 
        >
          {children}
        </FormUI>
      </FormWithTitle>
    </div>
  );
}
SignIn.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="forgot your password?" link='reset'/>
    <FormAccountSupportLink text="Dont`t have an account?" link='signup' simple={true}/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.user_auth,
});
const mapDispatchToProps = {
  resetStoreWithoutCred,
  action
}
const ConnectedSignIn = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(SignIn,signInInitialState))

export default AuthFormWithSupportLinks(ConnectedSignIn,SignIn.supportLinks());
