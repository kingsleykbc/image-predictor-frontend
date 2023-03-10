/**
 * GLOBAL STATE
 */
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type TabType = 'images' | 'predictions';
export type StateContextType = {
	tab: TabType;
	setTab: (tab: TabType) => void;
};
interface StateProviderProps {
	children: (data: StateContextType) => ReactNode;
}

const defaultValues: StateContextType = { tab: 'images', setTab: () => {} };

export const useStateContext = () => useContext(StateContext);
const StateContext = createContext<StateContextType>(defaultValues);

export const StateContextProvider = ({ children }: StateProviderProps) => {
	const [tab, setTab] = useState<TabType>(defaultValues.tab);

	const value = useMemo(() => ({ tab, setTab }), [tab]);
	return (
		<StateContext.Provider value={value}>
			<StateContext.Consumer>{data => children(data)}</StateContext.Consumer>
		</StateContext.Provider>
	);
};

export default StateContext;
