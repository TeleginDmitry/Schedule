import { useState, useRef } from 'react'
import { AxiosError } from 'axios'

type ICallback<T> = (...args: any[]) => Promise<T>

interface IFetching<T> {
	onError?: (error: AxiosError) => void
	onSuccess?: (data: T) => void
	callback?: ICallback<T>
	condition?: boolean
}

const useFetching = <T>({ condition = true, onSuccess, callback, onError }: IFetching<T> = {}) => {
	const [data, setData] = useState<T>()
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setSuccess] = useState(false)
	const [error, setError] = useState<AxiosError | undefined>(undefined)
	const [isError, setIsError] = useState(false)
	const latestQueryArgsRef = useRef<ICallback<T>>()

	async function handlerQuery(queryFunc: ICallback<T>) {
		if (!condition) return

		try {
			setIsLoading(true)
			const response = await queryFunc()
			setData(response)
			onSuccess?.(response)
			latestQueryArgsRef.current = queryFunc
			setSuccess(true)
			setIsError(false)
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error)
				onError?.(error)
				setSuccess(false)
				setIsError(true)
			}
		} finally {
			setIsLoading(false)
		}
	}
	async function fetchQuery(...args: any[]) {
		if (callback) {
			await handlerQuery(() => callback(...args))
		}
	}

	const refetch = async () => {
		if (latestQueryArgsRef.current) {
			await handlerQuery(latestQueryArgsRef.current)
		}
	}

	return {
		handlerQuery,
		fetchQuery,
		data: data,
		isSuccess,
		isLoading,
		refetch,
		isError,
		error
	}
}

export default useFetching
