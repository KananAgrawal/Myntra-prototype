import React, { useState } from 'react';
import img7 from './images/background.png';
import axios from 'axios';

export default function DiscoverYourLook() {
	const [images, setImages] = useState([]);
	const [description, setDescription] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleImageUpload = (event) => {
		const files = event.target.files;
		const newImages = Array.from(files).map((file) => ({
			src: URL.createObjectURL(file),
			alt: file.name,
		}));
		setImages((prevImages) => [...prevImages, ...newImages]);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleSubmit = async () => {
		// console.log('Images:', images);
		// console.log('Description:', description);
		// setImages([]);
		// setDescription('');
		const formData = new FormData();
		formData.append('description', description);
		images.forEach((image) => {
			formData.append('image', image.file);
		});

		try {
			const response = await axios.post(
				'https://kanan17.pythonanywhere.com/posts/add-post/',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			console.log('API Response:', response.data);
			setImages([]);
			setDescription('');
			setTitle('');
			setSuccess(true);
		} catch (error) {
			console.error('Error submitting the post:', error);
			setError(error);
		}
	};

	return (
		<div className="discover-look">
			<div
				className="discover-background"
				style={{ backgroundImage: `url(${img7})` }}>
				<div className="heading2">
					<h1>DISCOVER YOUR LOOK</h1>
					<div className="overlay2">
						<div className="image-uploader-container2">
							<div className="image-uploader2">
								<p className="image-uploader-heading2">Add your Images</p>
								<input
									type="file"
									accept="image/*"
									multiple
									onChange={handleImageUpload}
								/>
								<div className="image-column2">
									{images.map((image, index) => (
										<img
											key={index}
											src={image.src}
											alt={image.alt}
										/>
									))}
								</div>
							</div>
						</div>
						<div className="input-container2">
							<label htmlFor="description">Describe your look:</label>
							<textarea
								id="description2"
								value={description}
								onChange={handleDescriptionChange}
								className="description-textarea2"
							/>
							<button
								id="DisButton"
								onClick={handleSubmit}
								className="submit-button2">
								Submit
							</button>
							{error && <p className="error-message">Error: {error.message}</p>}
							{success && (
								<p className="success-message">Post submitted successfully!</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
