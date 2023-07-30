import styles from '@assets/styles/_globalStyle.module.scss'

export const useOverflowBody = () => {
	const appendClass = () => {
		document.body.classList.add(styles.hidden)
	}

	const deleteClass = () => {
		document.body.classList.remove(styles.hidden)
	}

	return { appendClass, deleteClass }
}
