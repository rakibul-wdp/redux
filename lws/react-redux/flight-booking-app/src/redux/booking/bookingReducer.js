import { BOOK } from "./actionTypes";

const initialState = {
  destinationFrom: "",
  destinationTo: "",
  journeyDate: "",
  guests: "",
  class: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        destinationFrom: action.payload,
        destinationTo: action.payload,
        journeyDate: action.payload,
        guests: action.payload,
        class: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
