package com.sun.form;

import java.util.List;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RestaurantUpdatingForm {
	private int resId;

	@NotBlank
	@Length(max = 100, message = "Error")
	private String resName;

	@NotBlank
	@Length(max = 100, message = "Error")
	private String resAddress;

	@NotBlank
	private String resDescription;

	@NotBlank
	@Length(max = 10, message = "Error")
	private String resHotline;

	@NotBlank
	private String resImg;
//
//	private List<Food> foods;
//
//	@Data
//	@NoArgsConstructor
//	public static class Food {
//		private int foodId;
//
//		private String foodName;
//
//		private String foodImg;
//	}

}
