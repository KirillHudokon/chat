import React from 'react'
import styles from'./index.module.scss';
import Submit from "../Submit/"
import FieldsUserDataContainer from '../FieldsUserDataContainer';

const FormUI = ({userData, changeUserData, children}) => {
  return (
    <div className={styles.formWrapper}>
      <form>
        <div className={styles.formContentCentered}>
          <div className={styles.formFieldWrapper}>
            <FieldsUserDataContainer userData={userData} changeUserData={changeUserData}/>
          </div>
          <div className={styles.formActionWrapper}>
            <Submit/>
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