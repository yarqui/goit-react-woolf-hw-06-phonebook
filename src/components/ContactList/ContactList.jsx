import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterNameValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterNameValue.toLowerCase()),
  );

  return (
    <ul className="flex flex-col">
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
