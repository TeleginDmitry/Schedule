import * as userActions from './user/user.actions'
import { logout } from './user/user.slice'

export const rootActions = {
	...userActions,
	logout
}
