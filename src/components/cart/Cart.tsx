import { useSelector } from 'react-redux'

interface Product {
	id: string
	name: string
	num: number | null
}

const Cart: React.FC = () => {
	const products = useSelector(
		(state: { products: Product[] }) => state.products
	)

	return (
		<div className='cart'>
			<h1>Корзина</h1>
			<div>
				{products.length ? (
					products.map((product, index) => (
						<p key={product.id}>
							{index + 1}. Название: <b>{product.name}</b> | Количество:{' '}
							<b>{product.num} </b>
						</p>
					))
				) : (
					<p>Нет продуктов</p>
				)}
			</div>
		</div>
	)
}

export default Cart
