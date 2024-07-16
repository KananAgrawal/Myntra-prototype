import React, { useState, useEffect } from 'react';
import img6 from './images/ill2.png';
import { Link, useNavigate } from 'react-router-dom';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function Login({ onSubmit }) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFocus = (e) => {
		e.target.placeholder = '';
	};

	const handleBlur = (e) => {
		if (!e.target.value) {
			switch (e.target.name) {
				case 'email':
					e.target.placeholder = 'Email';
					break;
				case 'password':
					e.target.placeholder = 'Password';
					break;
				default:
					break;
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		navigate('/');
		// onSubmit(formData);
	};

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		checkScreenSize();

		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);
	return (
		<div
			className="login-container"
			style={{ display: 'flex', height: '100vh' }}>
			{!isSmallScreen && (
				<div className="image-section2">
					<img
						src={img6}
						alt="Placeholder"
					/>
				</div>
			)}
			<div className="login">
				<form
					className="login-form"
					onSubmit={handleSubmit}>
					<h2>Login</h2>
					<div className="form-group2">
						<label
							htmlFor="email"
							style={{ marginLeft: '5.5%' }}>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							placeholder="Email"
							required
						/>
					</div>
					<div className="form-group2">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							placeholder="Password"
							required
						/>
					</div>
					<button
						className="LoginSubmit"
						type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
