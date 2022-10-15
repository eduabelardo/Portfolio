import React from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});
	const [result, setResult] = useState(0);

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setButtonText('Sending...');

		emailjs
			.sendForm(
				'service_k1qrm4k',
				'template_ux2awsc',
				e.target,
				'pbXiXqEKPbvW4wy68'
			)
			.then(
				function (response) {
					setResult(200);
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					setResult(500);
					console.log('FAILED...', error);
				}
			);

		setButtonText('Send');

		setFormDetails(formInitialDetails);

		if (result === 200 || result === 0) {
			setStatus({succes: true, message: 'Message sent successfully'});
		} else {
			setStatus({
				succes: false,
				message: 'Something went wrong, please try again later.',
			});
		}
	};

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({isVisible}) => (
								<img
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}
									src={contactImg}
									alt='Contact Us'
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({isVisible}) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Get In Touch</h2>
									<form onSubmit={sendEmail}>
										<Row>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='text'
													value={formDetails.firstName}
													name='from_name'
													placeholder='First Name'
													onChange={(e) =>
														onFormUpdate('firstName', e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='text'
													value={formDetails.lastName}
													name='from_last_name'
													placeholder='Last Name'
													onChange={(e) =>
														onFormUpdate('lastName', e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='email'
													value={formDetails.email}
													name='email_address'
													placeholder='Email Address'
													onChange={(e) =>
														onFormUpdate('email', e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='tel'
													value={formDetails.phone}
													name='phone'
													placeholder='Phone No.'
													onChange={(e) =>
														onFormUpdate('phone', e.target.value)
													}
												/>
											</Col>
											<Col size={12} className='px-1'>
												<textarea
													rows='6'
													value={formDetails.message}
													name='message'
													placeholder='Message'
													onChange={(e) =>
														onFormUpdate('message', e.target.value)
													}
												></textarea>
												<button type='submit'>
													<span>{buttonText}</span>
												</button>
											</Col>
											{status.message && (
												<Col>
													<p
														className={
															status.success === false ? 'danger' : 'success'
														}
													>
														{status.message}
													</p>
												</Col>
											)}
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
