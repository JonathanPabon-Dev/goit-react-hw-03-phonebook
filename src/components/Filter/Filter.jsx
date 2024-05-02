import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={this.props.onFilterChange}
          pattern="^[\p{L}]+((['\- ][\p{L} ])?[\p{L}]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={css.filterInput}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
