import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = (props) => {
  const { onInputChange } = props;

  return (
    <form className={css.searchContactForm}>
      <h2 className={css.searchLabel} htmlFor="findContacts">
        Find contacts by name
      </h2>
      <input
        className={css.searchInput}
        type="text"
        id="findContacts"
        onChange={onInputChange}
      />
    </form>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;

