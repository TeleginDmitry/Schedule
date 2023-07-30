import { PAGE_LOGIN } from 'config/index.config'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface IAuthorizatedRoute {
	children: React.ReactElement
}

export function AuthorizatedRoute({ children }: IAuthorizatedRoute) {
	const [isAccess, setIsAccess] = useState(false)

	const isAuth = useTypedSelector((state) => state.user.isAuth)

	useEffect(() => {
		if (isAuth) {
			setIsAccess(true)
		}
	}, [isAuth])

	if (isAuth) return children
}
