import { useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addProduct } from '../../redux/slices/ProductsSlice'
import Button from '../../ui/Btn'
import Input from '../../ui/Input'
import InputNum from '../../ui/InputNum'

const Form: React.FC = () => {
	const [name, setName] = useState<string>('')
	const [num, setNum] = useState<number | null>(null)
	const [numStatus, setNumStatus] = useState<'error' | 'warning' | undefined>(
		undefined
	)
	const [nameStatus, setNameStatus] = useState<'error' | 'warning' | undefined>(
		undefined
	)
	const dispatch = useDispatch()

	const handleButtonClick = () => {
		if (name && num !== null && num > 0) {
			dispatch(addProduct({ id: uuidv4(), name, num }))
			setName('')
			setNum(null)
			setNameStatus(undefined)
			setNumStatus(undefined)
		}
		if (!name) {
			setNameStatus('error')
		}
		if (num == null || num <= 0) {
			setNumStatus('error')
		}
	}

	const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
		!e.target.value ? setNameStatus('warning') : setNameStatus(undefined)
	}

	const handleInputNum = (value: number | null) => {
		setNum(value)
		value === null || value <= 0
			? setNumStatus('warning')
			: setNumStatus(undefined)
	}

	return (
		<form className='form'>
			<h1>Добавить продукт</h1>
			<Input
				status={nameStatus}
				value={name}
				onChange={handleInputName}
				placeholder='Введите название'
			/>
			<InputNum
				status={numStatus}
				value={num}
				onChange={handleInputNum}
				placeholder='Введите количество'
				addonBefore={
					<FaCartArrowDown
						style={{
							color: '#fff',
						}}
					/>
				}
			/>
			<Button onClick={handleButtonClick} value='В корзину' />
		</form>
	)
}

export default Form
