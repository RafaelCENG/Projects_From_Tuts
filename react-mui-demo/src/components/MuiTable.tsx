import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
export const MuiTable = () => {
	return (
		<TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
			<Table aria-label="simple table" stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell align="center">Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell align="center">{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const tableData = [
	{
		id: 1,
		first_name: 'Ambrose',
		last_name: 'Bartels',
		email: 'abartels0@epa.gov',
		gender: 'Male',
		ip_address: '1.151.251.32',
	},
	{
		id: 2,
		first_name: 'Genny',
		last_name: 'Wearing',
		email: 'gwearing1@berkeley.edu',
		gender: 'Female',
		ip_address: '113.116.91.187',
	},
	{
		id: 3,
		first_name: 'Sabine',
		last_name: 'Cavozzi',
		email: 'scavozzi2@zdnet.com',
		gender: 'Female',
		ip_address: '147.62.227.100',
	},
	{
		id: 4,
		first_name: 'Keeley',
		last_name: 'de Guise',
		email: 'kdeguise3@bbb.org',
		gender: 'Female',
		ip_address: '105.202.80.211',
	},
	{
		id: 5,
		first_name: 'Douglas',
		last_name: 'Bertome',
		email: 'dbertome4@oaic.gov.au',
		gender: 'Male',
		ip_address: '67.165.251.27',
	},
	{
		id: 6,
		first_name: 'Gene',
		last_name: 'Chadburn',
		email: 'gchadburn5@mac.com',
		gender: 'Female',
		ip_address: '250.229.70.161',
	},
	{
		id: 7,
		first_name: 'Abra',
		last_name: 'Orton',
		email: 'aorton6@github.com',
		gender: 'Female',
		ip_address: '238.229.28.91',
	},
	{
		id: 8,
		first_name: 'Burl',
		last_name: 'Keepin',
		email: 'bkeepin7@yahoo.co.jp',
		gender: 'Male',
		ip_address: '158.29.223.190',
	},
	{
		id: 9,
		first_name: 'Baird',
		last_name: 'Sidden',
		email: 'bsidden8@wunderground.com',
		gender: 'Polygender',
		ip_address: '225.247.234.129',
	},
	{
		id: 10,
		first_name: 'Dasie',
		last_name: 'Jumeau',
		email: 'djumeau9@blinklist.com',
		gender: 'Female',
		ip_address: '6.65.168.85',
	},
]
