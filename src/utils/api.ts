export type PredictionBoundingBoxType = {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
};

export type PredictionType = {
	bbox: PredictionBoundingBoxType;
	label: string;
	score: string;
};

export type PredictionsType = {
	description: string;
	predictions: PredictionType[];
};

// Fetch predictions from JSON server
export const fetchPredictions = async (): Promise<PredictionsType> => {
	return fetch('http://localhost:3000/predict')
		.then(res => res.json())
		.then(data => data);
};
