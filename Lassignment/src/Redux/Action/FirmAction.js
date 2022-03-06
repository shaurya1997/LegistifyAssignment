import { displayError, displaySuccess } from "../../Component/Helper";
import { BOOK_SLOT, ERROR_MSG, SUCCESS_MSG } from "./FirmActionType";

export const bookSlot = (name, lawyerId) => {
  return (dispatch, getState) => {
    let tmpState = getState().firm.firmData;
    let timeSlot = [];
    let count = 0;
    Object.values(tmpState.lawyers).filter((item) => {
      if (lawyerId == item.lId) {
        timeSlot = item.timeSlot;
      }
    });

    timeSlot.map((item) => {
      if (!item.isavailable) {
        count++;
      }
    });
    if (count == timeSlot.length) {
      displayError("Appointments not available”", "danger");
      return null;
    }
    timeSlot.map((item) => {
      if (name == item.time) {
        if (!item.isavailable) {
          dispatch({ type: SUCCESS_MSG, msg: "" });
          dispatch({ type: ERROR_MSG, msg: "This slot is already book" });
          displayError("This slot is already book", "danger");
          console.log("second");
        } else {
          dispatch({ type: ERROR_MSG, msg: "" });
          dispatch({ type: BOOK_SLOT, name, lawyerId });
          dispatch({ type: SUCCESS_MSG, msg: "Slot Booked" });

          displaySuccess("Slot Booked", "success");
        }
      }
    });
  };
};
