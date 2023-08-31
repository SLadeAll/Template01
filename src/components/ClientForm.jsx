import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styles from "styled-components";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';

import Select, { SelectChangeEvent } from '@mui/material/Select';
const Client = ( changeStep ) => {
  const [client, setClient] = React.useState({});
  const submitClient = (FN, LN, PN, DoB) => {
    setClient( [{firstName: FN }, {lastName: LN }, {phoneNumber: PN}, {dateBirth: DoB}] )
  }
  return (
    <Box maxWidth="false" sx={{ flexGrow: 2 }}>
    <Grid container spacing={3}>
      <Grid xs={12} md={1}></Grid>  
      <Grid xs={12} md={6}>
        <Item>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Item>
              <h1 className="HomeTitle">
              Enter Your Information
              </h1>
              <p><span className="pri">Please note that the North Branch Office is closed on Mondays</span></p>
              <div className="TextInfo">
<div  classname="SelectServ">
<FormControl fullWidth>
<TextField id="outlined-basic" label=" First Name (required): " variant="outlined" />
<TextField id="outlined-basic" label=" Last Name (required): " variant="outlined" />
<TextField id="outlined-basic" label=" Phone Number (required): " variant="outlined" />
<TextField id="outlined-basic" label=" Date of Birth :" variant="outlined" />
<ButOn>
                <button className="Log" onClick={submitClient}>Submit</button>
            </ButOn>
  </FormControl>
  </div>
              </div>
            </Item>
          </Stack>
        </Item>
      </Grid>
    </Grid>
  </Box>
  );
};

export default Client;
const Item = styled(Paper)(({ theme }) => ({
    border: 0,
    boxShadow: "none",
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
 
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));

  const ButOn = styles.button`
border: 0px;
background-color: transparent;
align-items: center;
justify-content: space-between;
.Log{
  cursor: pointer;
  border: 1px solid #65C8DB ;
  background-color: #65C8DB ;
  height: 40px;
  width: 120px;
  color: #fff; 
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  margin-right: 1rem;
}
.Log:active{
  background-color: #3498db;
  color: #fff;
}
.Log2{
  cursor: pointer;
  border: 1px solid #A76AD1 ;
  background-color: #A76AD1 ;
  height: 40px;
  width: 120px;
  color: #fff; 
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  margin-right: 1rem;
}
.Log2:active{
  background-color: #5A2281 ;
  color: #fff;
}
`;