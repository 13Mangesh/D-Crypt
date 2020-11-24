import React, { useContext } from 'react';
import Menu from './MyMenu';
import { Grid } from '@material-ui/core';
import SimpleCard from '../SimpleCard';
import './homepage.css';
import FileUploadPage from './FileUpload/FileUploadPage';
import DragToReorder from './DragToReorder/DragToReorder';
import SelectOrder from './DragToReorder/SelectOrder';
import { ModeContext } from '../ModeContext';
import { SelectedContext } from '../SelectedContext';

const Submit = () => {
	return (
		<div>
			<h1>Submit</h1>
		</div>
	);
};

const getPage = (mode, selected) => {
	if (selected === 0) return <FileUploadPage />;
	else if (selected === 1 && mode.type === 'single') return <Submit />;
	else if (selected === 1 && mode.type === 'double') return <SelectOrder />;
	else if (selected === 2 && mode.type === 'double') return <Submit />;
};

const HomePage = () => {
	const [selected, setSelected] = useContext(SelectedContext);
	const [mode, setMode] = useContext(ModeContext);
	return (
		<div className="homepage">
			<div id="pages">{getPage(mode, selected)}</div>
			<div id="menu">
				<Menu />
			</div>
		</div>
	);
};

export default HomePage;
