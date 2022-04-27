import { openNotificationWithIcon } from "../../components/Notification";
import { RestaurantService } from "../../services/RestaurantApi";
import { ERROR, SUCCESS } from "../../utils/config";
import { GET_RESTAURANT_DETAILS, SET_RESTAURANT } from "./types/RestaurantType";

export const getAllRestaurantAction = () => {
  return async (dispatch) => {
    try {
      const result = await RestaurantService.getAllRestaurants();
      dispatch({
        type: SET_RESTAURANT,
        danhSachNhaHang: result.content,
      });
    } catch (error) {
      console.log("errors", error);
    }
  };
};

export const getRestaurantByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await RestaurantService.getRestaurantById(id);
      dispatch({
        type: GET_RESTAURANT_DETAILS,
        chiTietNhaHang: result,
      });
    } catch (error) {}
  };
};

export const deleteRestaurantByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await RestaurantService.deleteRestaurantById(id);
      openNotificationWithIcon(SUCCESS, "Đã xóa thành công", "success");
      dispatch(getAllRestaurantAction());
    } catch (error) {}
  };
};

export const createRestaurantAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await RestaurantService.createRestaurant(formData);
      dispatch(getAllRestaurantAction());
      openNotificationWithIcon(SUCCESS, "Đã thêm thành công", "success");
    } catch (error) {
      openNotificationWithIcon(ERROR, "Thất bại", "errorr");
    }
  };
};

export const updateRestaurantAction = (id, formData) => {
  return async (dispatch) => {
    try {
      const result = await RestaurantService.updateRestaurant(id, formData);
      console.log("update action>>", result);
      dispatch(getAllRestaurantAction());
      openNotificationWithIcon(SUCCESS, "Đã sửa thành công", "success");
    } catch (error) {
      openNotificationWithIcon(ERROR, "Thất bại", "errorr");
    }
  };
};
