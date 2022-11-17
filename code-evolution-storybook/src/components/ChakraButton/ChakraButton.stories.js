import { Button } from '@chakra-ui/react'

export default {
	title: 'Chakra/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'clicked' },
	},
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
	colorScheme: 'green',
	children: 'Success',
}
export const Danger = Template.bind({})
Danger.args = {
	colorScheme: 'red',
	children: 'Danger',
}

export const Log = () => {
	return (
		<Button
			colorScheme="blue"
			onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}
		>
			Log
		</Button>
	)
}
