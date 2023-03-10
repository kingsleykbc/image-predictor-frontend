import { useStateContext } from '../../contexts/state';
import './TabSelector.css';

const TabSelector = () => {
	const { setTab, tab } = useStateContext();
	return (
		<div className='TabSelector'>
			<button className={`tab ${tab === 'images' ? 'active' : ''}`} onClick={() => setTab('images')}>
				Images
			</button>
			<button className={`tab ${tab === 'predictions' ? 'active' : ''}`} onClick={() => setTab('predictions')}>
				Predictions
			</button>
		</div>
	);
};

export default TabSelector;
