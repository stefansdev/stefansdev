import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
	darkTheme: false,
};

export function AppContextProvider(props) {
	const [state, update] = useReducer(reducer, initialState);

	return <AppContext.Provider value={{ state, update }}>{props.children}</AppContext.Provider>;
}
