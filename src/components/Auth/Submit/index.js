import React from "react"
import styles from'./index.module.scss';
import { Icon } from '../../../utils/Icon';
function Submit() {
  return (
    <div className={styles.formActionContainer}>
      <Icon icon="play" size="sm" color="white" className="formActionPlay"/>
    </div>         
  );
}

export default React.memo(Submit)
