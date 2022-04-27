package com.sun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sun.entity.Food;

public interface IFoodRepository extends JpaRepository<Food, Integer> {

}
