import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  render() {
    return (
      <>
        <form
          className={css.contactForm}
          onSubmit={event => {
            event.preventDefault();
            this.props.onAddContact();
            event.target.reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={event => this.props.onInputChange(event)}
            pattern="^[\p{L}]+((['\- ][\p{L} ])?[\p{L}]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.input}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            onChange={event => this.props.onInputChange(event)}
            pattern="\+?\d{1,4}(?:[\-.\s]?\(?\d{1,3}\)?)?(?:[\-.\s]?\d{1,4}){2}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
          />
          <button type="submit" className="btn btn-success mt-4">
            <i className="bi bi-plus-lg"></i>
             Add Contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onInputChange: PropTypes.func,
  onAddContact: PropTypes.func,
};

export default ContactForm;
