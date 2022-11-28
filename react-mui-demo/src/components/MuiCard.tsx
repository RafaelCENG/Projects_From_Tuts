import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'

const MuiCard = () => {
	return (
		<Box width="300px">
			<Card>
				<CardMedia
					component="img"
					height="140"
					image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg"
					alt="unsplash image"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						React
					</Typography>
					<Typography variant="body2" color="text.secondary">
						TestingTestingTestingTestingTestingTesting
						TestingTestingTestingTestingTesting
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	)
}

export default MuiCard
