import React from "react";
import Header from "./components/header/Header";
import Corousel from "./components/corousel/Corousel";
import { Box } from "@mui/material";
import { useStyles } from "./appStyles.js"

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box component="section" className={classes.appContainer}>
        <Box component="section" className={classes.headerSection}>
          <Header />
        </Box>

        <Box component="section" className={classes.corouselSection}>
          <Corousel />
        </Box>
      </Box>
    </>
  )
}


export default App;
