import {
	ISheduleInitialValues,
	IPriceInitialValues,
	IRoomInitialValues,
	IStaffInitialValues
} from 'types/initialValues.types'
import { IPriceError, IRoomError, ISheduleError, IStaffError } from 'types/errors.types'

export const validateShedule = (values: ISheduleInitialValues) => {
	const errors: Partial<ISheduleError> = {}

	if (!values.end_datetime) {
		errors.end_datetime = 'Это поле обязательно для заполнения'
	}
	if (!values.room) {
		errors.room = 'Это поле обязательно для заполнения'
	}
	if (!values.service) {
		errors.service = 'Это поле обязательно для заполнения'
	}

	if (!values.start_datetime) {
		errors.start_datetime = 'Это поле обязательно для заполнения'
	}
	if (!values.trainer) {
		errors.trainer = 'Это поле обязательно для заполнения'
	}

	return errors
}

export const validateStaff = (values: IStaffInitialValues) => {
	const errors: Partial<IStaffError> = {}

	if (!values.first_name) {
		errors.first_name = 'Это поле обязательно для заполнения'
	}

	if (!values.last_name) {
		errors.last_name = 'Это поле обязательно для заполнения'
	}
	if (!values.description) {
		errors.description = 'Это поле обязательно для заполнения'
	}

	return errors
}

export const validateRoom = (values: IRoomInitialValues) => {
	const errors: Partial<IRoomError> = {}

	if (!values.name) {
		errors.name = 'Это поле обязательно для заполнения'
	}

	return errors
}

export const validatePrice = (values: IPriceInitialValues) => {
	const errors: Partial<IPriceError> = {}

	if (!values.name) {
		errors.name = 'Это поле обязательно для заполнения'
	}

	if (!values.description) {
		errors.description = 'Это поле обязательно для заполнения'
	}
	if (!values.price) {
		errors.price = 'Это поле обязательно для заполнения'
	}

	return errors
}
