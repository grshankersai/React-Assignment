import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const customTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#42c2f5",
        main: "#22C870",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
  });

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        TabIndicatorProps={{
            style: {
              backgroundColor: "#22C870"
             }
            }}
      >
        <Tab value="one" label="Currently Reading"  onClick={(event)=>{console.log(event.target)}} />
        <Tab value="two" label="Finished" />
        
      </Tabs>
    </Box>
    </ThemeProvider>
  );
}
