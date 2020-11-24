import React, { createContext, useState } from 'react';

export const ModeContext = createContext();

export const ModeProvider = props => {
	const [mode, setMode] = useState({
		type: 'single',
		menuItems: 3,
	});

	return (
		<ModeContext.Provider value={[mode, setMode]}>
			{props.children}
		</ModeContext.Provider>
	);
};
