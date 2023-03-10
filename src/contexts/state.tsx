import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type TabType = 'images' | 'predictions';
type PredictionFileType = string | null;
type StateContextType = {
	tab: TabType;
	predictionFile: PredictionFileType;
	setTab: (tab: TabType) => void;
	setPredictionFile: (predictionFile: string) => void;
};
interface StateProviderType {
	children: (data: StateContextType) => ReactNode;
}

const defaultValues: StateContextType = {
	tab: 'images',
	predictionFile: null,
	setTab: () => {},
	setPredictionFile: () => {}
};

export const useStateContext = () => useContext(StateContext);
const StateContext = createContext<StateContextType>(defaultValues);

export const StateContextProvider = ({ children }: StateProviderType) => {
	const [tab, setTab] = useState<TabType>(defaultValues.tab);
	const [predictionFile, setPredictionFile] = useState<string | null>(defaultValues.predictionFile);

	const value = useMemo(() => ({ tab, predictionFile, setTab, setPredictionFile }), [tab, predictionFile]);
	return (
		<StateContext.Provider value={value}>
			<StateContext.Consumer>{data => children(data)}</StateContext.Consumer>
		</StateContext.Provider>
	);
};

export default StateContext;
