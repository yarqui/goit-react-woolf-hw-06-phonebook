import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors/selectors";
import { useEffect } from "react";
import { LS_KEYS, saveToLocalStorage } from "../../common/helpers/localStorage";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log("contacts:", contacts);
  const filterNameValue = useSelector(selectFilter);
  console.log("filterNameValue:", filterNameValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterNameValue.toLowerCase()),
  );

  useEffect(() => {
    saveToLocalStorage(LS_KEYS.contacts, contacts);
  }, [contacts]);

  return (
    <ul className="flex flex-col">
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
