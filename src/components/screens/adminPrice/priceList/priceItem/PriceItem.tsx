import { IPrice } from 'types/price.types'
import styles from './PriceItem.module.scss'
import { PriceService } from 'services/price/Price.service'
import { useMutation, useQueryClient } from 'react-query'
import { PRICE_KEY, PRICE_PARAM } from 'config/index.config'
import { useSearchParams } from 'react-router-dom'

interface IPriceItem {
	price: IPrice
}

export function PriceItem({ price }: IPriceItem) {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams()

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		async (id: number) => {
			return await PriceService.deletePrice(id)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(PRICE_KEY)
			}
		}
	)

	function addPriceParam(id: number) {
		URLSearchParams.set(PRICE_PARAM, id.toString())
		SetURLSearchParams(URLSearchParams)
	}

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<h2 className={styles.name}>{price.name}</h2>
				<p className={styles.description}>{price.description}</p>
				<span>Цена: {price.price}</span>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => addPriceParam(price.id)} className={styles.button}>
					Изменить
				</button>
				<button disabled={isLoading} onClick={() => mutate(price.id)} className={styles.button}>
					Удалить
				</button>
			</div>
		</li>
	)
}
