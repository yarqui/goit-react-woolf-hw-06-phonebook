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
      className="flex flex-col gap-5 border-b-2 border-slate-200 pb-10"
    >
      <div className="relative flex flex-col-reverse gap-1">
        <Input
          id="name"
          type="text"
          name="name"
          value={userCredentials.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
          className="peer placeholder-transparent"
          placeholder="Name"
        />
        <Label
          htmlFor="name"
          label="Name"
          className="pointer-events-none absolute -top-3.5 left-0 text-sm font-semibold text-slate-600 transition-all hover:cursor-text peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-slate-600"
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <Input
          id="number"
          type="number"
          name="number"
          value={userCredentials.number}
          title="May contain only numbers"
          placeholder="Number"
          onChange={handleInputChange}
          required
          className="peer placeholder-transparent"
        />
        <Label
          htmlFor="number"
          label="Number"
          className="pointer-events-none absolute -top-3.5 left-0 text-sm font-semibold text-slate-600 transition-all hover:cursor-text peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-slate-600"
        />
      </div>

      <Button type="submit" className="btn-regular">
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
