import React, { createContext, useState } from 'react';

export const SelectedContext = createContext();

export const SelectedProvider = props => {
	const [selected, setSelected] = useState(0);

	return (
		<SelectedContext.Provider value={[selected, setSelected]}>
			{props.children}
		</SelectedContext.Provider>
	);
};
