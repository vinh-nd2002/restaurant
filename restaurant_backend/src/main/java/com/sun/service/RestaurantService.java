package com.sun.service;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sun.entity.Food;
import com.sun.entity.Restaurant;
import com.sun.form.RestaurantCreatingForm;
import com.sun.form.RestaurantUpdatingForm;
import com.sun.repository.IRestaurantRepository;
import com.sun.repository.IFoodRepository;

@Service
@Transactional
public class RestaurantService implements IRestaurantService {
	@Autowired
	private IRestaurantRepository repository;

	@Autowired
	private IFoodRepository foodRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Page<Restaurant> getAllRestaurants(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	public Restaurant getRestaurantById(int id) {
		return repository.getById(id);
	}

	@Override
	public void createRestaurant(@Valid RestaurantCreatingForm restaurantCreatingForm) {
		TypeMap<RestaurantCreatingForm, Restaurant> typeMap = modelMapper.getTypeMap(RestaurantCreatingForm.class,
				Restaurant.class);
		if (typeMap == null) {
			modelMapper.addMappings(new PropertyMap<RestaurantCreatingForm, Restaurant>() {
				@Override
				protected void configure() {
					skip(destination.getResId());
				}
			});
		}

		Restaurant restaurant = modelMapper.map(restaurantCreatingForm, Restaurant.class);
		repository.save(restaurant);
//		List<Food> foods = restaurant.getFoods();
//		for (Food item : foods) {
//			item.setRestaurant(restaurant);
//		}
//
//		foodRepository.saveAll(foods);

	}

	@Override
	public void updateRestaurant(@Valid RestaurantUpdatingForm restaurantUpdatingForm) {
		Restaurant restaurant = modelMapper.map(restaurantUpdatingForm, Restaurant.class);
		repository.save(restaurant);

//		List<Food> foods = restaurant.getFoods();
//		for (Food item : foods) {
//			item.setRestaurant(restaurant);
//		}
//
//		foodRepository.saveAll(foods);
	}

	@Override
	public void deleteRestaurant(int id) {
		repository.deleteById(id);

	}
}
