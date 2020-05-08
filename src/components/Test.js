import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const SixHats = (props) => {
	const [storeThis, setStoreThis] = useLocalStorage('hi', 'there');

	const handleClick = () => {
		setStoreThis(storeThis === "where?" ? "there" : "where?");
	}

	const handleClickDelete = () => {
		setStoreThis(null);
		
	}

	return (
		<>
      <h3>{storeThis}</h3>
			<button onClick={handleClick} className="btn btn-danger">Big Red Button</button>
			<button onClick={handleClickDelete} className="btn btn-primary">Big Blue Button</button>
		</>
	);
}

export default SixHats;