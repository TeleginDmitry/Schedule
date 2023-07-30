import styles from './PriceList.module.scss'
import { PriceService } from 'services/price/Price.service'
import { PriceItem } from './priceItem/PriceItem'
import { useQuery } from 'react-query'
import { PRICE_KEY } from 'config/index.config'

export function PriceList() {
	const { data, isLoading } = useQuery({
		queryFn: async () => {
			const response = await PriceService.getPrices()
			return response.data
		},
		queryKey: PRICE_KEY
	})

	if (isLoading) return <p>Загрузка...</p>

	if (!data?.length) return <h2>Цен нет.</h2>

	return (
		<ul className={styles.list}>
			{data.map((price) => {
				return <PriceItem key={price.id} price={price}></PriceItem>
			})}
		</ul>
	)
}
