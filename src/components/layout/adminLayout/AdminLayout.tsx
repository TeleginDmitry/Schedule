import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'

export function AdminLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
