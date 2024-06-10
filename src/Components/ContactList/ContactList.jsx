import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "../ContactList/contactList.module.css";
import { useSelector } from "react-redux";
export default function ContactList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredUsers = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.userList}>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Something went wrong, check your Internet connection</p>
        ) : (
          filteredUsers.map((user) => {
            return <Contact userData={user} key={user.id} />;
          })
        )}
      </ul>
    </div>
  );
}
