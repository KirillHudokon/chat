import styles from'./index.module.scss';
import AuthFormWrapper from "../hoc/AuthFormWrapper"
import AuthFormController from "../hoc/AuthFormController"
import FormWithTitle from "../FormTitleWrapper/"
import { Icon } from '../../../utils/Icon';
import { signInInitialState } from '../../../utils/initialStates';

function SignIn(props) {
  console.log(props)
  return (
    <div className={styles.formContainer}>
      <FormWithTitle title="Sign In Form">
        <div className={styles.formWrapper}>
          <form>
            <div className={styles.formContentCentered}>
              <div className={styles.formFieldWrapper}>
                <div className={styles.formFieldContainer}>
                  <input className={styles.formField} placeholder="email"/>
                  <span className={styles.formFieldLine}/>
                </div>
                <div className={styles.formFieldContainer}>
                  <input className={styles.formField} placeholder="password"/>
                  <span className={styles.formFieldLine}/>
                </div>
              </div>
              <div className={styles.formActionWrapper}>
                <div className={styles.formActionContainer}>
                  <Icon icon="play" size="sm" color="white" className="formActionPlay"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </FormWithTitle>
    </div>
  );
}

export default AuthFormWrapper(AuthFormController(SignIn,signInInitialState));
