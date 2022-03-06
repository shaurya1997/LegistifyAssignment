import react from "react";
import { Grid, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Lawyer = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <h1 className="Heading_icon">
        Lawyer Appointment Management Application
      </h1>
      <Grid container className="firms">
        <Grid onClick={() => history.push("/firms/1")} className="firmsName">
          Firm1
        </Grid>
      </Grid>
    </>
  );
};
export default Lawyer;
