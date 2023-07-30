import { createBrowserRouter } from 'react-router-dom'
import {
	AppPage,
	LoginPage,
	ErrorPage,
	AdminPricePage,
	AdminRoomPage,
	AdminStaffPage,
	AdminSchedulePage
} from 'pages/index.pages'
import { Layout } from '@layout/layout/Layout'
import {
	PAGE_ADMIN,
	PAGE_ADMIN_PRICE,
	PAGE_ADMIN_ROOM,
	PAGE_ADMIN_STAFF,
	PAGE_LOGIN,
	PAGE_MAIN
} from 'config/index.config'
import { AuthorizatedRoute } from './AuthorizatedRoute'
import { AdminLayout } from 'components/layout/adminLayout/AdminLayout'

export const router = createBrowserRouter([
	{
		element: <Layout></Layout>,
		path: PAGE_MAIN,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <AppPage />
			},
			{
				path: PAGE_LOGIN,
				element: <LoginPage />
			},
			{
				path: PAGE_ADMIN,
				element: (
					<AuthorizatedRoute>
						<AdminLayout />
					</AuthorizatedRoute>
				),
				children: [
					{ index: true, element: <AdminSchedulePage /> },
					{ path: PAGE_ADMIN_PRICE, element: <AdminPricePage /> },
					{ path: PAGE_ADMIN_ROOM, element: <AdminRoomPage /> },
					{ path: PAGE_ADMIN_STAFF, element: <AdminStaffPage /> }
				]
			}
		]
	}
])
