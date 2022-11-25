import { Name } from './Person.types'
type PersonsListProps = {
	names: Name[]
}

const PersonList = (props: PersonsListProps) => {
	return (
		<div>
			{props.names.map((name) => {
				return (
					<h2 key={name.first}>
						{name.first} {name.last}
					</h2>
				)
			})}
		</div>
	)
}

export default PersonList
