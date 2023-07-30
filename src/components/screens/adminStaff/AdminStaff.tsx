import styles from './AdminStaff.module.scss'
import { StaffForm } from './staffForm/StaffForm'
import { StaffList } from './staffList/StaffList'
import { StaffModal } from './staffModal/StaffModal'

export function AdminStaff() {
	return (
		<div className={styles.wrapper}>
			<StaffList></StaffList>
			<StaffForm></StaffForm>
			<StaffModal></StaffModal>
		</div>
	)
}
