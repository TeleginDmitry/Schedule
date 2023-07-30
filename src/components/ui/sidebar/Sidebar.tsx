import Portal from 'components/shared/portal/Portal'
import styles from './Sidebar.module.scss'
import { SIDEBAR_CONTAINER_ID } from 'config/index.config'

interface ISidebar {
	children: React.ReactElement
}

export function Sidebar({ children }: ISidebar) {
	return (
		<Portal element={document.getElementById(SIDEBAR_CONTAINER_ID)}>
			<div className={styles.sidebar}>{children}</div>
		</Portal>
	)
}
