import { Component } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import PhonebookForm from './PhonebookForm/PhonebookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styles from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contact-items'));

    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contact-items', JSON.stringify(contacts));
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const el = contacts.some(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    el
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => {
          const newContact = {
            name,
            number,
            id: nanoid(),
          };
          return {
            contacts: [...contacts, newContact],
          };
        });
  };

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });

    return filteredContacts;
  }

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
    const { addContact, handleFilter, removeContact } = this;
    const contacts = this.getFilteredContacts();

    return (
      <div className="container">
        <p className={styles.title}>Phonebook</p>
        <PhonebookForm onSubmit={addContact} />
        <p className={styles.title}>Contacts</p>
        <Filter handleChange={handleFilter} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </div>
    );
  }
}

export default Phonebook;
