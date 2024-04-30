import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="flex flex-col">
      {contacts?.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
