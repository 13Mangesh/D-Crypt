import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { screens } from './data';
import './Menu.css';
import { makeStyles } from '@material-ui/core';
import { ModeContext } from '../ModeContext';
import { SelectedContext } from '../SelectedContext';

const MyMenu = () => {
	const [selected, setSelected] = useContext(SelectedContext);
	const [mode, setMode] = useContext(ModeContext);
	let menus;
	if (mode.menuItems === 3) {
		menus = screens.single;
	} else if (mode.menuItems === 4) {
		menus = screens.double;
	}

	useEffect(() => {
		if (mode.menuItems === 3) {
			menus = screens.single;
			setSelected(0);
		} else if (mode.menuItems === 4) {
			menus = screens.double;
			setSelected(0);
		}
	}, [mode]);

	return (
		<AnimateSharedLayout>
			<ol>
				{menus.map(({ title, extra, color }, i) => (
					<motion.li
						layout
						key={i}
						className={`title ${i === selected && 'selected'}`}
						style={{ backgroundColor: i === selected ? color : '#ccc' }}
						onClick={() => setSelected(i)}
					>
						{i === selected && (
							<motion.div
								layoutId="underline"
								className="underline"
								style={{ backgroundColor: color }}
							/>
						)}
						{i == selected ? extra : title}
					</motion.li>
				))}
			</ol>
		</AnimateSharedLayout>
	);
};

export default MyMenu;
