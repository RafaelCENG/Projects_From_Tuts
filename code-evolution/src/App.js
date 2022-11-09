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
import DataFetching1 from './components/DataFetching1'
import DataFetching2 from './components/DataFetching2'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import MemoHook from './components/MemoHook'
import MouseContainer from './components/MouseContainer'
import ParentComponent from './components/ParentComponent'

function App() {
	return (
		<div>
			<MemoHook />
		</div>
	)
}

export default App
