import React from 'react';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import './style.css';

const TreeList = () => {
	const state = useSelector((state) => state);
	return (
		<>
			<div id="container" style={{ background: 'black' }}>
				<Header filter={state.filter} timestamp={json.timestamp} />
				<TreeContainer
					activeNode={state.activeNode}
					data={json}
					filter={state.filter}
					height={state.height}
					width={state.width}
				/>
			</div>
		</>
	);
};

export default TreeList;
