import { PredictionsType } from './api';

export type ImageRecordType = {
	name: string;
	timeUploaded: string | number;
	base64: any;
	size: string;
};

export type ImagePredictionsType = {
	title: string;
	description: string;
	imageName: string;
	timeStamp: string | number;
	predictions: PredictionsType;
};

const getSavedItem = (item: string) => {
	const localStorageFiles = localStorage.getItem(item);
	return localStorageFiles ? JSON.parse(localStorageFiles) : [];
};

export const getImages = (): ImageRecordType[] => getSavedItem('files');

export const getImage = (imageName: string): ImageRecordType | null => {
	const localStorageFiles = localStorage.getItem('files');
	if (!localStorageFiles) return null;
	return JSON.parse(localStorageFiles).find((image: ImageRecordType) => image.name === imageName);
};

export const getImagePredictions = (): ImagePredictionsType[] => getSavedItem('imagePredictions');

export const saveImage = (file: ImageRecordType): ImageRecordType[] => {
	const localStorageFiles = localStorage.getItem('files');
	const files = localStorageFiles ? JSON.parse(localStorageFiles) : [];
	files.push(file);
	localStorage.setItem('files', JSON.stringify(files));
	return files;
};

export const saveImagePrediction = (imagePrediction: ImagePredictionsType): ImagePredictionsType[] => {
	const localStoragePredictions = localStorage.getItem('imagePredictions');
	const imagePredictions = localStoragePredictions ? JSON.parse(localStoragePredictions) : [];
	imagePredictions.push(imagePrediction);
	localStorage.setItem('imagePredictions', JSON.stringify(imagePredictions));
	return imagePredictions;
};
