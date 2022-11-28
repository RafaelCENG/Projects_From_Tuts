import { Link, Stack, Typography } from '@mui/material'
const MuiLink = () => {
	return (
		<Stack spacing={2} direction="row" m={4}>
			<Link href="#">Link</Link>
			<Typography variant="h6">
				<Link href="#" color="secondary" underline="hover">
					Secondary
				</Link>
			</Typography>
			<Link href="#" color="secondary" underline="none" variant="body2">
				Secondary
			</Link>
		</Stack>
	)
}

export default MuiLink
