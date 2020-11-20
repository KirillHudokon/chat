import React, {useCallback} from "react"
import styles from'./index.module.scss';
function Field({value, changeUserData, name, type}) {
  return (
    <input
      type={type}
      className={styles.formField}
      name={name}
      placeholder={name}
      value={value}
      onChange={changeUserData}
    />           
  );
}

export default React.memo(Field)
