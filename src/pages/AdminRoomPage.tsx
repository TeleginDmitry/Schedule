import { AdminRoom } from 'components/screens/adminRoom/AdminRoom'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export function AdminRoomPage() {
	useChangingTitlePage('Комнаты')

	return <AdminRoom></AdminRoom>
}
