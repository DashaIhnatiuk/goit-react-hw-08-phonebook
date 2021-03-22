import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

class MyLoader extends Component {
  state = {};
  render() {
    return (
      <div className={s.loader}>
        <Loader type="TailSpin" color="#39a763" height={80} width={80} />
      </div>
    );
  }
}

export default MyLoader;
