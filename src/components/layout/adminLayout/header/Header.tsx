import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { headerItems } from './header.data'
import { useTypedSelector } from 'hooks/useTypedSelector'
import useActions from 'hooks/useActions'
import { HeaderSidebar } from './headerSidebar/HeaderSidebar'
import { useState } from 'react'

export function Header() {
	const user = useTypedSelector((state) => state.user.user)

	const [isVisibleSidebar, setIsVisibleSidebar] = useState(false)

	const { logout } = useActions()

	function changeVisibleSidebar() {
		setIsVisibleSidebar((state) => !state)
	}

	return (
		<header className={styles.header}>
			<ul className={styles.header__list}>
				{headerItems.map(({ id, title, to }) => (
					<li className={styles.header__item} key={id}>
						<Link to={to}>{title}</Link>
					</li>
				))}
			</ul>
			<button onClick={() => changeVisibleSidebar()} className={styles.burger}>
				☰
			</button>
			{isVisibleSidebar && <HeaderSidebar changeVisibleSidebar={changeVisibleSidebar}></HeaderSidebar>}

			<div className={styles.container}>
				<h2 className={styles.username}>{user?.username}</h2>
				<button onClick={() => logout()} className={styles.exit}>
					Выйти
				</button>
			</div>
		</header>
	)
}
