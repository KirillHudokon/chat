import React from 'react'
import styles from'./index.module.scss';
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { resetFormInitialState } from '../../../utils/initialStates';
import FormUI from "../FormUI/"
function Reset({userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Reset Form">
        <FormUI userData={userData} changeUserData={changeUserData} >
          {children}
        </FormUI>
      </FormWithTitle>
    </div>
  );
}
Reset.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="forgot your password?"/>
  </div>
}


export default AuthFormWithSupportLinks(AuthFormController(Reset,resetFormInitialState),Reset.supportLinks());
