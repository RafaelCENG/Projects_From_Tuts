import { Typography } from "@mui/material";

export default function MuiTypography() {
  return <div>
    <Typography variant='h1'>h1 Heading</Typography>
    <Typography variant='h2'>h2 Heading</Typography>
    <Typography variant='h3'>h3 Heading</Typography>
    <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
    <Typography variant='h5'>h5 Heading</Typography>
    <Typography variant='h6'>h6 Heading</Typography>

    <Typography variant='subtitle1'>Sub Title 1</Typography>
    <Typography variant='subtitle2'>Sub Title 2</Typography>

    <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto molestiae cumque reiciendis voluptatibus hic nisi officia. Consequatur veritatis aliquid et ipsa voluptas qui similique exercitationem, repellat quasi sunt! Adipisci!</Typography>
    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo at nostrum quam ea ipsam sequi officiis dolores ad maiores, alias maxime nihil ullam sint quae commodi officia facere possimus!</Typography>
  </div>;
}
