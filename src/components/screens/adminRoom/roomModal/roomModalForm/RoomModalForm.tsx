import { useFormik } from 'formik'
import styles from './RoomModalForm.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { ROOM_KEY } from 'config/index.config'
import Modal from 'components/ui/modal/Modal'
import { RoomService } from 'services/room/Room.service'
import { IRoomInitialValues } from 'types/initialValues.types'
import { validateRoom } from 'i18n/validations/validations'

const initialValues: IRoomInitialValues = {
	name: ''
}

interface IRoomModalForm {
	roomId: number
	handlerClose(): void
}

export function RoomModalForm({ roomId, handlerClose }: IRoomModalForm) {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (values: IRoomInitialValues) => {
			return await RoomService.changeRoom(roomId, values)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(ROOM_KEY)
				handlerClose()
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
		<Modal handlerClose={handlerClose}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label>
					Название
					<input {...getFieldProps('name')} placeholder="Введите название..." type="text" />
					{errors.name && touched.name && <span>{errors.name}</span>}
				</label>
				<button disabled={isLoading} type="submit">
					Сохранить
				</button>
			</form>
		</Modal>
	)
}
