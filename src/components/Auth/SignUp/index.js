import React from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { signUpInitialState } from '../../../utils/initialStates';
import { signUp as action } from "../../../actions/index"
import FormUI from "../FormUI/"
function SignUp({userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign Up Form">
        <FormUI userData={userData} changeUserData={changeUserData} >
          {children}
        </FormUI>
      </FormWithTitle>
    </div>
  );
}
const mapDispatchToProps = {
  action
}
//const ConnectedSignUp = connect(mapStateToProps,mapDispatchToProps)(form_decorator(SignUp))
SignUp.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="forgot your password?"/>
  </div>
}


export default AuthFormWithSupportLinks(AuthFormController(SignUp,signUpInitialState),SignUp.supportLinks());
