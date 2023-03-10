import { ReactNode } from 'react';
import './DialogBox.css';
interface DialogBoxProps {
	show: boolean;
	toggle: () => void;
	children?: ReactNode;
}

const DialogBox = ({ show, toggle, children }: DialogBoxProps) => {
	if (!show) return null;

	return (
		<div className='DialogBox'>
			<div className='Box'>{children}</div>
			<div onClick={toggle} className='Backdrop' />
		</div>
	);
};

export default DialogBox;
