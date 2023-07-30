import { Sidebar } from 'components/ui/sidebar/Sidebar'
import styles from './HeaderSidebar.module.scss'
import { headerItems } from '../header.data'
import { Link } from 'react-router-dom'

interface IHeaderSidebar {
	changeVisibleSidebar: () => void
}

export function HeaderSidebar({ changeVisibleSidebar }: IHeaderSidebar) {
	return (
		<Sidebar>
			<ul className={styles.sidebar__list}>
				{headerItems.map(({ id, title, to }) => (
					<li className={styles.sidebar__item} key={id}>
						<Link to={to}>{title}</Link>
					</li>
				))}

				<button className={styles.cancel} onClick={() => changeVisibleSidebar()}>
					X
				</button>
			</ul>
		</Sidebar>
	)
}
