import { useFormik, FormikErrors, FormikTouched } from 'formik'
import styles from './SheduleForm.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { SCHEDULE_KEY } from 'config/index.config'
import { SingleValue } from 'react-select'
import { ScheduleService } from 'services/schedule/Schedule.service'
import { OptionType } from 'types/option.types'
import { IScheduleRequest } from 'types/schedule.types'
import { StaffSelect } from 'components/shared/staffSelect/StaffSelect'
import { PriceSelect } from 'components/shared/priceSelect/PriceSelect'
import { RoomSelect } from 'components/shared/roomSelect/RoomSelect'
import { ISheduleInitialValues } from 'types/initialValues.types'
import { validateShedule } from 'i18n/validations/validations'

const initialValues: ISheduleInitialValues = {
	end_datetime: '',
	room: 0,
	service: 0,
	start_datetime: '',
	trainer: 0
}

interface IErrorComponent {
	field: keyof ISheduleInitialValues
	errors: FormikErrors<ISheduleInitialValues>
	touched: FormikTouched<ISheduleInitialValues>
}

function ErrorComponent({ field, errors, touched }: IErrorComponent) {
	if (errors[field] && touched[field]) return <span>{errors[field]}</span>
	return null
}

interface ISheduleForm {
	selectDate: Date
}

export function SheduleForm({ selectDate }: ISheduleForm) {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (values: ISheduleInitialValues) => {
			const request: IScheduleRequest = {
				date: selectDate.toLocaleDateString(),
				...values
			}

			return await ScheduleService.createSchedule(request)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(SCHEDULE_KEY)
			}
		}
	)

	const { handleSubmit, getFieldProps, errors, touched, setFieldValue } =
		useFormik<ISheduleInitialValues>({
			initialValues,
			onSubmit(values) {
				mutate(values)
			},
			validate: validateShedule
		})

	const handleSelectChange = (selectedOption: SingleValue<OptionType>, field: string) => {
		setFieldValue(field, selectedOption?.value)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<StaffSelect
				ErrorComponent={<ErrorComponent errors={errors} touched={touched} field="trainer" />}
				handleSelectChange={handleSelectChange}
			></StaffSelect>
			<RoomSelect
				ErrorComponent={<ErrorComponent errors={errors} touched={touched} field="room" />}
				handleSelectChange={handleSelectChange}
			></RoomSelect>
			<PriceSelect
				ErrorComponent={<ErrorComponent errors={errors} touched={touched} field="service" />}
				handleSelectChange={handleSelectChange}
			></PriceSelect>
			<label>
				Начало
				<input
					type="datetime-local"
					{...getFieldProps('start_datetime')}
					placeholder="Введите описание..."
				/>
				{errors.start_datetime && touched.start_datetime && <span>{errors.start_datetime}</span>}
			</label>
			<label>
				Конец
				<input
					type="datetime-local"
					{...getFieldProps('end_datetime')}
					placeholder="Введите цену..."
				/>
				{errors.end_datetime && touched.end_datetime && <span>{errors.end_datetime}</span>}
			</label>
			<button disabled={isLoading} type="submit">
				Создать
			</button>
		</form>
	)
}
