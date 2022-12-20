import React from "react";
import loading from "dxc-loading";
class demo extends React.PureComponent {
  render() {
    return (
      <div style={{ lineHeight: 1.8 }}>
        <div style={{position:"relative"}} >
          <div onClick={() => loading.show()}>loading.show()</div>
          <div style={{ position: "absolute", top: 0, color: "red", zIndex: 100000000, left:150 }} onClick={() => loading.hide()}>
            loading.hide()
          </div>
        </div>
        <div onClick={() => loading.show({ title: "xxxx" })}>{`loading.show({ title: 'xxxx' })`}</div>
        <div onClick={() => loading.show({ mode: "progress" })}>{`loading.show({ mode: 'progress' })`}</div>
      
      </div>
    );
  }
}
export default demo;
