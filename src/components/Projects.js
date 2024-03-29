import React from 'react';
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard.js';
import zoopertrivia from '../assets/img/zoopertrivia.png';
import videogames from '../assets/img/videogames.png';
import NextProjects from '../assets/img/NextProjects.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
	const projects = [
		{
			title: 'Zoopertrivia',
			description: 'Design & Development',
			imgUrl: zoopertrivia,
			url: 'https://zooper-trivia.vercel.app/',
		},
		{
			title: 'Videogames (First App)',
			description: 'Design & Development',
			imgUrl: videogames,
			url: 'https://videogames-omega.vercel.app/',
		},
		{
			title: 'Comming Soon!',
			description: '',
			imgUrl: NextProjects,
		},
	];

	return (
		<section className='project' id='project'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({isVisible}) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Projects</h2>
									<p>
										Take a look at the projects I've been working on.
										<br></br>I decided to left some space for the projects that
										are comming.
									</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav
											variant='pills'
											className='nav-pills mb-5 justify-content-center align-items-center'
											id='pills-tab'
										>
											<Nav.Item>
												<Nav.Link eventKey='first'>Tab 1</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey='second'>Tab 2</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey='third'>Tab 3</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id='slideInUp'
											className={
												isVisible ? 'animate__animated animate__slideInUp' : ''
											}
										>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey='second'>
												<p>Comming soon!</p>
											</Tab.Pane>
											<Tab.Pane eventKey='third'>
												<p>Comming soon!</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' alt='' src={colorSharp2}></img>
		</section>
	);
};
