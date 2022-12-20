import React from "react";
import addcomponent from "dxc-addcomponent";
import Loading from "./Loading";

let _remove;
export default {
  show: (props = {}) => {
    addcomponent((remove) => {
      _remove = remove;
      return <Loading {...props} />;
    });
  },
  hide: () => {
    _remove && _remove();
  },
};
