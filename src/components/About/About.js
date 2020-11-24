import React from 'react';
import ProfileCard from './ProfileCard';
import mangesh from '../../Assets/Images/Profiles/mangesh.jpg';
import utkarsh from '../../Assets/Images/Profiles/utkarsh.jpg';
import prajwal from '../../Assets/Images/Profiles/prajwal.jpg';
import { Grid, Typography } from '@material-ui/core';
import Heading from './Heading';
import { motion } from 'framer-motion';

const profiles = [
	{
		id: 1,
		name: 'Utkarsh',
		sirName: 'Kendre',
		work: 'Backend Developer',
		img: utkarsh,
		linkedIn: 'https://www.linkedin.com/in/utkarsh-kendre/',
		github: 'https://github.com/utkarsh-3',
		facebook: 'https://www.facebook.com/utkarsh.kendre',
		instagram: 'https://instagram.com/utkarsh_kendre?igshid=1ay19d6ajk95k',
	},
	{
		id: 2,
		name: 'Prajwal',
		sirName: 'Bhagat',
		work: 'Backend Developer',
		img: prajwal,
		linkedIn: 'https://www.linkedin.com/in/prajwal-bhagat-2b7152169/',
		github: 'https://github.com/baprajwal',
		facebook: 'https://www.facebook.com/prajwal.bhagat.773',
		instagram: 'https://instagram.com/b_prajwal_?igshid=u4p3oj9pota5',
	},
	{
		id: 3,
		name: 'Mangesh',
		sirName: 'Puri',
		work: 'Frontend Developer',
		img: mangesh,
		linkedIn: 'https://www.linkedin.com/in/13mangesh/',
		github: 'https://github.com/13Mangesh',
		facebook: 'https://www.facebook.com/13Mangesh',
		instagram: 'https://www.instagram.com/13_mangesh/',
	},
];

const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

const headingVariants = {
	hidden: {
		x: -900,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

const About = () => {
	return (
		<div>
			<Grid justify="space-between" container spacing={2}>
				<Grid item xs={12}>
					<motion.div
						variants={headingVariants}
						initial="hidden"
						animate="visible"
					>
						<Heading />
					</motion.div>
				</Grid>

				{profiles.map(profile => (
					<Grid key={profile.id} item xs={4}>
						<motion.div
							variants={variants}
							initial="hidden"
							animate="visible"
							whileHover={{ scale: 1.1 }}
						>
							<ProfileCard
								name={profile.name}
								sirName={profile.sirName}
								work={profile.work}
								img={profile.img}
								linkedIn={profile.linkedIn}
								github={profile.github}
								facebook={profile.facebook}
								instagram={profile.instagram}
							/>
						</motion.div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default About;
