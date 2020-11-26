import React from "react"
import styles from'./index.module.scss';
import { Icon } from '../../../utils/Icon';
function Submit({handleAction, loading}) {
  const handleSubmit = (e) => {
    if(!loading){
      handleAction(e)
    }
  }

  const renderIcon = () => {
    if(loading){
      return <Icon
        icon="spinner"
        size="sm" 
        color="white" 
        className="formAction loading"
      />
    } 
    return <Icon
      icon="play"
      size="sm" 
      color="white" 
      className="formAction"
    />
    
  }
  return (
    <div className={styles.formActionContainer} onClick={handleSubmit}>
      {renderIcon()}
    </div>         
  );
}

export default React.memo(Submit)
