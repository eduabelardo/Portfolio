import React from 'react';
import {Col} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
export const ProjectCard = ({title, description, imgUrl, url}) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<img src={imgUrl} />
				<div className='proj-txtx'>
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
			<div>
				<Nav className='ms-auto'>
					<Nav.Link className='navbar-link' href={url}>
						<p>Visit</p>
					</Nav.Link>
				</Nav>
			</div>
		</Col>
	);
};
