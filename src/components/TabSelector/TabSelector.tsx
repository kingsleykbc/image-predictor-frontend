import { TabType, useStateContext } from '../../contexts/state';
import './TabSelector.css';

const TabSelector = () => {
	const { setTab, tab } = useStateContext();
	const tabs: TabType[] = ['images', 'predictions'];
	return (
		<div className='TabSelector'>
			{tabs.map((item, index) => (
				<button key={item} tabIndex={index} className={`tab ${tab === item ? 'active' : ''}`} onClick={() => setTab(item)}>
					{item}
				</button>
			))}
		</div>
	);
};

export default TabSelector;
