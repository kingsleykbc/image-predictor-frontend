import Table from '../Table/Table';
import { getImagePredictions } from '../../utils/localStorage';
import ViewImagePrediction from '../ViewImagePrediction/ViewImagePrediction';

const PredictionsTab = () => {
	return (
		<div className='PredictionsTab'>
			<Table
				headings={['Title', 'Description', 'Timestamp', 'view']}
				data={getImagePredictions().map(prediction => ({
					Title: prediction.title,
					Description: prediction.description,
					Timestamp: prediction.timeStamp,
					view: <ViewImagePrediction predictions={prediction.predictions} imageName={prediction.imageName} />
				}))}
			/>
		</div>
	);
};

export default PredictionsTab;
