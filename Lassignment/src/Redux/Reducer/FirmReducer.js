import { BOOK_SLOT, SUCCESS_MSG, ERROR_MSG } from "../Action/FirmActionType";
import { firm1 } from "./Data";

const initialState = {
  firmData: firm1,
  successMsg: "",
  errorMsg: "",
};

const FirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_SLOT: {
      let tmpState = { ...state };
      let timeSlot = [];
      Object.values(tmpState.firmData.lawyers).filter((item) => {
        if (action.lawyerId == item.lId) {
          timeSlot = item.timeSlot;
        }
      });
      timeSlot.map((item) => {
        if (item.time == action.name) {
          item.isavailable = false;
        }
      });
      return {
        ...state,
        tmpState,
      };
    }
    case SUCCESS_MSG: {
      return {
        ...state,
        successMsg: action.msg,
      };
    }
    case ERROR_MSG: {
      return {
        ...state,
        errorMsg: action.msg,
      };
    }
    default:
      return state;
  }
};

export default FirmReducer;
