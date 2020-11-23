import React from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux"
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { resetFormInitialState } from '../../../utils/initialStates';
import { resetPassword as action, resetStoreWithoutCred} from "../../../actions/index"
import FormUI from "../FormUI/"
function Reset({handleAction, userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Reset Form">
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
Reset.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="Do you have an account?" link='signin'/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.reset_password,
});
const mapDispatchToProps = {
  action,
  resetStoreWithoutCred
}
const ConnectedReset = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(Reset,resetFormInitialState))

export default AuthFormWithSupportLinks(ConnectedReset,Reset.supportLinks());
