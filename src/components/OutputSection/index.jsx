import PropTypes from "prop-types";
import style from "./OutputSection.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideTransition from "../Animations/slide.module.css";
import operations from '../../redux/phoneBook/phoneBook-operations';
import selectors from '../../redux/phoneBook/phoneBook-selectors';
import { connect } from "react-redux";

function OutputSection({ contacts, onDeleteContact, onUpdateContact }) {
  return (
    <TransitionGroup component="ul" className={style.ulSection}>
      {contacts.map(({ id, name, number }) => {
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={slideTransition}
            // unmountOnExit
          >
            <li className={style.liItem} key={id}>
              <p className={style.text}>{name} : {number}</p>
              <button
                className={style.deleteBtn}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const mapStateToProps = state => {
  return {
    contacts: selectors.getFilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

OutputSection.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputSection);