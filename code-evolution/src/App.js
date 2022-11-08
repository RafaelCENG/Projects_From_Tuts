import { createContext } from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import DataFetching from './components/DataFetching'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import MouseContainer from './components/MouseContainer'

export const UserContext = createContext()

export const ChannelContext = createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Strike'}>
				<ChannelContext.Provider value={'CodeEvolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App
