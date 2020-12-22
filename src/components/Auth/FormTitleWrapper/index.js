import React from 'react'
import styles from'./index.module.scss';

const FormTitleWrapper = ({children, title='title'}) => {
  return (
    <div className={styles.formTitleWrapper}>
      <div className={styles.formTitleContainer}>
        <h1 className={styles.formTitle}>
          {title}
        </h1> 
      </div> 
      <div className={styles.formUiWrapper}>
        {children}
      </div>
    </div>
  );
}

export default FormTitleWrapper
