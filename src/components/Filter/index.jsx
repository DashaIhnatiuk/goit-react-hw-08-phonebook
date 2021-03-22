import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import style from "../OutputSection/OutputSection.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={style.ulSection}>
            <p>Find contacts by name</p>
            <input type="text" placeholder="Enter contact name" name="filter"
            value={value} onChange={onChangeFilter}/>
</div>
  );
}
const mapStateToProps = state => ({
  value: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(phoneBookActions.changeFilter(event.currentTarget.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);