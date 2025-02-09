import { createSlice } from '@reduxjs/toolkit'

interface IProduct {
	name: string
	num: number | null
	id: string
}

const initialState: IProduct[] = []

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.push(action.payload)
		},
	},
})

export const { addProduct } = productsSlice.actions

export const selectProducts = (state: { products: IProduct[] }) =>
	state.products

export default productsSlice.reducer
