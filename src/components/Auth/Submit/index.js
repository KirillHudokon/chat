import React from "react"
import styles from'./index.module.scss';
import { Icon } from '../../../utils/Icon';
function Submit({handleAction}) {
  return (
    <div className={styles.formActionContainer} onClick={handleAction}>
      <Icon icon="play" size="sm" color="white" className="formActionPlay"/>
    </div>         
  );
}

export default React.memo(Submit)
