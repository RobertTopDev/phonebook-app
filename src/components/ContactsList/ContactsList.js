import { useDispatch, useSelector } from "react-redux";
import ContactItems from "../ContactItems/ContactItems";
import { Menu, Item } from "./ContactsList.styled";
import {
  selectContacts,
  selectIsLoading,
  selectFiltersContacts,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../Loader/Loader";

export default function ContactsList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFiltersContacts);

  function filteredByContact() {
    const filter = filteredContacts.toLowerCase();
    const filtered = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter)
    );
    return filtered;
  }

  const visibleContacts = filteredByContact();

  return (
    <Menu>
      {isLoading ? (
        <Loader />
      ) : visibleContacts.length === 0 && filteredContacts.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
      ) : visibleContacts.length > 0 ? (
        visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, number, id }) => (
            <ContactItems
              key={id}
              id={id}
              contact={name}
              phoneNumber={number}
            />
          ))
      ) : contacts.length !== 0 ? (
        visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, number, id }) => (
            <ContactItems
              key={id}
              id={id}
              contact={name}
              phoneNumber={number}
            />
          ))
      ) : (
        ""
      )}
    </Menu>
  );
}
