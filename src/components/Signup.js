import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img4 from './images/ill.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup(props) {
	const { onSubmit, title } = props;
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		country: '',
		socialMediaLink: '',
		password: '',
		confirmPassword: '',
		gender: '',
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
				case 'name':
					e.target.placeholder = 'Please enter your name';
					break;
				case 'email':
					e.target.placeholder = 'Email';
					break;
				case 'phoneNumber':
					e.target.placeholder = 'Phone Number';
					break;
				case 'country':
					e.target.placeholder = 'Country';
					break;
				case 'socialMediaLink':
					e.target.placeholder = 'Social Media Link';
					break;
				case 'password':
					e.target.placeholder = 'Password';
					break;
				case 'confirmPassword':
					e.target.placeholder = 'Confirm Password';
					break;
				default:
					break;
			}
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		// onSubmit(formData);
		navigate('/login');
	};
	// try {
	// 	const response = await axios.post(
	// 		'https://kanan17.pythonanywhere.com/accounts/Signup/',
	// 		formData
	// 	);
	// 	console.log('Signup successful:', response.data);
	// 	// Handle successful signup (e.g., redirect, show success message)
	// 	navigate('/login');
	// } catch (error) {
	// 	console.error('Signup error:', error);
	// 	// Handle signup error (e.g., display error message)
	// }
	// };

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
			className="signup-container"
			style={{ display: 'flex', height: '100vh' }}>
			{!isSmallScreen && (
				<div className="image-section">
					<img
						src={img4}
						alt="Placeholder"
					/>
				</div>
			)}

			<div className="signup">
				<form
					className="registration-form"
					onSubmit={handleSubmit}>
					<h2>{title || 'Signup'}</h2>
					<div className="form-column-1">
						<div className="form-group">
							<label htmlFor="name"> Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder="Please enter your name"
								required
							/>
						</div>
					</div>
					<div className="form-column-2">
						<div className="form-group">
							<label htmlFor="email">Email</label>
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
						<div className="form-group">
							<label htmlFor="phoneNumber">Phone Number</label>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder="Phone Number"
								required
								// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							/>
						</div>
					</div>
					<div className="form-column-3">
						<div className="form-group">
							<label htmlFor="country">Country</label>
							<input
								type="text"
								id="country"
								name="country"
								value={formData.country}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder="Country"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="socialMediaLink">Social Media Link</label>
							<input
								type="text"
								id="socialMediaLink"
								name="socialMediaLink"
								value={formData.socialMediaLink}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder="Social Media Link"
							/>
						</div>
					</div>
					<div className="form-column-4">
						<div className="form-group">
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

						<div className="form-group">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder="Confirm Password"
								required
							/>
						</div>
					</div>

					<div className="form-group gender-group">
						<label>Gender</label>
						<div className="gender-options">
							<div className="gender-option">
								<input
									type="radio"
									id="male"
									name="gender"
									value="male"
									checked={formData.gender === 'male'}
									onChange={handleChange}
								/>
								<label htmlFor="male">Male</label>
							</div>
							<div className="gender-option">
								<input
									type="radio"
									id="female"
									name="gender"
									value="female"
									checked={formData.gender === 'female'}
									onChange={handleChange}
								/>
								<label htmlFor="female">Female</label>
							</div>
							<div className="gender-option">
								<input
									type="radio"
									id="other"
									name="gender"
									value="other"
									checked={formData.gender === 'other'}
									onChange={handleChange}
								/>
								<label htmlFor="other">Other</label>
							</div>
							<div className="gender-option-last">
								<input
									type="radio"
									id="not-specified"
									name="gender"
									value="not-specified"
									checked={formData.gender === 'not-specified'}
									onChange={handleChange}
								/>
								<label
									htmlFor="not-specified"
									className="last_gender_option">
									Prefer not to say
								</label>
							</div>
						</div>
					</div>

					<button
						className="SignupSubmit"
						type="submit">
						SIGN UP
					</button>
					<p className="Signuptext">
						Already Registered! <Link to="/login"> Login </Link>
					</p>
				</form>
			</div>
		</div>
	);
}
