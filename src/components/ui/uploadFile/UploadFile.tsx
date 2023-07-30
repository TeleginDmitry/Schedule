/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEvent } from 'react'
import { useRef } from 'react'

import styles from './UploadFile.module.scss'

interface IUploadFile {
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	children: React.ReactNode
	wrapperClass?: string
	multiple?: boolean
	accept?: string
}

const UploadFile = ({
	accept = 'image/*, video/*',
	multiple = false,
	wrapperClass,
	children,
	onChange
}: IUploadFile) => {
	const inputFile = useRef<HTMLInputElement>(null)

	function clickContent() {
		if (inputFile.current) {
			inputFile.current.click()
		}
	}

	return (
		<div className={wrapperClass ? wrapperClass : styles.wrapper}>
			<input
				className={styles.file}
				onChange={onChange}
				multiple={multiple}
				accept={accept}
				ref={inputFile}
				type="file"
			/>
			<div className={styles.content} onClick={clickContent}>
				{children}
			</div>
		</div>
	)
}

export default UploadFile
