import Table from '../Table/Table';
import { getImagePredictions } from '../../utils/localStorage';
import ViewImagePrediction from '../ViewImagePrediction/ViewImagePrediction';

const PredictionsTab = () => {
	return (
		<Table
			headings={['Title', 'Description', 'Timestamp', 'View']}
			data={getImagePredictions().map(prediction => ({
				Title: prediction.title,
				Description: prediction.description,
				Timestamp: prediction.timeStamp,
				View: <ViewImagePrediction predictions={prediction.predictions} imageName={prediction.imageName} />
			}))}
		/>
	);
};

export default PredictionsTab;
