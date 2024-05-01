import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Section from "./common/components/Section/Section";
import Heading from "./common/components/Heading/Heading";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Titles } from "./common/helpers/titles";
import {
  LS_KEYS,
  getFromLocalStorage,
  saveToLocalStorage,
} from "./common/helpers/localStorage";
import { getContacts } from "./redux/selectors/selectors";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";

// const NotiflixCfg = {
//   position: "center-top",
//   width: "400px",
//   timeout: 2000,
//   messageMaxLength: "600",
// };

Notiflix.Block.init({
  position: "center-top",
  width: "400px",
  timeout: 2000,
  messageMaxLength: "600",
});

const App = () => {
  const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState(() => {
  //   try {
  //     const contacts = getFromLocalStorage(LS_KEYS.contacts) ?? [];

  //     return contacts;
  //   } catch (error) {
  //     console.error("error", error);

  //     return [];
  //   }
  // });

  const filterContacts = (filterQuery) => {
    setFilter(filterQuery);
  };



  return (
    <div className="container ">
      <Section>
        <Heading level={1} className="mb-8 text-3xl font-extrabold">
          {Titles.PHONEBOOK}
        </Heading>
        <ContactForm />

        <Heading level={2} className="mb-8 pt-8 text-2xl font-bold">
          {Titles.CONTACTS}
        </Heading>
        <Filter filterContacts={filterContacts} />

        <ContactList />
      </Section>
    </div>
  );
};

export default App;

// TODO:
// -✅ add favicon
