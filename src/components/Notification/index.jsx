import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';
import { connect } from 'react-redux';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import authSelectors from '../../redux/auth/auth-selectors';
import { CSSTransition } from 'react-transition-group';
import notificationTransition from "../Animations/alert.module.css";
import React from "react";

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.object,
    clearError: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.error || this.props.authError) {
      setTimeout(() => {
        this.props.clearError();
      }, 3000);
    }
  }

  render() {
    return (
      <CSSTransition
        in={!!this.props.message}
        timeout={250}
        classNames={notificationTransition}
        unmountOnExit
      >
        <div className={s.errorMassage}>
        {this.props.message}
    </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => ({
  error: phoneBookSelectors.getError(state),
  authError: authSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(phoneBookActions.clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);