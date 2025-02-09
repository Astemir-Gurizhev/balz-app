import { useSelector } from 'react-redux'
interface Product {
	id: string
	name: string
	num: number | null
}

const Count: React.FC = () => {
	const products = useSelector(
		(state: { products: Product[] }) => state.products
	)
	return (
		<div className='count'>
			<h1>Количество товаров в корзине: {products.length}</h1>
		</div>
	)
}

export default Count
