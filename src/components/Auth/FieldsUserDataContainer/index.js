import React from 'react'
import styles from'./index.module.scss';
import Field from "../Field/"
const FieldsUserDataContainer = ({userData, changeUserData}) => {
  const renderUserData =()=> {
    return Object.entries(userData).map(data => {
      const [name, value] = data;
      console.log(name)
      return (
        <div key={name} className={styles.formFieldContainer}>
          <Field 
            name={name}
            value={value}
            changeUserData={changeUserData}
          />
          <span className={styles.formFieldLine}/>
      </div>
      )
    })
  }

  return (
    <>
     {renderUserData()}
    </>
  );
}

export default FieldsUserDataContainer
