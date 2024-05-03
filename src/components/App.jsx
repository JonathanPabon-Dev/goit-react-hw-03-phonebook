import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts') !== null) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

  generateId = () => {
    const randomId = Math.floor(Math.random() * 10000);
    return randomId.toString().padStart(4, '0');
  };

  handleAddContact = () => {
    if (this.contactExists(this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      let newId = this.generateId();
      while (this.idExists(newId)) {
        newId = this.generateId();
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
