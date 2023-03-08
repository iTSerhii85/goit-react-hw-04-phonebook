import React from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import initialContacts from "../contacts.json"

import { BookForm } from "./BookForm/BookForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactListItem } from "./ContactList/ContactListItem";
import { Filter } from "./Filter/Filter";
import Modal from "./Modal/Modal";
import { NewContButton } from "./ContactList/ContactList.style";
import { CloseModalButton } from "./Modal/Modal.style";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    (localStorage.getItem('contacts') !== null)
    ? this.setState ({ contacts: JSON.parse(localStorage.getItem('contacts'))})
    : this.setState({ contacts: initialContacts });

    // const savedContacts = localStorage.getItem('contacts');
    //     if (savedContacts !== null){
    //   const parsedContacts = JSON.parse(savedContacts);
    //   this.setState ({ contacts: parsedContacts});
    //   return;
    // }
    //  this.setState({ contacts: initialContacts });
  };

  componentDidUpdate(_, prevState) {
    (prevState.contacts !== this.state.contacts)
    && localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

    // if (prevState.contacts !== this.state.contacts){
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    // }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  
  addContact = newContact => {
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
        window.alert(`${newContact.name} is already in contacts!`);
    } 
    else {
      this.setState(prevState => {return {contacts: [...prevState.contacts, newContact]}});
      this.toggleModal();
    }
  };

  deleteContact = (id) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => contact.id !== id)}
    });
  };

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  };

  getFilteredContacts =() =>{
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render(){
    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
      <GlobalStyle/>
      {this.state.showModal &&
        <Modal onClose={this.toggleModal}>
          <CloseModalButton type="button" onClick={this.toggleModal}>X</CloseModalButton>
          <BookForm onAddContact={this.addContact}/>
        </Modal>}
        <h1>Phonebook</h1>
          <ContactList>
            <NewContButton type="button" onClick={this.toggleModal}>New contact</NewContButton>
            <h2>Contacts</h2>
            <Filter 
              value={this.state.filter} 
              onChange={this.changeFilter}
            />
            <ContactListItem 
              contacts={filteredContacts} 
              onDelete={this.deleteContact}/>
          </ContactList>
      </Layout>
    );
  }
};