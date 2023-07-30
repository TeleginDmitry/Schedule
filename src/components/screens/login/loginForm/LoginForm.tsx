import { useFormik } from 'formik'
import styles from './LoginForm.module.scss'
import useActions from 'hooks/useActions'

interface IInitialValues {
	username: string
	password: string
}

const initialValues: IInitialValues = {
	username: '',
	password: ''
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.username) {
		errors.username = 'Это поле обязательно для заполнения'
	}

	if (!values.password) {
		errors.password = 'Это поле обязательно для заполнения'
	}

	return errors
}

export function LoginForm() {
	const { login } = useActions()

	const { handleSubmit, getFieldProps, errors, touched } = useFormik<IInitialValues>({
		initialValues,
		onSubmit(values, formikHelpers) {
			formikHelpers.resetForm()

			login(values)
		},
		validate
	})

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<h1 className={styles.title}>Добро пожаловать в Админ Панель</h1>
			<label>
				Логин
				<input {...getFieldProps('username')} placeholder="Введите свой логин..." type="text" />
				{errors.username && touched.username && <span>{errors.username}</span>}
			</label>
			<label>
				Пароль
				<input
					{...getFieldProps('password')}
					placeholder="Введите свой пароль..."
					type="password"
				/>
				{errors.password && touched.password && <span>{errors.password}</span>}
			</label>
			<button type="submit">Войти</button>
		</form>
	)
}
