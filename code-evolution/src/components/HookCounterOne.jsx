import React, { useEffect, useState } from 'react'

function HookCounterOne() {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		document.title = `You clicked ${counter} times`
	})

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
		</div>
	)
}

export default HookCounterOne
