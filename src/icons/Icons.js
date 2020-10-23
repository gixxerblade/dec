import React from "react";
import PropTypes from "prop-types";

const Icon = ({ className, children }) => (
  <i className={className}>{children}</i>
);

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Icon;
