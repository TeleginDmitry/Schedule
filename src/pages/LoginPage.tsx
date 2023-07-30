import { Login } from '@screens/login/Login'
import { PAGE_ADMIN } from 'config/index.config'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
	const navigate = useNavigate()

	useChangingTitlePage('Вход')

	const { isAuth, isLoading } = useTypedSelector((state) => state.user)

	if (isLoading) return null

	if (isAuth) return navigate(PAGE_ADMIN, { replace: false })

	return <Login></Login>
}
