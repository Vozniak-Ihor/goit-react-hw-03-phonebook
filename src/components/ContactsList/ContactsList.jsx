import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css'

class ContactsList extends Component {
  state = {}
  render() {
    return this.props.filter().map(({ id, name, number }) => {
      return (
        <ul className={css.contactList} key={id}>
          <li className={css.contactItem}>
            <p className={css.contactDetails}>
              {name}: {number}
            </p>
            <button className={css.deleteButton}
              type="button"
              onClick={() => {
                this.props.onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    });
  }
}

export default ContactsList;



ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
    ),
    onDeleteContact: PropTypes.func.isRequired
}