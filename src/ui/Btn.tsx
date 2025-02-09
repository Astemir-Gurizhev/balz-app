import { Button } from 'antd'

interface IBtn {
	onClick?: React.MouseEventHandler<HTMLElement>
	value?: string
	disabled?: boolean
}

const Btn = ({ onClick, value, disabled }: IBtn) => {
	return (
		<Button onClick={onClick} disabled={disabled}>
			{value}
		</Button>
	)
}

export default Btn
