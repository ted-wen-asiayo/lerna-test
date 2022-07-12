import React from "react";
import PropTypes from "prop-types";
import { commonStyled } from "../../../../../src/components/Button/CommonConfig";
import Flat from "./Flat";
import Outline from "./Outline";
import Solid from "./Solid";
import LoadingDots from "../../../../../src/components/Button/LoadingDots";

const SwitchComponents = {
  flat: commonStyled(Flat),
  outline: commonStyled(Outline),
  solid: commonStyled(Solid),
};

const Button = ({ loading, disabled, styleType, children, ...props }) => {
  const Wrapper = SwitchComponents[styleType];

  return (
    <Wrapper disabled={loading || disabled} loading={loading} {...props}>
      {loading ? <LoadingDots {...props} /> : children}
    </Wrapper>
  );
};

Button.defaultProps = {
  type: "button",
  styleType: "solid",
  size: "small",
  shape: "rounded",
  level: "primary",
  isPureIcon: false,
};

Button.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  styleType: PropTypes.oneOf(["flat", "outline", "solid"]),
  size: PropTypes.oneOf(["small", "medium", "large", "response"]),
  shape: PropTypes.oneOf(["rounded", "pill"]),
  level: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "neutral",
    "tertiary",
    "dark",
    "ghost",
    "momo",
  ]),
  isPureIcon: PropTypes.bool,
};

export default Button;
