import { useState, FormEventHandler, useRef } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import './PredictImage.css';
import { useStateContext } from '../../contexts/state';
import { fetchPredictions } from '../../utils/api';
import { saveImagePrediction } from '../../utils/localStorage';

interface PredictImageProps {
	imageName: string;
}

const PredictImage = ({ imageName }: PredictImageProps) => {
	const [showDialog, setShowDialog] = useState(false);
	const [error, setError] = useState(null);
	const toggleDialog = () => setShowDialog(show => !show);
	const titleRef: any = useRef();
	const descriptionRef: any = useRef();
	const { setPredictionFile, setTab } = useStateContext();

	const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault();
		setError(null);
		try {
			const predictions = await fetchPredictions();
			await saveImagePrediction({
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				imageName,
				timeStamp: Date.now(),
				predictions
			});
			setPredictionFile(imageName);
			setTab('predictions');
			toggleDialog();
		} catch (e: any) {
			setError(e.message);
		}
	};

	return (
		<div className='PredictImage'>
			<button onClick={toggleDialog}>Predict</button>

			<DialogBox show={showDialog} toggle={toggleDialog}>
				<form onSubmit={handleSubmit}>
					<label>
						<p>Title</p>
						<input ref={titleRef} type='text' required />
					</label>
					<label>
						<p>Description</p>
						<input ref={descriptionRef} type='text' required />
					</label>
					{error && <h5>{error}</h5>}
					<div className='Buttons'>
						<button type='submit'>Submit</button>
						<button onClick={toggleDialog} type='button'>
							Cancel
						</button>
					</div>
				</form>
			</DialogBox>
		</div>
	);
};

export default PredictImage;
