import {
	Card,
	CardContent,
	CardHeader,
	Input,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import DragToReorder from './DragToReorder';

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 20,
		position: 'relative',
		height: 500,
	},
	cardContent: {
		minWidth: 700,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	titleArea: {
		marginBottom: 50,
	},
}));

const SelectOrder = () => {
	const classes = useStyles();
	return (
		<div>
			<Card elevation={3} className={classes.card}>
				<CardContent className={classes.cardContent}>
					<Typography variant="h5">Upload your File</Typography>
					<DragToReorder />
					<Typography
						className={classes.titleArea}
						variant="caption"
						display="block"
						gutterBottom
					>
						<sub style={{ color: '#ADABB0' }}>
							File Should be less than 1 Gb{' '}
						</sub>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default SelectOrder;
