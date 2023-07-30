import styles from './Error.module.scss'

export function Error() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Упссc...</h1>
			<span>Произошла какая то ошибка</span>
		</div>
	)
}
