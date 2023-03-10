import React, { useState } from 'react';
import { saveImage } from '../../utils/localStorage';
import { ImageRecordType } from '../../utils/localStorage';
import './ImageUpload.css';

export interface ImageUploadProps {
	onImageAdded: (images: ImageRecordType[]) => void;
}

function ImageUpload({ onImageAdded }: ImageUploadProps) {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile(event.target.files![0]);
	};

	const getBase64 = async (file: File) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
			reader.readAsDataURL(file);
		});
	};

	const handleUpload = () => {
		if (!file) {
			return;
		}
		const reader = new FileReader();

		reader.onload = async function (e: any) {
			const timeUploaded = Date.now();
			const name = `${timeUploaded}_${file.name}`;
			const files = saveImage({
				name,
				timeUploaded,
				base64: await getBase64(file),
				size: `${(file.size / 1024).toFixed(2)} KB`
			});

			onImageAdded(files);
		};

		reader.readAsArrayBuffer(file);
	};

	return (
		<div className='ImageUpload'>
			<input type='file' onChange={handleFileChange} />
			<button disabled={!file} onClick={handleUpload}>
				Upload Image
			</button>
		</div>
	);
}

export default ImageUpload;
