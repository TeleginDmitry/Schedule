import { useSearchParams } from 'react-router-dom'
import { ScheduleModalForm } from './scheduleModalForm/ScheduleModalForm'
import { SCHEDULE_PARAM } from 'config/index.config'

interface IScheduleModal {
	selectDate: Date
}

export function ScheduleModal({ selectDate }: IScheduleModal) {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const scheduleParam = URLSearchParams.get(SCHEDULE_PARAM)

	function handlerClose() {
		URLSearchParams.delete(SCHEDULE_PARAM)
		SetURLSearchParams(URLSearchParams)
	}

	if (!scheduleParam?.length) return null

	return (
		<ScheduleModalForm
			selectDate={selectDate}
			handlerClose={handlerClose}
			scheduleId={+scheduleParam}
		></ScheduleModalForm>
	)
}
