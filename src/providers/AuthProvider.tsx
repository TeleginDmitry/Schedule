import { useLayoutEffect } from 'react'
import useActions from 'hooks/useActions'

interface IAuthProvider {
	children: React.ReactElement
}

export function AuthProvider({ children }: IAuthProvider) {
	const { verify } = useActions()

	useLayoutEffect(() => {
		verify()
	}, [])

	return children
}
