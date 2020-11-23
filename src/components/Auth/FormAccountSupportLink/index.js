import React from 'react'
import styles from'./index.module.scss';
import {Link} from 'react-router-dom'
function FormAccountSupportLink({text,link, simple=false}) {

  if(simple){
    return <div className={styles.formAccountSupportLink}>
      <Link to={`/${link}`} className={styles.formAccountSupportLinkRedirect}> {text} </Link>
    </div>
  }
  return (
    <div className={styles.formAccountSupportLink}>
        {text} <Link to={`/${link}`} className={styles.formAccountSupportLinkRedirect}> click here </Link>
    </div>
  );
}

export default FormAccountSupportLink;
