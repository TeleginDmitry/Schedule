import { AdminPrice } from 'components/screens/adminPrice/AdminPrice'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export function AdminPricePage() {

	useChangingTitlePage('Цены')

	return <AdminPrice></AdminPrice>
}
