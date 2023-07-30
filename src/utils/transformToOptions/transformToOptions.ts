import { OptionType } from 'types/option.types'

export function transformToOptions<T extends Record<keyof T, any>>(
	data: T[],
	value: keyof T,
	label: Array<keyof T>
) {
	const result: OptionType[] = []

	data.forEach((item) => {
		const resLabel = label.reduce((acc, field, index) => {
			const resField = index === 0 ? item[field] : ` ${item[field]}`
			acc += resField

			return acc
		}, '')

		const option: OptionType = {
			value: item[value],
			label: resLabel
		}

		result.push(option)
	})

	return result
}
