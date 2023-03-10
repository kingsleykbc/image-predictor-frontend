import './App.css';
import TabSelector from './components/TabSelector/TabSelector';
import ImagesTab from './components/ImagesTab/ImagesTab';
import PredictionsTab from './components/PredictionsTab/PredictionsTab';
import { StateContextProvider } from './contexts/state';

function App() {
	return (
		<StateContextProvider>
			{({ tab }) => (
				<div className='App'>
					<h1 className='AppTitle'>Encord Frontend Technical Challenge</h1>
					<div className='content'>
						<TabSelector />
						<div className='tabs'>
							{tab === 'images' && <ImagesTab />}
							{tab === 'predictions' && <PredictionsTab />}
						</div>
					</div>
				</div>
			)}
		</StateContextProvider>
	);
}

export default App;
