import styles from '../Phonebook.module.css';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={styles.item}>
      {name}: {number}
      <button
        type="button"
        className={styles.btn__list}
        onClick={() => removeContact(id)}
      >
        Удалить
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
