import styles from'./index.module.scss';
import {connect} from "react-redux";
import AuthFormController from "../hoc/AuthFormController"
import AuthFormWithSupportLinks from "../hoc/AuthFormWithSupportLinks/"
import FormAccountSupportLink from "../FormAccountSupportLink"
import FormWithTitle from "../FormTitleWrapper/"
import { updateUserPhoto, skipUpdateUserData, resetStoreWithoutCred } from "../../../actions/index"
import { store } from '../../../store/configureStore'
import FormUI from "../FormUI/"
function UserImageForm({authStatus, updateUserPhoto, children, userData, setExactData, clearData}) { 
  const updatePhoto = () => {
    updateUserPhoto(userData)
  }
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Your Photo">
        <FormUI
          loading={authStatus.loading} 
          handleAction={updatePhoto} 
          imageForm={true}
          userData={userData}
          savePhoto={setExactData}
          deletePhoto={clearData}
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
  updateUserPhoto
}
const ConnectedUserImageForm = connect(mapStateToProps,mapDispatchToProps)(AuthFormController(UserImageForm,null))

export default AuthFormWithSupportLinks(ConnectedUserImageForm,UserImageForm.supportLinks());
