import React, { useState } from 'react'

function HookCounter2() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)

	const increamentFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1)
		}
	}
	return (
		<div>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increament
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decreament
			</button>
			<button onClick={increamentFive}> Increament 5</button>
		</div>
	)
}

export default HookCounter2
