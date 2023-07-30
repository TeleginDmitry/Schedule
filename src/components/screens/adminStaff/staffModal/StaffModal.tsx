import { useSearchParams } from 'react-router-dom'
import { StaffModalForm } from './staffModalForm/StaffModalForm'
import { STAFF_PARAM } from 'config/index.config'

export function StaffModal() {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const staffParam = URLSearchParams.get(STAFF_PARAM)

	function handlerClose() {
		URLSearchParams.delete(STAFF_PARAM)
		SetURLSearchParams(URLSearchParams)
	}

	if (!staffParam?.length) return null

	return <StaffModalForm handlerClose={handlerClose} staffId={+staffParam}></StaffModalForm>
}
