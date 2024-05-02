import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

class ContactList extends Component {
  render() {
    const filteredContacts = this.props.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.props.filter.toLowerCase());
    });

    return (
      <>
        <ul className={css.contactList}>
          {this.props.contacts.length > 0 &&
            filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContact={this.props.onDeleteContact}
              />
            ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
