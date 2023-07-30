import { useQuery } from 'react-query'
import styles from './ScheduleList.module.scss'
import { IScheduleRequestParams } from 'types/schedule.types'
import { ScheduleService } from 'services/schedule/Schedule.service'
import { ScheduleItem } from './scheduleItem/ScheduleItem'
import { SCHEDULE_KEY } from 'config/index.config'

interface IScheduleList {
	getParams: Partial<IScheduleRequestParams>
}

export function ScheduleList({ getParams }: IScheduleList) {
	const { data, isLoading } = useQuery({
		queryFn: async () => {
			const response = await ScheduleService.getSchedules(getParams)

			return response.data
		},
		queryKey: [SCHEDULE_KEY, getParams]
	})

	if (isLoading) return <p>Загрузка...</p>

	if (!data?.length) return <h2>Расписания нет.</h2>

	return (
		<ul className={styles.list}>
			{data.map((schedule) => {
				return <ScheduleItem key={schedule.id} schedule={schedule}></ScheduleItem>
			})}
		</ul>
	)
}
