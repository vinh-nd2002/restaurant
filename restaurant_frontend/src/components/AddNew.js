import React, { useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createRestaurantAction } from "../redux/acctions/RestaurantActions";
import { Link } from "react-router-dom";

export const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      resName: "",
      resAddress: "",
      resDescription: "",
      resHotline: "",
      resImg: "",
    },
    onSubmit: (values) => {
      setDisabled(true);
      dispatch(createRestaurantAction(values));
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
        <h2 className="text-center text-4xl py-8">Thêm nhà hàng mới</h2>

        <Form.Item label="Tên nhà hàng">
          <Input
            name="resName"
            onChange={formik.handleChange}
            placeholder="Nhập tên nhà hàng"
          />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input
            name="resAddress"
            onChange={formik.handleChange}
            placeholder="Nhập địa chỉ nhà hàng"
          />
        </Form.Item>
        <Form.Item label="Giới thiệu">
          <Input
            name="resDescription"
            onChange={formik.handleChange}
            placeholder="Nhập giới thiệu"
          />
        </Form.Item>
        <Form.Item label="Hotline">
          <Input
            name="resHotline"
            onChange={formik.handleChange}
            placeholder="Nhập hotline nhà hàng"
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Input
            name="resImg"
            onChange={formik.handleChange}
            placeholder="Nhập hình ảnh từ link trên mạng"
          />
          {formik.values.resImg ? (
            <img
              src={formik.values.resImg}
              width="500px"
              height="400px"
              className="my-4"
              alt="Logo"
            />
          ) : (
            ""
          )}
        </Form.Item>

        <Form.Item label="Tạo">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
            disabled={disabled}
          >
            Tạo mới
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

