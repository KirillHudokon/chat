import React from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../../../components/Auth/hoc/AuthFormController"
import AuthFormWithSupportLinks from "../../../components/Auth/hoc/AuthFormWithSupportLinks"
import FormAccountSupportLink from "../../../components/Auth/FormAccountSupportLink"
import FormWithTitle from "../../../components/Auth/FormTitleWrapper"
import { signUpInitialState } from '../../../utils/initialStates';
import { signUp as action, resetStoreWithoutCred } from "../../../actions/index"
import FormUI from "../../../components/Auth/FormUI"
function SignUp({authStatus, handleAction, userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign Up Form">
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

SignUp.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="Do you have an account?" link='signin'/>
  </div>
}

const mapStateToProps = store => ({
  authStatus: store.user.user_auth,
});
const mapDispatchToProps = {
  resetStoreWithoutCred,
  action
}
const ConnectedSignUp = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(SignUp,signUpInitialState))

export default AuthFormWithSupportLinks(ConnectedSignUp,SignUp.supportLinks());
