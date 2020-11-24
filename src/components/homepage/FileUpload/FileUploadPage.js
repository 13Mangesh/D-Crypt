import {
	Card,
	CardContent,
	CardHeader,
	Input,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import DropZone from './DropZone';

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 20,
	},
	cardContent: {
		minWidth: 500,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	titleArea: {
		marginBottom: 50,
	},
}));

const FileUploadPage = () => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography variant="h5">Upload your File</Typography>
				<Typography
					className={classes.titleArea}
					variant="caption"
					display="block"
					gutterBottom
				>
					<sub style={{ color: '#ADABB0' }}>File Should be less than 1 Gb </sub>
				</Typography>
				<DropZone />
			</CardContent>
		</Card>
	);
};

export default FileUploadPage;
