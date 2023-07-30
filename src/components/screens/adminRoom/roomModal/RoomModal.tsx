import { useSearchParams } from 'react-router-dom'
import { RoomModalForm } from './roomModalForm/RoomModalForm'
import { ROOM_PARAM } from 'config/index.config'

export function RoomModal() {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const roomParam = URLSearchParams.get(ROOM_PARAM)

	function handlerClose() {
		URLSearchParams.delete(ROOM_PARAM)
		SetURLSearchParams(URLSearchParams)
	}

	if (!roomParam?.length) return null

	return <RoomModalForm handlerClose={handlerClose} roomId={+roomParam}></RoomModalForm>
}
