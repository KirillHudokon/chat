import styles from'./index.module.scss';

function FormAccountSupportLink({text}) {
  console.log(text)
  return (
    <div className={styles.formAccountSupportLink}>
        {text} <span className={styles.formAccountSupportLinkRedirect}> click here</span>
    </div>
  );
}

export default FormAccountSupportLink;
