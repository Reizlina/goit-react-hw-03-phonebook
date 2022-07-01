import PropTypes from 'prop-types';

import styles from '../Phonebook.module.css';
import { Component } from 'react';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <p className={styles.inputName}>Name:</p>
          <input
            className={styles.input}
            onChange={handleChange}
            value={name}
            placeholder="Contact name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p className={styles.inputName}>Tel:</p>
          <input
            className={styles.input}
            onChange={handleChange}
            value={number}
            placeholder="Phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <div className={styles.group}>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default PhonebookForm;

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
