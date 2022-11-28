import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'
import { useState } from 'react'

const MuiAccordion = () => {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange = (isExpanded: boolean, panel: string) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<div>
			<Accordion
				id="panel1-header"
				expanded={expanded === 'panel1'}
				onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
			>
				<AccordionSummary
					id="panel1"
					aria-controls="panel1-content"
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, qui
						nesciunt voluptatem, tempore libero accusantium suscipit iste
						recusandae totam vitae labore ex illo ipsum voluptatum harum ea
						placeat porro quasi?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				id="panel2-header"
				expanded={expanded === 'panel2'}
				onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
			>
				<AccordionSummary
					id="panel2"
					aria-controls="panel2-content"
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, qui
						nesciunt voluptatem, tempore libero accusantium suscipit iste
						recusandae totam vitae labore ex illo ipsum voluptatum harum ea
						placeat porro quasi?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				id="panel3-header"
				expanded={expanded === 'panel3'}
				onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
			>
				<AccordionSummary
					id="panel3"
					aria-controls="panel3-content"
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, qui
						nesciunt voluptatem, tempore libero accusantium suscipit iste
						recusandae totam vitae labore ex illo ipsum voluptatum harum ea
						placeat porro quasi?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default MuiAccordion
