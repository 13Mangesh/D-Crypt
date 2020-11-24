import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import {
	Box,
	Button,
	CircularProgress,
	Grid,
	IconButton,
	Typography,
} from '@material-ui/core';
import { motion } from 'framer-motion';

const CircularProgressWithLabel = props => {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="static" {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					variant="caption"
					component="div"
					color="textSecondary"
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};

const Preview = props => {
	console.log(props);
	const { name, percent, status } = props.meta;
	return (
		<Grid
			style={{
				marginBottom: '20px',
			}}
			container
			spacing={2}
		>
			<Grid item xs={1} />
			<Grid item xs={7}>
				<Typography variant="body2">{name}</Typography>
			</Grid>
			<Grid item xs={2}>
				<CircularProgressWithLabel value={Math.round(percent)} />
			</Grid>
			<Grid item xs={1}>
				<IconButton
					onClick={() => {
						props.files[0].remove();
					}}
					style={{ color: '#f44336' }}
					aria-label="delete"
				>
					<DeleteIcon fontSize="small" />
				</IconButton>
			</Grid>
			<Grid item xs={1} />
		</Grid>
	);
};

const customSubmitButton = () => {
	return (
		<Button variant="outlined" color="secondary">
			Submit
		</Button>
	);
};

const innerContent = (
	<motion.div
		className="myContentDiv"
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.9 }}
	>
		<DescriptionRoundedIcon
			style={{
				color: '#2535EF',
				width: 'auto',
				height: '100px',
			}}
		/>
		<Typography variant="subtitle1">Drag &amp; drop some files here</Typography>
	</motion.div>
);

const DropZone = () => {
	const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

	const handleSubmit = (files, allFiles) => {
		console.log(files.map(f => f.meta));
		allFiles.forEach(f => f.remove());
	};

	const handleChangeStatus = (fileWithMeta, status) => {
		// setTimeout(() => {
		// 	fileWithMeta.remove();
		// }, 5000);
	};

	return (
		<Dropzone
			getUploadParams={getUploadParams}
			onSubmit={handleSubmit}
			PreviewComponent={Preview}
			onChangeStatus={handleChangeStatus}
			inputContent={innerContent}
			SubmitButtonComponent={customSubmitButton}
			maxFiles={1}
			multiple={false}
			disabled={files =>
				files.some(f =>
					['preparing', 'getting_upload_params', 'uploading'].includes(
						f.meta.status
					)
				)
			}
		/>
	);
};

export default DropZone;
