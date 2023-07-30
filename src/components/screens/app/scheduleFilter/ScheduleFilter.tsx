import Select, { SingleValue } from 'react-select'
import styles from './ScheduleFilter.module.scss'
import { IScheduleRequestParams, SortType } from 'types/schedule.types'

interface IOptions {
	value: SortType
	label: string
}

const options: Partial<IOptions[]> = [
	{ value: 'trainer', label: 'Тренерам' },
	{ value: 'room', label: 'Помещениям' },
	{ value: 'service', label: 'Названиям услуг' }
]

interface IScheduleFilter {
	setGetParams: React.Dispatch<React.SetStateAction<Partial<IScheduleRequestParams>>>
}

export function ScheduleFilter({ setGetParams }: IScheduleFilter) {
	const handleSelectChange = (selectedOption: SingleValue<IOptions | undefined>) => {
		if (selectedOption) {
			setGetParams((state) => ({ ...state, sort: selectedOption?.value }))
		}
	}

	return (
		<div className={styles.wrapper}>
			<h2>Фильтровать по</h2>
			<Select
				placeholder="Выбрать..."
				className={styles.select}
				onChange={(selectedOption) => handleSelectChange(selectedOption)}
				options={options}
			/>
		</div>
	)
}
