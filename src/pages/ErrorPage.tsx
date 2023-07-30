import { Error } from 'components/screens/error/Error'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export function ErrorPage() {
	useChangingTitlePage('Ошибка')
	return <Error />
}
