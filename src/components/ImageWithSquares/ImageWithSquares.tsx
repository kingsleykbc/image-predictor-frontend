import { useRef, useEffect } from 'react';
import { PredictionType } from '../../utils/api';
import './ImageWithSquares.css';

interface ImageWithSquaresProps {
	imageUrl: string;
	predictions: PredictionType[];
}

const ImageWithSquares = ({ imageUrl, predictions }: ImageWithSquaresProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas: any = canvasRef.current;
		const ctx = canvas!.getContext('2d')!;
		const image = new Image();
		image.onload = () => {
			// Set the canvas dimensions to match the image
			canvas.width = image.width;
			canvas.height = image.height;

			// Draw the image on the canvas
			ctx.drawImage(image, 0, 0);

			// Draw the squares on the canvas
			predictions.forEach(({ bbox, label }) => {
				const { x1, x2, y1, y2 } = bbox;
				const x = Math.min(x1, x2);
				const y = Math.min(y1, y2);
				const width = Math.abs(x2 - x1);
				const height = Math.abs(y2 - y1);
				ctx.beginPath();
				ctx.rect(x, y, width, height);
				ctx.strokeStyle = '#252869';
				ctx.fillStyle = 'rgba(37, 40, 105, 0.2)';
				ctx.fill();
				ctx.lineWidth = 2;
				ctx.stroke();

				// Add Label
				ctx.font = '1.5rem Arial';
				ctx.fillStyle = '#252869';
				const text = label ?? '';
				const textWidth = ctx.measureText(text).width;
				ctx.fillText(text, x + width - textWidth - 25, y + height - 25);
			});
		};
		image.src = imageUrl;
	}, [imageUrl, predictions]);

	return <canvas className='ImageWithSquares' ref={canvasRef} />;
};

export default ImageWithSquares;
