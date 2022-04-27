package com.sun.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sun.repository.IFoodRepository;

@Service
public class FoodService implements IFoodService {
	@Autowired
	private IFoodRepository repository;
}
