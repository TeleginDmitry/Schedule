import { Calendar } from 'components/ui/calendar/Calendar'
import styles from './App.module.scss'
import { useState } from 'react'
import { IScheduleRequestParams } from 'types/schedule.types'
import { ScheduleList } from './scheduleList/ScheduleList'
import { ScheduleFilter } from './scheduleFilter/ScheduleFilter'

export function App() {
	const [selectDate, setSelectDate] = useState<Date | null>(null)
	const [getParams, setGetParams] = useState<Partial<IScheduleRequestParams>>({})

	function onSelectDate(date: Date) {
		setSelectDate(date)
		setGetParams((state) => ({ ...state, date: date.toLocaleDateString() }))
	}

	return (
		<div className={styles.wrapper}>
			<Calendar onSelectDate={onSelectDate}></Calendar>
			{selectDate && <ScheduleFilter setGetParams={setGetParams}></ScheduleFilter>}
			{selectDate && <ScheduleList getParams={getParams}></ScheduleList>}
		</div>
	)
}
