import { AdminSchedule } from 'components/screens/adminSchedule/AdminSchedule'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export function AdminSchedulePage() {
	useChangingTitlePage('Расписание')

	return <AdminSchedule></AdminSchedule>
}
