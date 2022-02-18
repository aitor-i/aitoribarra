import React from "react";

interface props {
  children: React.FC;
}

const GlassBox = (props: props) => {
  return <div className="glass-box-container">{props.children}</div>;
};

export default GlassBox;
