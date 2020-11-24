import React from 'react';
import { Link } from 'react-router-dom';

import {
	makeStyles,
	List,
	ListItemIcon,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import {
	HomeRoundedIcon,
	InfoRoundedIcon,
	StorefrontRoundedIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none',
		color: 'white',
	},
}));

const MyDrawer = () => {
	const classes = useStyles();
	return (
		<div>
			<List>
				<Link className={classes.link} to="/">
					<ListItem button>
						<ListItemIcon>
							<HomeRoundedIcon style={{ color: 'white' }}></HomeRoundedIcon>
						</ListItemIcon>
						<ListItemText primary="Home"></ListItemText>
					</ListItem>
				</Link>
				<Link className={classes.link} to="/about">
					<ListItem button>
						<ListItemIcon>
							<InfoRoundedIcon style={{ color: 'white' }}></InfoRoundedIcon>
						</ListItemIcon>
						<ListItemText primary="About"></ListItemText>
					</ListItem>
				</Link>
				<Link className={classes.link} to="/shop">
					<ListItem button>
						<ListItemIcon>
							<StorefrontRoundedIcon
								style={{ color: 'white' }}
							></StorefrontRoundedIcon>
						</ListItemIcon>
						<ListItemText primary="Shop"></ListItemText>
					</ListItem>
				</Link>
			</List>
		</div>
	);
};

export default MyDrawer;
