import { Input } from 'antd'

interface IInput {
	value?: string
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	status?: 'warning' | 'error'
}

const input = ({ value, placeholder, onChange, status }: IInput) => {
	return (
		<Input
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			status={status}
		/>
	)
}

export default input
