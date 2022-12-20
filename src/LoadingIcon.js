/**
 * Created by dxc on 2016/11/18.
 */
import React, { Component, PropTypes } from 'react';
import '../assets/LoadingIcon.css';
export default class LoadingIcon extends Component {
  render() {
    return (
      <div className='spinner' style={{ width: 30, height: 30 }}>
        <div className='spinner_container container1'>
          <div className='circle1' />
          <div className='circle2' />
          <div className='circle3' />
          <div className='circle4' />
        </div>
        <div className='spinner_container container2'>
          <div className='circle1' />
          <div className='circle2' />
          <div className='circle3' />
          <div className='circle4' />
        </div>
      </div>
    );
  }
}
