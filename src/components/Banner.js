import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ['Web Developer :)'];
	const period = 2000;

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};
	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text, delta]);

	return (
		<section className='banner' id='home'>
			<Router>
				<Container>
					<Row className='aligh-items-center'>
						<Col xs={12} md={6} xl={7}>
							<TrackVisibility>
								{({isVisible}) => (
									<div
										className={
											isVisible ? 'animate__animated animate__fadeIn' : ''
										}
									>
										<span className='tagline'>Welcome to my Portfolio</span>
										<h1>
											{`Hi! I'm Edu`} <br></br>
											<span
												className='txt-rotate'
												dataperiod='1000'
												data-rotate='[ "Web Developer :)"]'
											>
												<span className='wrap'>{text}</span>
											</span>
										</h1>
										<br></br>
										<p>
											I am from Argentina and I am 28 years old, a year ago I
											decided to dedicate full time to what I am really
											passionate about, SOFTWARE DEVELOPMENT. So I entered
											Henry's bootcamp and started my adventure. Today I work as
											a Front-End Web Developer in Hexagon, where every day I
											learn and improve my technical and soft skills.
											<br></br>I speak Spanish and English, I am very
											conversational, a teamplayer and I am always trying to
											spread my energy and enthusiasm to my team.
											<br></br>
											Here you can take a look at my stack and my projects so
											far. If you want to know more about me or have any
											questions, please do not hesitate to contact me, I am
											always looking for new challenges and I will be happy to
											get in touch with you!
										</p>
										<HashLink to='#connect'>
											<button className='vvd'>
												<span>
													Let's Connect
													<ArrowRightCircle size={25} />
												</span>
											</button>
										</HashLink>
									</div>
								)}
							</TrackVisibility>
						</Col>
						<Col xs={12} md={6} xl={5}>
							<TrackVisibility>
								{({isVisible}) => (
									<div
										className={
											isVisible ? 'animate__animated animate__zoomIn' : ''
										}
									>
										<img src={headerImg} alt='Header Img' />
									</div>
								)}
							</TrackVisibility>
						</Col>
					</Row>
				</Container>
			</Router>
		</section>
	);
};
