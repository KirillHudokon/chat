import React, { useEffect } from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { userInfoInitialState } from '../../../utils/initialStates';
import { updateUserData as action, resetStoreWithoutCred } from "../../../actions/index"
import FormUI from "../FormUI/"
function UserInfo({authStatus, handleAction, userData, changeUserData, children}) { 
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Your info">
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
UserInfo.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="Skip to next step" link='reset'/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.update_user_data,
});
const mapDispatchToProps = {
  resetStoreWithoutCred,
  action
}
const ConnectedUserInfo = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(UserInfo,userInfoInitialState))

export default AuthFormWithSupportLinks(ConnectedUserInfo,UserInfo.supportLinks());
