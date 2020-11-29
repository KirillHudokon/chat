import React from 'react'
import styles from'./index.module.scss';
import Submit from "../Submit/"
import FieldsUserDataContainer from '../FieldsUserDataContainer';
import UserImageContainer from '../UserImageContainer'
const FormUI = ({loading, handleAction, userData, changeUserData, children, imageForm}) => {
  const renderUi = () => {
    if(!imageForm){
      return <FieldsUserDataContainer
        userData={userData}
        changeUserData={changeUserData}
      />
    }
    return <UserImageContainer/>
  }
  return (
    <div className={styles.formWrapper}>
      <form autoComplete="off">
        <div className={styles.formContentCentered}>
          <div className={styles.formFieldWrapper}>
            {renderUi()}
          </div>
          <div className={styles.formActionWrapper}>
            <Submit handleAction={handleAction} loading={loading} />
          </div>
        </div>
      </form>
      <div>
        {children}
      </div>
    </div>
  );
}

export default FormUI
