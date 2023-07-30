import styles from './AdminRoom.module.scss'
import { RoomForm } from './roomForm/RoomForm'
import { RoomList } from './roomList/RoomList'
import { RoomModal } from './roomModal/RoomModal'

export function AdminRoom() {
	return (
		<div className={styles.wrapper}>
			<RoomList></RoomList>
			<RoomForm></RoomForm>
			<RoomModal></RoomModal>
		</div>
	)
}
