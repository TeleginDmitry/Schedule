import { IStaff } from 'types/staff.types'
import styles from './StaffItem.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { STAFF_KEY, STAFF_PARAM } from 'config/index.config'
import { useSearchParams } from 'react-router-dom'
import { StaffService } from 'services/staff/Staff.service'

interface IStaffItem {
	staff: IStaff
}

export function StaffItem({ staff }: IStaffItem) {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (id: number) => {
			return await StaffService.deleteStaff(id)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(STAFF_KEY)
			}
		}
	)

	function addPriceParam(id: number) {
		URLSearchParams.set(STAFF_PARAM, id.toString())
		SetURLSearchParams(URLSearchParams)
	}

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<img src={staff.photo} alt="" />
				<h2 className={styles.name}>
					{staff.first_name} {staff.last_name}
				</h2>
				<p className={styles.description}>{staff.description}</p>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => addPriceParam(staff.id)} className={styles.button}>
					Изменить
				</button>
				<button disabled={isLoading} onClick={() => mutate(staff.id)} className={styles.button}>
					Удалить
				</button>
			</div>
		</li>
	)
}
