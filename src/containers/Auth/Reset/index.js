import React from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux"
import AuthFormController from "../../../components/Auth/hoc/AuthFormController"
import AuthFormWithSupportLinks from "../../../components/Auth/hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../../../components/Auth/FormAccountSupportLink"
import FormWithTitle from "../../../components/Auth/FormTitleWrapper/"
import { resetFormInitialState } from '../../../utils/initialStates';
import { resetPassword as action, resetStoreWithoutCred} from "../../../actions/index"
import FormUI from "../../../components/Auth/FormUI/"
function Reset({authStatus, handleAction, userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Reset Form">
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
Reset.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="Do you have an account?" link='signin'/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.user_auth,
});
const mapDispatchToProps = {
  action,
  resetStoreWithoutCred
}
const ConnectedReset = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(Reset,resetFormInitialState))

export default AuthFormWithSupportLinks(ConnectedReset,Reset.supportLinks());
