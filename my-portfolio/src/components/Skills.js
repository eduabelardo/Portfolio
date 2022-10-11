import React from 'react';
import javascript from '../assets/img/javascript.svg';
import react from '../assets/img/react.svg';
import node from '../assets/img/node.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css3.svg';
import redux from '../assets/img/redux.svg';
import postgre from '../assets/img/postgresql.svg';
import sap from '../assets/img/sap.svg';
import github from '../assets/img/github.svg';
import json from '../assets/img/json.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: {max: 4000, min: 3000},
			items: 5,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	};

	return (
		<section className='skill' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>Skills</h2>
							<p>
								A brief look at the technologies I have worked with, these
								technologies vary all the time, since I like to stay updated and
								I am always learning something new.<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className='owl-carousel owl-theme skill-slider'
							>
								<div className='item'>
									<img src={javascript} alt='Image' />
									<h5>JavaScript</h5>
								</div>
								<div className='item'>
									<img src={html} alt='Image' />
									<h5>HTML</h5>
								</div>
								<div className='item'>
									<img src={css} alt='Image' />
									<h5>CSS</h5>
								</div>
								<div className='item'>
									<img src={react} alt='Image' />
									<h5>React</h5>
								</div>
								<div className='item'>
									<img src={node} alt='Image' />
									<h5>Node JS</h5>
								</div>
								<div className='item'>
									<img src={redux} alt='Image' />
									<h5>Redux</h5>
								</div>
								<div className='item'>
									<img src={sap} alt='Image' />
									<h5>SAP UI5 - Fiori</h5>
								</div>
								<div className='item'>
									<img src={postgre} alt='Image' />
									<h5>PostgreSQL</h5>
								</div>
								<div className='item'>
									<img src={github} alt='Image' />
									<h5>GitHub</h5>
								</div>
								<div className='item'>
									<img src={json} alt='Image' />
									<h5>Json</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className='background-image-left' src={colorSharp} alt='Image' />
		</section>
	);
};
