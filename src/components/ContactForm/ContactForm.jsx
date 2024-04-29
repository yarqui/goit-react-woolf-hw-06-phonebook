import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../common/components/Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";

const INITIAL_STATE = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);

  const resetForm = () => {
    setUserCredentials(INITIAL_STATE);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = userCredentials;

    const trimmedCredentials = { name: name.trim(), number: number.trim() };

    addContact(trimmedCredentials);
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border-b-2 border-slate-200 pb-8"
    >
      <div className="flex flex-col-reverse gap-1">
        <Input
          id="name"
          type="text"
          name="name"
          value={userCredentials.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
          className="focus:peer"
        />
        <Label htmlFor="name" label="Name" />
      </div>

      <div className="flex flex-col-reverse gap-1">
        <Input
          id="number"
          type="number"
          name="number"
          value={userCredentials.number}
          title="May contain only numbers"
          onChange={handleInputChange}
          required
          className="focus:peer"
        />
        <Label htmlFor="number" label="Number" />
      </div>

      <Button type="submit" label="Add contact" className="btn" />
    </form>
  );
};

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
