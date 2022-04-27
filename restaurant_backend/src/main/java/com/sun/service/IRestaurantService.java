package com.sun.service;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.sun.entity.Restaurant;
import com.sun.form.RestaurantCreatingForm;
import com.sun.form.RestaurantUpdatingForm;

public interface IRestaurantService {

	Page<Restaurant> getAllRestaurants(Pageable pageable);

	Restaurant getRestaurantById(int id);

	void createRestaurant(@Valid RestaurantCreatingForm restaurantCreatingForm);

	void updateRestaurant(@Valid RestaurantUpdatingForm restaurantUpdatingForm);

	void deleteRestaurant(int id);

}
