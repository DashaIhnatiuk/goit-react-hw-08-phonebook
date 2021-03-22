import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import AddSection from '../../components/AddSection';
import Filter from '../../components/Filter';
import OutputSection from '../../components/OutputSection';
import Notification from '../../components/Notification';
import MyLoader from '../../components/Loader';
import PropTypes from 'prop-types';
import s from './phoneBookView.module.css';
import anim from '../../components/Animations/slide.module.css';
import filterAnim from '../../components/Animations/slide.module.css';

class phoneBookView extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, error, clearFilter, isLoading } = this.props;

    return (
      <div className={s.container}>
        {error && <Notification message={error.message} />}

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          {<h1 className={s.title}>Phonebook</h1>}
        </CSSTransition>

        <AddSection />

        <CSSTransition
          in={contacts.length > 1}
          classNames={filterAnim}
          timeout={250}
          unmountOnExit
          onExiting={() => clearFilter()}
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={contacts.length > 0}
          appear={true}
          timeout={250}
          classNames={anim}
          unmountOnExit
        >
          <div className={s.contactsWrapper}>
            <h2 className={s.title}>Contacts</h2>
            {isLoading && <MyLoader />}
            <OutputSection />
          </div>
        </CSSTransition>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: phoneBookSelectors.getAllContacts(state),
  isLoading: phoneBookSelectors.getLoading(state),
  error: phoneBookSelectors.getError(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
  clearFilter: () => dispatch(phoneBookActions.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(phoneBookView);
