import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModeProvider } from './ModeContext';
import Nav from './Nav';
import { SelectedProvider } from './SelectedContext';

const App = () => {
	return (
		<ModeProvider>
			<SelectedProvider>
				<Router>
					<div className="app">
						<Nav />
					</div>
				</Router>
			</SelectedProvider>
		</ModeProvider>
	);
};

export default App;
