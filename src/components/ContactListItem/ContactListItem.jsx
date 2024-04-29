import PropTypes from "prop-types";

import Button from "../../common/components/Button/Button";


const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className="mb-2 flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap gap-8">
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <Button type="button" label="Delete" onClick={() => deleteContact(id)} />
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
