import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';
import s from './RegisterView.module.css';

class RegisterView extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.container}>
        <h1 className={s.title}>Registration</h1>
        <form
          onSubmit={this.handleSubmit}
          className={s.wrapper}
          autoComplete="off"
        >
          <label className={s.field}>
            <span className={s.name}>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </label>

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
              autoComplete="off"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>

          <button className={s.button} type="submit">
            Registration
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
