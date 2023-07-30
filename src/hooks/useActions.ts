import { bindActionCreators } from '@reduxjs/toolkit'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { rootActions } from 'store/root.actions'

const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
