import { Input } from 'antd'

interface IInput {
	defaultValue?: string
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	status?: 'error' | 'warning'
}

const input = ({ defaultValue, placeholder, onChange, status }: IInput) => {
	return (
		<Input
			defaultValue={defaultValue}
			placeholder={placeholder}
			onChange={onChange}
			status={status}
		/>
	)
}

export default input
