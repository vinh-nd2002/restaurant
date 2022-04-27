package com.sun.controller;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sun.service.IRestaurantService;
import com.sun.dto.RestaurantDTO;
import com.sun.entity.Restaurant;
import com.sun.form.RestaurantCreatingForm;
import com.sun.form.RestaurantUpdatingForm;

@RestController
@RequestMapping(value = "api/v1/restaurants")
@Validated
@CrossOrigin("*")
public class RestaurantController {
	@Autowired
	private IRestaurantService restaurantService;

	@Autowired
	private ModelMapper mapper;

	@GetMapping
	public ResponseEntity<?> getAllRestaurants(Pageable pageable) {
		Page<Restaurant> entities = restaurantService.getAllRestaurants(pageable);

		List<RestaurantDTO> dtos = mapper.map(entities.getContent(), new TypeToken<List<RestaurantDTO>>() {
		}.getType());

		Page<RestaurantDTO> dtoPages = new PageImpl<>(dtos, pageable, entities.getTotalElements());
		return new ResponseEntity<>(dtoPages, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getRestaurantById(@PathVariable(name = "id") int id) {
		Restaurant restaurant = restaurantService.getRestaurantById(id);

		RestaurantDTO dto = mapper.map(restaurant, RestaurantDTO.class);

		return new ResponseEntity<>(dto, HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<?> createRestaurant(@RequestBody @Valid RestaurantCreatingForm restaurantCreatingForm) {
		restaurantService.createRestaurant(restaurantCreatingForm);
		return new ResponseEntity<String>("Success!", HttpStatus.CREATED);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<?> updateRestaurant(@PathVariable(name = "id") int id,
			@RequestBody @Valid RestaurantUpdatingForm restaurantUpdatingForm) {
		restaurantUpdatingForm.setResId(id);
		restaurantService.updateRestaurant(restaurantUpdatingForm);
		return new ResponseEntity<String>("Update successfuly", HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deleteRestaurant(@PathVariable(name = "id") int id) {
		restaurantService.deleteRestaurant(id);
		return new ResponseEntity<String>("Delete Successfuly", HttpStatus.OK);
	}
}
