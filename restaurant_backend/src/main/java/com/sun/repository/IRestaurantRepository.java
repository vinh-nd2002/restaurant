package com.sun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sun.entity.Restaurant;

public interface IRestaurantRepository extends JpaRepository<Restaurant, Integer> {

}
