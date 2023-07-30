import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState } from 'store/store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
