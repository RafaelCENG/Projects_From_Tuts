import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Rating, Stack } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
	const [value, setValue] = useState<number | null>(null)
	console.log({ value })
	const handleChange = (
		_event: React.ChangeEvent<{}>,
		newValue: number | null
	) => {
		setValue(newValue)
	}

	return (
		<Stack spacing={2}>
			<Rating
				value={value}
				onChange={handleChange}
				precision={0.5}
				size="large"
				icon={<FavoriteIcon fontSize="inherit" color="error" />}
				emptyIcon={<FavoriteBorderIcon />}
				// readOnly
				// highlightSelectedOnly
			/>
		</Stack>
	)
}

export default MuiSwitch
