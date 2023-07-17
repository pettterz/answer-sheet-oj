
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
  {'Copyright © '}
  <Link color="inherit" href="https://mui.com/">
    Answer Sheet App with Pt.
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
</Typography>
);

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Keep up!
    </Typography>
    {/* <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Keep up!
    </Typography> */}
    <Copyright />
  </Box>
);

export default Footer;
