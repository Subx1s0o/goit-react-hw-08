import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { user_info, userDiv, main_div } from "./userMenu.module.css";
import { useState } from "react";
import ModalInfoUser from "../../ModalInfoUser/ModalInfoUser";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={main_div}>
      <div className={userDiv}>
        <b onMouseEnter={openModal} className={user_info}>
          {user.name}
        </b>
        <ModalInfoUser
          isOpen={modalIsOpen}
          onMouseLeave={closeModal}
          info={user.email}
        >
          <p>{user.email}</p>
        </ModalInfoUser>
      </div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
