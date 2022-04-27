package com.sun.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "`restaurant`", catalog = "restaurant_system")
@Data
@NoArgsConstructor
public class Restaurant implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "res_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int resId;

	@Column(name = "res_name", length = 100, nullable = false)
	private String resName;

	@Column(name = "res_address", length = 100, nullable = false)
	private String resAddress;

	@Column(name = "res_description", nullable = false)
	private String resDescription;

	@Column(name = "res_hotline", length = 10)
	private String resHotline;

	@Column(name = "res_img", nullable = false)
	private String resImg;

	@OneToMany(mappedBy = "restaurant")
	private List<Food> foods;

}
