import {
  GET_RESTAURANT_DETAILS,
  SET_RESTAURANT,
} from "../acctions/types/RestaurantType";

const stateDefault = {
  danhSachNhaHang: [],
  chiTietNhaHang: {},
};

export const RestaurantReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_RESTAURANT: {
      state.danhSachNhaHang = action.danhSachNhaHang;
      return { ...state };
    }
    case GET_RESTAURANT_DETAILS: {
      state.chiTietNhaHang = action.chiTietNhaHang;
      return { ...state };
    }
  
    default:
      return { ...state };
  }
};
