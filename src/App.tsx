import Cart from './components/cart/Cart'
import Count from './components/count/Count'
import Form from './components/form/Form'

const App = () => {
	return (
		<>
			
			<div className='top'>
				<Count />
			</div>
			<div className='bottom'>
				<Form />
				<Cart />
			</div>
		</>
	)
}

export default App
