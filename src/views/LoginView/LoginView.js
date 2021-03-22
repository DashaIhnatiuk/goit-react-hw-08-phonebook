import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from '../RegisterView/RegisterView.module.css';
import PropTypes from 'prop-types';

class LoginView extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.container}>
        <h1 className={s.title}>LogIn</h1>
        <form
          onSubmit={this.handleSubmit}
          className={s.wrapper}
          autoComplete="off"
        >
          <label className={s.field}>
            <span className={s.email}>Email</span>
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </label>

          <label className={s.field}>
            <span className={s.password}>Password</span>
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>

          <button className={s.button} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
