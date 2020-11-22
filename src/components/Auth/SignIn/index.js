import React, { useEffect } from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { signInInitialState } from '../../../utils/initialStates';
import { signIn as action } from "../../../actions/index"
import FormUI from "../FormUI/"
function SignIn({handleAction, userData, changeUserData, children}) { 

  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign In Form">
        <FormUI 
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
    <FormAccountSupportLink text="forgot your password?"/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.signin,
});
const mapDispatchToProps = {
  action
}
const ConnectedSignIn = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(SignIn,signInInitialState))

export default AuthFormWithSupportLinks(ConnectedSignIn,SignIn.supportLinks());
