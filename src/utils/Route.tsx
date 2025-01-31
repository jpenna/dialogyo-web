import React, { ComponentType } from "react";
import { RouteComponentProps } from "@reach/router";

// Required to add route props
type Props = { component: ComponentType } & RouteComponentProps;

const Route: ComponentType<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export default Route;
