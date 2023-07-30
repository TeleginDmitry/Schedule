import styles from './Button.module.scss'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactElement
}

export function Button(props: IButton) {
	return (
		<button type="button" className={styles.button} {...props}>
			{props.children}
		</button>
	)
}
