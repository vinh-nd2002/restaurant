import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { getRestaurantByIdAction } from "../redux/acctions/RestaurantActions";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const RestaurantDetails = (props) => {
  const { chiTietNhaHang } = useSelector((state) => state.RestaurantReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getRestaurantByIdAction(id));
  }, []);

  const renderFoods = (foods) => {
    return foods?.map((item, index) => {
      return (
        <Card
          key={index}
          hoverable
          style={{ width: 200 }}
          cover={
            <img
              alt="example"
              src={item.foodImg}
              style={{ height: "250px" }}
              className="mx-4"
            />
          }
        >
          <p className="text-red-300 text-lg text-center">{item.foodName}</p>
        </Card>
      );
    });
  };
  return (
    <div className="container pb-20">
      <h1 className="text-center text-6xl p-10 mb-0"> Thông tin chi tiết </h1>
      <Link className="p-10 decoration-slate-300" to="/">
        về Trang Chủ
      </Link>
      <div className=" p-8 flex justify-around">
        <div className=" w-full" style={{ height: "400px", width: "50%" }}>
          <img
            src={chiTietNhaHang.resImg}
            alt="Logo"
            className=" w-full h-full rounded "
          />
        </div>
        <div className=" flex text-center pt-2 justify- items-center">
          <div>
            <h2 className="text-4xl mb-2">{chiTietNhaHang.resName}</h2>
            <p
              style={{ width: "300px" }}
              className="text-center m-0 inline-block mb-2"
            >
              Địa chỉ: {chiTietNhaHang.resAddress}
            </p>
            <p>
              Hotline:{" "}
              <span className="text-red-500 font-bold">
                {chiTietNhaHang.resHotline}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-center text-xl py-8 text-red-400 uppercase">
            {" "}
            Thực đơn bao gồm:{" "}
          </h2>
          <Slider {...settings}>{renderFoods(chiTietNhaHang.foods)}</Slider>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-center text-xl py-8">Giới thiệu</h1>
        <hr className="py-4" />
        <p>{chiTietNhaHang.resDescription}</p>
      </div>
    </div>
  );
};
