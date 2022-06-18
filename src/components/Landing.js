import Typography from '@mui/material/Typography';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Landing() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // <Typography variant="h1" align="center" style={{"color": "#991416", marginTop:'34vh', fontWeight: "bold"}} >Mindspace Matters</Typography>
  // <Typography variant="h4" align="center" style={{"color": "black", fontWeight: "bold"}} >Research | Consultancy | Reports</Typography>
  // <Typography variant="h2" align="center" style={{"color": "#991416", marginTop:'37vh', fontWeight: "bold"}} >Mindspace Matters</Typography>
  // <Typography variant="h5" align="center" style={{"color": "black", fontWeight: "bold"}} >Research | Consultancy | Reports</Typography>
  return (
    <>
    <ThemeProvider theme={theme}>
      <Nav />
      { isMobile ? (
        <>
        <>
          <Box
            component="img"
            src="/mobileheader.jpeg"
            style={{
              zIndex: '-1',
              width: '100%',
              height: '100%',
              top: '0',
              bottom: '0'
            }}
          >
          </Box>
        </>
        </>
        ):(
        <>
          <Box
            component="img"
            src="/header.jpeg"
            style={{
              zIndex: '-1',
              width: '100%',
              height: '100%',
            }}
          >
          </Box>
        </>
        )
      }
    <About />
    <Contact />
    <br/>

    </ThemeProvider>
    </>
  );
}

export default Landing;
