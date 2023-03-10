import { useState, useEffect } from "react"
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

export const App =() => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? initialContacts);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const toggleModal = () => {
    setShowModal(!showModal)
  };
  
  const addContact = newContact => {
    if (contacts.find(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
        window.alert(`${newContact.name} is already in contacts!`);
        toggleModal();
    } 
    else {
      setContacts(prevState => {return [...prevState, newContact]});
      toggleModal();
    }
  };

 const deleteContact = (id) => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id)
    });
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts =() =>{
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

    return (
      <Layout>
      <GlobalStyle/>
        {showModal &&
          <Modal onClose={toggleModal}>
            <CloseModalButton type="button" onClick={toggleModal}>X</CloseModalButton>
            <BookForm onAddContact={addContact}/>
          </Modal>}
        <h1>Phonebook</h1>
          <ContactList>
            <NewContButton type="button" onClick={toggleModal}>New contact</NewContButton>
            <h2>Contacts</h2>
            <Filter 
              value={filter} 
              onChange={changeFilter}
            />
            <ContactListItem 
              contacts={getFilteredContacts()} 
              onDelete={deleteContact}/>
          </ContactList>
      </Layout>
    );
};