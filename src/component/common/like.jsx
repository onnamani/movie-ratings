import React, { Component } from "react";

const Like = (props) => {
  let classes = "heart fa fa-heart";

  if (!props.liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>;
};

// class Like extends Component {
//   render() {
//   }
// }

export default Like;
