import styles from './RoomItem.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { ROOM_KEY, ROOM_PARAM } from 'config/index.config'
import { useSearchParams } from 'react-router-dom'
import { RoomService } from 'services/room/Room.service'
import { IRoom } from 'types/room.types'

interface IRoomItem {
	room: IRoom
}

export function RoomItem({ room }: IRoomItem) {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (id: number) => {
			return await RoomService.deleteRoom(id)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(ROOM_KEY)
			}
		}
	)

	function addPriceParam(id: number) {
		URLSearchParams.set(ROOM_PARAM, id.toString())
		SetURLSearchParams(URLSearchParams)
	}

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<h2 className={styles.name}>{room.name}</h2>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => addPriceParam(room.id)} className={styles.button}>
					Изменить
				</button>
				<button disabled={isLoading} onClick={() => mutate(room.id)} className={styles.button}>
					Удалить
				</button>
			</div>
		</li>
	)
}
