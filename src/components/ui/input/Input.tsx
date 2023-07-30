import styles from './Input.module.scss'

export function Input(props: React.HTMLAttributes<HTMLInputElement>) {
	return <input type="text" className={styles.input} {...props}></input>
}
