import generateId from '@utils/generateId/generateId'
import { useState } from 'react'

interface IViewMedia {
	isInfinity?: boolean
}

export interface IResponseViewMedia {
	type: 'image' | 'video'
	view: string
	upload: File
	id: number
}

const useViewUploadMedias = ({ isInfinity = false }: IViewMedia = {}) => {
	const [medias, setMedias] = useState<IResponseViewMedia[]>([])

	const handlerMedia = (mediasList: FileList) => {
		const arrayMedias = [...mediasList]
		arrayMedias.forEach((file) => {
			const reader = new FileReader()
			reader.onload = () => {
				if (!reader.result) return

				const id = generateId(file.length)
				const result: IResponseViewMedia = {
					type: file.type.split('/')[0] as 'image' | 'video',
					view: reader.result.toString(),
					upload: file,
					id
				}
				setMedias((state) => (isInfinity ? [...state, result] : [result]))
			}
			reader.readAsDataURL(file)
		})
	}

	return [medias, setMedias, handlerMedia] as const
}

export default useViewUploadMedias
