import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './profileCard.css';
import { shell } from 'electron';

const ProfileCard = ({
	name,
	img,
	sirName,
	work,
	linkedIn,
	github,
	facebook,
	instagram,
}) => {
	return (
		<div
			className="container"
			style={{
				backgroundImage: `url(${img})`,
			}}
		>
			<div className="gradient">
				<div className="content">
					<h2>
						{name} <br /> {sirName}
					</h2>
					<p>{work}</p>
					<br />
					{/*<p className="details">
						I am a digital marketing Manager working in Lisbon. I like to travel
						across the world
    </p>*/}
					<div className="icons">
						<LinkedInIcon
							onClick={() => {
								shell.openExternal(linkedIn);
							}}
						/>
						<GitHubIcon
							onClick={() => {
								shell.openExternal(github);
							}}
						/>
						<FacebookIcon
							onClick={() => {
								shell.openExternal(facebook);
							}}
						/>
						<InstagramIcon
							onClick={() => {
								shell.openExternal(instagram);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
