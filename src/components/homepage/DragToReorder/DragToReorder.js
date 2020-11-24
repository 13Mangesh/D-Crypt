import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './drag.css';
// fake data generator
const getItems = count =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${k}`,
		content: `item ${k}`,
	}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	padding: grid * 2,
	margin: `0 ${grid}px 0 0`,
	width: '100%',
	height: '100%',
	borderRadius: '20px',
	// change background colour if dragging
	// background: isDragging ? 'lightgreen' : 'grey',
	// background:
	// 	'linear-gradient(90deg, rgba(68,5,146,1) 0%, rgba(101,9,121,1) 69%, rgba(255,0,207,1) 100%)',

	// styles we need to apply on draggables
	...draggableStyle,
});

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? '#e8d3c5' : '#F7F0EB',
	height: '25%',
	width: '70%',
	position: 'absolute',
	left: '15%',
	top: '35%',
	borderRadius: '20px',
	display: 'flex',
	padding: grid,
	overflow: 'auto',
});

class DragToReorder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: getItems(4),
		};
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result) {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const items = reorder(
			this.state.items,
			result.source.index,
			result.destination.index
		);

		console.log(items);

		this.setState({
			items,
		});
	}

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
	render() {
		return (
			<div>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<Droppable droppableId="droppable" direction="horizontal">
						{(provided, snapshot) => (
							<div
								className="itemContainer"
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
								{...provided.droppableProps}
							>
								{this.state.items.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided, snapshot) => (
											<div
												className="item"
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(
													snapshot.isDragging,
													provided.draggableProps.style
												)}
											>
												{item.content}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		);
	}
}

export default DragToReorder;
