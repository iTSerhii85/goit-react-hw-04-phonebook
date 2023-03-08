import PropTypes from 'prop-types';
import { BsFillPersonFill } from "react-icons/bs";
import { Item, List, DeleteButton } from "./ContactList.style";

export const ContactListItem = ({ contacts, onDelete }) => {
    return (
    <List>
      {contacts.map(contact => {
        return (
        <Item key={contact.id}>
          <div>
            <BsFillPersonFill/>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
          </div>
          <DeleteButton type="button" onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
        </Item>
        )})}
    </List>
    )
}

ContactListItem.protoType = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),).isRequired,
  onDelete: PropTypes.func.isRequired,
}