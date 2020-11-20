import React from 'react'
import styles from'./index.module.scss';
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { signInInitialState } from '../../../utils/initialStates';
import FormUI from "../FormUI/"
function SignIn({userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign In Form">
        <FormUI userData={userData} changeUserData={changeUserData} >
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


export default AuthFormWithSupportLinks(AuthFormController(SignIn,signInInitialState),SignIn.supportLinks());
