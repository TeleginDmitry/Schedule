import { AdminStaff } from 'components/screens/adminStaff/AdminStaff'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export function AdminStaffPage() {
	useChangingTitlePage('Персонал')

	return <AdminStaff></AdminStaff>
}
