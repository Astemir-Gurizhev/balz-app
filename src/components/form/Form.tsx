import Button from '../../ui/Btn'
import Input from '../../ui/input'
import InputNum from '../../ui/InputNum'
import styles from './Form.module.css'
const Form = () => {
	return (
		<form className={styles.form}>
			<h2>Добавить продукт</h2>
			<Input placeholder='Введите текст' />
			<InputNum />
			<Button value='В корзину'/>
		</form>
	);
}

export default Form;