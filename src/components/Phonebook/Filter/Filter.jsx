import PropTypes from 'prop-types';

import styles from '../Phonebook.module.css';

const Filter = ({ handleChange }) => {
  return (
    <input
      className={styles.input}
      onChange={handleChange}
      name="filter"
      type="text"
      placeholder="Search"
    />
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
