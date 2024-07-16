import React, { useState } from 'react';
import img7 from './images/background.png';
import axios from 'axios';

export default function Inspiration() {
	const [images, setImages] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleImageUpload = (event) => {
		const files = event.target.files;
		const newImages = Array.from(files).map((file) => ({
			src: URL.createObjectURL(file),
			alt: file.name,
			file: file,
		}));
		setImages((prevImages) => [...prevImages, ...newImages]);
	};
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		images.forEach((image) => {
			formData.append('image', image.file);
		});
		// console.log('Images:', images);
		// console.log('Description:', description);

		// setImages([]);
		// setDescription('');
		try {
			const response = await axios.post(
				'https://kanan17.pythonanywhere.com/posts/add-blog/',
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
			console.error('Error submitting the blog:', error);
			setError(error);
		}
	};
	return (
		<div
			className="inspo-background"
			style={{ backgroundImage: `url(${img7})` }}>
			<div className="heading">
				<h1>SHARE YOUR INSPIRATION</h1>
				<div className="overlay">
					<div className="image-uploader-container">
						<div className="image-uploader">
							<p className="image-uploader-heading">Add your Images </p>
							<input
								type="file"
								accept="image/*"
								multiple
								onChange={handleImageUpload}
							/>
							<div className="image-column">
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
				</div>
				<div className="input-container">
					<label htmlFor="title">Title Here:</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={handleTitleChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="description">Pen-down your Innovation here:</label>
					<textarea
						id="description"
						value={description}
						onChange={handleDescriptionChange}
					/>
					<button
						id="InsButton"
						onClick={handleSubmit}
						className="submit-button2">
						Submit
					</button>
					{error && <p className="error-message">Error: {error.message}</p>}
					{success && (
						<p className="success-message">Blog submitted successfully!</p>
					)}
				</div>
			</div>
		</div>
	);
}
