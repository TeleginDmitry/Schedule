import { ROOM_KEY } from 'config/index.config'
import { useQuery } from 'react-query'
import Select, { SingleValue } from 'react-select'
import { RoomService } from 'services/room/Room.service'
import { OptionType } from 'types/option.types'
import { IRoom } from 'types/room.types'
import { transformToOptions } from 'utils/transformToOptions/transformToOptions'

interface IRoomSelect {
	handleSelectChange: (selectedOption: SingleValue<OptionType>, field: string) => void
	ErrorComponent: React.ReactElement | null
}

export function RoomSelect({ handleSelectChange, ErrorComponent }: IRoomSelect) {
	const { data: roomOptions } = useQuery({
		queryFn: async () => {
			const response = await RoomService.getRooms()
			return response.data
		},
		select(data) {
			return transformToOptions<IRoom>(data, 'id', ['name'])
		},
		queryKey: ROOM_KEY
	})

	return (
		<label>
			Комната
			<Select
				id="room"
				// value={values.room}
				onChange={(selectedOption) => handleSelectChange(selectedOption, 'room')}
				placeholder="Выбрать..."
				options={roomOptions}
			/>
			{ErrorComponent}
		</label>
	)
}
