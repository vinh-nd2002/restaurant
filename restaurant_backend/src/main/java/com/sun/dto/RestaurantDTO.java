package com.sun.dto;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RestaurantDTO {
	private int resId;

	private String resName;

	private String resAddress;

	private String resDescription;

	private String resHotline;

	private String resImg;

	private List<FoodDTO> foods;

	@Data
	@NoArgsConstructor
	static class FoodDTO {
		private int foodId;

		private String foodName;

		private String foodImg;
	}

}
