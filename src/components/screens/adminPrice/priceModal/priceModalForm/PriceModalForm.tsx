import { useFormik } from 'formik'
import styles from './PriceModalForm.module.scss'
import { useMutation, useQueryClient } from 'react-query'
import { PriceService } from 'services/price/Price.service'
import { PRICE_KEY } from 'config/index.config'
import Modal from 'components/ui/modal/Modal'
import { IPriceInitialValues } from 'types/initialValues.types'
import { validatePrice } from 'i18n/validations/validations'

const initialValues: IPriceInitialValues = {
	name: '',
	description: '',
	price: 100
}

interface IPriceModalForm {
	priceId: number
	handlerClose(): void
}

export function PriceModalForm({ priceId, handlerClose }: IPriceModalForm) {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (values: IPriceInitialValues) => {
			return await PriceService.changePrice(priceId, values)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(PRICE_KEY)
				handlerClose()
			}
		}
	)

	const { handleSubmit, getFieldProps, errors, touched } = useFormik<IPriceInitialValues>({
		initialValues,
		onSubmit(values, formikHelpers) {
			formikHelpers.resetForm()

			mutate(values)
		},
		validate: validatePrice
	})

	return (
		<Modal handlerClose={handlerClose}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label>
					Название
					<input {...getFieldProps('name')} placeholder="Введите название..." type="text" />
					{errors.name && touched.name && <span>{errors.name}</span>}
				</label>
				<label>
					Описание
					<input type="text" {...getFieldProps('description')} placeholder="Введите описание..." />
					{errors.description && touched.description && <span>{errors.description}</span>}
				</label>
				<label>
					Цена
					<input {...getFieldProps('price')} placeholder="Введите цену..." type="number" />
					{errors.price && touched.price && <span>{errors.price}</span>}
				</label>
				<button disabled={isLoading} type="submit">
					Сохранить
				</button>
			</form>
		</Modal>
	)
}
