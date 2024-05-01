import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors/selectors";
import { useEffect } from "react";
import { LS_KEYS, saveToLocalStorage } from "../../common/helpers/localStorage";

const ContactList = () => {
  const contacts = useSelector(getContacts);

  // TODO:
  // const showFilteredContacts = () => {
  //   return contacts?.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  useEffect(() => {
    saveToLocalStorage(LS_KEYS.contacts, contacts);
  }, [contacts]);

  return (
    <ul className="flex flex-col">
      {contacts?.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
