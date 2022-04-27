import { api } from "./baseApi";

const getAllRestaurants = () => {
  return api("GET", "/restaurants");
};

const getRestaurantById = (id) => {
  return api("GET", `/restaurants/${id}`);
};

const deleteRestaurantById = (id) => {
  return api("DELETE", `/restaurants/${id}`);
};

const createRestaurant = (formdata) => {
  return api("POST", "/restaurants", formdata);
};

const updateRestaurant = (id, formdata) => {
  return api("PUT", `/restaurants/${id}`, formdata);
};
export const RestaurantService = {
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurantById,
  createRestaurant,
  updateRestaurant,
};
