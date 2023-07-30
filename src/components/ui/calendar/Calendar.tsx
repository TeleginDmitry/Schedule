/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import styles from './Calendar.module.scss'

interface ICalendar {
	onSelectDate: (date: Date) => void
}

export function Calendar({ onSelectDate }: ICalendar) {
	const [selectedDate, setSelectedDate] = useState(new Date())

	const goToPreviousWeek = () => {
		const previousWeek = new Date(selectedDate)
		previousWeek.setDate(selectedDate.getDate() - 7)
		setSelectedDate(previousWeek)
	}

	const goToNextWeek = () => {
		const nextWeek = new Date(selectedDate)
		nextWeek.setDate(selectedDate.getDate() + 7)
		setSelectedDate(nextWeek)
	}

	const getWeekDates = () => {
		const weekStart = new Date(selectedDate)
		const weekEnd = new Date(selectedDate)
		weekEnd.setDate(weekStart.getDate() + 6)

		const dates = []
		const currentDate = new Date(weekStart)
		while (currentDate <= weekEnd) {
			dates.push(new Date(currentDate))
			currentDate.setDate(currentDate.getDate() + 1)
		}

		return dates
	}

	const getMonthName = () => {
		return selectedDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
	}

	return (
		<div className={styles.calendar}>
			<div className={styles.header}>
				<button className={styles.arrowBtn} onClick={goToPreviousWeek}>
					&lt;
				</button>
				<h2>{getMonthName()}</h2>
				<button className={styles.arrowBtn} onClick={goToNextWeek}>
					&gt;
				</button>
			</div>
			<div className={styles.daysContainer}>
				<div className={styles.dayNameContainer}>
					{getWeekDates().map((date) => {
						return (
							<div key={`name_${date.toISOString()}`} className={styles.dayName}>
								{date.toLocaleDateString('ru-RU', { weekday: 'short' })}
							</div>
						)
					})}
				</div>
				<div className={styles.daysWrapper}>
					{getWeekDates().map((date) => (
						<div key={date.toISOString()} onClick={() => onSelectDate(date)} className={styles.day}>
							<div className={styles.dayNumber}>{date.getDate()}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
