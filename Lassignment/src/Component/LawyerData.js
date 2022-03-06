import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function LawyerData({ showData, setShowData, lawyerId }) {
  const firmData = useSelector((state) => state.firm);

  let timeSlot = Object.values(firmData.firmData.lawyers).map((item) => {
    if (item.lId == lawyerId) {
      return item.timeSlot.map((time, index) => {
        if (time.isavailable)
          return (
            <span className="time_slot" key={index}>
              {time.time}
            </span>
          );
      });
    }
  });

  let rendarData = timeSlot && (
    <Grid container className="lawyerData">
      {Object.values(firmData.firmData.lawyers).map((item, index) => {
        if (item.lId == lawyerId) {
          return (
            <div key={index}>
              <Grid className="lawyerDetail">
                <span>Name</span>
                <span>:</span>
                <span className="lawyer-span"> {item.name}</span>
              </Grid>
              <Grid className="lawyerDetail">
                <span>Speciality</span>
                <span>:</span>
                <span className="lawyer-span"> {item.Speciality}</span>
              </Grid>
              <Grid className="lawyerDetail">
                <span>Cost</span>
                <span>:</span>
                <span className="lawyer-span">{item.Cost}</span>
              </Grid>
              <Grid className="lawyerDetail">
                <span>AppointMent Available</span>
                <span>:</span>
                <span className="appointment-time">{timeSlot}</span>
              </Grid>
            </div>
          );
        }
      })}
    </Grid>
  );
  return (
    <div>
      <Dialog open={showData} onClose={() => setShowData(false)}>
        <DialogTitle>
          Lawyer Details
          <IconButton
            aria-label="close"
            className="close-modal"
            onClick={() => setShowData(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {rendarData}
        </DialogContent>
      </Dialog>
    </div>
  );
}
