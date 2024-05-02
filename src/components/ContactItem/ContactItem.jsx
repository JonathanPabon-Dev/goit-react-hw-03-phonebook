import React, { Component } from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

class ContactItem extends Component {
  render() {
    return (
      <>
        <li id={this.props.contact.id} className={css.contact}>
          <div className={css.contactInfo}>
            <span>
              {this.props.contact.name}: {this.props.contact.number}
            </span>
            <button
              type="button"
              title="Delete"
              onClick={() => this.props.onDeleteContact(this.props.contact.id)}
              className="btn btn-danger"
            >
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </li>
      </>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
