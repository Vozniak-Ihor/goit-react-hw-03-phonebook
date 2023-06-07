import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import LoginForm from './LogForm/LoginForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
  };
  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContact = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };

  handleSubmit = (values, actions) => {
    const contactId = nanoid();
    if (this.state.contacts.some(item => item.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: contactId,
      name: values.name,
      number: values.phoneNumber.toString(),
    };
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => {
        localStorage.setItem(
          'contacts',
          JSON.stringify([...this.state.contacts])
        );
      }
    );
    actions.resetForm();
  };

  onDeleteContact = trueId => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(({ id }) => id !== trueId),
      }),
      () => {
        localStorage.setItem(
          'contacts',
          JSON.stringify([...this.state.contacts])
        );
      }
    );
  };

  render() {
    return (
      <>
        <LoginForm
          onSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
        <Filter onInputChange={this.handleInputChange} />
        <ContactsList
          filter={this.filteredContact}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}
