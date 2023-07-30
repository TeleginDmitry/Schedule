import { useSearchParams } from 'react-router-dom'
import { PriceModalForm } from './priceModalForm/PriceModalForm'
import { PRICE_PARAM } from 'config/index.config'

export function PriceModal() {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const priceParam = URLSearchParams.get(PRICE_PARAM)

	function handlerClose() {
		URLSearchParams.delete(PRICE_PARAM)
		SetURLSearchParams(URLSearchParams)
	}

	if (!priceParam?.length) return null

	return <PriceModalForm handlerClose={handlerClose} priceId={+priceParam}></PriceModalForm>
}
