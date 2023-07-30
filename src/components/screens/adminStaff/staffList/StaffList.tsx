import styles from './StaffList.module.scss'
import { StaffItem } from './staffItem/StaffItem'
import { useQuery } from 'react-query'
import { STAFF_KEY } from 'config/index.config'
import { StaffService } from 'services/staff/Staff.service'

export function StaffList() {
	const { data, isLoading } = useQuery({
		queryFn: async () => {
			const response = await StaffService.getStaffs()
			return response.data
		},
		queryKey: STAFF_KEY
	})

	if (isLoading) return <p>Загрузка...</p>

	if (!data?.length) return <h2>Персонала нет.</h2>

	return (
		<ul className={styles.list}>
			{data.map((staff) => {
				return <StaffItem key={staff.id} staff={staff}></StaffItem>
			})}
		</ul>
	)
}
