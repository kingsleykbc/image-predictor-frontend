import { useState } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import { getImage } from '../../utils/localStorage';
import { PredictionsType } from '../../utils/api';
import ImageWithSquares from '../ImageWithSquares/ImageWithSquares';
import './ViewImagePrediction.css';

export interface ViewImagePredictionProps {
	imageName: string;
	predictions: PredictionsType;
}

const ViewImagePrediction = ({ imageName, predictions }: ViewImagePredictionProps) => {
	const [showDialog, setShowDialog] = useState(false);
	const toggleDialog = () => setShowDialog(show => !show);
	const imageBase64 = getImage(imageName)?.base64;

	if (!imageBase64) return null;
	return (
		<div className='ViewImagePrediction'>
			<button onClick={toggleDialog}>View</button>

			<DialogBox show={showDialog} toggle={toggleDialog}>
				<div className='Image'>
					<ImageWithSquares predictions={predictions.predictions} imageUrl={imageBase64} />
				</div>
				<button className='CloseButton' onClick={toggleDialog}>
					Close
				</button>
			</DialogBox>
		</div>
	);
};

export default ViewImagePrediction;
