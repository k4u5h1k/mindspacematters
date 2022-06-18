import { useState } from "react";
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import AboutTabs from './AboutTabs';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Box from '@mui/material/Box';

function About() {
  const [value, setValue] = useState('one');

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" align="center" style={{"color": "#991416", marginTop:"5vh", fontWeight: "bold"}} >About Us</Typography>
      <Box style={{height: "2vh"}}></Box>
      <AboutTabs/>
    </ThemeProvider>
    </>
  );
}

export default About;
