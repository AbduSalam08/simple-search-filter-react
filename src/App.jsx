import "./App.css";
import { useState } from "react";
import Mockdata from "./MOCK_DATA.json";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import UsersData from "./UsersData";

// styles
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// styles end

// functionalities

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="App">
        <div className="searchbox">
          <Typography
            variant="h3"
            sx={{ bgcolor: "#000", padding: "10px 20px", borderRadius: "10px" }}
            gutterBottom
          >
            DATA BOX 🤖
          </Typography>
          <TextField
            id="standard-basic"
            label="Search User..."
            variant="standard"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="dataWrapper">
          {Mockdata.filter((val, key) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return <UsersData value={val} key={key} />;
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
