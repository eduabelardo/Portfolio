import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} sm={6}>
						<img src={logo} alt='Logo' />
					</Col>
					<Col size={12} sm={6} className='text-center text-sm-end'>
						<div className='social-icon'>
							<a href='https://www.linkedin.com/in/eduardo-andres-abelardo/'>
								<img src={navIcon1} alt='' />
							</a>
							<a href='https://github.com/eduabelardo'>
								<img src={navIcon2} alt='' />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
