import { ISchedule } from 'types/schedule.types'
import styles from './ScheduleItem.module.scss'

interface IScheduleItem {
	schedule: ISchedule
}

export function ScheduleItem({ schedule }: IScheduleItem) {
	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<div>
					<img src={schedule.trainer.photo} alt="" />
					<h2>
						<span>Тренер:</span> {schedule.trainer.first_name} {schedule.trainer.last_name}
					</h2>
					<p>
						<span>Описание:</span> {schedule.trainer.description}
					</p>
				</div>
				<div>
					<h2>
						<span>Комната:</span> {schedule.room.name}
					</h2>
				</div>
				<h2>
					<span>Время начала:</span> {schedule.start_datetime}
				</h2>
				<h2>
					<span>Время конца:</span> {schedule.end_datetime}
				</h2>

				<div>
					<h2>
						<span>Название прайса:</span> {schedule.service.name}
					</h2>
					<p>
						<span>Описание:</span> {schedule.service.description}
					</p>
					<span>
						<span>Цена:</span> {schedule.price}
					</span>
				</div>
			</div>
		</li>
	)
}
