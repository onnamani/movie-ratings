import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "heart fa fa-heart";

  if (!liked) classes += "-o";
  return <i onClick={onClick} className={classes} aria-hidden="true"></i>;
};

// class Like extends Component {
//   render() {
//   }
// }

export default Like;
