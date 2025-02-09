import { InputNumber } from 'antd'

interface IInputNum {
	addonBefore?: string
	prefix?: string
	suffix?: string
	onChange?: () => void
}

const InputNum = ({ addonBefore, prefix, suffix, onChange }: IInputNum) => {
	return (
		<InputNumber
			addonBefore={addonBefore}
			prefix={prefix}
			suffix={suffix}
			onChange={onChange}
			style={{ width: '100%' }}
		/>
	)
}

export default InputNum
