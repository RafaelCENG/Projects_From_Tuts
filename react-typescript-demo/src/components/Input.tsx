import React from 'react'

type InputProps = {
	value: string
	handleChange: (event: React.ChangeEvent) => void
}

const Input = (props: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent) => {
		console.log(event)
	}
	return <input type="text" value={props.value} onChange={handleInputChange} />
}

export default Input
