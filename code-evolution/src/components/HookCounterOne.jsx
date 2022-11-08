import React, { useEffect, useState } from 'react'

function HookCounterOne() {
	const [counter, setCounter] = useState(0)
	const [name, setName] = useState('')

	useEffect(() => {
		console.log('Updating document title')

		document.title = `You clicked ${counter} times`
	}, [counter])

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
		</div>
	)
}

export default HookCounterOne
