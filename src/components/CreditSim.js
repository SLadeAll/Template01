import { useState } from "react";
import Slider from "@mui/material/Slider";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Calcu from './Calcu'

import "./styles/Styles.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },

    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "4px",
  textAlign: "right",
}));
const Item3 = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(2),
  borderRadius: "4px",
  textAlign: "right",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  border: 1,
}));

const CreditSim = (props) => {
    const [inpuText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarForm = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inpuText.trim() !== "") {
      props.nuevaTarea(inpuText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} md={12}>
            <Item2>
              <h2>Simulador de Credito</h2>
            </Item2>
          </Grid>
          <Grid xs = {12} md={12} >
            <Calcu/>
          </Grid>
          {/* <Grid xs={12} md={12}>
            <Item>
              <h4>Monto deseado</h4>
              <Slider
                defaultValue={1}
                sx={{
                  width: "90%",
                  color: "#A76AD1",
                }}
              />
            </Item>
          </Grid>
          <Grid xs={12} md={12}>
            <Item>
              <h4>Tasa Anual</h4>
              <Slider
                defaultValue={1}
                sx={{
                  width: "90%",
                  color: "#A76AD1",
                }}
              />
            </Item>
          </Grid>
          <Grid xs={12} md={12}>
            <Item2 className="item2">
              <h4>Meses</h4>
              <button className="btnRadio">12</button>
              <button className="btnRadio">24</button>
              <button className="btnRadio">32</button>
            </Item2>
          </Grid>
          <Grid xs={12} md={12}>
            <Item3 className="forms">
              <div>
                  <form className="form" onSubmit={submit}>
                    <span>Pago Mensual</span>
                    <input value={inpuText} onChange={manejarForm} />
                  </form>
                  {!validacion && (
                    <div className="validacion">Añada una tarea porfavor</div>
                  )}
                
              </div>
              <div>
                <form className="form" onSubmit={submit}>
                    <span>Comision por Apertura</span>
                    <input value={inpuText} onChange={manejarForm} />
                  </form>
                  {!validacion && (
                    <div className="validacion">Añada una tarea porfavor</div>
                  )}
              </div>
              <div>
                <form className="form" onSubmit={submit}>
                    <span>Monto Neto Depositado</span>
                    <input value={inpuText} onChange={manejarForm} />
                  </form>
                  {!validacion && (
                    <div className="validacion">Añada una tarea porfavor</div>
                  )}
              </div>
              <div>
                <form className="form" onSubmit={submit}>
                    <span>Total Pagado</span>
                    <input value={inpuText} onChange={manejarForm} />
                  </form>
                  {!validacion && (
                    <div className="validacion">Añada una tarea porfavor</div>
                  )}
              </div>
              <div>
                <form className="form" onSubmit={submit}>
                    <span>CAT</span>
                    <input value={inpuText} onChange={manejarForm} />
                  </form>
                  {!validacion && (
                    <div className="validacion">Añada una tarea porfavor</div>
                  )}
              </div>
            </Item3>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
};

export default CreditSim;
