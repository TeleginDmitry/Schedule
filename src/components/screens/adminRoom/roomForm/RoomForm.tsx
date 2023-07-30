import { useFormik } from 'formik'
import styles from './RoomForm.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { ROOM_KEY } from 'config/index.config'
import { RoomService } from 'services/room/Room.service'
import { IRoomInitialValues } from 'types/initialValues.types'
import { validateRoom } from 'i18n/validations/validations'

const initialValues: IRoomInitialValues = {
	name: ''
}

export function RoomForm() {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (values: IRoomInitialValues) => {
			return await RoomService.createRoom(values)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(ROOM_KEY)
			}
		}
	)

	const { handleSubmit, getFieldProps, errors, touched } = useFormik<IRoomInitialValues>({
		initialValues,
		onSubmit(values, formikHelpers) {
			formikHelpers.resetForm()

			mutate(values)
		},
		validate: validateRoom
	})

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<label>
				Название
				<input {...getFieldProps('name')} placeholder="Введите название..." type="text" />
				{errors.name && touched.name && <span>{errors.name}</span>}
			</label>

			<button disabled={isLoading} type="submit">
				Создать
			</button>
		</form>
	)
}
