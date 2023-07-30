import { PRICE_KEY } from 'config/index.config'
import { useQuery } from 'react-query'
import Select, { SingleValue } from 'react-select'
import { PriceService } from 'services/price/Price.service'
import { OptionType } from 'types/option.types'
import { IPrice } from 'types/price.types'
import { transformToOptions } from 'utils/transformToOptions/transformToOptions'

interface IPriceSelect {
	handleSelectChange: (selectedOption: SingleValue<OptionType>, field: string) => void
	ErrorComponent: React.ReactElement | null
}

export function PriceSelect({ handleSelectChange, ErrorComponent }: IPriceSelect) {
	const { data: priceOptions } = useQuery({
		queryFn: async () => {
			const response = await PriceService.getPrices()
			return response.data
		},
		select(data) {
			return transformToOptions<IPrice>(data, 'id', ['price'])
		},
		queryKey: PRICE_KEY
	})

	return (
		<label>
			Цена
			<Select
				id="service"
				// value={values.service}
				onChange={(selectedOption) => handleSelectChange(selectedOption, 'service')}
				placeholder="Выбрать..."
				options={priceOptions}
			/>
			{ErrorComponent}
		</label>
	)
}
