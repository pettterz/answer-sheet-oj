import AppBar from '@mui/material/AppBar';
import CategoryIcon from '@mui/icons-material/Category';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from './Footer';
import { Outlet } from 'react-router';


const defaultTheme = createTheme();

const APP_NAME = "Answer Sheet";


const Layout = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <CategoryIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          {APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>

    <Outlet />

    <Footer />
  </ThemeProvider>
);

export default Layout;
