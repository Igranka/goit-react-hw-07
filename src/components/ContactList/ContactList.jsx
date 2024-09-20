import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.value.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact userData={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;