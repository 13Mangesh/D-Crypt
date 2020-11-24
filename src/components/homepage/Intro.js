import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModeContext } from '../ModeContext';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: '100%',
	},
	card: {
		minWidth: 275,
	},
	media: {
		height: '300px',
	},
	link: {
		textDecoration: 'none',
	},
}));

const variants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeIn',
		},
	},
};

const Intro = () => {
	const classes = useStyles();
	const [mode, setMode] = useContext(ModeContext);

	const onSingleEncryption = () => {
		setMode({
			...mode,
			type: 'single',
			menuItems: 3,
		});
	};

	const onDoubleEncryption = () => {
		setMode({
			...mode,
			type: 'double',
			menuItems: 4,
		});
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<Grid
				justify="center"
				alignItems="center"
				className={classes.root}
				container
				spacing={3}
			>
				<Grid item xs={6}>
					<motion.div
						variants={variants}
						initial="hidden"
						animate="visible"
						exit={{
							opacity: 0,
						}}
					>
						<Card elevation={3} className={classes.card}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Single Encryption
									</Typography>
									<Typography
										gutterBottom
										variant="body2"
										color="textSecondary"
										component="p"
									>
										In this Encryption technique single layer of encryption is
										done on the selected file. The file will be securily
										transferred to the backend and encryption will be done at
										the backend. You will get keys for decryption once file is
										on one of our server.
									</Typography>
									<Chip
										label="Hybrid Encryption"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Secure Channel"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Relatively Fast"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Less Secure"
										style={{
											background: 'tomato',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Network Latency"
										style={{
											background: 'tomato',
											margin: '4px',
											color: 'white',
										}}
									/>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Link className={classes.link} to="/homepage">
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Button
											onClick={onSingleEncryption}
											variant="outlined"
											color="primary"
										>
											Continue
										</Button>
									</motion.div>
								</Link>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
				<Grid item xs={6}>
					<motion.div variants={variants} initial="hidden" animate="visible">
						<Card elevation={3} className={classes.card}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Single Encryption
									</Typography>
									<Typography
										gutterBottom
										variant="body2"
										color="textSecondary"
										component="p"
									>
										In this Encryption technique single layer of encryption is
										done on the selected file. The file will be securily
										transferred to the backend and encryption will be done at
										the backend. You will get keys for decryption once file is
										on one of our server.
									</Typography>
									<Chip
										label="Hybrid Encryption"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Secure Channel"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Relatively Fast"
										style={{
											background: '#16ce28',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Less Secure"
										style={{
											background: 'tomato',
											margin: '4px',
											color: 'white',
										}}
									/>
									<Chip
										label="Network Latency"
										style={{
											background: 'tomato',
											margin: '4px',
											color: 'white',
										}}
									/>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Link className={classes.link} to="/homepage">
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Button
											onClick={onDoubleEncryption}
											variant="outlined"
											color="primary"
										>
											Continue
										</Button>
									</motion.div>
								</Link>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
			</Grid>
		</AnimatePresence>
	);
};

export default Intro;
