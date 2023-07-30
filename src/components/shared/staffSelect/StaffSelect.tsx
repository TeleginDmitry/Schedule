import { STAFF_KEY } from 'config/index.config'
import React from 'react'
import { useQuery } from 'react-query'
import Select, { SingleValue } from 'react-select'
import { StaffService } from 'services/staff/Staff.service'
import { OptionType } from 'types/option.types'
import { IStaff } from 'types/staff.types'
import { transformToOptions } from 'utils/transformToOptions/transformToOptions'

interface IStaffSelect {
	handleSelectChange: (selectedOption: SingleValue<OptionType>, field: string) => void
	ErrorComponent: React.ReactElement | null
}

export function StaffSelect({ handleSelectChange, ErrorComponent }: IStaffSelect) {
	const { data: staffOptions } = useQuery({
		queryFn: async () => {
			const response = await StaffService.getStaffs()
			return response.data
		},
		select(data) {
			return transformToOptions<IStaff>(data, 'id', ['first_name', 'last_name'])
		},
		queryKey: STAFF_KEY
	})

	return (
		<label>
			Тренер
			<Select
				id="trainer"
				// value={values.trainer}
				onChange={(selectedOption) => handleSelectChange(selectedOption, 'trainer')}
				placeholder="Выбрать..."
				options={staffOptions}
			/>
			{ErrorComponent}
		</label>
	)
}
