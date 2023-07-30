/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react'
import { MODAL_CONTAINER_ID } from 'config/index.config'
import { useOverflowBody } from 'hooks/useOverflowBody'
import Portal from 'components/shared/portal/Portal'

import styles from './Modal.module.scss'

interface IModal {
	handlerClose: () => void | null
	children: React.ReactElement
	opacity?: number
}

const Modal = ({ opacity = 0.8, handlerClose, children }: IModal) => {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [isWrapperHeightExceedViewport, setIsWrapperHeightExceedViewport] = useState(false)

	const { appendClass, deleteClass } = useOverflowBody()

	const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!handlerClose) return

		if (event.target === wrapperRef.current) {
			handlerClose()
		}
	}

	useEffect(() => {
		if (!handlerClose) return

		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handlerClose()
			}
		}

		window.addEventListener('keydown', handleEscapePress)

		return () => {
			window.removeEventListener('keydown', handleEscapePress)
		}
	}, [handlerClose])

	useEffect(() => {
		appendClass()

		const handleResize = () => {
			if (wrapperRef.current) {
				setIsWrapperHeightExceedViewport(
					wrapperRef.current.getBoundingClientRect().height > window.innerHeight
				)
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			deleteClass()
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<Portal element={document.getElementById(MODAL_CONTAINER_ID)}>
			<div
				onClick={handleModalClick}
				style={{
					backgroundColor: `rgb(65, 65, 65, ${opacity})`,
					alignItems: isWrapperHeightExceedViewport ? 'center' : 'flex-start'
				}}
				className={styles.modal}
				ref={wrapperRef}
			>
				{children}
			</div>
		</Portal>
	)
}

export default Modal
