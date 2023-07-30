import styles from './AdminPrice.module.scss'
import { PriceForm } from './priceForm/PriceForm'
import { PriceList } from './priceList/PriceList'
import { PriceModal } from './priceModal/PriceModal'

export function AdminPrice() {
	return (
		<div className={styles.wrapper}>
			<PriceList></PriceList>
			<PriceForm></PriceForm>
			<PriceModal></PriceModal>
		</div>
	)
}
