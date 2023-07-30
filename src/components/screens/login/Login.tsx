import styles from './Login.module.scss'
import { LoginForm } from './loginForm/LoginForm'

export function Login() {
	return (
		<div className={styles.wrapper}>
			<LoginForm></LoginForm>
		</div>
	)
}
