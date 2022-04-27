import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRestaurantByIdAction,
  getAllRestaurantAction,
} from "../redux/acctions/RestaurantActions";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
export const RestaurantPage = () => {
  const { danhSachNhaHang } = useSelector((state) => state.RestaurantReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllRestaurantAction());
  }, []);

  const renderTable = () => {
    return danhSachNhaHang?.map((item, index) => {
      return (
        <tr className="border-b border-opacity-20 text-center" key={index}>
          <td className="py-4">
            <p className="p-2 m-0">{item.resId}</p>
          </td>
          <td className="py-4">
            <p className="p-2 m-0">{item.resName}</p>
          </td>
          <td className="py-4">
            <p className="p-2 m-0">{item.resAddress}</p>
          </td>
          <td className="py-4">
            <p className="p-2 m-0">{item.resHotline}</p>
          </td>
          <td className="py-4 ">
            <Link to={`/detail/${item.resId}`}>
              <EyeOutlined style={{ color: "#08c" }} />
            </Link>
            <Link to={`/edit/${item.resId}`} className="text-yellow-400">
              <EditOutlined className="mx-4 " />
            </Link>
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => {
                dispatch(deleteRestaurantByIdAction(item.resId));
              }}
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container p-20 ">
      <h2 className=" text-4xl text-center text-purple-600">
        Quản lý nhà hàng
      </h2>
      <button
        className="bg-green-300 p-4 rounded-md flex justify-between items-center gap-2 my-2"
        onClick={() => history.push("/create")}
      >
        <PlusCircleOutlined style={{ color: "#025B02", fontSize: "40px" }} />
        ADD NEWS
      </button>

      <div>
        <table className="min-w-full text-base ">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead>
            <tr className="text-center text-base border-y-2 border-opacity-20">
              <th className="px-10 py-4">Id</th>
              <th className="px-10 py-4">Tên Nhà Hàng</th>
              <th className="px-10 py-4">Địa chỉ </th>
              <th className="px-10 py-4">Liên hệ</th>
              <th className="px-10 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
};
