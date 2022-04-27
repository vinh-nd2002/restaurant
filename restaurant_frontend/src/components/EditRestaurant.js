import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getRestaurantByIdAction,
  updateRestaurantAction,
} from "../redux/acctions/RestaurantActions";

const EditRestaurant = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [disabled, setDisabled] = useState(false);

  const { chiTietNhaHang } = useSelector((state) => state.RestaurantReducer);

  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getRestaurantByIdAction(id));
  }, []);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      resName: chiTietNhaHang?.resName,
      resAddress: chiTietNhaHang?.resAddress,
      resDescription: chiTietNhaHang?.resDescription,
      resHotline: chiTietNhaHang?.resHotline,
      resImg: chiTietNhaHang?.resImg,
    },
    onSubmit: (values) => {
      setDisabled(true);
      dispatch(updateRestaurantAction(id, values));
      setDisabled(false);
    },
  });

  return (
    <div className="container">
      <Link to="/">về trang chủ</Link>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h2 className="text-center text-4xl py-8">
          Chỉnh sửa thông tin nhà hàng
        </h2>

        <Form.Item label="Tên nhà hàng">
          <Input
            name="resName"
            onChange={formik.handleChange}
            placeholder="Nhập tên nhà hàng"
            value={formik.values.resName}
          />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input
            name="resAddress"
            onChange={formik.handleChange}
            placeholder="Nhập địa chỉ nhà hàng"
            value={formik.values.resAddress}
          />
        </Form.Item>
        <Form.Item label="Giới thiệu">
          <Input
            name="resDescription"
            onChange={formik.handleChange}
            placeholder="Nhập giới thiệu"
            value={formik.values.resDescription}
          />
        </Form.Item>
        <Form.Item label="Hotline">
          <Input
            name="resHotline"
            onChange={formik.handleChange}
            placeholder="Nhập hotline nhà hàng"
            value={formik.values.resHotline}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Input
            name="resImg"
            onChange={formik.handleChange}
            placeholder="Nhập hình ảnh từ link trên mạng"
            value={formik.values.resImg}
          />
          {formik.values.resImg? <img
            src={formik.values.resImg}
            width='500px' height='400px' 
            className="my-4"
            alt="Logo"
          /> : ""}
        </Form.Item>
        <Form.Item label="Cập nhật">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
            disabled={disabled}
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default () => <EditRestaurant />;
