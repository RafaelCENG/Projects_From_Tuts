import { createContext, useReducer } from 'react'
import './App.css'
import ComponentAreducer from './components/ComponentAreducer'
import ComponentBreducer from './components/ComponentBreducer'
import ComponentC from './components/ComponentC'
import ComponentCreducer from './components/ComponentCreducer'
import CounterOneReducer from './components/CounterOneReducer'
import CounterThreeReducer from './components/CounterThreeReducer'
import CounterTwoReducer from './components/CounterTwoReducer'
import DataFetching from './components/DataFetching'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import MouseContainer from './components/MouseContainer'

export const CountContext = createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state + -1
		case 'reset':
			return initialState

		default:
			return state
	}
}

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				Count - {count}
				<ComponentAreducer />
				<ComponentBreducer />
				<ComponentCreducer />
			</div>
		</CountContext.Provider>
	)
}

export default App
