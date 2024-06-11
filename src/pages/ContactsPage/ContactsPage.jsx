import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import { contacts_main, second_side } from "./contactsPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../Components/SearchBox/SearchBox";
export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <div className={`container ${contacts_main}`}>
        <ContactList />
        <div className={second_side}>
          <ContactForm />
          <SearchBox />
        </div>
      </div>
    </section>
  );
}
