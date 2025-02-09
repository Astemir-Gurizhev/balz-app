import { InputNumber } from 'antd'

interface IInputNum {
	addonBefore?: string | React.ReactNode
	prefix?: string
	suffix?: string
	onChange?: (value: number | null) => void
	placeholder?: string
	value?: number | null
	status?: 'warning' | 'error'
	type?: string
}

const InputNum = ({
	addonBefore,
	prefix,
	suffix,
	onChange,
	placeholder,
	value,
	status,
	type,
}: IInputNum) => {
	return (
		<InputNumber
			onChange={onChange}
			type={type}
			status={status}
			placeholder={placeholder}
			addonBefore={addonBefore}
			prefix={prefix}
			suffix={suffix}
			value={value}
			style={{ width: '70%' }}
		/>
	)
}

export default InputNum
