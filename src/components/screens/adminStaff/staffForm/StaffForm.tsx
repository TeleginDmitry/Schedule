import { useFormik } from 'formik'
import styles from './StaffForm.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { STAFF_KEY } from 'config/index.config'
import { StaffService } from 'services/staff/Staff.service'
import UploadFile from 'components/ui/uploadFile/UploadFile'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { IStaffInitialValues } from 'types/initialValues.types'
import { validateStaff } from 'i18n/validations/validations'

const initialValues: IStaffInitialValues = {
	first_name: '',
	last_name: '',
	description: ''
}

export function StaffForm() {
	const queryClient = useQueryClient()

	const [medias, setMedias, handlerMedia] = useViewUploadMedias()

	const { mutate, isLoading } = useMutation(
		async (values: IStaffInitialValues) => {
			const formData = new FormData()
			formData.append('first_name', values.first_name)
			formData.append('last_name', values.last_name)
			formData.append('description', values.description)
			formData.append('photo', medias[0].upload)

			return await StaffService.createStaff(formData)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(STAFF_KEY)
				setMedias([])
			}
		}
	)

	const { handleSubmit, getFieldProps, errors, touched } = useFormik<IStaffInitialValues>({
		initialValues,
		onSubmit(values, formikHelpers) {
			formikHelpers.resetForm()

			mutate(values)
		},
		validate: validateStaff
	})

	function uploadFiles(event: React.ChangeEvent<HTMLInputElement>) {
		const files = event.target.files

		if (!files) return

		handlerMedia(files)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<label>
				Имя
				<input {...getFieldProps('first_name')} placeholder="Введите имя..." type="text" />
				{errors.first_name && touched.first_name && <span>{errors.first_name}</span>}
			</label>
			<label>
				Фамилия
				<input {...getFieldProps('last_name')} placeholder="Введите фамилию..." type="text" />
				{errors.last_name && touched.last_name && <span>{errors.last_name}</span>}
			</label>
			<label>
				Описание
				<input {...getFieldProps('description')} placeholder="Введите описание..." type="text" />
				{errors.description && touched.description && <span>{errors.description}</span>}
			</label>
			<UploadFile onChange={uploadFiles} accept="image/*">
				Выбрать фотографию
			</UploadFile>

			{medias[0]?.view && <img src={medias[0].view} alt=""></img>}

			<button disabled={isLoading} type="submit">
				Создать
			</button>
		</form>
	)
}
