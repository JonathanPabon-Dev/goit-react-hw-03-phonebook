import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  idExists = id => {
    return this.state.contacts.some(contact => contact.id === `id-${id}`);
  };

  contactExists = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleAddContact = () => {
    if (this.contactExists(this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      const generateId = () => Math.floor(Math.random() * 10000);

      let newId = generateId();
      while (this.idExists(newId)) {
        newId = generateId();
      }
      const newContact = {
        id: `id-${newId}`,
        name: this.state.name,
        number: this.state.number,
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
    console.log(event.target.value);
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1 className="mt-5">Phonebook</h1>
        <ContactForm
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />

        <h2 className="mt-5">Contacts</h2>
        <Filter onFilterChange={this.handleFilterChange} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
