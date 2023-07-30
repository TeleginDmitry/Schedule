import { useQuery } from 'react-query'
import styles from './RoomList.module.scss'
import { RoomService } from 'services/room/Room.service'
import { ROOM_KEY } from 'config/index.config'
import { RoomItem } from './roomItem/RoomItem'

export function RoomList() {
	const { data, isLoading } = useQuery({
		queryFn: async () => {
			const response = await RoomService.getRooms()
			return response.data
		},
		queryKey: ROOM_KEY
	})

	if (isLoading) return <p>Загрузка...</p>

	if (!data?.length) return <h2>Комнат нет.</h2>

	return (
		<ul className={styles.list}>
			{data.map((room) => {
				return <RoomItem key={room.id} room={room}></RoomItem>
			})}
		</ul>
	)
}
