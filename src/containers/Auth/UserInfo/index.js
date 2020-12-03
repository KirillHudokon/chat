import React, { useEffect } from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../../../components/Auth/hoc/AuthFormController"
import AuthFormWithSupportLinks from "../../../components/Auth/hoc/AuthFormWithSupportLinks"
import FormAccountSupportLink from "../../../components/Auth/FormAccountSupportLink"
import FormWithTitle from "../../../components/Auth/FormTitleWrapper"
import { userInfoInitialState } from '../../../utils/initialStates';
import { updateUserData as action, skipUpdateUserData, resetStoreWithoutCred } from "../../../actions/index"
import { store } from '../../../store/configureStore'
import FormUI from "../../../components/Auth/FormUI"
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
    <FormAccountSupportLink text="Skip to next step" action={()=>skipUpdateUserData()(store.dispatch)}/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.user_auth,
});
const mapDispatchToProps = {
  resetStoreWithoutCred,
  action
}
const ConnectedUserInfo = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(UserInfo,userInfoInitialState))

export default AuthFormWithSupportLinks(ConnectedUserInfo,UserInfo.supportLinks());
