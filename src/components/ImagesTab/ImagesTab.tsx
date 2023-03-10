import ImageUpload from '../ImageUpload/ImageUpload';
import Table from '../Table/Table';
import PredictImage from '../PredictImage/PredictImage';
import { useState } from 'react';
import { ImageRecordType, getImages } from '../../utils/localStorage';

const ImagesTab = () => {
	const [images, setImages] = useState<ImageRecordType[]>(getImages());

	return (
		<div className='ImagesTab'>
			<Table
				headings={['Filename', 'Size', 'Time Uploaded', 'Predict']}
				data={images.map(image => ({
					Filename: image.name,
					Size: image.size,
					'Time Uploaded': image.timeUploaded,
					Predict: <PredictImage imageName={image.name} />
				}))}
			/>
			<ImageUpload onImageAdded={setImages} />
		</div>
	);
};

export default ImagesTab;
