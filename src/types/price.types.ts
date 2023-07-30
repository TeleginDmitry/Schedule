export interface IPriceRequest {
	name: string
	description: string
}

export interface IPrice {
	id: number
	name: string
	description: string
	price: number
}

export interface IPriceWithoutPrice {
	id: number
	name: string
	description: string
}
