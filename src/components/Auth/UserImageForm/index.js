import React, { useEffect } from 'react'
import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { updateUserData as action, skipUpdateUserData, resetStoreWithoutCred } from "../../../actions/index"
import { store } from '../../../store/configureStore'
import FormUI from "../FormUI/"
function UserImageForm({authStatus, action, children, resetStoreWithoutCred}) { 
  useEffect(()=>{
    return ()=>{
      resetStoreWithoutCred()
    }
  })
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Your Photo">
        <FormUI
          loading={authStatus.loading} 
          handleAction={action} 
          imageForm={true}
        >
          {children}
        </FormUI>
      </FormWithTitle>
    </div>
  );
}
UserImageForm.supportLinks = () => {
  return <div className={styles.formAccountSupportLinkContainer}>
    <FormAccountSupportLink text="Skip to next step" action={()=>skipUpdateUserData()(store.dispatch)}/>
  </div>
}
const mapStateToProps = store => ({
  authStatus: store.user.update_user_data,
});
const mapDispatchToProps = {
  resetStoreWithoutCred,
  action
}
const ConnectedUserImageForm = connect(mapStateToProps,mapDispatchToProps)(UserImageForm)

export default AuthFormWithSupportLinks(ConnectedUserImageForm,UserImageForm.supportLinks());
