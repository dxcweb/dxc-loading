/**
 * Created by dxc on 2016/11/18.
 */
import React, { Component } from "react";
import Block from "dxc-flex";
import LoadingIcon from "./LoadingIcon";
import iNoBounce from "inobounce";
import NProgress from "nprogress";
import "../assets/nprogress.css";
iNoBounce.disable();

export default class Loading extends Component {
  //渲染前调用一次，这个时候DOM结构还没有渲染。fv
  noScroll() {
    if (this.oldOverflow != "hidden") {
      document.body.style.overflow = "hidden";
    }
    iNoBounce.enable();
  }
  scroll() {
    document.body.style.overflow = this.oldOverflow;

    iNoBounce.disable();
  }
  open() {
    const { mode = "icon" } = this.props;
    if (mode === "progress") {
      NProgress.start();
    }
    this.noScroll();
  }
  close() {
    const { mode = "icon" } = this.props;
    if (mode === "progress") {
      NProgress.done();
    }
    this.scroll();
  }
  componentDidMount() {
    this.oldOverflow = document.body.style.overflow;
    const { isShow = true } = this.props;
    if (isShow) {
      this.open();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { isShow = true } = this.props;
    const { isShow: prevIsShow = true } = prevProps;
    if (isShow !== prevIsShow) {
      if (isShow) {
        this.open();
      } else {
        this.close();
      }
    }
  }
  componentWillUnmount() {
    this.close();
  }
  render() {
    const { isShow = true, title = "数据加载中", mode = "icon" } = this.props;
    if (!isShow) {
      return null;
    }
    if (mode === "progress") {
      return (
        <Block
          vertical='center'
          horizontal='center'
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1500, background: "#fff" }}
        />
      );
    }
    return (
      <Block vertical='center' horizontal='center' style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1500 }}>
        <Block
          horizontal='center'
          vertical='center'
          layout='vertical'
          style={{ borderRadius: 5, boxSizing: "border-box", background: "rgba(1,1,1,0.6)", width: 190, height: 108, padding: 15 }}
        >
          <Block horizontal='center' style={{ width: 30, height: 40, margin: "10px 0" }}>
            <LoadingIcon />
          </Block>
          <Block style={{ fontSize: 14, color: "#fff", textAlign: "center" }}>{title}</Block>
        </Block>
      </Block>
    );
  }
}
