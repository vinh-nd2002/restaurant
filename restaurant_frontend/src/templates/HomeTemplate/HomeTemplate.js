import React from "react";
import { Route } from "react-router-dom";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <h1>header</h1>
            <Component {...propsRoute} />
            <h1>Footer</h1>
          </>
        );
      }}
    />
  );
};
