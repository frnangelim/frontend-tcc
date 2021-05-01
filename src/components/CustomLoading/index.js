import React from "react";
import LoadingGif from "../../assets/images/loading.gaja.gif";

function CustomLoading(props) {
  return <img {...props} alt="Loading" src={LoadingGif} />;
}

export default CustomLoading;
