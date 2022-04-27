package com.sun.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "`food`", catalog = "restaurant_system")
@Data
@NoArgsConstructor
public class Food implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "food_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int foodId;

	@Column(name = "food_name", length = 100, nullable = false)
	private String foodName;

	@Column(name = "food_img", nullable = false)
	private String foodImg;

	@ManyToOne
	@JoinColumn(name = "res_id")
	private Restaurant restaurant;
}
