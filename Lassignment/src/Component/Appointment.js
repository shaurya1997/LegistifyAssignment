import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@material-ui/icons";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bookSlot } from "../Redux/Action/FirmAction";

export default function Appointment({ show, setShow, lawyerId }) {
  const [value, setValue] = React.useState();
  const firmData = useSelector((state) => state.firm);

  const dispatch = useDispatch();

  const handleClick = (name) => {
    setValue(name);
  };

  const handleSumbit = () => {
    dispatch(bookSlot(value, lawyerId));
    setShow(false);
  };

  let timeSlot = Object.values(firmData.firmData.lawyers).map((item) => {
    if (item.lId == lawyerId) {
      return item.timeSlot;
    }
  });

  timeSlot = timeSlot.filter((item) => item);

  let rendarTime = timeSlot && (
    <Grid container className="time-slot">
      {timeSlot[0].map((item) => {
        return (
          <Grid
            className={`${value == item.time ? "time-selected" : ""} time`}
            onClick={() => handleClick(item.time)}
          >
            {item.time}
          </Grid>
        );
      })}
    </Grid>
  );
  return (
    <div>
      <Dialog open={show} onClose={() => setShow(false)}>
        <DialogTitle>
          Select Time
          <IconButton
            aria-label="close"
            className="close-modal"
            onClick={() => setShow(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {rendarTime}
          <Button
            variant="contained"
            className="btn_save"
            onClick={handleSumbit}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
